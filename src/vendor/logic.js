const GRADE_VALS = {S:5,A:4,B:3,C:2,D:1,F:0};
const SCORE_GRADE = s => s>=4.5?'S':s>=3.5?'A':s>=2.5?'B':s>=1.5?'C':s>=0.5?'D':'F';

const SCALING_TAGS = new Set(['strength','scaling','focus','stellar','stars','soul','doom','infinite',
  'permanent_scaling','star_gain','poison_amplify','shiv_amplify','orb','claw']);


function ensureDbNames() {
  if (typeof DB !== 'object' || !DB || typeof DB.cards !== 'object') return;
  const seen = new Set();
  const names = [];
  for (const [char, cards] of Object.entries(DB.cards)) {
    if (!cards || typeof cards !== 'object') continue;
    for (const card of Object.values(cards)) {
      if (!card || !card.id) continue;
      const key = `${char}::${card.id}`;
      if (seen.has(key)) continue;
      seen.add(key);
      names.push({ n: card.id, c: char });
    }
  }
  names.sort((a, b) => a.c.localeCompare(b.c) || a.n.localeCompare(b.n));
  DB.names = names;
}

ensureDbNames();


const STARTER_NAMES = new Set([
  'strike','defend','wound','burn','dazed','slimed','void',
  'bash',
  'survivor','neutralize',
  'zap','dualcast',
  'venerate',
  'soul spark',
  'shiv','debris',
]);

const STARTERS = {
  ironclad:    ['Strike','Strike','Strike','Strike','Strike','Defend','Defend','Defend','Defend','Bash'],
  silent:      ['Strike','Strike','Strike','Strike','Strike','Defend','Defend','Defend','Defend','Defend','Survivor','Neutralize'],
  defect:      ['Strike','Strike','Strike','Strike','Defend','Defend','Defend','Defend','Zap','Dualcast'],
  regent:      ['Strike','Strike','Strike','Strike','Strike','Defend','Defend','Defend','Defend','Venerate'],
  necrobinder: ['Strike','Strike','Strike','Strike','Strike','Defend','Defend','Defend','Defend','Soul Spark'],
};

function isStarter(cardName) {
  const n = cardName.toLowerCase();
  if (STARTER_NAMES.has(n)) return true;
  if ((n === 'strike' || n === 'strike+') && !n.includes(' ')) return true;
  if ((n === 'defend' || n === 'defend+') && !n.includes(' ')) return true;
  return false;
}

function analyzeDeck(char, deckCards) {
  const tagCounts = {};
  const mechCounts = {};

  // Starters and bare D-tier filler don't count toward archetype detection
  const meaningfulCards = deckCards.filter(card => {
    if (isStarter(card.name)) return false;
    const data = getCard(char, card.name);
    if (data && data.tier === 'D' && (data.builds||[]).length === 0) return false;
    return true;
  });

  for (const card of meaningfulCards) {
    const data = getCard(char, card.name);
    const tags = data ? data.syn : [];
    const mechs = data ? (data.mech || []) : [];
    for (const t of tags) tagCounts[t] = (tagCounts[t]||0) + 1;
    for (const m of mechs) mechCounts[m] = (mechCounts[m]||0) + 1;
  }

  const allTagCounts = {};
  const allMechCounts = {};
  for (const card of deckCards) {
    const data = getCard(char, card.name);
    const tags = data ? data.syn : [];
    const mechs = data ? (data.mech || []) : [];
    for (const t of tags) allTagCounts[t] = (allTagCounts[t]||0) + 1;
    for (const m of mechs) allMechCounts[m] = (allMechCounts[m]||0) + 1;
  }

  // Union count: each card contributes at most 1 per tag (no double-counting syn+mech overlap)
  const allUnionCounts = {};
  for (const card of meaningfulCards) {
    const data = getCard(char, card.name);
    const allTags = new Set([...(data?.syn||[]), ...(data?.mech||[])]);
    for (const t of allTags) allUnionCounts[t] = (allUnionCounts[t]||0) + 1;
  }

  const archs = (DB.archetypes[char] || []);
  const detected = [];
  for (const arch of archs) {
    // Use union counts — each card contributes at most 1 per tag (no syn+mech double-count)
    let coreCount = 0, supportCount = 0;
    for (const t of arch.core) {
      coreCount += (allUnionCounts[t]||0);
    }
    for (const t of arch.support) {
      supportCount += (allUnionCounts[t]||0);
    }
    const coreThresh    = arch.coreThresh    ?? arch.threshold ?? 3;
    const supportThresh = arch.supportThresh ?? Math.max(1, Math.floor(coreThresh / 2));
    const meetsCore    = coreCount >= coreThresh;
    // Raised partial threshold from 60% to 75% — harder to false-trigger
    const meetsPartial = coreCount >= Math.ceil(coreThresh * 0.75) && supportCount >= supportThresh;
    if (meetsCore || meetsPartial) {
      const strength = Math.min(1, (coreCount / coreThresh) * 0.65 + (supportCount / Math.max(supportThresh,1)) * 0.35);
      // Tiebreaker: prefer arch where more cards list it as PRIMARY (first) build
      const primaryCount = meaningfulCards.filter(c => {
        const d = getCard(char, c.name);
        const builds = (d?.builds||[]).filter(b=>b!=='any');
        return builds.length > 0 && builds[0] === arch.id;
      }).length;
      detected.push({arch, strength: Math.min(1, strength), primaryCount});
    }
  }
  // Sort by strength, break ties by how many cards list this as primary build
  detected.sort((a,b) => b.strength - a.strength || b.primaryCount - a.primaryCount);

  return {detected, tagCounts: allTagCounts, mechCounts: allMechCounts, total: deckCards.length,
    meaningfulCount: meaningfulCards.length,
    isUndefined: detected.length === 0,
    hasTag: t => (allTagCounts[t]||0) > 0,
    hasMech: m => (allMechCounts[m]||0) > 0,
    tagCount: t => (allTagCounts[t]||0),
    mechCount: m => (allMechCounts[m]||0),
    unionCount: t => (allUnionCounts[t]||0),
  };
}

