const query = window.matchMedia('(max-width: 768px)');

export const homeObserver = () => {

  /* LANDING FOCUS
=============================== */
const main = document.querySelector(".main");
const mainContainer = document.querySelector(".main-container");
const sectionOne = document.querySelector(".sect-1");

const sectionOneOptions = {
  threshold: 0.9,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      main.classList.add("active");
      mainContainer.classList.add("active");
    } else {
      main.classList.remove("active");
      mainContainer.classList.remove("active");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);

/* LIGHT BUTTON MENU
      =============================== */
const menuButton = document.querySelector(".menu-button");
const blogSection = document.querySelector(".blog-section");

const menuOptions = {
  threshold: 1,
};

const menuObserver = new IntersectionObserver(function (entries, menuObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      {!query.matches && 
      menuButton.classList.add("light-active");}
    } else {
      {!query.matches && 
      menuButton.classList.remove("light-active");}
    }
  });
}, menuOptions);
menuObserver.observe(blogSection);
}

export const footerObserver = () => {
/* FOOTER MENU - CONTACT FOCUS
  =============================== */

const footerMenu = document.querySelector(".menu-footer");
const contactSection = document.querySelector(".sect-4");

const contactOptions = {
  threshold: 0,
};

const contactObserver = new IntersectionObserver(function (
  entries,
  contactObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      footerMenu.classList.add("active");
      footerMenu.classList.remove("active-menu");
    } else {
      footerMenu.classList.remove("active");
      footerMenu.classList.add("active-menu");
    }
  });
},
contactOptions);
contactObserver.observe(contactSection);
}


export const topObserver = () => {
  const main = document.querySelector(".main");
  const mainContainer = document.querySelector(".main-container");
  const sectionOne = document.querySelector('#top');
  
  if (sectionOne) {
  const sectionOneOptions = {
    threshold: 0.9,
  };

  const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        {!query.matches && 
        main.classList.add("active");
        mainContainer.classList.add("active");}
      } else {
        {!query.matches && 
        main.classList.remove("active");
        mainContainer.classList.remove("active");}
      }
    });
  },
  sectionOneOptions);
  sectionOneObserver.observe(sectionOne);
  } else {
    console.log('no encontre el documento');
  }
}