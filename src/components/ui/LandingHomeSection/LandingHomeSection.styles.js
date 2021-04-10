import styled from "styled-components";

export const Section1 = styled.section`
  position: relative;
  height: 100vh;

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
    opacity: 1;
    transform: scaleY(1);
    transition: 0.3s 0.5s;
  }

  .portf-container .name {
    color: var(--lightBackground);
  }
  .portf-container {
    position: fixed;
    z-index: 2;
    bottom: 5%;
    right: 3%;
    cursor: pointer;
  }
  .portf-container a {
    font-weight: 700;
    font-size: 2.8rem;
  }
  .portf-container img {
    width: 2rem;
  }

  @media only screen and (max-width: 600px) {
    overflow-x: hidden;
    .picture {
      /* position: relative; */
      position: absolute;
      left: calc(100% - 25rem);
      /* right: calc(50% - 30rem); */
      /* background: red; */
    }
    .picture img {
      width: 50rem;
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