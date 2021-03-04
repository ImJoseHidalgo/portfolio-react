import React, { useEffect } from 'react';
import { topObserver } from '../../utils/intersectionObserver';


const About = () => {

  window.scrollTo(0, 0);
  useEffect(() => {
    topObserver();
  }, [])

  return (
    <>
      <div id='top' className='about-demo'>
        <h1>Esta es la pagina Sobre Mi</h1>
      </div>
      <div className='about-demo'>
      <h1>Esta es la pagina Sobre Mi</h1>
      </div>
    </>
  )
}

export default About;
