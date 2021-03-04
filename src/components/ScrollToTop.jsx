import React, { useEffect } from 'react';
import { Scroll } from './ScrollToTop.styles';

const ScrollToTop = () => {

  const scroll = () => {
    const scroll = document.querySelector(".scrollTop");
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
    <Scroll className="scrollTop" onClick={scrollToTop} ></Scroll>
  )
}

export default ScrollToTop;
