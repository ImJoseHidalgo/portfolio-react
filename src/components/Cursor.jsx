import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cursorEffect } from '../utils/cursorPointer';

const Cursor = () => {
  let {pathname} = useLocation();
  
    useEffect(() => {
      cursorEffect();
    }, [pathname]);

  return (
    <>
      <div className="inner-cursor"></div>
      <div className="outer-cursor"></div>
    </>
  )
}

export default Cursor;