function scoreCard(cardName, char, da, floor, act, deckCards, encounter, equippedRelics) {
  encounter = encounter || 'normal';
  equippedRelics = equippedRelics || [];
  const data = getCard(char, cardName);
  if (!data) {
    return {name:cardName, base:'C', finalScore:2, finalGrade:'C', notes:'Unknown card', synReasons:[], antiReasons:[], isBest:false};
  }

  const base = GRADE_VALS[data.tier] ?? 2;
  let score = base;
  const synR = [], antiR = [];

  // Synergy - graduated with diminishing returns + saturation
  const DIMN = [1.0, 0.6, 0.3];
  let matchCount = 0;
  for (const {arch, strength} of da.detected) {
    if (matchCount >= DIMN.length) break;
    for (const tag of data.syn) {
      if (arch.core.includes(tag) || arch.support.includes(tag) || arch.id === tag) {
        const satCount = da.unionCount(tag);
        const satMult = satCount >= 7 ? 0.35 : satCount >= 4 ? 0.65 : 1.0;
        const boost = (0.3 + strength * 0.5) * DIMN[matchCount] * satMult;
        score += boost;
        const satNote = satMult < 1 ? ` (saturated)` : '';
        synR.push(`+${boost.toFixed(1)} fits ${arch.name}${satNote}`);
        matchCount++;
        break;
      }
    }
  }

  // Anti-synergy - penalize cards that conflict with detected archetypes
  let antiDelta = 0;
  for (const {arch, strength} of da.detected) {
    for (const tag of (data.anti || [])) {
      if (arch.core.includes(tag) || arch.support.includes(tag)) {
        const pen = -(0.4 + strength * 0.5);
        score += pen; antiDelta += pen;
        antiR.push(`${pen.toFixed(1)} conflicts with ${arch.name} (has ${tag})`);
        break;
      }
    }
  }
  for (const tag of (data.anti || [])) {
    if (da.unionCount(tag) >= 2) {
      const pen = -0.7;
      score += pen; antiDelta += pen;
      antiR.push(`${pen.toFixed(1)} actively hurts your ${tag} cards`);
    }
  }
  if (antiDelta < -1.5) score += (-1.5 - antiDelta); // cap total anti penalty

  // Combo bonus (card-card)
  const deckNameSet = new Set(deckCards.map(c => norm(c.name)));
  let comboBonusTotal = 0;
  for (const combo of DB.combos) {
    if (!deckNameSet.has(norm(combo.deckCard))) continue;
    if (norm(combo.offeredCard) === norm(cardName)) {
      score += combo.bonus; comboBonusTotal += combo.bonus;
      synR.push(`▲ +${combo.bonus.toFixed(1)} ${combo.reason}`);
    }
  }

  // Relic-card combo bonus — equipped relics that synergize with this card
  if (equippedRelics.length > 0 && DB.relicCombos) {
    const equippedSet = new Set(equippedRelics.map(r => r.toLowerCase()));
    for (const rc of DB.relicCombos) {
      if (equippedSet.has(rc.relic.toLowerCase()) && norm(rc.card) === norm(cardName)) {
        score += rc.bonus;
        synR.push(`◈ +${rc.bonus.toFixed(1)} with ${rc.relic} — ${rc.reason.split('.')[0]}`);
      }
    }
  }

  // Relic scoreEffects — equipped relics passively boosting cards with matching tags
  if (equippedRelics.length > 0 && DB.relics) {
    const cardTags = new Set([...(data.syn||[]), ...(data.mech||[]), ...(data.builds||[]).filter(b=>b!=='any')]);
    for (const relicName of equippedRelics) {
      const rKey = relicName.toUpperCase().replace(/'/g,'').replace(/[\s\-]+/g,'_')
        .replace(/[^A-Z0-9_]/g,'').replace(/_+/g,'_').replace(/_+$/,'');
      const rd = DB.relics[rKey];
      if (!rd || !rd.scoreEffects) continue;
      for (const fx of rd.scoreEffects) {
        const matchingTags = (fx.tags||[]).filter(t => cardTags.has(t));
        if (matchingTags.length > 0) {
          const boost = +(fx.bonus * Math.min(matchingTags.length, 1.5)).toFixed(1);
          if (boost >= 0.1) {
            score += boost;
            synR.push(`◈ +${boost} ${rd.id} boosts ${matchingTags.join('/')} cards`);
          }
        }
      }
    }
  }

  // Build fit bonus
  let gotFitBonus = false;
  if (data.builds && data.builds.length > 0 && da.detected.length > 0) {
    for (const {arch, strength} of da.detected) {
      if (data.builds.includes(arch.id)) {
        const fitBonus = 0.3 + strength * 0.5;
        score += fitBonus;
        synR.push(`+${fitBonus.toFixed(1)} core ${arch.name} card`);
        gotFitBonus = true;
        break;
      }
    }
  }

  // Archetype misfit penalty - card belongs to a different build
  if (!gotFitBonus && da.detected.length > 0 && data.builds && data.builds.length > 0) {
    const topArch = da.detected[0];
    if (topArch.strength >= 0.4) {
      const specificBuilds = data.builds.filter(b => b !== 'any');
      const fitsAnyDetected = specificBuilds.length === 0
        || specificBuilds.some(b => da.detected.some(d => d.arch.id === b));
      if (!fitsAnyDetected && specificBuilds.length > 0) {
        const pen = -(0.4 + topArch.strength * 0.5);
        score += pen;
        antiR.push(`${pen.toFixed(1)} ${specificBuilds[0]} card doesn't fit your ${topArch.arch.name} build`);
      }
    }
  }

  // Role balance (engine / generator / payoff)
  if (data.role && da.detected.length > 0) {
    const topArch = da.detected[0];
    const archId  = topArch.arch.id;

    const enginesInDeck = deckCards.filter(c => {
      const d = getCard(char, c.name);
      return d && d.role === 'engine' && (d.builds||[]).some(b => b===archId||b==='any');
    }).length;
    const generatorsInDeck = deckCards.filter(c => {
      const d = getCard(char, c.name);
      return d && d.role === 'generator' && (d.builds||[]).some(b => b===archId||b==='any');
    }).length;
    const payoffsInDeck = deckCards.filter(c => {
      const d = getCard(char, c.name);
      return d && d.role === 'payoff' && (d.builds||[]).some(b => b===archId||b==='any');
    }).length;

    const floorEarly = floor <= 8;
    const floorLate  = floor >= 20;

    // 2+ generators counts as a functional economy even without a dedicated engine card
    const effectiveEngines = enginesInDeck + (generatorsInDeck >= 2 ? 1 : 0);

    if (data.role === 'payoff') {
      if (effectiveEngines === 0) {
        score -= 1.5;
        antiR.push(`-1.5 no engine yet - payoff is a dead card without setup`);
      } else if (effectiveEngines === 1 && generatorsInDeck < 2) {
        score -= 0.7;
        antiR.push(`-0.7 engine exists but only ${generatorsInDeck} generators - payoff won't fire often`);
      } else if (effectiveEngines >= 1 && generatorsInDeck >= 2) {
        const bon = floorLate ? 0.5 : 0.2;
        score += bon;
        synR.push(`+${bon.toFixed(1)} engine and generators online - payoff fires consistently`);
      }
      if (payoffsInDeck >= 4) {
        score -= 0.4;
        antiR.push(`-0.4 already ${payoffsInDeck} payoffs - add more generators/engines`);
      }
    }

    if (data.role === 'engine') {
      if (enginesInDeck === 0) {
        const bon = floorEarly ? 0.6 : 0.3;
        score += bon;
        synR.push(`+${bon.toFixed(1)} first engine card - unlocks the whole build`);
      } else if (enginesInDeck === 1) {
        score += 0.1;
        synR.push(`+0.1 second engine adds consistency`);
      } else {
        score -= 0.4;
        antiR.push(`-0.4 already ${enginesInDeck} engines - extra engine is redundant`);
      }
    }

    if (data.role === 'generator') {
      if (enginesInDeck === 0 && generatorsInDeck === 0) {
        score -= 0.1;
        antiR.push(`-0.1 first generator - pick up payoffs soon`);
      } else if (enginesInDeck === 0 && generatorsInDeck >= 4) {
        score -= 0.5;
        antiR.push(`-0.5 already ${generatorsInDeck} generators with no engine - pick up payoffs instead`);
      } else if (generatorsInDeck >= 5) {
        score -= 0.5;
        antiR.push(`-0.5 already ${generatorsInDeck} generators - clogs hand`);
      } else if (generatorsInDeck >= 3 && payoffsInDeck === 0) {
        antiR.push(`(${generatorsInDeck} generators, 0 payoffs - look for payoff cards now)`);
      } else if (generatorsInDeck < 4) {
        score += 0.2;
        synR.push(`+0.2 adds to ${topArch.arch.name} generation`);
      }
    }
  }

  // Floor curve - continuous over 57 floors
  const hasSynScaling = data.syn.some(t => SCALING_TAGS.has(t));
  const hasMechScaling = (data.mech||[]).some(t => SCALING_TAGS.has(t));
  const isScaling = hasSynScaling || hasMechScaling;
  const hasDefense = data.syn.includes('block') || data.syn.includes('dexterity');
  const runProgress = Math.min(1.0, (floor - 1) / 56);
  const flexValue  = Math.max(0, 1.0 - runProgress * 3.5);
  const scaleValue = Math.max(0, (runProgress - 0.33) * 1.8);
  const defValue   = Math.sin(runProgress * Math.PI) * 0.8;
  if (da.isUndefined && data.syn.length >= 2) {
    const fb = +(flexValue * 0.4).toFixed(1);
    if (fb >= 0.1) { score += fb; synR.push(`+${fb} flexible pick (early run)`); }
  }
  if (isScaling && !data.role) {
    const sb = +(scaleValue * 0.5).toFixed(1);
    if (sb >= 0.1) { score += sb; synR.push(`+${sb} scaling card, late run`); }
  }
  if (!da.isUndefined && hasDefense) {
    const db_ = +(defValue * 0.25).toFixed(1);
    if (db_ >= 0.1) { score += db_; synR.push(`+${db_} defense matters mid-run`); }
  }

  // Act phase modifiers
  if (act === 1) {
    if ((data.builds||[]).includes('any') && da.isUndefined) {
      score += 0.2; synR.push('+0.2 flexible card, good for open Act 1');
    }
    if (data.role === 'engine') {
      score += 0.3; synR.push('+0.3 engine card - set up your build in Act 1');
    }
    if (data.role === 'payoff') {
      const enginesNow = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='engine'; }).length;
      if (enginesNow === 0) { score -= 0.3; antiR.push('-0.3 payoff with no engine yet - risky Act 1 pick'); }
    }
  } else if (act === 2) {
    if (!da.isUndefined && da.detected[0].strength >= 0.5) {
      const fitsTop = (data.builds||[]).includes(da.detected[0].arch.id) || (data.builds||[]).includes('any');
      if (fitsTop) { score += 0.2; synR.push('+0.2 fits committed build (Act 2)'); }
    }
  } else if (act === 3) {
    if (data.role === 'payoff') {
      const eng3 = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='engine'; }).length;
      const gen3 = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='generator'; }).length;
      if (eng3 >= 1 && gen3 >= 2) { score += 0.4; synR.push('+0.4 payoff fires consistently - online by Act 3'); }
    }
    if (data.role === 'engine') {
      const eng3 = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='engine'; }).length;
      if (eng3 >= 1) { score -= 0.3; antiR.push('-0.3 engine card - too late to pivot in Act 3'); }
    }
  } else if (act === 4) {
    if (data.role === 'payoff') {
      const eng4 = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='engine'; }).length;
      const gen4 = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='generator'; }).length;
      if (eng4 >= 1 && gen4 >= 2) { score += 0.5; synR.push('+0.5 payoff with full engine - needs to close fights now'); }
    }
    if (score < 3.0 && !data.role) { score -= 0.5; antiR.push('-0.5 Act 4 - only essential cards worth adding'); }
  }

  // Deck size selectivity
  const deckSize = da.total;
  if (deckSize <= 16 && score < 2.5) {
    score -= 0.3; antiR.push('-0.3 keep deck lean - only take impactful cards');
  } else if (deckSize >= 26 && score < 3.5) {
    score -= 0.4; antiR.push('-0.4 large deck - only worth adding strong cards');
  }

  // Duplicate penalty
  const owned = deckCards.filter(c => norm(c.name) === norm(cardName)).length;
  if (owned > 0) {
    const pen = DB.dupePenalties[cardName] ?? (data.syn.includes('permanent_scaling') ? -1.5 : -0.8);
    const scaled = pen * (owned >= 2 ? 1.4 : 1.0);
    score += scaled;
    const dupeMsg = pen <= -10
      ? `never take a 2nd copy - completely wasted`
      : `${scaled.toFixed(1)} already have ${owned} cop${owned>1?'ies':'y'}`;
    antiR.push(dupeMsg);
  }

  // Sly special handling - free-from-discard plays are fundamentally different from normal synergy
  const SLY_ENGINES = new Set(['tools of the trade','acrobatics','prepared','calculated gamble','serpent form']);
  const SLY_PAYOFFS = new Set(['reflex','tactician','untouchable','flick flack','ricochet','night terror','eviscerate']);
  const cardLower = cardName.toLowerCase();
  const deckLower = deckCards.map(c => c.name.toLowerCase());
  const slyEngineCount = deckLower.filter(n => SLY_ENGINES.has(n)).length;
  const slyPayoffCount = deckLower.filter(n => SLY_PAYOFFS.has(n)).length;
  const hasSlyArch = da.detected.some(d => d.arch.id === 'sly');

  if (SLY_PAYOFFS.has(cardLower) && slyEngineCount >= 1 && hasSlyArch) {
    const slyBonus = +(0.6 + Math.min(1.0, slyEngineCount * 0.3)).toFixed(1);
    score += slyBonus;
    synR.push(`+${slyBonus} Sly payoff - plays free every discard turn (${slyEngineCount} engine${slyEngineCount>1?'s':''})`);
  }

  // Acrobatics + Prepared infinite loop
  const SLY_LOOPERS = new Set(['acrobatics','prepared']);
  if (SLY_LOOPERS.has(cardLower)) {
    const otherLoopersInDeck = deckLower.filter(n => SLY_LOOPERS.has(n) && n !== cardLower).length;
    if (otherLoopersInDeck >= 1 && slyPayoffCount >= 2) {
      score += 0.8;
      synR.push(`+0.8 completes Sly infinite loop - discard cycle generates endless free plays`);
    }
  }

  if (SLY_ENGINES.has(cardLower) && slyPayoffCount >= 2 && hasSlyArch) {
    const engineBonus = +(0.4 + Math.min(0.6, slyPayoffCount * 0.15)).toFixed(1);
    score += engineBonus;
    synR.push(`+${engineBonus} Sly engine - ${slyPayoffCount} payoffs fire free on every discard`);
  }

  // Encounter context
  if (encounter === 'boss') {
    if ((data.syn||[]).includes('doom') && data.role === 'payoff') {
      score -= 0.4; antiR.push(`-0.4 Doom instakill unreliable vs bosses`);
    }
    if (hasDefense) {
      score += 0.3; synR.push(`+0.3 boss incoming - defense matters`);
    }
  } else if (encounter === 'elite') {
    if ((data.syn||[]).includes('doom') && data.role === 'payoff') {
      score += 0.3; synR.push(`+0.3 Doom payoff - elites accumulate Doom quickly`);
    }
    const hasSingleUseExhaust = data.role === 'payoff' && (data.mech||[]).includes('exhaust');
    if (hasSingleUseExhaust) {
      score -= 0.2; antiR.push(`-0.2 single-use exhaust payoff - elites have more HP`);
    }
  }

  // Doom context (Necrobinder) - payoffs require generators to get enemies to threshold
  if (char === 'necrobinder') {
    const doomGens = deckCards.filter(c => {
      const d = getCard(char, c.name);
      return d && d.role === 'generator' && (d.syn||[]).includes('doom');
    }).length;
    const doomPayoffs = deckCards.filter(c => {
      const d = getCard(char, c.name);
      return d && d.role === 'payoff' && (d.syn||[]).includes('doom');
    }).length;
    if ((data.syn||[]).includes('doom') && data.role === 'payoff') {
      if (doomGens < 2) {
        score -= 0.6;
        antiR.push(`-0.6 Doom payoff but only ${doomGens} Doom generator${doomGens!==1?'s':''} - enemies won't reach threshold`);
      } else if (doomGens >= 3 && act >= 2) {
        score += 0.4;
        synR.push(`+0.4 ${doomGens} Doom generators - enemies reliably reach threshold`);
      }
      if (act >= 2 && doomPayoffs >= 2) {
        antiR.push(`(Note: Doom instakill unreliable on bosses - maintain alternate damage sources)`);
      }
    }
  }

  score = Math.max(0, Math.min(6, score));
  return {name:cardName, base:data.tier, finalScore:score, finalGrade:SCORE_GRADE(score),
    notes:data.notes, synReasons:synR, antiReasons:antiR, isBest:false,
    builds:data.builds||[], char};
}

