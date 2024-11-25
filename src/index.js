import "./styles.css";

const menuCarousel = (() => {
  const IMG_NUM = 5;
  const IMG_WIDTH = 656; //pixels

  const carousel = document.querySelector(".carousel-frame");
  const carousel_left = document.querySelector(".carousel-left");
  const carousel_right = document.querySelector(".carousel-right");

  let index = 0;
  let imgIndex = [];
  let btn_nav = [];
  var autoScroll = setInterval(scrollRight, 5000);

  carousel_left.addEventListener("click", () => {
    scrollLeft();
    resetAuto();
  });
  carousel_right.addEventListener("click", () => {
    scrollRight();
    resetAuto();
  }); 

  function scrollLeft() {
    if (index === 0) {
      index = IMG_NUM - 1;
      carousel.scrollTo({
        left: imgIndex[index],
        behavior: "smooth",
      });
      activeNav(index);
    } else {
      index--;
      carousel.scrollTo({
        left: imgIndex[index],
        behavior: "smooth",
      });
      activeNav(index);
    }
  }

  function scrollRight() {
    if (index === IMG_NUM - 1) {
      index = 0;
      carousel.scrollTo({
        left: imgIndex[index],
        behavior: "smooth"
      });
      activeNav(index);
    } else {
      index++;
      carousel.scrollTo({
        left: imgIndex[index],
        behavior: "smooth"
      });
      activeNav(index);
    }
  }

  function circleNavigation() {
    for (let i = 0; i < IMG_NUM; i++) {
      imgIndex[i] = IMG_WIDTH * i;
      btn_nav[i] = document.getElementById(`nav${i}`);
      btn_nav[i].addEventListener("click", () => {
        carousel.scrollTo({
          left: imgIndex[i],
          behavior: "smooth",
        });
        activeNav(i);
        index = i;
        resetAuto();
      });
    }
  }

  function activeNav(index) {
    btn_nav.forEach((btn) => btn.setAttribute("class", "circle-nav"));
    btn_nav[index].setAttribute("class", "circle-nav nav-active");
  }

  function resetAuto(){
    clearInterval(autoScroll);
    autoScroll = setInterval(scrollRight, 5000);
  }

  circleNavigation();
  activeNav(0);
  resetAuto();
})();
