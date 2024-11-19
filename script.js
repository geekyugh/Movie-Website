const arrows = document.querySelectorAll("#right");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((right, i) => {
  const movieList = movieLists[i];
  const itemNumber = movieList.querySelectorAll("img").length;
  const itemWidth = 300; // Width of one item in pixels (adjust as necessary)
  let clickCounter = 0;

  right.addEventListener("click", () => {
    // Calculate visible items on the screen
    const visibleItems = Math.floor(window.innerWidth / itemWidth);
    const maxClicks = itemNumber - visibleItems; // Maximum clicks possible without wrapping

    console.log(
      `Screen width: ${window.innerWidth}, Visible items: ${visibleItems}, Max clicks: ${maxClicks}`
    );

    if (clickCounter < maxClicks) {
      clickCounter++;
      const currentTransform = window.getComputedStyle(movieList).transform;

      // Extract current translateX value (fallback to 0 if no transform)
      const currentTranslateX =
        currentTransform !== "none"
          ? parseFloat(currentTransform.split(",")[4])
          : 0;

      console.log(`Current TranslateX: ${currentTranslateX}`);

      // Move the carousel
      movieList.style.transform = `translateX(${
        currentTranslateX - itemWidth
      }px)`;
    } else {
      console.log("No more items to scroll!");
      movieList.style.transform = "translateX(0)";
      clickCounter = 0; // Reset the counter
    }

    console.log(`ClickCounter: ${clickCounter}`);
  });
});

//TOGGLE

const toggle = document.querySelector(".Toggle");
const ball = document.querySelector(".toggleball");
const items = document.querySelectorAll(
  ".container, .movie-list-title, .navbar, .navbar a, .profcss, .proftext, .sidebar, .material-symbols-rounded, .Toggle"
);

toggle.addEventListener("click", () => {
  // Toggle the main toggle and ball classes
  toggle.classList.toggle("active");
  ball.classList.toggle("active");

  // Add 'active' to other items without affecting the ball
  items.forEach((item) => {
    if (!item.classList.contains("toggleball")) {
      item.classList.toggle("active");
    }
  });
});
