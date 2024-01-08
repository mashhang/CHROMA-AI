// function handleMouseOver(event) {
//   const label = event.currentTarget.querySelector(".label");
//   if (label) {
//     label.style.display = "block";
//   }
// }

// function handleMouseOut(event) {
//   const label = event.currentTarget.querySelector(".label");
//   if (label) {
//     label.style.display = "none";
//   }
// }

// function handleLabelClick(event) {
//   const label = event.currentTarget;
//   const labelText = label.innerText;

//   const textArea = document.createElement("textarea");
//   textArea.value = labelText;
//   document.body.appendChild(textArea);
//   textArea.select();
//   document.execCommand("copy");
//   document.body.removeChild(textArea);

//   label.innerText = "COPIED!";
//   label.style.opacity = 1;
//   setTimeout(() => {
//     label.style.opacity = 0;
//     setTimeout(() => {
//       label.innerText = labelText;
//     }, 500);
//   }, 1000);
// }

// const squares = document.querySelectorAll(".square");

// squares.forEach((square) => {
//   square.addEventListener("mouseover", handleMouseOver);
//   square.addEventListener("mouseout", handleMouseOut);

//   const label = square.querySelector(".label");
//   if (label) {
//     labels.forEach((label) => {
//       label.addEventListener("click", handleLabelClick);
//     });
//   }
// });

function showLabel(label, event) {
  // var labelElement = event.currentTarget.nextElementSibling;
  var divClass = event.currentTarget.classList[0]; // Assumes the second class is 'one', 'two', or 'three'
  var labelElement =
    document.querySelector(
      "." + divClass + ' + .label1[data-label="' + label + '"]'
    ) ||
    document.querySelector(
      "." + divClass + ' + .label2[data-label="' + label + '"]'
    ) ||
    document.querySelector(
      "." + divClass + ' + .label3[data-label="' + label + '"]'
    );
  if (labelElement) {
    labelElement.style.display = "block";
  }
}

function hideLabel() {
  var labels = document.querySelectorAll(".label1, .label2, .label3");
  labels.forEach(function (label) {
    label.style.display = "none";
  });
}

function handleLabelClick(event) {
  const label = event.currentTarget;
  const labelText = label.innerText;

  // Copy the label text to the clipboard
  const textArea = document.createElement("textarea");
  textArea.value = labelText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  // Display "COPIED!" temporarily
  label.innerText = "COPIED!";

  // Reset to the original text after 1 second
  setTimeout(() => {
    label.innerText = labelText;
    // label.style.opacity = 0;
    // setTimeout(() => {
    //   label.innerText = labelText;
    //   label.style.opacity = 1;
    // }, 500);
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  const labelClasses = ["label1", "label2", "label3"];

  labelClasses.forEach((classSuffix) => {
    const labels = document.querySelectorAll("." + classSuffix);
    labels.forEach((label) => {
      label.addEventListener("click", handleLabelClick);
    });
  });
});
