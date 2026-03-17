// ─────────────────────────────────────────────
//  TOO FAST TO READ
//  Monotype Campaign Edition — Modified
//  Avenir Next LT Pro Bold · Kerning −25 · New palette
// ─────────────────────────────────────────────

// ── CONSTANTS ────────────────────────────────
const HOLD_START     = 1.8;
const HOLD_MIN       = 0.055;
const ANIM_START     = 0.52;
const ANIM_MIN       = 0.09;
const EASE_POWER     = 1.6;
const FAST_THRESHOLD = 0.72;
const FAST_DURATION  = 7.5;
const PAUSE_ON_END   = 4.5;
const BLACK_GAP      = 3.2;

// ── COPY — sentence case (first letter upper, rest lower) ────
const copy = [
  "Reading used to take time.",          // 0
  "Words had space to breathe.",         // 1  extra word-spacing
  "",
  "Then something changed.",             // 3  "changed." italic
  "",
  "Speed became a virtue.",              // 5  "Speed" motion blur
  "Attention became a currency.",        // 6  vibration
  "Patience became a failure.",          // 7  normal
  "",
  "Scroll.",                             // 9
  "Swipe.",                              // 10
  "Skip.",                               // 11 underline + cursor click
  "",
  "Faster than thought.",                // 13 "thought." size boost
  "Faster than feeling.",                // 14 "feeling." accent
  "Faster than understanding.",          // 15 "understanding." size boost
  "",
  "The algorithm learned your impatience.",
  "And rewarded it.",
  "",
  "You can't scroll through grief.",
  "You can't skip changing your mind.",
  "",
  "Always accelerating.",
  "Never arriving.",
  "Never arriving.",
  "Always accelerating.",
  "Never arriving.",
  "Always accelerating.",
  "Never arriving.",
  "Always accelerating.",
  "Never arriving.",
  "Always accelerating.",
  "Never arriving.",
  "Always accelerating.",
  "Never arriving.",
  "Always accelerating.",
];

// ─────────────────────────────────────────────
//  COLOUR PALETTE — new brand system
//  All pairs are self-contained: bg/tx never mixed with other combos.
// ─────────────────────────────────────────────

const BLACK       = [  0,   0,   0];
const WHITE       = [255, 255, 255];

// Named palette pairs
const C_DARK_PURPLE  = [0x4A, 0x05, 0x31];   // #4A0531
const C_HOT_PINK     = [0xE9, 0x1F, 0x9E];   // #E91F9E
const C_PINK         = [0xE9, 0x1F, 0x9E];   // same as HOT_PINK
const C_BRIGHT_PURPLE= [0xA5, 0x2B, 0xFF];   // #A52BFF
const C_DEEP_VIOLET  = [0x2F, 0x03, 0x4F];   // #2F034F
const C_LAVENDER     = [0x9C, 0x83, 0xFA];   // #9C83FA
const C_INDIGO       = [0x34, 0x04, 0x92];   // #340492
const C_CYAN         = [0x00, 0xD7, 0xFD];   // #00D7FD
const C_TEAL         = [0x00, 0x35, 0x41];   // #003541
const C_STEEL        = [0x68, 0xA0, 0xD0];   // #68A0D0
const C_NAVY         = [0x07, 0x2E, 0x52];   // #072E52
const C_FOREST       = [0x00, 0x2B, 0x00];   // #002B00
const C_LIME         = [0x83, 0xBB, 0x57];   // #83BB57
const C_YELLOW       = [0xF4, 0xE9, 0x79];   // #F4E979
const C_CARAMEL      = [0x8B, 0x62, 0x09];   // #8B6209
const C_ORANGE       = [0xE1, 0x51, 0x02];   // #E15102
const C_LEMON        = [0xFF, 0xEC, 0x5A];   // #FFEC5A
const C_COBALT       = [0x00, 0x24, 0x89];   // #002489
const C_AMBER        = [0xFF, 0xA2, 0x00];   // #FFA200
const C_MAGENTA      = [0xFF, 0x7A, 0xFF];   // #FF7AFF

// ── INK / BUTTER aliases ──────────────────────
const INK    = BLACK;
const BUTTER = WHITE;

// ── ACCENT for FEELING. (slide 14) ───────────
const ACCENT_FEELING = C_HOT_PINK;

// ── Per-slide themes ──────────────────────────
//  Narrative arc:
//   0         → white / black     calm opening
//   1         → 4A0531 / E91F9E   first colour hit — intimate
//   3         → white / black     pivot — reset
//   5         → E91F9E / 4A0531   SPEED — dopamine pink
//   6         → A52BFF / 2F034F   ATTENTION — electric violet
//   7         → 9C83FA / 340492   PATIENCE — cooler, flattened
//   9         → 002B00 / 83BB57   SCROLL — terminal green
//  10         → E15102 / FFEC5A   SWIPE — maximum punch orange
//  11         → 002489 / FFA200   SKIP — cobalt/amber
//  13         → E15102 / FFEC5A   THOUGHT — alarm
//  14         → 00D7FD / 003541   FEELING — cold signal
//  15         → A52BFF / 2F034F   UNDERSTANDING — overloaded violet
//  17         → 4A0531 / E91F9E   ALGORITHM — deep purple
//  18         → F4E979 / 8B6209   REWARDED — warm dopamine
//  20         → 002B00 / FF7AFF   GRIEF — poison green / magenta
//  21         → E15102 / FFEC5A   CAN'T SKIP — maximum alarm
//  23-36      → cycle through palette for strobe section

