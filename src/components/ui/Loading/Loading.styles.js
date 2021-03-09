import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: scale(1) rotate(360deg) }
  50% { transform: scale(.5) rotate(-360deg) }
  100% { transform: scale(1) rotate(360deg) }
`
export const LoadingSize = styled.div`
  background: #fff;
  width: 100%;
  height: 100vh;
  position: relative;
`
export const Spinner = styled.div`
  width: 6rem;
  height: 6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Rotate = styled.div`
  width: 100%;
  height: 100%;
  border: 1rem solid #F5F7FA;
  border-radius: 50%;
  /* border-top-color: #6862E6;
  border-bottom-color: #6862E6; */
  border-top-color: #161619;
  border-bottom-color: #161619;
  animation: ${rotate} 5s linear infinite;
`