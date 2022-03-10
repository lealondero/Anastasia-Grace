let old = document.querySelector(".card:first-of-type");
console.log(old);
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    console.log("ok");
    if (old != null && old.classList.contains("open")) {
      old.classList.toggle("open");
    }
    card.classList.toggle("open");
    old = card;
  });
});
