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
  var labelElement = document.querySelector(
    '.label[data-label="' + label + '"]'
  );
  if (labelElement) {
    labelElement.style.display = "block";
  }
}

function hideLabel() {
  var labels = document.querySelectorAll(".label");
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
  label.style.opacity = 1;

  // Reset to the original text after 1 second
  setTimeout(() => {
    label.style.opacity = 1;
    setTimeout(() => {
      label.innerText = labelText;
    }, 500);
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  const labels = document.querySelectorAll(".label");

  labels.forEach((label) => {
    label.addEventListener("click", handleLabelClick);
  });
});
