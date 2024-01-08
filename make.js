document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");
  const templateBoxes = document.querySelectorAll(".template-box");

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      // Reset styles for all categories
      categories.forEach((cat) => {
        cat.style.color = "black";
        cat.style.backgroundColor = "#949494";
      });

      // Hide all template boxes
      templateBoxes.forEach((box) => {
        box.style.display = "none";
      });

      if (category.textContent === "All Designs") {
        categories.forEach((cat) => {
          category.style.color = "white";
          category.style.backgroundColor = "#625f5f";
        });
        templateBoxes.forEach((box) => {
          box.style.display = "inline-block";
        });
      }

      if (category.textContent === "Pattern") {
        category.style.color = "white";
        category.style.backgroundColor = "#625f5f";
        document.getElementById("template1").style.display = "inline-block";
        document.getElementById("template4").style.display = "inline-block";
      }

      if (category.textContent === "Typography") {
        category.style.color = "white";
        category.style.backgroundColor = "#625f5f";
        document.getElementById("template2").style.display = "inline-block";
        document.getElementById("template3").style.display = "inline-block";
      }
    });
  });
});
