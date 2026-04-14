const panels = Array.from(document.querySelectorAll("[data-profile]")).map((panel) => {
  const figure = panel.querySelector("[data-figure]");
  return {
    panel,
    profile: panel.dataset.profile,
    parts: {
      head: figure.querySelector('[data-part="head"]'),
      torso: figure.querySelector('[data-part="torso"]'),
      upperArmL: figure.querySelector('[data-part="upperArmL"]'),
      lowerArmL: figure.querySelector('[data-part="lowerArmL"]'),
      upperArmR: figure.querySelector('[data-part="upperArmR"]'),
      lowerArmR: figure.querySelector('[data-part="lowerArmR"]'),
      thighL: figure.querySelector('[data-part="thighL"]'),
      shinL: figure.querySelector('[data-part="shinL"]'),
      thighR: figure.querySelector('[data-part="thighR"]'),
      shinR: figure.querySelector('[data-part="shinR"]')
    }
  };
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (start, end, amount) => start + (end - start) * amount;
const easeInOutSine = (value) => -(Math.cos(Math.PI * value) - 1) / 2;
const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);

function setLine(node, start, end) {
  node.setAttribute("x1", start.x.toFixed(2));
  node.setAttribute("y1", start.y.toFixed(2));
  node.setAttribute("x2", end.x.toFixed(2));
  node.setAttribute("y2", end.y.toFixed(2));
}

function motion(profile, seconds) {
  if (profile === "motivation") {
    const cycle = 7.4;
    const phase = (seconds % cycle) / cycle;
    let pull = 0;

    if (phase < 0.14) {
      pull = easeOutCubic(phase / 0.14) * 0.42;
    } else if (phase < 0.24) {
      pull = (1 - easeInOutSine((phase - 0.14) / 0.1)) * 0.42;
    } else if (phase < 0.31) {
      pull = (1 - easeInOutSine((phase - 0.24) / 0.07)) * 0.12;
    }

    return {
      pull,
      swing: Math.sin(seconds * 1.4) * 0.05,
      spread: 0.12 + pull * 0.35,
      tuck: pull * 0.14,
      jitter: 0.18
    };
  }

  if (profile === "discipline") {
    const cycle = 2.5;
    const phase = (seconds % cycle) / cycle;
    const wave = 0.5 - 0.5 * Math.cos(phase * Math.PI * 2);

    return {
      pull: 0.16 + wave * 0.58,
      swing: Math.sin(seconds * 1.7) * 0.08,
      spread: 0.22 + wave * 0.18,
      tuck: 0.08 + wave * 0.1,
      jitter: 0.1
    };
  }

  const cycle = 1.3;
  const phase = (seconds % cycle) / cycle;
  const wave = Math.pow(0.5 - 0.5 * Math.cos(phase * Math.PI * 2), 0.82);

  return {
    pull: 0.22 + wave * 0.68,
    swing: Math.sin(seconds * 4.8) * 0.24,
    spread: 0.34 + Math.sin(seconds * 6.1) * 0.18,
    tuck: 0.16 + wave * 0.22,
    jitter: 0.28
  };
}

function renderFigure(config, seconds) {
  const state = motion(config.profile, seconds);
  const centerX = 110;
  const barY = 72;
  const grip = config.profile === "obsession" ? 30 : 26;
  const swayX = state.swing * 18;
  const headX = centerX + swayX;
  const headY = 205 - state.pull * 84 + Math.sin(seconds * 5.5) * state.jitter;
  const headRadius = 15 - state.pull * 1.5;
  const shoulder = { x: headX, y: headY + 20 };
  const hip = { x: headX + state.swing * 3, y: shoulder.y + 56 - state.pull * 12 };
  const handL = { x: centerX - grip, y: barY };
  const handR = { x: centerX + grip, y: barY };
  const elbowLift = 18 + state.pull * 18;

  const elbowL = {
    x: lerp(shoulder.x, handL.x, 0.56) - 17 - state.pull * 6,
    y: lerp(shoulder.y, handL.y, 0.52) - elbowLift
  };
  const elbowR = {
    x: lerp(shoulder.x, handR.x, 0.56) + 17 + state.pull * 6,
    y: lerp(shoulder.y, handR.y, 0.52) - elbowLift
  };

  const legSpread = 12 + state.spread * 18;
  const kneeLift = state.tuck * 24;
  const kneeL = {
    x: hip.x - legSpread,
    y: hip.y + 38 - kneeLift
  };
  const kneeR = {
    x: hip.x + legSpread,
    y: hip.y + 38 - kneeLift
  };
  const footDrop = 40 - state.tuck * 18;
  const footL = {
    x: hip.x - 7 - legSpread * 0.36 + state.swing * 4,
    y: kneeL.y + footDrop
  };
  const footR = {
    x: hip.x + 7 + legSpread * 0.36 + state.swing * 4,
    y: kneeR.y + footDrop
  };

  config.parts.head.setAttribute("cx", headX.toFixed(2));
  config.parts.head.setAttribute("cy", headY.toFixed(2));
  config.parts.head.setAttribute("r", headRadius.toFixed(2));

  setLine(config.parts.upperArmL, shoulder, elbowL);
  setLine(config.parts.lowerArmL, elbowL, handL);
  setLine(config.parts.upperArmR, shoulder, elbowR);
  setLine(config.parts.lowerArmR, elbowR, handR);
  setLine(config.parts.torso, shoulder, hip);
  setLine(config.parts.thighL, hip, kneeL);
  setLine(config.parts.shinL, kneeL, footL);
  setLine(config.parts.thighR, hip, kneeR);
  setLine(config.parts.shinR, kneeR, footR);

  config.panel.style.setProperty("--meter", clamp(0.24 + state.pull * 0.74, 0.24, 1).toFixed(3));
}

function animate(now) {
  const seconds = prefersReducedMotion ? 0 : now / 1000;
  panels.forEach((panel, index) => {
    renderFigure(panel, seconds + index * 0.55);
  });

  if (!prefersReducedMotion) {
    window.requestAnimationFrame(animate);
  }
}

if (!prefersReducedMotion) {
  window.requestAnimationFrame(animate);
} else {
  animate(0);
}