const SLIDE_THEMES = {
  0:  { bg: WHITE,           tx: BLACK          },
  1:  { bg: C_DARK_PURPLE,   tx: C_HOT_PINK     },
  3:  { bg: WHITE,           tx: BLACK          },
  5:  { bg: C_PINK,          tx: C_DARK_PURPLE  },
  6:  { bg: C_BRIGHT_PURPLE, tx: C_DEEP_VIOLET  },
  7:  { bg: C_LAVENDER,      tx: C_INDIGO       },
  9:  { bg: C_FOREST,        tx: C_LIME         },
  10: { bg: C_ORANGE,        tx: C_LEMON        },
  11: { bg: C_COBALT,        tx: C_AMBER        },
  13: { bg: C_ORANGE,        tx: C_LEMON        },
  14: { bg: C_CYAN,          tx: C_TEAL         },
  15: { bg: C_BRIGHT_PURPLE, tx: C_DEEP_VIOLET  },
  17: { bg: C_DARK_PURPLE,   tx: C_HOT_PINK     },
  18: { bg: C_YELLOW,        tx: C_CARAMEL      },
  20: { bg: C_FOREST,        tx: C_MAGENTA      },
  21: { bg: C_ORANGE,        tx: C_LEMON        },
  23: { bg: C_PINK,          tx: C_DARK_PURPLE  },
  24: { bg: C_CYAN,          tx: C_TEAL         },
  25: { bg: C_YELLOW,        tx: C_CARAMEL      },
  26: { bg: C_LIME,          tx: C_FOREST       },
  27: { bg: C_BRIGHT_PURPLE, tx: C_DEEP_VIOLET  },
  28: { bg: C_STEEL,         tx: C_NAVY         },
  29: { bg: C_COBALT,        tx: C_AMBER        },
  30: { bg: C_FOREST,        tx: C_MAGENTA      },
  31: { bg: C_LAVENDER,      tx: C_INDIGO       },
  32: { bg: C_ORANGE,        tx: C_LEMON        },
  33: { bg: C_DARK_PURPLE,   tx: C_HOT_PINK     },
  34: { bg: C_CYAN,          tx: C_TEAL         },
  35: { bg: C_YELLOW,        tx: C_CARAMEL      },
  36: { bg: C_PINK,          tx: C_DARK_PURPLE  },
};

function themeForIndex(i) {
  if (SLIDE_THEMES[i]) return SLIDE_THEMES[i];
  return { bg: BLACK, tx: WHITE };
}

// ─────────────────────────────────────────────
//  TRACKING — kerning −25 (= −0.025 em) across all slides
// ─────────────────────────────────────────────
function trackingRatioForSlide(i) {
  return -0.025;
}

function trackingForSlide(i, baseSize) {
  return baseSize * trackingRatioForSlide(i);
}

// ─────────────────────────────────────────────
//  FONT SIZE — viewport-relative starting point
// ─────────────────────────────────────────────
function fontSizeForSlide(i) {
  if ([9, 10, 11].includes(i))  return width * 0.20;
  if ([23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].includes(i))
                                 return width * 0.14;
  if (i === 5)                   return width * 0.09;
  return width * 0.082;
}

// ─────────────────────────────────────────────
//  AUTO-FIT
// ─────────────────────────────────────────────
function fitFontSize(segments, startSize, trackingRatio, maxW) {
  const ctx = drawingContext;
  const MIN_SIZE = 18;
  let fs = startSize;

  while (fs > MIN_SIZE) {
    const tk = fs * trackingRatio;
    let totalW = 0;

    for (const seg of segments) {
      const renderSize = seg.sizeBoost ? fs * seg.sizeBoost : fs;
      ctx.font = buildCtxFont(renderSize);
      const scaleX = seg.scaleX || 1;
      const chars  = seg.text.split('');
      let segW = 0;
      chars.forEach((ch, idx) => {
        segW += ctx.measureText(ch).width;
        if (idx < chars.length - 1) segW += tk * (seg.sizeBoost || 1);
      });
      totalW += segW * scaleX;
    }

    if (totalW <= maxW) return fs;
    fs *= 0.96;
  }
  return MIN_SIZE;
}

// ── GLOBALS ───────────────────────────────────
let font            = null;
let fontLoaded      = false;
let fontBask        = null;    // Baskerville Italic for emphasis
let fontBaskLoaded  = false;
let fontFamilyString = "system-ui, sans-serif";
let cnv;

let state      = "holding";
let stateTimer = 0;
let slideIndex = 0;
let slideTotal = 0;
let progress   = 0;
let paused     = false;

let slideAY = 0, slideBY = 0;
let slideAX = 0, slideBX = 0;
let currentTransitionHoriz = false;

let fastTimer   = 0;
let inFastPhase = false;
let vibratePhase = 0;

let skipClickState = 'idle';
let skipClickTimer = 0;

// Word-by-word reveal for slide 0
let wordRevealTimer = 0;

// Breathing kerning oscillator for slide 1 "breathe."
let breathePhase = 0;

const F = {
  x: 0, y: 0,
  startX: 0, startY: 0,
  r: 32,
  swiping: false, prog: 0, dur: 0,
  swipeAmt: 0, horizontal: false,
  opacity: 0.6, idlePhase: 0,
};

let fingerInkR = 255, fingerInkG = 255, fingerInkB = 255;
let btnScale = 1.0;
let fastBgR = 0, fastBgG = 0, fastBgB = 0;

// ─────────────────────────────────────────────
//  RICH TEXT RENDERER
// ─────────────────────────────────────────────
function buildCtxFont(baseSize) {
  const family = fontLoaded ? FONT_FAMILY : FONT_FALLBACK;
  return `${Math.round(baseSize)}px ${family}`;
}

function buildCtxFontBask(baseSize) {
  // Baskerville Italic for emphasis — semibold is carried by the variable font axis
  const family = fontBaskLoaded ? FONT_FAMILY_BASK : 'Georgia, serif';
  return `800 italic ${Math.round(baseSize)}px ${family}`;
}

// ── Optical kerning pair corrections ──────────────────────────────────────────
// Returns extra pixels to add between ch and nextCh at given fontSize.
// Positive = more space. Avenir Next Bold: T has wide shoulders that crowd
// lowercase letters, so we add a small positive correction.
function kernPairAdjust(ch, nextCh, fontSize) {
  if (!nextCh) return 0;
  const pair = ch + nextCh;
  // Pairs that need loosening (T top overhangs into next glyph)
  const LOOSE = {
    // T — wide top serifs crowd lowercase
    'Th':0.045, 'Te':0.030, 'To':0.028, 'Ta':0.028,
    'Ti':0.020, 'Tu':0.028, 'Ty':0.028, 'Tw':0.018,
    'Tr':0.018, 'Ts':0.018,
    // W same issue
    'Wh':0.030, 'We':0.022, 'Wo':0.022, 'Wa':0.022,
    // r — in Avenir Next Bold the shoulder is wide and collides with next glyph
    'ra':0.028, 'rc':0.028, 'rd':0.025, 're':0.028,
    'rf':0.020, 'rg':0.025, 'ri':0.015, 'rj':0.018,
    'rk':0.018, 'rl':0.015, 'rm':0.018, 'rn':0.018,
    'ro':0.028, 'rp':0.020, 'rq':0.025, 'rs':0.025,
    'rt':0.018, 'ru':0.020, 'rv':0.018, 'rw':0.018,
    'ry':0.022, 'r,':0.018, 'r.':0.018,
  };
  return (LOOSE[pair] || 0) * fontSize;
}

