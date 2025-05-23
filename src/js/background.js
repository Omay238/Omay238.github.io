let stars = [];

function initBackground() {
  const canvas = document.getElementById("desktop-background");
  canvas.width = 640;
  canvas.height = 480;

  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.floor(Math.random() * 640),
      y: Math.floor(Math.random() * 480),
      size: Math.random() * 1.5 + 0.5,
      twinklePhase: Math.random() * Math.PI * 2,
    });
  }

  updateBackground();
}

function updateBackground() {
  const canvas = document.getElementById("desktop-background");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 640, 480);

  const time = Date.now() * 0.005;

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    star.y += star.size * 0.5;
    if (star.y > 480) {
      star.x = Math.floor(Math.random() * 640);
      star.size = Math.random() * 1.5 + 0.5;
      star.y = -star.size;
      star.twinklePhase = Math.random() * Math.PI * 2;
    }

    const twinkle = 0.5 + 0.5 * Math.sin(time + star.twinklePhase);
    const rawSize = star.size + twinkle;
    const size = Math.max(1, Math.round(rawSize));

    const x = Math.round(star.x - size / 2);
    const y = Math.round(star.y - size / 2);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, size, size);
  }

  requestAnimationFrame(updateBackground);
}

addEventListener("load", initBackground);
