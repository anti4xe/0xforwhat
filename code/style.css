:root {
  --bg: #040404;
  --panel: rgba(10, 10, 10, 0.9);
  --panel-border: rgba(255, 255, 255, 0.08);
  --text: #f1f1f1;
  --muted: rgba(241, 241, 241, 0.68);
  --line: rgba(255, 255, 255, 0.24);
  --figure: #f6f6f6;
  --glow: rgba(255, 255, 255, 0.18);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
  background:
    radial-gradient(circle at 50% 18%, rgba(255, 255, 255, 0.12), transparent 16rem),
    radial-gradient(circle at 12% 78%, rgba(255, 255, 255, 0.08), transparent 24rem),
    radial-gradient(circle at 88% 80%, rgba(255, 255, 255, 0.05), transparent 22rem),
    #040404;
  color: var(--text);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

body {
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 24%, transparent 76%, rgba(255, 255, 255, 0.02)),
    repeating-linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.02) 0,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px,
      transparent 8px
    );
  mix-blend-mode: screen;
  opacity: 0.35;
  pointer-events: none;
}

.frame-glow {
  position: fixed;
  top: 8vh;
  left: 50%;
  width: 1.5rem;
  height: 4.25rem;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.04));
  filter: blur(1px);
  transform: translateX(-50%) rotate(12deg);
  opacity: 0.9;
  animation: drift 7.8s ease-in-out infinite alternate;
  pointer-events: none;
}

.page {
  width: min(1180px, calc(100vw - 2rem));
  margin: 0 auto;
  padding: clamp(2rem, 4vw, 3rem) 0 3rem;
}

.intro {
  max-width: 32rem;
  margin: 0 auto clamp(1.25rem, 3vw, 2rem);
  text-align: center;
}

.intro__kicker {
  margin: 0 0 0.75rem;
  color: var(--muted);
  font-size: 0.9rem;
  letter-spacing: 0.35rem;
  text-transform: uppercase;
}

.intro h1 {
  margin: 0;
  font-size: clamp(1.9rem, 5vw, 3.6rem);
  line-height: 0.95;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
}

.intro__lede {
  margin: 0.85rem auto 0;
  max-width: 28rem;
  color: var(--muted);
  font-family: "Trebuchet MS", "Segoe UI", sans-serif;
  font-size: clamp(0.96rem, 2.1vw, 1.05rem);
  line-height: 1.45;
}

.comparison {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
}

.panel {
  --accent-strength: 0.45;
  position: relative;
  padding: 1.15rem;
  border: 1px solid var(--panel-border);
  border-radius: 1.5rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0)),
    var(--panel);
  box-shadow:
    0 1.25rem 2.8rem rgba(0, 0, 0, 0.42),
    inset 0 0 0 1px rgba(255, 255, 255, 0.03);
  overflow: hidden;
}

.panel::before {
  content: "";
  position: absolute;
  inset: auto -15% -25% -15%;
  height: 55%;
  background: radial-gradient(circle at 50% 20%, rgba(255, 255, 255, calc(var(--meter, 0.3) * 0.18)), transparent 62%);
  pointer-events: none;
}

.panel h2 {
  display: inline-block;
  margin: 0 0 0.85rem;
  padding: 0.45rem 0.7rem 0.35rem;
  background: rgba(0, 0, 0, 0.78);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04);
  font-size: clamp(1.5rem, 4vw, 2.8rem);
  letter-spacing: 0.12rem;
  line-height: 0.96;
}

.stage {
  position: relative;
  aspect-ratio: 11 / 16;
  border-radius: 1rem;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.002)),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02), transparent 24%, transparent 76%, rgba(255, 255, 255, 0.02));
}

.stage::before,
.stage::after {
  content: "";
  position: absolute;
  background: rgba(255, 255, 255, 0.03);
}

.stage::before {
  inset: 0;
  background:
    linear-gradient(90deg, transparent 0, transparent calc(50% - 1px), rgba(255, 255, 255, 0.025) calc(50% - 1px), rgba(255, 255, 255, 0.025) calc(50% + 1px), transparent calc(50% + 1px), transparent 100%);
}

.stage::after {
  left: 0;
  right: 0;
  bottom: 14%;
  height: 1px;
}

.rig {
  display: block;
  width: 100%;
  height: 100%;
}

.rig__post,
.rig__bar {
  stroke: rgba(255, 255, 255, 0.2);
  stroke-linecap: round;
}

.rig__post {
  stroke-width: 8;
}

.rig__bar {
  stroke-width: 8.5;
}

.stick line,
.stick circle {
  stroke: var(--figure);
  fill: none;
  stroke-width: 7;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: drop-shadow(0 0 calc(6px + (var(--meter, 0.3) * 8px)) rgba(255, 255, 255, 0.24));
}

.stick circle {
  fill: var(--figure);
}

.panel__caption {
  margin: 1rem 0 0;
  color: var(--muted);
  font-family: "Trebuchet MS", "Segoe UI", sans-serif;
  font-size: 0.98rem;
  line-height: 1.5;
}

.panel--motivation {
  --meter: 0.28;
}

.panel--discipline {
  --meter: 0.5;
}

.panel--obsession {
  --meter: 0.72;
}

@keyframes drift {
  from {
    transform: translateX(-50%) translateY(-0.75rem) rotate(8deg);
    opacity: 0.65;
  }

  to {
    transform: translateX(calc(-50% + 3.5rem)) translateY(1.75rem) rotate(18deg);
    opacity: 1;
  }
}

@media (max-width: 900px) {
  .comparison {
    grid-template-columns: 1fr;
  }

  .page {
    width: min(42rem, calc(100vw - 1.25rem));
    padding-top: 1.4rem;
  }

  .panel h2 {
    font-size: clamp(2rem, 9vw, 3rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .frame-glow {
    animation: none;
  }
}
