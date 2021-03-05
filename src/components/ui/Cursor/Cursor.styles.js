import styled from "styled-components";

export const InnerCursor = styled.div`
  position: fixed;
  z-index: 10;
  left: 1rem;
  width: 0.8rem;
  height: 0.8rem;
  transform: translate(-50%, -50%);
  background: #fff;
  mix-blend-mode: difference;
  border-radius: 50%;
  pointer-events: none;
  transition: width 0.3s, height 0.3s;
  &.grow {
    width: 6rem;
    height: 6rem;
    transition: width 0.3s, height 0.3s;
  } 
`
export const OuterCursor = styled.div`
  /* position: fixed;
  z-index: 5;
  left: 1rem;
  width: 3rem;
  height: 3rem;
  transform: translate(-50%, -50%);
  border: 0.1rem solid #fff;
  mix-blend-mode: difference;
  border-radius: 50%;
  pointer-events: none; */
`