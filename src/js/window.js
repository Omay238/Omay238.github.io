function createWindow(title, icon, isResizable) {
  let root = document.createElement("div");
  root.classList.add("window", "out");
  root.id = title
    .toLowerCase()
    .replace(/[^a-z0-9\-_:.]/g, "_")
    .replace(/^[^a-z]+/, "");

  let header = document.createElement("header");
  header.classList.add("window-header");

  let iconImg = document.createElement("img");
  iconImg.src = icon;
  iconImg.classList.add("window-icon");
  header.appendChild(iconImg);

  let titleP = document.createElement("p");
  titleP.classList.add("window-title");
  titleP.textContent = title;
  header.appendChild(titleP);

  let minimizeBtn = document.createElement("img");
  minimizeBtn.src = "/image/minimize.png";
  minimizeBtn.classList.add("out-button");
  header.appendChild(minimizeBtn);

  if (isResizable) {
    let maximizeBtn = document.createElement("img");
    maximizeBtn.src = "/image/maximize.png";
    maximizeBtn.classList.add("out-button");
    maximizeBtn.style.marginRight = "2px";

    maximizeBtn.onclick = () => {
      if (root.getAttribute("data-max") === "true") {
        root.style.width = root.getAttribute("data-width");
        root.style.height = root.getAttribute("data-height");
        root.style.left = root.getAttribute("data-left");
        root.style.top = root.getAttribute("data-top");
        root.setAttribute("data-max", "false");
      } else {
        root.setAttribute("data-width", root.style.width);
        root.setAttribute("data-height", root.style.height);
        root.setAttribute("data-left", root.style.left);
        root.setAttribute("data-top", root.style.top);
        root.setAttribute("data-max", "true");
        root.style.width = "632px";
        root.style.height = "452px";
        root.style.left = "-2px";
        root.style.top = "-4px";
      }
    };

    header.appendChild(maximizeBtn);
  }

  let closeBtn = document.createElement("img");
  closeBtn.src = "/image/close.png";
  closeBtn.classList.add("out-button");

  closeBtn.onclick = () => {
    root.remove();
  };

  header.appendChild(closeBtn);

  root.appendChild(header);

  document.body.appendChild(root);

  dragElement(root);
}

function dragElement(el) {
  let startX = 0,
    startY = 0,
    initialLeft = 0,
    initialTop = 0;

  const header = document.getElementById(el.id + "-header");
  const dragTarget = header || el;

  dragTarget.onmousedown = (e) => {
    e.preventDefault();
    startX = e.clientX / globalScale;
    startY = e.clientY / globalScale;

    initialLeft = parseFloat(getComputedStyle(el).left) || 0;
    initialTop = parseFloat(getComputedStyle(el).top) || 0;

    document.onmousemove = (e) => {
      const dx = e.clientX / globalScale - startX;
      const dy = e.clientY / globalScale - startY;

      el.style.left = initialLeft + dx + "px";
      el.style.top = initialTop + dy + "px";
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
}

window.onload = () => {
  createWindow("My Computer", "/image/icon.png", true);
};