function drawRichText(segments, cx, cy, baseSize, defR, defG, defB, defA, tracking, wordSpacingOnly) {
  const ctx = drawingContext;
  const TK  = (tracking !== undefined) ? tracking : baseSize * -0.025;

  ctx.save();
  ctx.textBaseline = 'middle';
  ctx.textAlign    = 'left';

  function segWidth(seg) {
    ctx.font = buildCtxFont(baseSize);
    const tk    = seg.tracking !== undefined ? seg.tracking : TK;
    const ws    = wordSpacingOnly || seg.wordSpacingOnly;
    const chars = seg.text.split('');
    const scaleX = seg.scaleX || 1;
    let w = 0;
    chars.forEach((ch, idx) => {
      w += ctx.measureText(ch).width;
      if (idx < chars.length - 1) {
        w += (ws && ch !== ' ') ? 0 : tk;
      }
    });
    return w * scaleX;
  }

  let totalWidth = 0;
  for (const seg of segments) totalWidth += segWidth(seg);
  let x = cx - totalWidth / 2;

  for (const seg of segments) {
    ctx.font = buildCtxFont(baseSize);
    const tk     = seg.tracking !== undefined ? seg.tracking : TK;
    const ws     = wordSpacingOnly || seg.wordSpacingOnly;
    const scaleX = seg.scaleX || 1;
    const chars  = seg.text.split('');
    const sw     = segWidth(seg);

    const sr = seg.fillColor ? red(seg.fillColor)   : defR;
    const sg = seg.fillColor ? green(seg.fillColor) : defG;
    const sb = seg.fillColor ? blue(seg.fillColor)  : defB;
    const sa = defA / 255;
    const fillCSS = `rgba(${sr},${sg},${sb},${sa})`;

    ctx.save();

    if (seg.italic) {
      const SHEAR = 0.12;
      let cx2 = x;
      for (let ci = 0; ci < chars.length; ci++) {
        const ch     = chars[ci];
        const nextCh = chars[ci + 1] || '';
        const cw     = ctx.measureText(ch).width;
        ctx.save();
        ctx.transform(1, 0, -SHEAR, 1, cx2 + cw * SHEAR * 0.5, cy);
        ctx.fillStyle = fillCSS;
        ctx.fillText(ch, 0, 0);
        ctx.restore();
        const gap  = (ws && ch !== ' ') ? 0 : tk;
        const kAdj = (ci < chars.length - 1) ? kernPairAdjust(ch, nextCh, baseSize) : 0;
        cx2 += cw + (ci < chars.length - 1 ? gap : 0) + kAdj;
      }

    } else if (seg.sizeBoost) {
      const boostedSize = baseSize * seg.sizeBoost;
      ctx.font = buildCtxFont(boostedSize);
      let bx = x;
      const yAdj = (boostedSize - baseSize) * 0.04;
      for (let ci = 0; ci < chars.length; ci++) {
        const ch  = chars[ci];
        const cw  = ctx.measureText(ch).width;
        ctx.save();
        ctx.translate(bx, cy - yAdj);
        ctx.fillStyle = fillCSS;
        ctx.fillText(ch, 0, 0);
        ctx.restore();
        const gap = (ws && ch !== ' ') ? 0 : (tk * seg.sizeBoost);
        bx += cw + (ci < chars.length - 1 ? gap : 0);
      }

    } else {
      ctx.translate(x, cy);
      ctx.scale(scaleX, 1);
      let charX = 0;
      for (let ci = 0; ci < chars.length; ci++) {
        const ch     = chars[ci];
        const nextCh = chars[ci + 1] || '';
        const cw     = ctx.measureText(ch).width;
        ctx.fillStyle = fillCSS;
        ctx.fillText(ch, charX / scaleX, 0);
        const gap  = (ws && ch !== ' ') ? 0 : tk;
        const kAdj = (ci < chars.length - 1) ? kernPairAdjust(ch, nextCh, baseSize) / scaleX : 0;
        charX += cw + (ci < chars.length - 1 ? gap : 0) + kAdj;
      }
    }

    ctx.restore();

    if (seg.underline) {
      ctx.save();
      ctx.strokeStyle = fillCSS;
      ctx.lineWidth   = baseSize * 0.07;
      ctx.lineCap     = 'square';
      ctx.beginPath();
      ctx.moveTo(x,      cy + baseSize * 0.50);
      ctx.lineTo(x + sw, cy + baseSize * 0.50);
      ctx.stroke();
      ctx.restore();
    }

    x += sw;
  }

  ctx.restore();
}

