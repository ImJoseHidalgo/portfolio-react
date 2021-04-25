import styled from "styled-components";
import arrow from '../../../images/proximo.svg';

export const Scroll = styled.div`
  position: fixed;
  bottom: 80px;
  right: -100px;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.9) url(${arrow});
  transform: rotate(-90deg);
  /* border-radius: 6px 6px 0 0; */
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 20;
  visibility: hidden;
  opacity: 0;
  transition: 0.8s;

  &.active {
    right: 0;
    visibility: visible;
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    bottom: 130px;
    width: 40px;
    height: 40px;
    background-size: 15px;
  }
`