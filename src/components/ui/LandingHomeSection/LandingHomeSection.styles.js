import styled from "styled-components";

export const Section1 = styled.section`
  position: relative;
  height: 100vh;

  .onload-bg {
    background: var(--darkBackground);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    transition: .8s 1s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .onload-bg.onload {
    transform: translateY(100%);
  }
  .onload-bg .text {
    overflow: hidden;
  }
  .onload-bg h1 {
    color: var(--lightBackground);
    font-size: 3rem;
    transform: translateY(100%);
  }
  .onload-bg.onload h1 {
    transform: translateY(0);
    transition: transform 0.5s 0.2s;
  }

  .picture {
    position: fixed;
    z-index: 0;
    right: calc(50% - 30rem);
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: 1s;
    user-select: none;
  }
  .picture img {
    width: 60rem;
    /* filter: drop-shadow(0 0 5rem rgba(0, 0, 0, 0.4)); */
  }

  .name-container {
    position: fixed;
    z-index: 2;
    bottom: 5%;
    left: 3%;
    overflow: hidden;
  }
  .name-container .name {
    font-weight: 700;
    font-size: 2.8rem;
  }
  .name-container .prof {
    font-size: 1.6rem;
    font-weight: 500;
  }
  .name-container .name,
  .name-container .prof,
  .portf-container .name {
    text-transform: uppercase;
    /* transform: scaleY(1); */
    transform: translateY(160%);
    transition: 0.3s 0.5s ease;
  }
  .name-container.onload .name,
  .name-container.onload .prof,
  .portf-container.onload .name {
    transition: 0.3s 0.5s ease;
    transform: translateY(0);
  }

  .portf-container .name {
    color: var(--lightBackground);
    /* transform: translateY(100%); */
  }
  .portf-container {
    position: fixed;
    z-index: 2;
    bottom: 5%;
    right: 3%;
    cursor: pointer;
    overflow: hidden;
  }
  .portf-container a {
    font-weight: 700;
    font-size: 2.8rem;
  }
  .portf-container img {
    width: 2rem;
  }
  /* @media only screen and (min-width: 1441px) {
    .picture {
      right: calc(50% - 35rem);
    }
    .picture img {
      width: 70rem;
    }
  } */
  @media only screen and (max-width: 1440px) {
    overflow-x: hidden;
    .picture {
      right: calc(50% - 22.5rem);
      /* left: calc(100% - 56rem); */
    }
    .picture img {
      width: 45rem;
    }
  }

  @media only screen and (max-width: 768px) {
    overflow-x: hidden;
    .picture {
      /* position: relative; */
      position: absolute;
      left: calc(100% - 20rem);
      /* right: calc(50% - 30rem); */
      /* background: red; */
    }
    .picture img {
      width: 43rem;
    }

    .name-container {
      /* position: absolute; */
      position: relative;
      top: 7%;
      left: 10%;
      opacity: 1;
      transition: 0.3s 0.2s;
    }
    .name-container .name {
      font-weight: 600;
      font-size: 3rem;
    }
    .name-container .prof {
      font-size: 1.6rem;
    }
    .portf-container {
      position: relative;
      z-index: 3;
      bottom: -50%;
      left: -36%;
      opacity: 1;
      transition: 0.3s 0.2s;
      transform: rotate(-90deg);
    }
    .name-container.active,
    .portf-container.active {
      opacity: 1;
      transition: 0.2s;
    }
    .portf-container .name {
      color: var(--textColorDark);
    }
    .portf-container a {
      font-size: 3rem;
      color: var(--textColorDark);
    }
    .portf-container img {
      background: var(--textColorDark);
      padding: .6rem .4rem;
      width: 2rem;
      margin: 0 0 -1px 0;
      transform: rotate(180deg);
    }
  }
  @media only screen and (max-width: 375px) {
    .portf-container {
      bottom: -55%;
    }
  }
`