document.addEventListener("DOMContentLoaded", function () {
  const shuffleButton = document.querySelector(".shuffle");
  const colorBoxes = document.querySelectorAll(".color-box");
  const hexagonMapping = {
    color1: [".hexagon1", ".hexagon7", ".hexagon9"],
    color2: [".hexagon2", ".hexagon6"],
    color3: [".hexagon3", ".hexagon10"],
    color4: [".hexagon4", ".hexagon5", ".hexagon11"],
    color5: [".hexagon8", ".hexagon12"],
  };

  shuffleButton.addEventListener("click", function () {
    shuffleColors(colorBoxes, hexagonMapping);
  });

  function shuffleColors(boxes, mapping) {
    // Convert NodeList to Array for easier manipulation
    const colors = Array.from(boxes);

    // Rearrange the colors using Fisher-Yates shuffle algorithm
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i].style.backgroundColor, colors[j].style.backgroundColor] = [
        colors[j].style.backgroundColor,
        colors[i].style.backgroundColor,
      ];
    }

    // Update the hexagon colors based on the shuffled colors
    colors.forEach((color, index) => {
      const hexagons = mapping[`color${index + 1}`];
      hexagons.forEach((hexagon) => {
        document.querySelector(hexagon).style.backgroundColor =
          color.style.backgroundColor;
      });
    });
  }
});
