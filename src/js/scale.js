// this is far from ideal, but i ain't doin allat.

function scaleContent() {
  const baseWidth = 640;
  const baseHeight = 480;

  const scaleX = window.innerWidth / baseWidth;
  const scaleY = window.innerHeight / baseHeight;
  const scale = Math.min(scaleX, scaleY);

  const content = document.querySelector("body");
  content.style.transform = `scale(${scale})`;

  const scaledWidth = baseWidth * scale;
  const marginLeft = (window.innerWidth - scaledWidth) / 2;

  content.style.position = "absolute";
  content.style.left = `${marginLeft}px`;
  content.style.top = `0px`;
}
window.addEventListener("resize", scaleContent);
window.addEventListener("load", scaleContent);
