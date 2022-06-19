const menuLinks = document.querySelectorAll(".nav__list-item");
const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".nav__list");
const header = document.querySelector(".header-all");
//IntroAnimation
const titleMain = document.querySelector(".home__title");
const imgMain = document.querySelector(".home__img ");
const textMain = document.querySelectorAll(".home__text ");
const topTitleMain = document.querySelector(".home__top-title");
const headerMain = document.querySelector(".header-all");
const btnMain = document.querySelector(".home__btn");

const headerHeight = header.offsetHeight;

// code to fix the header up top
const fixHeader = () => {
  header.classList.toggle("nav--fixed", window.scrollY > 0);
};

//event listened to apply fixHeader on start
window.addEventListener("scroll", fixHeader);

//GLIDER CAROUSEL

window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    dots: "#dots",
    draggable: true,
    itemWidth: 100,
    slidesToScroll: 1,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToScroll: 1,
          itemWidth: 500,
          slidesToShow: 3.5,
          exactWidth: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToScroll: 1,
          itemWidth: 400,
          slidesToShow: 2.5,
          exactWidth: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
          arrows: false,
          scrollLock: true,
          itemWidth: 100,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
          arrows: false,
          scrollLock: true,
          itemWidth: 100,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
          arrows: false,
          scrollLock: true,
          itemWidth: 50,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
          arrows: false,
          scrollLock: true,
          itemWidth: 25,
        },
      },
    ],
  });
});

//responsive links appear
const linksAppear = function () {
  const navLinks = menuLinks;
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
};

//responsive animation
const navSlide = () => {
  menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("menu-active");
    linksAppear();
    menuBtn.classList.toggle("toggle");
  });
};

// let mainAll = document.querySelector("main");

// mainAll.addEventListener("click", (e) => {
//   console.log(e.target.className);
//   if (
//     !e.target.classList.contains("menu-active")
//     // &&
//     // e.target.className !== "par-menu"
//   ) {
//     sideMenu.classList.remove("menu-active");
//     menuBtn.classList.remove("toggle");

//     if (window.innerWidth < 486) {
//       linksAppear();
//     }
//   }
// });

navSlide();

//COUNTDOWN TIMER

function updateTimer() {
  let future = Date.parse("Apr 12, 2022 00:00:00");
  let now = new Date();
  let diff = future - now;

  let sec = Math.floor(diff / 1000);
  let mins = Math.floor(diff / (1000 * 60));
  let hours = Math.floor(diff / (1000 * 60 * 60));
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));

  let d = days;
  let h = hours - days * 24;
  let m = mins - hours * 60;
  let s = sec - mins * 60;

  if (diff < 0) {
    clearInterval(diff);
    document.querySelector(".countdown__days-number").innerText = "0";
    document.querySelector(".countdown__hours-number").innerText = "0";
    document.querySelector(".countdown__minutes-number").innerText = "0";
    document.querySelector(".countdown__seconds-number").innerText = "0";
  } else {
    document.querySelector(".countdown__days-number").innerText = d;
    document.querySelector(".countdown__hours-number").innerText = h;
    document.querySelector(".countdown__minutes-number").innerText = m;
    document.querySelector(".countdown__seconds-number").innerText = s;
  }
}

setInterval(updateTimer, 1000);

//ANIMATIONS

const slideTogether = () => {
  headerMain.classList.remove("header-all-hidden");
  btnMain.classList.remove("home__btn-hidden");
};

const snapInPlace = () => {
  titleMain.classList.remove("home__intro");
  imgMain.classList.remove("skewed-and-hidden");
  textMain.forEach((piece) => {
    piece.classList.remove("skewed-and-hidden");
  });
  topTitleMain.classList.remove("skewed-and-hidden");
  setTimeout(slideTogether, 1000);
};
const titleFadeIn = () => {
  titleMain.classList.remove("home__title-hidden");
};

//get a reference to the animation-wrapper

const animWrapper = document.querySelector(".animation-wrapper");
const loadWrapper = document.querySelector(".animate-once");

//get the 'animationSeen' cookie and store in a variable
const seenAnimation = Cookies.get("animationSeen");

window.addEventListener("DOMContentLoaded", () => {
  //if the 'animationSeen" is undefined
  if (!seenAnimation) {
    //display the loading-wrapper

    window.addEventListener("load", () => {
      titleFadeIn();
      setTimeout(snapInPlace, 2000);
    });
    // set the animationSeen cookie to expire in 5days
    Cookies.set("animationSeen", 1, { expires: 5 });
  } else {
    headerMain.classList.remove("header-all-hidden");
    btnMain.classList.remove("home__btn-hidden");
    titleMain.classList.remove("home__intro");
    titleMain.classList.remove("home__title-hidden");
    imgMain.classList.remove("skewed-and-hidden");
    textMain.forEach((piece) => {
      piece.classList.remove("skewed-and-hidden");
    });
    topTitleMain.classList.remove("skewed-and-hidden");
  }
});

// window.addEventListener("load", () => {
//   homeSection.classList.add("home__loaded");
// });
