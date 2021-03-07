export const menuActions = () => {
  function menuActions() {
    document.querySelector(".menu")?.classList.toggle("active");
    document.querySelector(".menu-background")?.classList.toggle("active");
    document.querySelector(".menu-button")?.classList.toggle("active");
    document.querySelector(".header-container")?.classList.toggle("active");
    document.querySelector(".header")?.classList.toggle("active");
    document.querySelector(".bottom")?.classList.toggle("active");
    document.querySelector(".right")?.classList.toggle("active");
    document.querySelector(".left")?.classList.toggle("active");
    document.querySelector(".menu-container")?.classList.toggle("active");
    document.querySelector(".menu-footer")?.classList.toggle("active-menu");
    // Responsive
    document.querySelector(".languages")?.classList.toggle("active");
    document.querySelector(".logo")?.classList.toggle("active");
    document.querySelector(".name-container")?.classList.toggle("active");
    document.querySelector(".portf-container")?.classList.toggle("active");
  }
  const clickMenu = function (e) {
    document.querySelector(e).addEventListener("click", () => {
      menuActions();
    });
  };
  clickMenu(".menu-button");
  clickMenu(".menu-home");
  clickMenu(".menu-blog");
  clickMenu(".menu-portfolio");
  clickMenu(".menu-about");
  clickMenu(".menu-contact");
  
  // document.querySelector(".sect-1")?.addEventListener("click", () => {
  //   document.documentElement.classList.toggle("color");
  // });
  
  
}