function scoreRemoval(cardName, char, da, deckCards, equippedRelics) {
  equippedRelics = equippedRelics || [];
  const name = cardName.toLowerCase();

  // ── 1. CURSES / STATUSES — always cut immediately ─────────────
  const CURSE_NAMES = new Set(['wound','burn','dazed','slimed','void','debris']);
  const isCurse = name.includes('curse') || CURSE_NAMES.has(name);
  if (isCurse) return {name:cardName, score:5, grade:'S',
    reason:'Curse/Status — remove immediately, these only hurt you.', safeToRemove:true};

  const data      = getCard(char, cardName);
  const baseGrade = data ? data.tier : 'C';
  const baseVal   = GRADE_VALS[baseGrade] ?? 2;
  const cardRole  = data ? (data.role  || 'utility') : 'utility';
  const cardBuilds= data ? (data.builds|| []).filter(b => b !== 'any') : [];
  const cardAnti  = data ? (data.anti  || []) : [];
  const cardMech  = data ? (data.mech  || []) : [];
  const cardSyn   = data ? (data.syn   || []) : [];

  // ── IDENTIFICATION ─────────────────────────────────────────────
  const STRIKE_EXCEPTIONS = ['shining','solar','pommel','perfected','ashen','leading','setup'];
  const isStrike = name.includes('strike') && !STRIKE_EXCEPTIONS.some(x => name.includes(x));
  const isDefend = name === 'defend' || name === 'defend+';
  const UTILITY_STARTERS = new Set(['bash','bash+','survivor','survivor+','neutralize','neutralize+',
    'zap','zap+','dualcast','dualcast+','venerate','venerate+','soul spark','soul spark+']);
  const isUtilityStarter = UTILITY_STARTERS.has(name);
  const isPower = cardMech.includes('power') || cardSyn.includes('power') ||
    (data && data.notes && data.notes.toLowerCase().includes('power'));
  const isExhaust = cardMech.includes('exhaust') || cardSyn.includes('exhaust');

  // ── CONTEXT ────────────────────────────────────────────────────
  const topArch      = da.detected.length > 0 ? da.detected[0] : null;
  const topArchId    = topArch ? topArch.arch.id : null;
  const archStrength = topArch ? topArch.strength : 0;
  const isStrikeBuild = topArchId === 'strike' && archStrength >= 0.35;
  const isThinBuild = ['sly','claw','stars'].includes(topArchId) && archStrength >= 0.35;
  const deckSize = deckCards.length;

  // Deck bloat factor — bigger decks need more aggressive removal
  const bloatFactor = deckSize >= 30 ? 0.8 : deckSize >= 25 ? 0.5 : deckSize >= 20 ? 0.2 : 0;

  // ── DECK COMPOSITION ───────────────────────────────────────────
  let removedOne = false;
  const otherCards = deckCards.filter(c => {
    if (!removedOne && c.name === cardName) { removedOne = true; return false; }
    return true;
  });

  const basicStrikesLeft = otherCards.filter(c => {
    const n = c.name.toLowerCase();
    return n.includes('strike') && !STRIKE_EXCEPTIONS.some(x => n.includes(x));
  }).length;

  const basicDefendsLeft = otherCards.filter(c => {
    const n = c.name.toLowerCase();
    return n === 'defend' || n === 'defend+';
  }).length;

  // Damage sources
  const isDamageSource = c => {
    const n = c.name.toLowerCase();
    const d = getCard(char, c.name);
    if (n.includes('strike') && !STRIKE_EXCEPTIONS.some(x => n.includes(x))) return true;
    if (!d) return false;
    const m = d.mech || []; const s = d.syn || [];
    return m.includes('damage') || m.includes('multi_hit') || m.includes('aoe') ||
           m.includes('block_conversion') || m.includes('per_attack_payoff') ||
           m.includes('poison') || m.includes('doom') || m.includes('hp_drain') ||
           s.includes('damage') || (d.role === 'payoff' && s.includes('block'));
  };
  const otherDamageSources = otherCards.filter(isDamageSource).length;
  const thisIsDamageSource = isDamageSource({name: cardName});

  const realNonStrikeAtks = otherCards.filter(c => {
    const n = c.name.toLowerCase();
    if (n.includes('strike') && !STRIKE_EXCEPTIONS.some(x => n.includes(x))) return false;
    const d = getCard(char, c.name);
    if (!d) return false;
    const m = d.mech || []; const s = d.syn || [];
    return m.includes('damage') || m.includes('multi_hit') || m.includes('aoe') ||
           m.includes('block_conversion') || m.includes('poison') ||
           m.includes('doom') || m.includes('hp_drain') ||
           (d.role === 'payoff' && s.includes('block'));
  }).length;

  // Block sources
  const isBlockGen = c => {
    const n = c.name.toLowerCase();
    const d = getCard(char, c.name);
    if (n === 'defend' || n === 'defend+') return true;
    if (!d) return false;
    const m = d.mech || []; const s = d.syn || [];
    return m.includes('block') || m.includes('retain') || m.includes('delayed_block') ||
           s.includes('block') || m.includes('intangible') || m.includes('plating');
  };
  const otherBlockSources = otherCards.filter(isBlockGen).length;
  const thisIsBlockSource = isBlockGen({name: cardName});

  const realNonDefendBlock = otherCards.filter(c => {
    const n = c.name.toLowerCase();
    if (n === 'defend' || n === 'defend+') return false;
    return isBlockGen(c);
  }).length;

  // ── 2. BASIC STRIKES ──────────────────────────────────────────
  if (isStrike) {
    if (isStrikeBuild)
      return {name:cardName, score:0.5, grade:'D',
        reason:`Strike build detected — basic Strikes are Perfected Strike fuel. Keep them.`,
        safeToRemove:false};

    // Safety: need at least 2 total damage sources after the cut
    if (otherDamageSources < 2)
      return {name:cardName, score:2.0, grade:'C',
        reason:`Only ${otherDamageSources} damage source${otherDamageSources===1?'':'s'} would remain — add more attack cards first.`,
        safeToRemove:false};

    // Have real attack cards — safe to cut
    if (realNonStrikeAtks >= 1) {
      if (isThinBuild)
        return {name:cardName, score:5, grade:'S',
          reason:`Basic Strike — ${topArch.arch.name} build needs a lean deck. Top removal priority.`,
          safeToRemove:true};
      // Bloated deck = more urgency
      const bloatBoost = bloatFactor > 0 ? ` Deck has ${deckSize} cards — thinning is high value.` : '';
      return {name:cardName, score: Math.min(5, 4.5 + bloatFactor), grade:'S',
        reason:`Basic Strike — worst card in your deck. Removing it directly improves every draw.${bloatBoost}`,
        safeToRemove:true};
    }

    // No real attacks yet but have total damage coverage — mild push
    return {name:cardName, score:3.0, grade:'B',
      reason:`Basic Strike — you should remove it, but add a real attack card soon to replace the damage.`,
      safeToRemove:true};
  }

  // ── 3. BASIC DEFENDS ──────────────────────────────────────────
  if (isDefend) {
    // If Strikes still exist, cut those first
    const strikesInDeck = deckCards.filter(c => {
      const n = c.name.toLowerCase();
      return n.includes('strike') && !STRIKE_EXCEPTIONS.some(x => n.includes(x));
    }).length;

    if (strikesInDeck > 0 && !isThinBuild)
      return {name:cardName, score:1.8, grade:'C',
        reason:`Remove your ${strikesInDeck} basic Strike${strikesInDeck>1?'s':''} first — Defends provide more value than Strikes.`,
        safeToRemove:false};

    // Need minimum block coverage
    if (otherBlockSources < 2)
      return {name:cardName, score:1.2, grade:'D',
        reason:`Only ${otherBlockSources} block source${otherBlockSources===1?'':'s'} would remain — too risky to cut.`,
        safeToRemove:false};

    // Have real non-Defend block
    if (realNonDefendBlock >= 2) {
      if (isThinBuild)
        return {name:cardName, score:5, grade:'S',
          reason:`Basic Defend — ${topArch.arch.name} build needs a lean deck. You have ${realNonDefendBlock} real block cards.`,
          safeToRemove:true};
      return {name:cardName, score: Math.min(5, 3.5 + bloatFactor), grade:'A',
        reason:`Basic Defend — you have ${realNonDefendBlock} real block sources. Safe to remove for better draws.`,
        safeToRemove:true};
    }

    // Marginal — have some block but not ideal
    return {name:cardName, score:2.2, grade:'C',
      reason:`Basic Defend — only ${realNonDefendBlock} real block card${realNonDefendBlock===1?'':'s'}. Consider adding better block before cutting.`,
      safeToRemove:false};
  }

  // ── 4. UTILITY STARTERS ───────────────────────────────────────
  if (isUtilityStarter) {
    if (basicStrikesLeft > 0)
      return {name:cardName, score:1.5, grade:'D',
        reason:`Cut your ${basicStrikesLeft} basic Strike${basicStrikesLeft>1?'s':''} first — ${cardName} provides real utility.`,
        safeToRemove:false};

    if (basicDefendsLeft > 0 && realNonDefendBlock < 2)
      return {name:cardName, score:1.8, grade:'C',
        reason:`${cardName} still has utility — consider cutting Defends or low-synergy cards first.`,
        safeToRemove:false};

    // No starters left — utility starters are now on the block
    // Fall through to real card scoring but with a nudge
  }

  // ── SAFETY RAILS ──────────────────────────────────────────────
  if (thisIsDamageSource && otherDamageSources === 0)
    return {name:cardName, score:0.3, grade:'D',
      reason:`Your only damage source — removing this means you can't kill anything.`,
      safeToRemove:false};
  if (thisIsBlockSource && otherBlockSources === 0)
    return {name:cardName, score:0.3, grade:'D',
      reason:`Your only block source — removing this leaves you completely exposed.`,
      safeToRemove:false};

  // ══════════════════════════════════════════════════════════════
  //  REAL CARD SCORING
  // ══════════════════════════════════════════════════════════════

  // Build fit
  const fitsDetectedBuild = cardBuilds.length === 0 ||
    da.detected.some(d => cardBuilds.includes(d.arch.id));
  const conflictsWithBuild = archStrength >= 0.4 &&
    cardAnti.some(a => da.detected.some(d => d.arch.id === a));

  // Synergy overlap — how many of this card's tags actually appear in the rest of the deck?
  const allDeckTags = new Set();
  for (const c of otherCards) {
    const d = getCard(char, c.name);
    if (d) {
      for (const t of (d.syn||[])) allDeckTags.add(t);
      for (const t of (d.mech||[])) allDeckTags.add(t);
    }
  }
  const cardAllTags = [...cardSyn, ...cardMech];
  const tagOverlap = cardAllTags.filter(t => allDeckTags.has(t)).length;
  const isDeadWeight = tagOverlap === 0 && cardAllTags.length > 0 && !isUtilityStarter;

  // Role scarcity
  const sameRoleFit = otherCards.filter(c => {
    const d = getCard(char, c.name);
    return d && d.role === cardRole &&
      ((d.builds||[]).includes('any') || da.detected.some(det => (d.builds||[]).includes(det.arch.id)));
  }).length;
  const isOnlyEngine = cardRole === 'engine' && sameRoleFit === 0 && fitsDetectedBuild;
  const isOnlyPayoff = cardRole === 'payoff' && sameRoleFit === 0 && fitsDetectedBuild;

  // Duplicate count
  const copies = deckCards.filter(c => c.name === cardName).length;

  // Generator clog
  const deckEngines  = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='engine'; }).length;
  const deckPayoffs  = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='payoff'; }).length;
  const deckGens     = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='generator'; }).length;
  const genClog = cardRole === 'generator' &&
    deckGens > (deckEngines + deckPayoffs) * 2 + 2 &&
    !fitsDetectedBuild && archStrength >= 0.3;

  // Relic synergy — does an equipped relic specifically reward keeping this card?
  let relicProtect = 0;
  if (equippedRelics.length > 0 && DB.relicCombos) {
    const equippedSet = new Set(equippedRelics.map(r => r.toLowerCase()));
    for (const rc of DB.relicCombos) {
      if (equippedSet.has(rc.relic.toLowerCase()) && norm(rc.card) === norm(cardName)) {
        relicProtect += rc.bonus;
      }
    }
  }

  // ── SCORE BUILDING ─────────────────────────────────────────────
  let score = 0;
  const reasons = [];

  // Base tier — lower tier = more removable
  score += Math.max(0, (3.5 - baseVal) * 0.5); // D=1.25, C=0.75, B=0.25, A/S=0

  // === PRIMARY: Build fit ===
  if (archStrength >= 0.3) {
    if (fitsDetectedBuild) {
      // Core card — protect it
      score = Math.max(0, score - archStrength * 2.5);
      if (archStrength >= 0.5) reasons.push(`Core to your ${topArch.arch.name} build`);
    } else if (cardBuilds.length > 0) {
      // Off-archetype — strong removal candidate
      const offPen = archStrength * 2.5;
      score += offPen;
      reasons.push(`Off-archetype — built for ${cardBuilds.join('/')} not your ${topArch.arch.name} build`);
    }
  }

  // === Dead weight — zero synergy overlap with rest of deck ===
  if (isDeadWeight && !isUtilityStarter) {
    score += 1.5;
    reasons.push(`No synergy overlap with any other card in your deck`);
  }

  // === Conflict with build ===
  if (conflictsWithBuild) {
    score += 1.8;
    reasons.push(`Actively conflicts with your ${topArch.arch.name} build`);
  }

  // === Power card protection — plays once then leaves deck ===
  if (isPower && fitsDetectedBuild && !conflictsWithBuild) {
    score = Math.min(score, 0.5);
    reasons.length = 0;
    reasons.push(`Power card — plays once then leaves your draw pile. Minimal deck clog.`);
  }

  // === Exhaust cards self-thin — lower removal priority ===
  if (isExhaust && fitsDetectedBuild && !conflictsWithBuild && score > 1.0) {
    score = Math.max(0.8, score - 0.6);
    reasons.push(`Self-exhausting — thins itself from deck during combat`);
  }

  // === Sole engine — never cut ===
  if (isOnlyEngine) {
    score = 0.2;
    reasons.length = 0;
    reasons.push(`Only engine in deck — cutting this dismantles your build`);
  }

  // === Sole payoff — heavily protect ===
  if (isOnlyPayoff) {
    score = Math.min(score, 0.6);
    reasons.length = 0;
    reasons.push(`Only payoff for your ${topArch ? topArch.arch.name : 'current'} build — protect it`);
  }

  // === High tier protection — A/S cards rarely worth cutting ===
  if (baseVal >= 4 && !conflictsWithBuild && !genClog && !isDeadWeight) {
    score = Math.min(score, 1.0);
    if (!reasons.length) reasons.push(`${baseGrade}-tier card — too valuable to cut`);
  }

  // === Generator clog ===
  if (genClog) {
    score = Math.max(score, 2.8);
    reasons.push(`Generator surplus — ${deckGens} generators vs ${deckEngines+deckPayoffs} engines/payoffs`);
  }

  // === Utility starter with no Strikes/Defends left ===
  if (isUtilityStarter) {
    const starterScore = Math.max(score, 2.5 + bloatFactor);
    score = starterScore;
    if (!reasons.length) reasons.push(`Starter card — weaker than real cards you've added`);
  }

  // === Thin build bonus ===
  if (isThinBuild && score >= 1.5) {
    score = Math.min(5, score + 0.6);
    if (!reasons.some(r => r.includes('lean')))
      reasons.push(`${topArch.arch.name} build benefits from a lean deck`);
  }

  // === Deck bloat pressure ===
  if (bloatFactor > 0 && score >= 1.5) {
    score = Math.min(5, score + bloatFactor);
    if (!reasons.some(r => r.includes('cards')))
      reasons.push(`Deck has ${deckSize} cards — thinning improves consistency`);
  }

  // === Duplicate handling ===
  if (copies > 1) {
    const isStackable = cardMech.includes('permanent_scaling') ||
      cardMech.includes('dexterity') || cardMech.includes('strength') ||
      cardSyn.includes('scaling');
    if (!isStackable || copies > 2) {
      const dupePen = copies > 2 ? 1.2 : 0.6;
      score += dupePen;
      reasons.push(`${copies} copies — redundant draws`);
    }
  }

  // === Relic protection — equipped relics synergize with this card ===
  if (relicProtect > 0) {
    const protection = Math.min(2.0, relicProtect * 0.5);
    score = Math.max(0.3, score - protection);
    reasons.push(`Equipped relic synergy — worth more with your current relics`);
  }

  // === Small deck safety — don't over-thin ===
  if (deckSize <= 8 && score < 4.0) {
    score = Math.min(score, 1.5);
    if (!reasons.some(r => r.includes('thin')))
      reasons.push(`Deck only has ${deckSize} cards — don't over-thin`);
  }

  score = Math.min(5, Math.max(0, score));

  // ── REASON STRING ──────────────────────────────────────────────
  let reasonStr = reasons.length ? reasons.join(' · ') + '. ' : '';
  reasonStr += score >= 4   ? 'Strong cut — remove when you can.'
    : score >= 3             ? 'Worth removing at the next opportunity.'
    : score >= 2             ? 'Consider removing if nothing worse exists.'
    : score >= 1             ? 'Decent card — keep unless your deck is bloated.'
    :                          'Keep this card.';

  return {name:cardName, score, grade:SCORE_GRADE(score), reason:reasonStr,
    safeToRemove: score >= 3.0};
}


