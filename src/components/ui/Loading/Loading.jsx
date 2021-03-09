import React from 'react';
import { LoadingSize, Rotate, Spinner } from './Loading.styles';

const LoadingUI = () => {
  return (
    <LoadingSize>
      <Spinner>
        <Rotate></Rotate>
      </Spinner>
    </LoadingSize>
  )
}

export default LoadingUI;