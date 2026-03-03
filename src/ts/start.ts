window.addEventListener("load", () => {
  // @ts-ignore
  document.getElementById("start-button").addEventListener("click", () => {
    // @ts-ignore
    if (document.getElementById("start-menu").style.display == "none") {
      // @ts-ignore
      document.getElementById("start-menu").style.display = "block";
    } else {
      // @ts-ignore
      document.getElementById("start-menu").style.display = "none";
    }
  });

  for (let el of document.getElementsByClassName("start-tab")) {
    if (el.id == "shutdown") {
      el.addEventListener("click", () => {
        window.close();
      });
    } else {
      el.addEventListener("click", () => {
        createWindow(
          "/img/icon.png",
          // @ts-ignore
          el.lastElementChild.textContent,
          // @ts-ignore
          el.lastElementChild.textContent.toLowerCase(),
          parseInt(el.getAttribute("data-width") || "200"),
          parseInt(el.getAttribute("data-height") || "100"),
          el.getAttribute("data-src") || "",
          true,
        );
      });
    }
  }
});