function norm(n) {
  return (n||'').toUpperCase().replace(/[\s\-]/g,'_').replace(/[^A-Z0-9_]/g,'').replace(/_+/g,'_');
}
function getCard(char, name) {
  const key = norm(name);
  const charCards = DB.cards[char] || {};
  if (charCards[key]) return charCards[key];
  const colorless = DB.cards.colorless || {};
  if (colorless[key]) return colorless[key];
  return null;
}
function gradeColor(g) {
  return {S:'var(--s)',A:'var(--a)',B:'var(--b)',C:'var(--c)',D:'var(--d)',F:'var(--f)'}[g]||'var(--f)';
}



function floorToAct(f) {
  return f <= 17 ? 1 : f <= 34 ? 2 : f <= 50 ? 3 : 4;
}


function getFunctionalRole(data) {
  if (!data) return 'utility';
  if (data.role) return data.role;
  const tags = new Set([...(data.syn || []), ...(data.mech || [])]);
  if (tags.has('block') || tags.has('block_retain') || tags.has('weak')) return 'defense';
  if (tags.has('permanent_scaling') || tags.has('persistent_scaling') || tags.has('scaling')) return 'engine';
  if (tags.has('energy_gain') || tags.has('draw') || tags.has('strength') || tags.has('focus') || tags.has('star_gain')) return 'generator';
  if (tags.has('block_conversion') || tags.has('block_payoff') || tags.has('per_attack_payoff') || tags.has('vulnerable_payoff') || tags.has('self_damage_payoff') || tags.has('exhaust_payoff')) return 'payoff';
  if (tags.has('vulnerable') || tags.has('debuff')) return 'setup';
  return 'utility';
}


