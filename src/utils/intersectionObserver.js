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

/* PORTFOLIO FOCUS
=============================== */

// const menuPortfolio = document.querySelector(".menu-items");
// const portfolioSection = document.querySelector(".sect-3");

// const portfolioOptions = {
//   threshold: 0,
// };

// const portfolioObserver = new IntersectionObserver(function (
//   entries,
//   portfolioObserver
// ) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       menuPortfolio.classList.add("portfolio-focus");
//     } else {
//       menuPortfolio.classList.remove("portfolio-focus");
//     }
//   });
// },
// portfolioOptions);
// portfolioObserver.observe(portfolioSection);

/* FOOTER MENU - CONTACT FOCUS
  =============================== */

// const footerMenu = document.querySelector(".menu-footer");
// const menuContact = document.querySelector(".menu-items");
// const contactSection = document.querySelector(".sect-4");

// const contactOptions = {
//   threshold: 0,
// };

// const contactObserver = new IntersectionObserver(function (
//   entries,
//   contactObserver
// ) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       footerMenu.classList.add("active");
//       footerMenu.classList.remove("active-menu");
//       menuContact.classList.add("contact-focus");
//       menuPortfolio.classList.remove("portfolio-focus");
//     } else {
//       menuContact.classList.remove("contact-focus");
//       footerMenu.classList.remove("active");
//       menuPortfolio.classList.add("portfolio-focus");
//     }
//   });
// },
// contactOptions);
// contactObserver.observe(contactSection);

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
      menuButton.classList.add("light-active");
      // menuPortfolio.classList.remove("portfolio-focus");
    } else {
      menuButton.classList.remove("light-active");
      // menuPortfolio.classList.add("portfolio-focus");
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
// const menuContact = document.querySelector(".menu-items");
// const menuPortfolio = document.querySelector(".menu-items");

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
      // menuContact.classList.add("contact-focus");
      // menuPortfolio.classList.remove("portfolio-focus");
    } else {
      footerMenu.classList.remove("active");
      footerMenu.classList.add("active-menu");
      // menuContact.classList.remove("contact-focus");
      // menuPortfolio.classList.add("portfolio-focus");
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
  } else {
    console.log('no encontre el documento');
  }
}