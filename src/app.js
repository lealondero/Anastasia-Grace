const sections = document.querySelectorAll("section");
let index = 0;
let scrolled = false;

document.addEventListener("wheel", (event) => {
  if (!scrolled) {
    scrolled = true;
    let delta = event.wheelDelta;
    console.log(delta);
    if (delta < 0) {
      if (index > 2) {
        return;
      }
      index++;
      console.log(index);
      sections.forEach((section, i) => {
        if (i === index) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    } else {
      if (index < 1) {
        return;
      }
      index--;
      sections.forEach((section, i) => {
        if (i === index) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    scrolled = false;
  }
});
