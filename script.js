//-------------------typed  JS------------------------------
let typed = new Typed(".typedText", {
  strings: ["Web Developers...", "Apps Developers..."],
  typedSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

//theme Togglr js
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");

moon.addEventListener("click", () => {
  sun.style.display = "inline-block";
  moon.style.display = "none";
  document.querySelector("body").classList.add("nightMood");
  // Remove the nightMood class from the body when switching back to light mode
  document.querySelector("body").classList.remove("lightMOOD");
});

sun.addEventListener("click", () => {
  sun.style.display = "none";
  moon.style.display = "inline-block";
  document.querySelector("body").classList.add("lightMOOD");
  // Remove the lightMOOD class from the body when switching back to dark mode
  document.querySelector("body").classList.remove("nightMood");
});

// projects filter js.................................

let AllTabs = document.querySelectorAll(".tab");
let AllProject = document.querySelectorAll(".project");

const removeActive = () =>
  AllTabs.forEach((tab) => {
    tab.classList.remove("active");
  });

const filterGallery = () =>
  AllTabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      removeActive();
      tab.classList.add("active");
      let fliterName = event.target.getAttribute("data-name");
      AllProject.forEach((projct) => {
        let projectName = projct.getAttribute("data-name");
        if (projectName == fliterName || fliterName == "All") {
          projct.style.display = "block";
        } else {
          projct.style.display = "none";
        }
      });
    });
  });
window.addEventListener("load", filterGallery());

// ------------------------------window scroll----------------

window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  nav.classList.toggle("nav-scroll", window.scrollY > 0);
});
//Nav Active...................
let phoneMenuA = document.querySelectorAll("a");
let navlinkA = document.querySelectorAll(".nav-links li a");
const removeNavActive = () =>
  navlinkA.forEach((link) => {
    link.classList.remove("active");
  });
// add activelink
navlinkA.forEach((link) => {
  link.addEventListener("click", () => {
    removeNavActive();
    link.classList.add("active");
  });
});
const removeMenuActive = () =>
  phoneMenuA.forEach((menu) => {
    menu.classList.remove("active");
  });
// --------------------------Add MenuActive
phoneMenuA.forEach((menu) => {
  menu.addEventListener("click", () => {
    removeMenuActive();
    menu.classList.add("active");
  });
});
// -----------------------NavActive ----------------------------------