// ─────────────────────────────────────────────
//  DRAW SLIDE
// ─────────────────────────────────────────────
function drawSlide(i, xOff, yOff, op) {
  if (i < 0 || i >= copy.length) {
    noStroke(); fill(0);
    rect(xOff, yOff, width, height);
    return;
  }

  const txt   = copy[i] ?? "";
  const theme = themeForIndex(i);

  let vx = 0, vy = 0;
  if (i === 6) {
    vx = sin(vibratePhase * 53) * 5.5;
    vy = cos(vibratePhase * 38) * 3.5;
  }
  const bx = xOff + vx;
  const by = yOff + vy;

  noStroke();
  if (progress >= FAST_THRESHOLD) {
    fill(fastBgR, fastBgG, fastBgB);
  } else {
    fill(theme.bg[0], theme.bg[1], theme.bg[2]);
  }
  rect(bx, by, width, height);

  if (txt === "") return;

  const cx  = width  / 2 + bx;
  const cy  = height / 2 + by;

  let dr, dg, db;
  if (progress >= FAST_THRESHOLD) {
    const luma = 0.2126*fastBgR + 0.7152*fastBgG + 0.0722*fastBgB;
    [dr, dg, db] = luma > 128 ? BLACK : WHITE;
  } else {
    [dr, dg, db] = theme.tx;
  }
  const defA = 255 * op;

  const safeW  = width * (width < 600 ? 0.88 : 0.84);
  const tkRatio = trackingRatioForSlide(i);

  function fit(segs) {
    return fitFontSize(segs, fontSizeForSlide(i), tkRatio, safeW);
  }

  // ── Slide-specific typography ───────────────
  const lineGap = (fs0) => fs0 * 1.22;  // vertical distance between two lines

  // Helper: draw a 2-line layout. line1segs / line2segs are segment arrays.
  function draw2Lines(line1segs, line2segs, baseY, tkR) {
    const fs1 = fitFontSize(line1segs, fontSizeForSlide(i), tkR, safeW);
    const fs2 = fitFontSize(line2segs, fontSizeForSlide(i), tkR, safeW);
    const fs  = Math.min(fs1, fs2);          // same size on both lines
    const gap = fs * 1.08;
    drawRichText(line1segs, cx, baseY - gap * 0.5, fs, dr, dg, db, defA, fs * tkR);
    drawRichText(line2segs, cx, baseY + gap * 0.5, fs, dr, dg, db, defA, fs * tkR);
  }

  // ── 0: Word-by-word reveal — two lines ─────────────────────────────────────
  if (i === 0) {
    // Line 1: "Reading used to"   Line 2: "take time."
    const line1words = ["Reading", " used", " to"];
    const line2words = ["take", " time."];
    const allWords   = [...line1words, ...line2words];

    const testSegs = [{ text: "Reading used to" }];
    const fs = fitFontSize(testSegs, fontSizeForSlide(i), tkRatio, safeW);
    const gap = fs * 1.08;
    const y1  = cy - gap * 0.5;
    const y2  = cy + gap * 0.5;

    const WORD_INTERVAL = 0.42;   // seconds between each word appearing
    const WORD_DUR      = 0.55;   // duration of each word's slide-in
    const DROP          = fs * 0.55; // pixels above final position word starts from

    // Measure x positions for each word so we can slide them in independently
    const ctx2 = drawingContext;
    ctx2.font = buildCtxFont(fs);
    ctx2.textBaseline = 'middle';
    ctx2.textAlign    = 'left';

    function wordX(words, wIdx) {
      // Returns the starting x of word wIdx within the centered line
      const lineText = words.join('');
      let totalW = 0;
      lineText.split('').forEach((ch, ci, arr) => {
        totalW += ctx2.measureText(ch).width;
        if (ci < arr.length - 1) totalW += fs * tkRatio;
      });
      let x0 = cx - totalW / 2;
      for (let wi = 0; wi < wIdx; wi++) {
        words[wi].split('').forEach((ch, ci, arr) => {
          x0 += ctx2.measureText(ch).width;
          if (ci < arr.length - 1) x0 += fs * tkRatio;
        });
      }
      return x0;
    }

    function drawWord(wordStr, wx, wy, alpha) {
      const a = Math.max(0, Math.min(1, alpha));
      ctx2.save();
      ctx2.fillStyle = `rgba(${dr},${dg},${db},${a * (defA / 255)})`;
      let cx3 = wx;
      wordStr.split('').forEach((ch, ci, arr) => {
        const cw = ctx2.measureText(ch).width;
        ctx2.fillText(ch, cx3, wy);
        const nxt = arr[ci + 1] || '';
        cx3 += cw + (ci < arr.length - 1 ? fs * tkRatio : 0) + kernPairAdjust(ch, nxt, fs);
      });
      ctx2.restore();
    }

    // Line 1 words
    line1words.forEach((w, wi) => {
      const startTime = wi * WORD_INTERVAL;
      const t  = clamp((wordRevealTimer - startTime) / WORD_DUR, 0, 1);
      const e  = easeOutQuart(t);
      const wx = wordX(line1words, wi);
      const wy = y1 + DROP * (1 - e);
      drawWord(w, wx, wy, e);
    });

    // Line 2 words
    line2words.forEach((w, wi) => {
      const globalWi = line1words.length + wi;
      const startTime = globalWi * WORD_INTERVAL;
      const t  = clamp((wordRevealTimer - startTime) / WORD_DUR, 0, 1);
      const e  = easeOutQuart(t);
      const wx = wordX(line2words, wi);
      const wy = y2 + DROP * (1 - e);
      drawWord(w, wx, wy, e);
    });

    return;
  }

  // ── 1: "breathe." alone on line 2, breathing kerning animation ─────────────
  if (i === 1) {
    const line1segs = [{ text: "Words had space to" }];
    const baseFs    = fitFontSize(line1segs, fontSizeForSlide(i), tkRatio, safeW);
    const fs        = baseFs;
    const gap       = fs * 1.08;
    const y1        = cy - gap * 0.5;
    const y2        = cy + gap * 0.5;

    // Line 1 — plain Avenir
    drawRichText(line1segs, cx, y1, fs, dr, dg, db, defA, fs * tkRatio);

    // Line 2 — "breathe." in Baskerville + breathing kerning
    // breathePhase oscillates 0→2π — tracking swells and contracts
    const breatheAmp = fs * 0.10;
    const breatheTk  = fs * tkRatio + breatheAmp * (0.5 + 0.5 * Math.sin(breathePhase));
    const breatheSize = fs + 15;  // +15 pt as requested
    drawRichTextBask([{ text: "breathe." }], cx, y2, breatheSize, dr, dg, db, defA, breatheTk);
    return;
  }

  // ── 3: "changed." in Baskerville italic ────────────────────────────────────
  if (i === 3) {
    const segs = [{ text: "Then something " }];
    const bask = [{ text: "changed.", baskerville: true }];
    const fsA  = fitFontSize(segs, fontSizeForSlide(i), tkRatio, safeW);
    const fs   = fsA;
    // Render on one line — "changed." uses Baskerville, inline
    const ctx2 = drawingContext;
    ctx2.save();
    ctx2.textBaseline = 'middle';
    ctx2.textAlign    = 'left';

    // Measure total width
    ctx2.font = buildCtxFont(fs);
    let w1 = 0;
    "Then something ".split('').forEach((ch, ci, arr) => {
      w1 += ctx2.measureText(ch).width;
      if (ci < arr.length - 1) w1 += fs * tkRatio;
    });
    ctx2.font = buildCtxFontBask(fs);
    let w2 = 0;
    "changed.".split('').forEach((ch, ci, arr) => {
      w2 += ctx2.measureText(ch).width;
      if (ci < arr.length - 1) w2 += fs * tkRatio;
    });

    let x0 = cx - (w1 + w2) / 2;
    const a = defA / 255;

    ctx2.font = buildCtxFont(fs);
    ctx2.fillStyle = `rgba(${dr},${dg},${db},${a})`;
    "Then something ".split('').forEach((ch, ci, arr) => {
      const cw = ctx2.measureText(ch).width;
      ctx2.fillText(ch, x0, cy);
      x0 += cw + (ci < arr.length - 1 ? fs * tkRatio : 0) + kernPairAdjust(ch, arr[ci+1]||'', fs);
    });

    ctx2.font = buildCtxFontBask(fs);
    "changed.".split('').forEach((ch, ci, arr) => {
      const cw = ctx2.measureText(ch).width;
      ctx2.fillText(ch, x0, cy);
      x0 += cw + (ci < arr.length - 1 ? fs * tkRatio : 0);
    });
    ctx2.restore();
    return;
  }

  // ── 5: "Speed became a virtue." — plain, 2 lines ──────────────────────────
  if (i === 5) {
    draw2Lines(
      [{ text: "Speed became" }],
      [{ text: "a virtue." }],
      cy, tkRatio
    );
    return;
  }

  // ── 6: "Attention became a currency." — vibration, 2 lines ────────────────
  if (i === 6) {
    draw2Lines(
      [{ text: "Attention became" }],
      [{ text: "a currency." }],
      cy, tkRatio
    );
    return;
  }

  // ── 7: "Patience became a failure." — 2 lines ──────────────────────────────
  if (i === 7) {
    draw2Lines(
      [{ text: "Patience became" }],
      [{ text: "a failure." }],
      cy, tkRatio
    );
    return;
  }

  // ── 11: Skip. underlined ────────────────────────────────────────────────────
  if (i === 11) {
    const segs = [{ text: "Skip.", underline: true }];
    const fs   = fit(segs) * btnScale;
    drawRichText(segs, cx, cy, fs, dr, dg, db, defA, fs * tkRatio);
    return;
  }

  // ── 13: "Faster than thought." — "thought." in Baskerville ────────────────
  if (i === 13) {
    const segsA = [{ text: "Faster than " }];
    const fs    = fitFontSize(segsA, fontSizeForSlide(i), tkRatio, safeW);
    const ctx2  = drawingContext;
    ctx2.save();
    ctx2.textBaseline = 'middle';
    ctx2.textAlign    = 'left';

    ctx2.font = buildCtxFont(fs);
    let w1 = 0;
    "Faster than ".split('').forEach((ch, ci, arr) => {
      w1 += ctx2.measureText(ch).width;
      if (ci < arr.length - 1) w1 += fs * tkRatio;
    });
    ctx2.font = buildCtxFontBask(fs * 1.10);
    let w2 = 0;
    "thought.".split('').forEach((ch, ci, arr) => {
      w2 += ctx2.measureText(ch).width;
      if (ci < arr.length - 1) w2 += (fs * 1.10) * tkRatio;
    });

    let x0 = cx - (w1 + w2) / 2;
    const a = defA / 255;

    ctx2.font = buildCtxFont(fs);
    ctx2.fillStyle = `rgba(${dr},${dg},${db},${a})`;
    "Faster than ".split('').forEach((ch, ci, arr) => {
      const cw = ctx2.measureText(ch).width;
      ctx2.fillText(ch, x0, cy);
      x0 += cw + (ci < arr.length - 1 ? fs * tkRatio : 0) + kernPairAdjust(ch, arr[ci+1]||'', fs);
    });
    ctx2.font = buildCtxFontBask(fs * 1.10);
    "thought.".split('').forEach((ch, ci, arr) => {
      const cw = ctx2.measureText(ch).width;
      ctx2.fillText(ch, x0, cy);
      x0 += cw + (ci < arr.length - 1 ? (fs * 1.10) * tkRatio : 0);
    });
    ctx2.restore();
    return;
  }

  // ── 14: "Faster than feeling." — "feeling." in Baskerville + accent color ──
  if (i === 14) {
    const fs   = fitFontSize([{ text: "Faster than " }], fontSizeForSlide(i), tkRatio, safeW);
    const ctx2 = drawingContext;
    ctx2.save();
    ctx2.textBaseline = 'middle';
    ctx2.textAlign    = 'left';

    ctx2.font = buildCtxFont(fs);
    let w1 = 0;
    "Faster than ".split('').forEach((ch, ci, arr) => {
      w1 += ctx2.measureText(ch).width;
      if (ci < arr.length - 1) w1 += fs * tkRatio;
    });
    ctx2.font = buildCtxFontBask(fs * 1.10);
    let w2 = 0;
    "feeling.".split('').forEach((ch, ci, arr) => {
      w2 += ctx2.measureText(ch).width;
      if (ci < arr.length - 1) w2 += (fs * 1.10) * tkRatio;
    });

    let x0 = cx - (w1 + w2) / 2;
    const a  = defA / 255;
    const ar = ACCENT_FEELING[0], ag = ACCENT_FEELING[1], ab2 = ACCENT_FEELING[2];

    ctx2.font = buildCtxFont(fs);
    ctx2.fillStyle = `rgba(${dr},${dg},${db},${a})`;
    "Faster than ".split('').forEach((ch, ci, arr) => {
      const cw = ctx2.measureText(ch).width;
      ctx2.fillText(ch, x0, cy);
      x0 += cw + (ci < arr.length - 1 ? fs * tkRatio : 0) + kernPairAdjust(ch, arr[ci+1]||'', fs);
    });
    ctx2.font = buildCtxFontBask(fs * 1.10);
    ctx2.fillStyle = `rgba(${ar},${ag},${ab2},${a})`;
    "feeling.".split('').forEach((ch, ci, arr) => {
      const cw = ctx2.measureText(ch).width;
      ctx2.fillText(ch, x0, cy);
      x0 += cw + (ci < arr.length - 1 ? (fs * 1.10) * tkRatio : 0);
    });
    ctx2.restore();
    return;
  }

  // ── 15: "Faster than understanding." — Baskerville, 2 lines ───────────────
  if (i === 15) {
    const fs = fitFontSize([{ text: "Faster than" }], fontSizeForSlide(i), tkRatio, safeW);
    const gap = fs * 1.08;
    drawRichText([{ text: "Faster than" }], cx, cy - gap * 0.5, fs, dr, dg, db, defA, fs * tkRatio);
    drawRichTextBask([{ text: "understanding." }], cx, cy + gap * 0.5, fs * 1.10, dr, dg, db, defA, (fs * 1.10) * tkRatio);
    return;
  }

  // ── 17: "The algorithm learned / your impatience." ─────────────────────────
  if (i === 17) {
    draw2Lines(
      [{ text: "The algorithm learned" }],
      [{ text: "your impatience." }],
      cy, tkRatio
    );
    return;
  }

  // ── 20: "You can't scroll / through grief." ──────────────────────────────
  if (i === 20) {
    draw2Lines(
      [{ text: "You can't scroll" }],
      [{ text: "through grief." }],
      cy, tkRatio
    );
    return;
  }

  // ── 21: "You can't skip / changing your mind." ────────────────────────────
  if (i === 21) {
    draw2Lines(
      [{ text: "You can't skip" }],
      [{ text: "changing your mind." }],
      cy, tkRatio
    );
    return;
  }

  const segs = [{ text: txt }];
  const fs   = fit(segs);
  drawRichText(segs, cx, cy, fs, dr, dg, db, defA, fs * tkRatio);
}

