const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 250;

let t = 0;

// Draw stickman
function drawStickman(x, y, offset) {
  ctx.strokeStyle = "#00ff41";
  ctx.lineWidth = 3;

  // head
  ctx.beginPath();
  ctx.arc(x, y - 40 + offset, 8, 0, Math.PI * 2);
  ctx.fillStyle = "#00ff41";
  ctx.fill();

  // body
  ctx.beginPath();
  ctx.moveTo(x, y - 32 + offset);
  ctx.lineTo(x, y + offset);
  ctx.stroke();

  // arms (animated)
  ctx.beginPath();
  ctx.moveTo(x, y - 20 + offset);
  ctx.lineTo(x - 20, y - 40 + offset + Math.sin(t) * 10);
  ctx.moveTo(x, y - 20 + offset);
  ctx.lineTo(x + 20, y - 40 + offset + Math.sin(t) * 10);
  ctx.stroke();

  // legs
  ctx.beginPath();
  ctx.moveTo(x, y + offset);
  ctx.lineTo(x - 15, y + 30 + offset);
  ctx.moveTo(x, y + offset);
  ctx.lineTo(x + 15, y + 30 + offset);
  ctx.stroke();
}

// Draw pull-up bar
function drawBar(x) {
  ctx.strokeStyle = "#00ff41";
  ctx.lineWidth = 4;

  ctx.beginPath();
  ctx.moveTo(x - 40, 40);
  ctx.lineTo(x + 40, 40);
  ctx.stroke();
}

// Draw text
function drawText(text, x) {
  ctx.fillStyle = "#00ff41";
  ctx.font = "14px monospace";
  ctx.textAlign = "center";
  ctx.fillText(text, x, 230);
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  t += 0.05;

  // Stage 1: Motivation (no movement)
  drawBar(150);
  drawStickman(150, 150, 0);
  drawText("MOTIVATION", 150);

  // Stage 2: Discipline (slow)
  drawBar(450);
  drawStickman(450, 140, Math.sin(t) * 20);
  drawText("DISCIPLINE", 450);

  // Stage 3: Obsession (fast)
  drawBar(750);
  drawStickman(750, 140, Math.sin(t * 2) * 25);
  drawText("OBSESSION", 750);

  requestAnimationFrame(animate);
}

animate();
