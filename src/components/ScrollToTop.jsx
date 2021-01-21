import React, { useEffect } from 'react'

const ScrollToTop = () => {

  const scroll = () => {
    var scroll = document.querySelector(".scrollTop");
    scroll.classList.toggle("active", window.scrollY > 200);
  }

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    
    return () => {
      window.removeEventListener("scroll", scroll);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scrollTop" onClick={scrollToTop} ></div>
  )
}

export default ScrollToTop;