// ── drawRichTextBask — Baskerville variant of drawRichText ───────────────────
// Renders segments using buildCtxFontBask. All segments rendered in Bask font.
function drawRichTextBask(segments, cx, cy, baseSize, defR, defG, defB, defA, tracking) {
  const ctx = drawingContext;
  const TK  = (tracking !== undefined) ? tracking : baseSize * -0.025;

  ctx.save();
  ctx.textBaseline = 'middle';
  ctx.textAlign    = 'left';
  ctx.font         = buildCtxFontBask(baseSize);

  function segW(seg) {
    const tk    = TK;
    const chars = seg.text.split('');
    let w = 0;
    chars.forEach((ch, idx) => {
      w += ctx.measureText(ch).width;
      if (idx < chars.length - 1) w += tk;
    });
    return w;
  }

  let totalW = 0;
  for (const seg of segments) totalW += segW(seg);
  let x = cx - totalW / 2;
  const a = defA / 255;

  for (const seg of segments) {
    const sr = seg.fillColor ? red(seg.fillColor)   : defR;
    const sg = seg.fillColor ? green(seg.fillColor) : defG;
    const sb = seg.fillColor ? blue(seg.fillColor)  : defB;
    ctx.fillStyle = `rgba(${sr},${sg},${sb},${a})`;
    const sw = segW(seg);
    seg.text.split('').forEach((ch, ci, arr) => {
      const cw = ctx.measureText(ch).width;
      ctx.fillText(ch, x, cy);
      x += cw + (ci < arr.length - 1 ? TK : 0);
    });
  }
  ctx.restore();
}

