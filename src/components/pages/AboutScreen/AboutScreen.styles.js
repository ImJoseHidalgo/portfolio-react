import styled, { keyframes } from "styled-components";

// export const Section1 = styled.div`
//   min-height: 100vh;
//   position: relative;
//   background: #161619;
//   img {
//     position: absolute;
//     left: 0;
//     height: 100%;
//     transform: rotateY(180deg);
//   }
//   div {
//     position: absolute;
//     right: 0;
//     height: 100%;
//     width: 80%;
//     background: #161619;
//     background: 
//       linear-gradient(90deg, 
//         rgba(2,0,36,0) 0%, 
//         rgba(22, 22, 25, .1) 5%, 
//         rgba(22, 22, 25, .2) 10%, 
//         rgba(22, 22, 25, .3) 15%, 
//         rgba(22, 22, 25, .4) 20%, 
//         rgba(22, 22, 25, .5) 25%, 
//         rgba(22, 22, 25, .6) 30%, 
//         rgba(22, 22, 25, .7) 35%, 
//         rgba(22, 22, 25, .8) 40%, 
//         rgba(22, 22, 25, .9) 45%, 
//         #161619 50%, 
//         #161619 100%);
//     display: flex;
//     justify-content: center;
//     align-items: flex-start;
//   }
// `
const arrow = keyframes`
  0% { transform: translateY(0rem) }
  50% { transform: translateY(-1rem) }
  100% { transform: translateY(0rem) }
`
const arrowButton = keyframes`
  0% { transform: translateX(0rem) }
  50% { transform: translateX(.5rem) }
  100% { transform: translateX(0rem) }
`

export const Section1 = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #fff; */
  img {
    position: absolute;
    width: 45rem;
    height: 45rem;
    top: calc(50% - 22.5rem);
    left: calc(50% - 22.5rem);
    opacity: .8;
  }
  img:last-child {
    top: calc(100% - 10rem);
    left: calc(50% - 2.5rem);
    opacity: 1;
    bottom: 0;
    width: 5rem;
    height: 5rem;
    background: #fff;
    animation: ${arrow} 1.5s ease-in-out infinite;
  }
  h1 {
    position: relative;
    z-index: 2;
    font-size: 6rem;
    text-transform: uppercase;
    background: #fff;
    padding: 0 .5rem;
  }
  &:before {
    content: '';
    position: absolute;
    width: 50%;
    right: 0;
    height: 100%;
    background: #161619;
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 28rem;
      height: 28rem;
      top: calc(50% - 14rem);
      left: calc(50% - 14rem);
    }
    h1 {
      font-size: 3.5rem;
    }
  }
`
export const TitleContainer = styled.div`
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 7rem;
    color: #fff;
    margin-bottom: 1rem;
  }
  h2:first-child {
    margin-top: -5rem;
    font-size: 4rem;
  }
  p {
    margin: 1rem 0;
    width: 50%;
    color: #fff;  
    font-size: 3rem;
    font-weight: 500;
    line-height: 4rem;
  }
`

export const Section2 = styled.section`
  background: #fff;
  min-height: 100vh;
`

export const AboutMe = styled.div`
  padding-bottom: 10rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  &:first-child {
    padding-top: 10rem;
  }
  h1 {
    font-size: 5rem;
    text-transform: uppercase;
  }
  p {
    padding-top: 3rem;
    font-size: 2rem;
    font-weight: 400;
    line-height: 3rem;
  }
  p:first-child {
    padding-top: 10rem;
  }
  h4 {
    font-size: 2rem;
    margin: 5rem 0 1rem;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
    margin: auto;
    gap: 1rem;
    padding-bottom: 3rem;
    &:first-child {
      padding-top: 6rem !important;
    }

    h1 {
      font-size: 3rem;
    }
    p {
      padding-top: 3rem;
      font-size: 1.6rem;
    }
    p:first-child {
      padding-top: 3rem;
    }
    h4 {
      font-size: 2rem;
      margin: 3rem 0 1rem;
    }
  }
`
export const Skills = styled.div`
  /* margin: 5rem 0; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);                  
  ul li {
    font-size: 1.8rem;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    font-weight: 400;
  }
  img {
    width: 2rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);                  
  }
`
export const Section3 = styled.section`
  min-height: 40vh;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  h3 {
    font-weight: 700;
    font-size: 4rem;
    margin-bottom: 5rem;
  }
  p {
    font-size: 1.8rem;
    font-weight: 500;
    color: #999;
    width: 100%;
    text-align: end;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
    padding: 5rem 0;
    h3 {
      font-size: 3rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`

export const PortfolioLink = styled.div`
  min-height: 20vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* a {
    font-size: 3rem;
    padding: 1rem 3rem;
    text-transform: uppercase;
    font-weight: 500;
    background: #161619;
    color: #fff;
  } */
  a {
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
  }

  a:before {
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

  a:hover {
    border-color: #161619;
    color: #161619;
  }

  a:hover:before {
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
  a:hover img {
    filter: invert(1);
  }

  /* a:hover img {
    transform: scale(1.2);
  } */

  @media only screen and (max-width: 768px) {
    a {
      font-size: 2rem;
    }
    img {
      width: 3rem;
      height: 2rem;
    }
  }
`