const arrows = document.querySelectorAll(`#right`);
const MovieLists = document.querySelectorAll(`.movie-list`);

arrows.forEach((right, index) => {
  right.addEventListener(`click`, () => {
    MovieLists[index].style.transform = `translateX(-100px)`;
  });
});
