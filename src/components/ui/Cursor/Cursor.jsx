import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cursorEffect } from '../../../utils/cursorPointer';
import { InnerCursor, OuterCursor } from './Cursor.styles';

const Cursor = () => {
  let {pathname} = useLocation();
  
    useEffect(() => {
      cursorEffect();
    }, [pathname]);

  return (
    <>
      <InnerCursor className="inner-cursor"></InnerCursor>
      <OuterCursor className="outer-cursor"></OuterCursor>
    </>
  )
}

export default Cursor;
