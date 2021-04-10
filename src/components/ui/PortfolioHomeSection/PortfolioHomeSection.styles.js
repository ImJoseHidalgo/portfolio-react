import styled, { keyframes } from "styled-components";

const arrowButton = keyframes`
  0% { transform: translateX(0rem) }
  50% { transform: translateX(.5rem) }
  100% { transform: translateX(0rem) }
`

export const Section3 = styled.section`
  position: relative;
  z-index: 2;
  min-height: 100vh;
  background: var(--lightBackground); /*background: #ecf0f3;*/
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    z-index: 3;
    min-height: 100vh;
  }
`
export const Container = styled.div`
  height: auto;
  position: relative;
  display: flex;
  padding: 10rem 0 8rem;
  .title {
    position: sticky;
    top: 40%;
    height: 50vh;
    width: 40%;
  }
  .title h2 {
    font-size: 3.4rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  .title .line {
    width: 20%;
    height: 0.3rem;
    background: var(--line);
    margin: 8px 0 2rem;
  }
  .title h3 {
    font-size: 2.3rem;
    font-weight: 500;
  }
  /* .title a {
    position: relative;
    padding: 1rem 2rem;
    border: .2rem solid var(--darkBackground);
    margin: 2rem 0 0 0;
    display: inline-block;
    text-decoration: none;
    color: var(--darkBackground);
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    overflow: hidden;
    opacity: 1;
    letter-spacing: .1rem;
    transition: .1s;
  }
  .title a:hover {
    background: var(--darkBackground);
    color: var(--lightBackground);
  } */
  a {
    margin: 2rem 0 0 0;
    display: inline-block;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    text-align: center;
    position: relative;
    border: 1px solid #000;
    text-transform: uppercase;
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
  a img {
    width: 3rem;
    z-index: 2;
    height: 1.5rem;
    object-fit: cover;
    margin-bottom: -.1rem;
    margin-left: 0rem;
    margin-right: -1.5rem;
    transition: .3s;
    animation: ${arrowButton} 1s ease-in-out infinite;
    filter: invert(0);
  }
  a:hover img {
    filter: invert(1);
  }

  .previews {
    position: relative;
    width: 70%;
    margin-left: 5rem;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
    padding: 6rem 0;
    flex-direction: column;
    .title {
      position: relative;
      height: auto;
      width: 100%;
      margin-bottom: 5rem;
    }
    .previews {
      width: 100%;
      margin-left: 0rem;
    }
  }
`