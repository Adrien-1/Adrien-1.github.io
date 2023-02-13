let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("mouseover", () => {
    let containerRect = document
      .querySelector(".container")
      .getBoundingClientRect();
    let submitRect = submitBtn.getBoundingClientRect();
    let offset = submitRect.left - containerRect.left;
    if (offset <= 100) {
      submitBtn.style.transform = "translateX(16.25em)";
    }else {
      submitBtn.style.transform = "translateX(0)";
    }
});