// ── RELIC SCORING ─────────────────────────────────────────────────
// Returns a result object shaped like scoreCard output so index.html
// can render it with the same resultHTML() function.
function scoreRelic(relicName, char, da, deckCards) {
  if (!DB.relics) return null;
  const key = relicName.toUpperCase()
    .replace(/'/g,'').replace(/[\s\-]+/g,'_')
    .replace(/[^A-Z0-9_]/g,'').replace(/_+/g,'_').replace(/_+$/,'');
  const d = DB.relics[key];
  if (!d) return null;

  const TIER_VALS = {S:5, A:4, B:3, C:2, D:1};
  let score = TIER_VALS[d.tier] ?? 2;
  const synR = [], antiR = [];

  // 1. Build fit — relic's builds vs detected archetypes
  const builds = (d.builds || []).filter(b => b !== 'any');
  if (builds.length && da.detected.length) {
    for (const {arch, strength} of da.detected) {
      if (builds.includes(arch.id)) {
        const boost = +(0.4 + strength * 1.2).toFixed(1);
        score += boost;
        synR.push('+' + boost + ' fits ' + arch.name + ' build');
        break;
      }
    }
  }

  // 2. scoreEffects — check relic passive bonuses vs deck tag frequency
  if (d.scoreEffects && d.scoreEffects.length) {
    const deckTagCounts = {};
    for (const card of deckCards) {
      const cd = getCard(char, card.name);
      if (!cd) continue;
      const tags = [...(cd.syn||[]), ...(cd.mech||[]),
                    ...(cd.builds||[]).filter(b=>b!=='any')];
      for (const tag of tags) {
        deckTagCounts[tag] = (deckTagCounts[tag]||0) + 1;
      }
    }
    for (const fx of d.scoreEffects) {
      const matchCount = (fx.tags||[]).reduce((s,t) => s+(deckTagCounts[t]||0), 0);
      if (matchCount > 0) {
        const boost = +(fx.bonus * Math.min(matchCount/3, 1.5)).toFixed(1);
        if (boost > 0.05) {
          score += boost;
          synR.push('+' + boost + ' deck has ' + fx.tags.join('/') + ' cards (×' + matchCount + ')');
        }
      }
    }
  }

  // 3. relicCombos — specific relic+card pairs in deck
  const deckNames = new Set(deckCards.map(c => c.name));
  for (const rc of (DB.relicCombos || [])) {
    if (rc.relic === relicName && deckNames.has(rc.card)) {
      score += rc.bonus;
      synR.push('+' + rc.bonus.toFixed(1) + ' with ' + rc.card + ' — ' + rc.reason.split('.')[0]);
    }
  }

  // 4. Grade
  const GRADES  = ['S','A','B','C','D'];
  const THRESH  = [4.5, 3.5, 2.5, 1.5, 0];
  const idx2    = THRESH.findIndex(v => score >= v);
  const finalGrade = idx2 >= 0 ? GRADES[idx2] : 'D';

  return {
    name:        relicName,
    finalScore:  +score.toFixed(2),
    finalGrade,
    base:        d.tier,
    synReasons:  synR,
    antiReasons: antiR,
    builds:      builds,
    notes:       d.notes || '',
    rarity:      d.rarity || '',
    isBest:      false,
  };
}
