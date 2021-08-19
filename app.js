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
const elements = Array.from(document.querySelectorAll("button"));

let activeIndex = 0;

const updateIndex = (newIndex) => {
  elements[activeIndex].classList.remove("active");
  document.body.style.setProperty("--active-index", newIndex);
  elements[newIndex].classList.add("active");
  activeIndex = newIndex;
};

const registerEvent = (button, index) => {
  button.addEventListener("click", () => updateIndex(index));
};

elements.forEach(registerEvent);
// function openTab(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
// document.getElementById("defaultOpen").click();
