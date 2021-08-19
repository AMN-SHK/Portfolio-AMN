//Using Camel Case for Variables & Kebab Case for ID's and Classes
//Eg: navSlide

//Navbar Animation

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    //Animate burgeer
    burger.classList.toggle("toggle");
  });
};

navSlide();

// Tab Animation
const elements = Array.from(document.getElementsByClassName("tabbutton"));
const tabContent = Array.from(document.getElementsByClassName("tabcontent"));
let activeIndex = 0;

const updateIndex = (newIndex) => {
  elements[activeIndex].classList.remove("active"); //removes active class
  document.body.style.setProperty("--active-index", newIndex);
  elements[newIndex].classList.add("active");
  activeIndex = newIndex;
};
const registerEvent = (tabbutton, index) => {
  tabbutton.addEventListener("click", () => updateIndex(index));
};
elements.forEach(registerEvent);
let activeIndexofContent = 0;
const updateIndexofContent = (newIndexofContent) => {
  tabContent[activeIndexofContent].classList.remove("active"); //removes active class
  document.body.style.setProperty("--active-index", newIndexofContent);
  tabContent[newIndexofContent].classList.add("active");
  activeIndexofContent = newIndexofContent;
};
const registerEventofContent = (tabbutton, index) => {
  tabbutton.addEventListener("click", () => updateIndexofContent(index));
};
elements.forEach(registerEventofContent);
