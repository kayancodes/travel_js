/*==================== DEBUT SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*==================== FIN SHOW SCROLL UP ====================*/

/*==================== DEBUT SHOW MENU MOBILE =============================================*/
//MENU SHOW Y HIDDEN
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//MENU SHOW
// validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//MENU HIDDEN
//validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    // navMenu.classList.add('close-menu') ---> PAS CA, sinon ne fonctionera qu'une seule fois, apres un seul clik
    navMenu.classList.remove("show-menu");
  });
}
/*==================== FIN SHOW MENU MOBILE ==========================================*/

/*==================== DEBUT REMOVE MENU MOBILE ==========================================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*==================== FIN REMOVE MENU MOBILE ==========================================*/

/*==================== DEBUT ACCORDION COMPETENCES ==========================================*/
const skillsContent = document.getElementsByClassName("competences__content"),
  skillsHeader = document.querySelectorAll(".competences__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "competences__content competences__close";
  }
  if (itemClass === "competences__content competences__close") {
    this.parentNode.className = "competences__content competences__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
/*==================== FIN ACCORDION COMPETENCES ==========================================*/

/*==================== DEBUT QUALIFICATION TAB ==========================================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
/*==================== FIN QUALIFICATION TAB ==========================================*/

/*==================== DEBUT SERVICES MODAL ==========================================*/
const modalViews = document.querySelectorAll(".portfolio__modal"),
  modalBtns = document.querySelectorAll(".portfolio__button-modal"),
  modalCloses = document.querySelectorAll(".portfolio__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

//au click de "view more" apparition de la carte sur fond assombris
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

//au click de la croix la carte sur fond noir disparait et on revient a la page original
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
/*==================== FIN SERVICES MODAL ==========================================*/

/*==================== DEBUT PORTFOLIO SWIPER ==========================================*/
let swiperPortfolio = new Swiper(".swiper-container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*==================== FIN PORTFOLIO SWIPER ==========================================*/

/*==================== DEBUT SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*==================== FIN SCROLL SECTIONS ACTIVE LINK ====================*/
