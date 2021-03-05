import React from 'react';
import Menu from './ui/Menu/Menu';
import ScrollToTop from './ui/ScrollToTop/ScrollToTop';
import Cursor from './ui/Cursor/Cursor';

const GlobalActions = () => {
  return (
    <>
      <Menu />
      <Cursor />
      <ScrollToTop /> 
    </>
  )
}

export default GlobalActions;
