import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const arrowButton = keyframes`
  0% { transform: translateX(0rem) }
  50% { transform: translateX(.5rem) }
  100% { transform: translateX(0rem) }
`
export const Button = styled(Link)`
    text-transform: uppercase;
    font-weight: 500;
    display: flex;
    /* width: 100px;
    height: 100px; */
    font-size: 3rem;
    padding: 1rem 3rem;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 2px solid #000;
    transition: 300ms ease-out;
    background: #161619;
    color: #fff;
    z-index: 1;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 300ms ease-out;
  }

  &:hover {
    border-color: #161619;
    color: #161619;
  }

  &:hover:before {
    transform: scaleX(1);
    transform-origin: left;
  }

  img {
    width: 4.5rem;
    height: 3rem;
    object-fit: cover;
    /* background: red; */
    margin-top: -.2rem;
    margin-left: 1rem;
    margin-right: -1.5rem;
    transition: .3s;
    animation: ${arrowButton} 1s ease-in-out infinite;
  }
  &:hover img {
    filter: invert(1);
  }
`