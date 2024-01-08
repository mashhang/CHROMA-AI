// undoredo.js
document.addEventListener("DOMContentLoaded", function () {
  const undoButton = document.querySelector(".undo");
  const redoButton = document.querySelector(".redo");

  let colorHistory = [];
  let currentStep = -1;

  undoButton.addEventListener("click", function () {
    if (currentStep > 0) {
      currentStep--;
      restoreColors();
    }
  });

  redoButton.addEventListener("click", function () {
    if (currentStep < colorHistory.length - 1) {
      currentStep++;
      restoreColors();
    }
  });

  function restoreColors() {
    const colorBoxes = document.querySelectorAll(".color-box");

    // Restore colors for color boxes
    colorHistory[currentStep].forEach((color, index) => {
      colorBoxes[index].style.backgroundColor = color;
    });

   // Restore colors for SVG elements
  const svgClasses = {
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
      stroke: [".cls-55", ".cls-56", ".cls-57", ".cls-58", ".cls-59", ".cls-60"],
    },
  };

    Object.entries(svgClasses).forEach(([colorBoxId, classes]) => {
    const colorBoxIndex = Array.from(colorBoxes).findIndex(box => box.id === colorBoxId);

    classes.fill.forEach(classSelector => {
      const elements = document.querySelectorAll(classSelector);
      if (elements) {
        elements.forEach(element => {
          if (element.style.fill !== undefined) {
            element.style.fill = colorHistory[currentStep][colorBoxIndex];
          }
        });
      }
    });

    if (classes.stroke) {
      classes.stroke.forEach(classSelector => {
        const elements = document.querySelectorAll(classSelector);
        if (elements) {
          elements.forEach(element => {
            if (element.style.stroke !== undefined) {
              element.style.stroke = colorHistory[currentStep][colorBoxIndex];
            }
          });
        }
      });
    }
  });
}

  window.undoRedo = {
    addToHistory: function (colors) {
      colorHistory.push([...colors]);
      currentStep = colorHistory.length - 1;
    },
  };
});
