window.addEventListener("load", () => {
  for (let el of document.getElementsByClassName("start-tab")) {
    if (el.id == "shutdown") {
      el.addEventListener("click", () => {
        window.close();
      });
    } else {
      el.addEventListener("click", () => {
        createWindow(
          "/static/img/icon.png",
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
