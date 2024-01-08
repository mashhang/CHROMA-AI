// generate.js
document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.querySelector(".generate");

  generateButton.addEventListener("click", function () {
    // const colorSVGFillMapping = {
    //   color1: [".cls-61", ".cls-62", ".t2-cls-1", ".t2-cls-6"],
    //   color2: [".cls-7", ".t2-cls-2", ".t2-cls-7"],
    //   color3: [".t2-cls-3"],
    //   color4: [".cls-9", ".t2-cls-4"],
    //   color5: [".cls-41", ".cls-42", ".cls-51", ".cls-52", ".cls-53", ".cls-54", ".cls-8", ".t2-cls-5"]
    // };
const colorSVGFillMapping = {
  color1: {
    fill: [".cls-61", ".cls-62", ".t2-cls-1", ".t2-cls-6"],
  },
  color2: {
    fill: [".cls-7", ".t2-cls-2", ".t2-cls-7"],
    stroke: [".cls-1", ".cls-3"],
  },
  color3: {
    fill: [".t2-cls-3"],
    stroke: [".cls-2"],
  },
  color4: {
    fill: [".cls-9", ".t2-cls-4"],
  },
  color5: {
    fill: [".cls-41", ".cls-42", ".cls-51", ".cls-52", ".cls-53", ".cls-54", ".cls-8", ".t2-cls-5"],
  }
    };
    
    const randomColors = generateRandomColors();

    // Change background-color for color-box elements
    Array.from(document.querySelectorAll(".color-box")).forEach(function (box) {
      const colorBoxId = box.id;
      box.style.backgroundColor = randomColors[colorBoxId];
    });

    // Change fill for SVG elements
    changeSvgColors(colorSVGFillMapping, randomColors);

    // Add generated colors to the history
    window.undoRedo.addToHistory(Array.from(document.querySelectorAll(".color-box")).map((box) => box.style.backgroundColor));
  });


function changeSvgColors(mapping, colors) {
  for (const colorBoxId in mapping) {
    const colorData = mapping[colorBoxId];
    const fillClasses = colorData.fill;
    const strokeClasses = colorData.stroke;

    fillClasses.forEach(function (fillClass) {
      const fillElements = document.querySelectorAll(fillClass);
      if (fillElements) {
        fillElements.forEach(function (fillElement) {
          fillElement.style.fill = colors[colorBoxId];
        });
      }
    });

    if (strokeClasses) {
      strokeClasses.forEach(function (strokeClass) {
        const strokeElements = document.querySelectorAll(strokeClass);
        if (strokeElements) {
          strokeElements.forEach(function (strokeElement) {
            strokeElement.style.stroke = colors[colorBoxId];
          });
        }
      });
    }
  }
}



  function generateRandomColors() {
    const colors = {};
    for (let i = 0; i < 5; i++) {
      const colorId = `color${i + 1}`;
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      colors[colorId] = randomColor;
    }
    return colors;
  }
});
