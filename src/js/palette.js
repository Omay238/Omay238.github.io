const palette = {
  black: "#000000",
  "dark-red": "#820000",
  "dark-green": "#008200",
  "dark-yellow": "#828200",
  "dark-blue": "#000082",
  "dark-magenta": "#820082",
  "dark-cyan": "#008282",
  "dark-gray": "#828282",
  gray: "#c3c3c3",
  red: "#ff0000",
  green: "#00ff00",
  yellow: "#ffff00",
  blue: "#0000ff",
  magenta: "#ff00ff",
  cyan: "#00ffff",
  white: "#ffffff",
};

const paletteInv = {
  black: "white",
  "dark-red": "cyan",
  "dark-green": "magenta",
  "dark-yellow": "blue",
  "dark-blue": "yellow",
  "dark-magenta": "green",
  "dark-cyan": "red",
  "dark-gray": "gray",
  gray: "dark-gray",
  red: "dark-cyan",
  green: "dark-magenta",
  yellow: "dark-blue",
  blue: "dark-yellow",
  magenta: "dark-green",
  cyan: "dark-red",
  white: "black",
};

for (let i of Object.keys(palette)) {
  document.documentElement.style.setProperty("--" + i, palette[i]);
}
