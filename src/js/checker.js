const checker = `<svg width="2" height="2" viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0 L1 0 L1 1 L0 1 Z" style="fill:${palette["gray"]};stroke:none;" />
  <path d="M1 0 L2 0 L2 1 L1 1 Z" style="fill:${palette["white"]};stroke:none;" />
  <path d="M0 1 L1 1 L1 2 L0 2 Z" style="fill:${palette["white"]};stroke:none;" />
  <path d="M1 1 L2 1 L2 2 L1 2 Z" style="fill:${palette["gray"]};stroke:none;" />
</svg>`;

const base64 = btoa(unescape(encodeURIComponent(checker)));
const dataUrl = `url("data:image/svg+xml;base64,${base64}")`;

const style = document.createElement("style");
style.textContent = `.in-checker {
  background-image: ${dataUrl};
}`;
document.head.appendChild(style);
