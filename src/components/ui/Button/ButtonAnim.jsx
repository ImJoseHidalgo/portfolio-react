import React from 'react'
import { Button } from './ButtonAnim.styles';

const ButtonAnim = ( {text, path, props } ) => {

  return (
    <Button to={path}>
      {text}
      <img src="https://icongr.am/entypo/chevron-small-right.svg?size=128&color=ffffff" alt="arrow"/>
    </Button>
  )
}

export default ButtonAnim;