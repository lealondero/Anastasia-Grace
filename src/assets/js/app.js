let old = document.querySelector(".novels__card:first-of-type");
document.querySelectorAll(".novels__card").forEach((card) => {
  card.addEventListener("click", () => {
    console.log("ok");
    if (old != null && old.classList.contains("open")) {
      old.classList.toggle("open");
    }
    card.classList.toggle("open");
    old = card;
  });
});
