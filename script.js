const arrows = document.querySelectorAll(`#right`);
const MovieLists = document.querySelectorAll(`.movie-list`);

arrows.forEach((right, index) => {
  right.addEventListener(`click`, () => {
    MovieLists[index].style.transform = `translateX(-100px)`;
  });
});

const ball = document.querySelector(".toggleball");
const items = document.querySelectorAll(
  ".container, .movie-list-title, .navbar, .navbar a, .profcss, .proftext,  .sidebar, .material-symbols-rounded, .Toggle, .toggleball"
);

ball.addEventListener("click", () => {
  Array.from(items).forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
