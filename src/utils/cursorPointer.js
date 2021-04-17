export const cursorEffect = () => {
  /*  CURSOR POINTER
      =============================== */
      let innerCursor = document.querySelector(".inner-cursor");
      innerCursor?.classList.remove("grow");
  
      document.addEventListener("mousemove", moveCursor);
      
      function moveCursor(e) {
        let x = e.clientX;
        let y = e.clientY;
      
        innerCursor.style.left = `${x}px`;
        innerCursor.style.top = `${y}px`;
      }
      
      const lang = document?.querySelectorAll(".blog-section");
      const lang2 = document?.querySelectorAll(".icon");
      const lang3 = document?.querySelectorAll(".lang-icon");
      const lang4 = document?.querySelectorAll(".logo");
      const lang5 = document?.querySelectorAll(".portf-container");
      const lang6 = document?.querySelectorAll(".nameSpan");
      const lang7 = document?.querySelectorAll(".icon-footer");
      const lang8 = document?.querySelectorAll(".email");
      const lang9 = document?.querySelectorAll(".menu-email");
      
      const mouseHover = function (el) {
        el.forEach((item) => {
          item.addEventListener("mouseover", () => {
            innerCursor?.classList.add("grow");
          });
          item.addEventListener("mouseleave", () => {
            innerCursor?.classList.remove("grow");
          });
        });
      };
      
      mouseHover(lang);
      mouseHover(lang2);
      mouseHover(lang3);
      mouseHover(lang4);
      mouseHover(lang5);
      mouseHover(lang6);
      mouseHover(lang7);
      mouseHover(lang8);
      mouseHover(lang9);
}