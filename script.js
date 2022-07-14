"use strict";

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const sections = document.querySelectorAll(".section");
const secBtnAll = document.querySelectorAll(".nav__menu--controls");
const secBtn = document.querySelectorAll(".nav__menu--controls_list");
const secLink = document.querySelectorAll(".nav__link");
const allSection = document.querySelector(".body");

function activeBtn() {
  for (let i = 0; i < secLink.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += "active-btn";
    });
  }

  // section
  allSection.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      secBtnAll.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

activeBtn();

function activeLink() {
  for (let i = 0; i < secLink.length; i++) {
    secLink[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-link");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-link",
        ""
      );
      this.className += "active-link";
    });
  }

  // section
  // allSection.addEventListener('click', function(e){
  //     const id = e.target.dataset.id;
  //     if (id){
  //         secBtnAll.forEach((btn) =>{
  //             btn.classList.remove('active')
  //         })
  //         e.target.classList.add('active');

  //         sections.forEach((section) =>{
  //         section.classList.remove('active')
  //         })
  //         const element = document.getElementById(id);
  //         element.classList.add('active')
  //     }
  // })
}

activeLink();
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__menu--controls_list");
const navClose = document.getElementById("nav-close");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

navClose.addEventListener("click", linkAction);

/*==================== PORTFOLIO PREVIEW POP UPs ====================*/

// const body = document.querySelector(".portfolio");
let previewContainer = document.querySelector(
  ".portfolio__container--previews"
);
let previewModal = document.querySelectorAll(".portfolio__itemPreview");

document
  .querySelectorAll(".portfolio__container--contents .portfolio__item")
  .forEach((portfolio__item) => {
    portfolio__item.addEventListener("click", function () {
      previewContainer.style.display = "flex";
      let name = portfolio__item.getAttribute("data-name");
      previewModal.forEach((portfolio__itemPreview) => {
        let target = portfolio__itemPreview.getAttribute("data-target");
        name === target
          ? portfolio__itemPreview.classList.add("active")
          : portfolio__itemPreview.classList.remove("active");
      });

      if (
        !previewContainer.classList.contains("portfolio__itemPreview.active")
      ) {
        // Disable scroll
        body.style.overflow = "hidden";
      } else {
        // Enable scroll
        body.style.overflow = "auto";
      }
    });
  });

  previewContainer.addEventListener("click", () => {
    // closeModal.classList.remove("active");
    previewContainer.style.display = "none";
    body.style.overflow = "auto";
  });

previewModal.forEach((closeModal) => {
  closeModal.querySelector(".btn-close").onclick = () => {
    closeModal.classList.remove("active");
    previewContainer.style.display = "none";
    body.style.overflow = "auto";
  };
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-sun' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