// ── PRELOAD ───────────────────────────────────
const FONT_PATH        = "./assets/AvenirNextLTPro-Bold.otf";
const FONT_FAMILY      = "AvenirNextBold";
const FONT_PATH_BASK   = "./assets/Baskervville-Italic-VariableFont_wght.ttf";
const FONT_FAMILY_BASK = "BaskervvilleItalic";
const FONT_FALLBACK    = "sans-serif";

function preload() {
  // Register Avenir Next via FontFace API
  try {
    const face = new FontFace(FONT_FAMILY, `url(${FONT_PATH})`);
    face.load().then(f => {
      document.fonts.add(f);
      fontLoaded = true;
      fontFamilyString = FONT_FAMILY;
    }).catch(() => { fontLoaded = false; });
  } catch(e) { fontLoaded = false; }

  font = loadFont(
    FONT_PATH,
    () => { fontLoaded = true; fontFamilyString = FONT_FAMILY; },
    () => { fontLoaded = false; font = null; }
  );

  // Register Baskervville Italic variable font
  try {
    const faceBask = new FontFace(FONT_FAMILY_BASK, `url(${FONT_PATH_BASK})`);
    faceBask.load().then(f => {
      document.fonts.add(f);
      fontBaskLoaded = true;
    }).catch(() => { fontBaskLoaded = false; });
  } catch(e) { fontBaskLoaded = false; }

  fontBask = loadFont(
    FONT_PATH_BASK,
    () => { fontBaskLoaded = true; },
    () => { fontBaskLoaded = false; fontBask = null; }
  );
}

function applyCanvasCrispSettings() {
  const dpr = window.devicePixelRatio || 1;
  pixelDensity(dpr);
  smooth();
  if (cnv && cnv.elt) {
    cnv.elt.style.width                = windowWidth  + "px";
    cnv.elt.style.height               = windowHeight + "px";
    cnv.elt.style.imageRendering       = "auto";
    cnv.elt.style.msInterpolationMode  = "bicubic";
  }
  if (drawingContext) {
    drawingContext.imageSmoothingEnabled = true;
    drawingContext.textRendering         = "geometricPrecision";
  }
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  applyCanvasCrispSettings();

  // fontFamilyString is set by the FontFace/loadFont callbacks — nothing to do here.

  slideTotal = copy.length;
  F.x = width  * 0.50;
  F.y = height * 0.64;
  resetCarousel();
}

function resetCarousel() {
  slideIndex = 0; progress = 0;
  state = "holding"; stateTimer = 0;
  fastTimer = 0; inFastPhase = false;
  slideAY = 0; slideBY = height;
  slideAX = 0; slideBX = width;
  currentTransitionHoriz = false;
  paused = false; vibratePhase = 0;
  skipClickState = 'idle'; skipClickTimer = 0;
  F.swiping = false; F.horizontal = false;
  F.x = width * 0.50; F.y = height * 0.64;
  F.startX = F.x; F.startY = F.y;
  F.opacity = 0.6; F.idlePhase = 0;
  fingerInkR = BUTTER[0]; fingerInkG = BUTTER[1]; fingerInkB = BUTTER[2];
  btnScale = 1.0;
  wordRevealTimer = 0;
  breathePhase = 0;
  const t0 = themeForIndex(0).bg;
  fastBgR = t0[0]; fastBgG = t0[1]; fastBgB = t0[2];
}

