import React from 'react';
import Menu from './ui/Menu/Menu';
import ScrollToTop from './ui/ScrollToTop/ScrollToTop';
import Cursor from './ui/Cursor/Cursor';

const GlobalActions = () => {
  const query = window.matchMedia('(max-width: 768px)');
  // query.addEventListener('change', (change) => {
  //   if (change.matches) {
  //     console.log('You are using a mobile device');
  //     } else {
  //       console.log('You are not using a mobile device');
  //     }
  //   });
  
  return (
    <>
      <Menu />
      {!query.matches && <Cursor />}
      <ScrollToTop /> 
    </>
  )
}

export default GlobalActions;
