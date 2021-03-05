import React, { useEffect } from 'react';
import { topObserver } from '../../../utils/intersectionObserver';
import { NotFound } from './404Screen.styles';
// import Cursor from '../components/Cursor';
// import Menu from '../components/Menu';
// import ScrollToTop from '../components/ScrollToTop';

const Page404 = () => {

  window.scrollTo(0, 0);
  useEffect(() => {
    topObserver();
  }, [])

  
  return (
    <NotFound>
      <h1 id='top'>Esta Pagina no existe pa!</h1>
      <h1>Esta Pagina no existe pa!</h1>
    </NotFound>
  )
}

export default Page404;