// ── DRAW LOOP ─────────────────────────────────
function draw() {
  fill(INK[0], INK[1], INK[2]);
  noStroke();
  rect(0, 0, width, height);

  if (!paused) vibratePhase += deltaTime * 0.038;

  // Tick word-reveal timer (only advances while on slide 0 in holding state)
  if (!paused && slideIndex === 0 && state === "holding") {
    wordRevealTimer += deltaTime / 1000;
  }
  if (slideIndex !== 0) wordRevealTimer = 0;

  // Tick breathing animation (continuous while on slide 1)
  if (!paused && slideIndex === 1) {
    breathePhase += deltaTime * 0.00085;  // ~0.85 rad/s — slow, relaxed breath
  }

  // Tick word-reveal timer (only advances while on slide 0 in holding state)
  if (!paused && slideIndex === 0 && state === "holding") {
    wordRevealTimer += deltaTime / 1000;
  }
  if (slideIndex !== 0) wordRevealTimer = 0;

  // Tick breathing animation (continuous while on slide 1)
  if (!paused && slideIndex === 1) {
    breathePhase += deltaTime * 0.00085;  // ~0.85 rad/s — slow, relaxed breath
  }

  if (!paused) {
    const th  = themeForIndex(slideIndex);
    const lerpRate = progress >= FAST_THRESHOLD ? 0.10 : 0.35;
    fastBgR = lerp(fastBgR, th.bg[0], lerpRate);
    fastBgG = lerp(fastBgG, th.bg[1], lerpRate);
    fastBgB = lerp(fastBgB, th.bg[2], lerpRate);
  }

  if (state === "end-black") {
    fill(INK[0], INK[1], INK[2]); noStroke(); rect(0, 0, width, height);
    if (!paused) stateTimer += deltaTime / 1000;
    if (stateTimer >= BLACK_GAP) { state = "end-message"; stateTimer = 0; }
    return;
  }
  if (state === "end-message") {
    fill(INK[0], INK[1], INK[2]); noStroke(); rect(0, 0, width, height);
    drawFinalMessage();
    if (!paused) stateTimer += deltaTime / 1000;
    if (stateTimer >= PAUSE_ON_END) { state = "restarting"; stateTimer = 0; }
    return;
  }
  if (state === "restarting") {
    fill(INK[0], INK[1], INK[2]); noStroke(); rect(0, 0, width, height);
    if (!paused) stateTimer += deltaTime / 1000;
    if (stateTimer >= 0.2) resetCarousel();
    return;
  }

  if (!paused) stateTimer += deltaTime / 1000;

  if (!paused && progress >= FAST_THRESHOLD) {
    fastTimer += deltaTime / 1000; inFastPhase = true;
  }
  if (inFastPhase && fastTimer >= FAST_DURATION) {
    state = "end-black"; stateTimer = 0; return;
  }

  if (state === "holding") {
    if (copy[slideIndex] === "") stateTimer = currentHoldTime();
    const isSkipSlide = slideIndex === 11 && skipClickState !== 'done';
    const holdTime = isSkipSlide ? 9999 : currentHoldTime();

    if (stateTimer >= holdTime) {
      if (slideIndex >= slideTotal - 1) {
        state = "end-black"; stateTimer = 0;
      } else {
        currentTransitionHoriz = isHorizTransition(slideIndex);
        state = "animating"; stateTimer = 0;
        if (currentTransitionHoriz) {
          slideAX = 0; slideBX = width; slideAY = 0; slideBY = 0;
        } else {
          slideAY = 0; slideBY = height; slideAX = 0; slideBX = 0;
        }
        triggerSwipe();
      }
    }
  }

  else if (state === "animating") {
    const dur = currentAnimDuration();
    const t   = clamp(stateTimer / dur, 0, 1);
    const e   = easeInOutQuint(t);

    if (currentTransitionHoriz) {
      slideAX = lerp(0, -width, e); slideBX = lerp(width, 0, e);
      slideAY = 0; slideBY = 0;
    } else {
      slideAY = lerp(0, -height, e); slideBY = lerp(height, 0, e);
      slideAX = 0; slideBX = 0;
    }

    if (t >= 1) {
      slideIndex++; progress = clamp(slideIndex / 24, 0, 1);
      state = "holding"; stateTimer = 0;
      slideAY = 0; slideBY = height; slideAX = 0; slideBX = width;
      currentTransitionHoriz = false;
      skipClickState = 'idle'; skipClickTimer = 0;
    }
  }

  if (slideIndex === 11 && state === "holding" && !paused) updateSkipCursor();

  updateFinger();
  renderSlides();
  updateFingerInk();
  drawFinger();
  renderUI();
}

// ── HELPERS ──────────────────────────────────
function isHorizTransition(i) { return i === 9 || i === 10; }

function renderSlides() {
  if (state === "animating") {
    const opA = currentTransitionHoriz ? edgeOpacityH(slideAX) : edgeOpacity(slideAY);
    const opB = currentTransitionHoriz ? edgeOpacityH(slideBX) : edgeOpacity(slideBY);
    drawSlide(slideIndex,     slideAX, slideAY, opA);
    drawSlide(slideIndex + 1, slideBX, slideBY, opB);
  } else {
    drawSlide(slideIndex, 0, 0, 1.0);
  }
}

function edgeOpacity(yOff) {
  const d = abs(yOff), fade = height * 0.28;
  if (d < fade) return 1.0;
  return clamp(map(d, fade, height * 0.72, 1.0, 0.0), 0, 1);
}
function edgeOpacityH(xOff) {
  const d = abs(xOff), fade = width * 0.28;
  if (d < fade) return 1.0;
  return clamp(map(d, fade, width * 0.72, 1.0, 0.0), 0, 1);
}

function updateFingerInk() {
  const getTheme = (i) => {
    if (i < 0 || i >= copy.length) return { bg: INK };
    return themeForIndex(i);
  };

  let th = getTheme(slideIndex);
  if (state === "animating") {
    const t   = clamp(stateTimer / currentAnimDuration(), 0, 1);
    const thB = getTheme(slideIndex + 1);
    const r   = lerp(th.bg[0], thB.bg[0], t);
    const g   = lerp(th.bg[1], thB.bg[1], t);
    const b   = lerp(th.bg[2], thB.bg[2], t);
    const luma = 0.2126*r + 0.7152*g + 0.0722*b;
    const [tr, tg, tb] = luma > 120 ? INK : BUTTER;
    fingerInkR = lerp(fingerInkR, tr, 0.12);
    fingerInkG = lerp(fingerInkG, tg, 0.12);
    fingerInkB = lerp(fingerInkB, tb, 0.12);
  } else {
    const luma = 0.2126*th.bg[0] + 0.7152*th.bg[1] + 0.0722*th.bg[2];
    const [tr, tg, tb] = luma > 120 ? INK : BUTTER;
    fingerInkR = lerp(fingerInkR, tr, 0.12);
    fingerInkG = lerp(fingerInkG, tg, 0.12);
    fingerInkB = lerp(fingerInkB, tb, 0.12);
  }
}

function updateSkipCursor() {
  const tx = width / 2, ty = height / 2;
  skipClickTimer += deltaTime / 1000;

  if (skipClickState === 'idle') {
    if (skipClickTimer > 0.30) {
      skipClickState = 'moving'; skipClickTimer = 0;
      F.startX = F.x; F.startY = F.y;
    }
  } else if (skipClickState === 'moving') {
    const t = clamp(skipClickTimer / 0.35, 0, 1);
    F.x = lerp(F.startX, tx, easeOutCubic(t));
    F.y = lerp(F.startY, ty, easeOutCubic(t));
    if (t >= 1) {
      F.x = tx; F.y = ty;
      skipClickState = 'pressing'; skipClickTimer = 0;
    }
  } else if (skipClickState === 'pressing') {
    const t  = clamp(skipClickTimer / 0.14, 0, 1);
    btnScale = lerp(1.0, 0.88, easeOutCubic(t));
    F.x = tx; F.y = ty;
    if (skipClickTimer >= 0.14) {
      skipClickState = 'release'; skipClickTimer = 0;
    }
  } else if (skipClickState === 'release') {
    const t  = clamp(skipClickTimer / 0.18, 0, 1);
    btnScale = lerp(0.88, 1.0, easeOutBack(t));
    F.x = tx; F.y = ty;
    if (skipClickTimer >= 0.18) {
      btnScale = 1.0;
      slideIndex  = 13;
      progress    = clamp(slideIndex / 24, 0, 1);
      state       = "holding";
      stateTimer  = 0;
      slideAY     = 0; slideBY = height;
      slideAX     = 0; slideBX = width;
      currentTransitionHoriz = false;
      skipClickState = 'done'; skipClickTimer = 0;
      F.x = width * 0.50; F.y = height * 0.64;
    }
  }
}

