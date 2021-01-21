import React, { useEffect } from 'react';
import { cursorEffect } from '../utils/cursorPointer';

const Cursor = () => {
    useEffect(() => {
      cursorEffect();
    }, []);

  return (
    <>
      <div className="inner-cursor"></div>
      <div className="outer-cursor"></div>
    </>
  )
}

export default Cursor;
