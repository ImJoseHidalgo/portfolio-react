import styled, { keyframes } from "styled-components";

const arrowButton = keyframes`
  0% { transform: translateX(0rem) }
  50% { transform: translateX(.5rem) }
  100% { transform: translateX(0rem) }
`

export const Section2 = styled.section`
  height: 100vh;

  .container {
    position: fixed;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 115rem;
    transform: translate(-50%, -50%);
  }
  .container h2 {
    width: 60%;
    font-size: 2.8rem;
    font-weight: 600;
    transition: 0.5s 0s;
    transform: scaleY(0);
  }
  .container h2:nth-child(2) {
    margin: 2rem 0 4rem;
  }
  .container span {
    position: relative;
  }
  .container .bt {
    transform: scaleY(0);
    transition: 0.3s;
  }

  /* .container .btn {
    position: relative;
    padding: 1rem 2rem;
    border: .2rem solid var(--darkBackground);
    margin: 0 0.5rem;
    display: inline-block;
    text-decoration: none;
    color: var(--darkBackground);
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    overflow: hidden;
    opacity: 1;
    transition: .5s;
  }
  .container .btn:hover {
    color: var(--lightBackground);
  }
  .container .btn span {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: var(--darkBackground);
    z-index: -1;
    transition: width .5s, height .5s;
  }
  .container .btn:hover span {
    width: 30rem;
    height: 30rem;
  } */
  a {
    display: inline-block;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    text-align: center;
    position: relative;
    border: 1px solid #000;
    transition: 300ms ease-out;
    background: #161619;
    font-weight: 500;
    color: #fff;
    z-index: 1;
  }

  a:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 300ms ease-out;
  }

  a:hover {
    border-color: #161619;
    color: #161619;
  }

  a:hover:before {
    transform: scaleX(1);
    transform-origin: left;
  }
  img {
    width: 3rem;
    z-index: 2;
    height: 1.5rem;
    object-fit: cover;
    margin-bottom: -.15rem;
    margin-left: 0rem;
    margin-right: -1.5rem;
    transition: .3s;
    animation: ${arrowButton} 1s ease-in-out infinite;
    filter: invert(0);
  }
  a:hover img {
    filter: invert(1);
  }

  @media only screen and (max-width: 768px) {
    height: 50vh;
    position: relative;
    background: #fff;
    .container {
      position: absolute;
      z-index: 3;
      width: 90%;
      top: 45%;
      margin: 0 !important;
      /* height: 23rem; */
    }
    /* .container {
      position: fixed;
      z-index: 1;
      top: 50%;
      left: 50%;
      width: 115rem;
      transform: translate(-50%, -50%);
    } */
    .container h2 {
      width: 100%;
      margin: 3rem 0;
      font-size: 2rem;
      transform: scaleY(1);
    }
    .container .bt {
      transform: scaleY(1);
    }
    /* .container {
      position: fixed;
      z-index: 1;
      top: 50%;
      left: 50%;
      width: 115rem;
      transform: translate(-50%, -50%);
    }
    .container h2 {
      width: 60%;
      font-size: 2.8rem;
      font-weight: 700;
      transition: 0.5s 0s;
      transform: scaleY(0);
    }
    .container h2:nth-child(2) {
      margin: 2rem 0 4rem;
    }
    .container span {
      position: relative;
    }
    .container .bt {
      transform: scaleY(0);
      transition: 0.3s;
    } */
  }
`