function triggerSwipe() {
  if (slideIndex === 11) return;
  F.swiping = true; F.prog = 0;
  F.startX = F.x; F.startY = F.y;
  F.horizontal = currentTransitionHoriz;
  F.dur = currentAnimDuration() * 1.1;
  const speedT = pow(clamp(progress, 0, 1), EASE_POWER);
  F.swipeAmt = (F.horizontal ? width : height) * lerp(0.22, 0.10, speedT);
}

function updateFinger() {
  if (paused) return;
  if (slideIndex === 11 && state === "holding" &&
      (skipClickState === 'moving' || skipClickState === 'pressing' || skipClickState === 'release')) return;

  const speedT = pow(clamp(progress, 0, 1), EASE_POWER);
  F.opacity = lerp(F.opacity, map(speedT, 0, 1, 0.58, 0.22), 0.05);

  if (F.swiping) {
    F.prog += (deltaTime / 1000) / F.dur;
    F.prog  = clamp(F.prog, 0, 1);

    if (F.horizontal) {
      F.x = F.prog <= 0.55
        ? lerp(F.startX, F.startX - F.swipeAmt, easeOutCubic(F.prog / 0.55))
        : lerp(F.startX - F.swipeAmt, F.startX, easeOutCubic((F.prog - 0.55) / 0.45));
      F.y = F.startY;
    } else {
      F.y = F.prog <= 0.55
        ? lerp(F.startY, F.startY - F.swipeAmt, easeOutCubic(F.prog / 0.55))
        : lerp(F.startY - F.swipeAmt, F.startY, easeOutCubic((F.prog - 0.55) / 0.45));
      F.x = F.startX;
    }

    if (F.prog >= 1) { F.swiping = false; F.x = F.startX; F.y = F.startY; }
  } else {
    F.idlePhase += deltaTime * 0.00042;
    F.x = lerp(F.x, width  * 0.50 + cos(F.idlePhase * 0.7) * 3.5, 0.03);
    F.y = lerp(F.y, height * 0.64 + sin(F.idlePhase)       * 4.5, 0.03);
  }
}

function drawFinger() {
  const x  = F.x, y = F.y, r = F.r, op = F.opacity;
  const ir = fingerInkR, ig = fingerInkG, ib = fingerInkB;

  const cursorScale = (slideIndex === 11 &&
    (skipClickState === 'pressing' || skipClickState === 'release'))
    ? btnScale : 1.0;
  const cr = r * cursorScale;

  for (let i = 3; i >= 1; i--) {
    noStroke(); fill(ir, ig, ib, 255 * op * 0.025 * i);
    circle(x, y, (cr + i * 6) * 2);
  }
  noStroke(); fill(ir, ig, ib, 255 * op * 0.11); circle(x, y, cr * 2);
  noFill(); strokeWeight(1.1);
  stroke(ir, ig, ib, 255 * op * 0.52); circle(x, y, cr * 2);
  noFill(); strokeWeight(1.3);
  stroke(ir, ig, ib, 255 * op * 0.85);
  arc(x, y, cr * 1.36, cr * 1.36, -PI * 0.80, -PI * 0.20);
  noStroke(); fill(ir, ig, ib, 255 * op * 0.40); circle(x, y, 4.5);

  if (F.swiping && F.prog < 0.48) {
    const rp = F.prog / 0.48;
    noFill(); strokeWeight(0.7);
    stroke(ir, ig, ib, 255 * op * (1 - rp) * 0.35);
    circle(x, y, (cr + rp * cr * 0.9) * 2);
  }
}

// ── FINAL MESSAGE ────────────────────────────
function drawFinalMessage() {
  const safeW = width * (width < 600 ? 0.88 : 0.84);
  const segs  = [{ text: "This is how reading feels today." }];
  const start = width * 0.072;
  const fs    = fitFontSize(segs, start, -0.025, safeW);
  drawRichText(segs, width / 2, height / 2, fs, BUTTER[0], BUTTER[1], BUTTER[2], 245, fs * -0.025);
}

// ── TIMING ───────────────────────────────────
function currentHoldTime() {
  return map(pow(clamp(progress,0,1), EASE_POWER), 0, 1, HOLD_START, HOLD_MIN);
}
function currentAnimDuration() {
  return map(pow(clamp(progress,0,1), EASE_POWER), 0, 1, ANIM_START, ANIM_MIN);
}

// ── EASING ───────────────────────────────────
function easeInOutQuint(t) {
  return t < 0.5 ? 16*t*t*t*t*t : 1 - pow(-2*t+2, 5)/2;
}
function easeOutCubic(t) { return 1 - pow(1-t, 3); }
function easeOutQuart(t)  { return 1 - pow(1-t, 4); }
function easeOutBack(t)  {
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * pow(t - 1, 3) + c1 * pow(t - 1, 2);
}

// ── UI ───────────────────────────────────────
function renderUI() {
  const p    = clamp(progress, 0, 1);
  const barW = width * 0.07;
  const barX = width - barW - 32;
  const barY = height - 24;
  noStroke(); fill(BUTTER[0], BUTTER[1], BUTTER[2], 10); rect(barX, barY, barW, 1);
  fill(C_HOT_PINK[0], C_HOT_PINK[1], C_HOT_PINK[2], 220); rect(barX, barY, barW * p, 1);

  if (progress < 0.08) {
    applyFont(10);
    textAlign(LEFT, TOP);
    fill(BUTTER[0], BUTTER[1], BUTTER[2], map(progress, 0.04, 0.08, 50, 0));
    text("Space  pause     R  restart", 32, height - 24);
  }
}

// ── HELPERS ──────────────────────────────────
function fontSize() { return fontSizeForSlide(slideIndex); }

function applyFont(size) {
  const s = Math.round(size);
  if (fontLoaded && font) textFont(font, s);
  else textFont(FONT_FALLBACK, s);
  // Also sync drawingContext so any p5 text() calls use the same family.
  if (fontLoaded) drawingContext.font = `${s}px ${FONT_FAMILY}`;
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

// ── INPUT ────────────────────────────────────
function keyPressed() {
  if (key === " ")                paused = !paused;
  if (key === "r" || key === "R") resetCarousel();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  applyCanvasCrispSettings();
}