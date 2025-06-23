const start = [
  {
    name: "Shut Down",
    icon: "pc",
    code: () => {
      if (confirm("Are you sure you want to exit?")) {
        window.close();
      }
    },
  },
  {},
  {
    name: "Settings",
    icon: "cog",
  },
  {
    name: "Help",
    icon: "help",
  },
  {
    name: "Programs",
    icon: "progs",
    children: [
      {
        name: "Games",
        icon: "joystick",
        children: [
          {
            name: "Minesweeper",
            icon: "mine",
          },
          {
            name: "Solitaire",
            icon: "deck",
          },
        ],
      },
    ],
  },
];
