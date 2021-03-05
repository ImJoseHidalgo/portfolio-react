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
    .picture {
      left: calc(80% - 23rem);
    }
    .picture img {
      width: 500px;
    }

    .name-container {
      top: 15%;
      left: 10%;
      opacity: 1;
      transition: 0.3s 0.2s;
    }
    .name-container .name {
      font-weight: 600;
      font-size: 22px;
    }
    .name-container .prof {
      font-size: 14px;
    }
    .portf-container {
      bottom: 55%;
      left: -70%;
      opacity: 1;
      transition: 0.3s 0.2s;
      transform: rotate(-90deg);
    }
    .name-container.active,
    .portf-container.active {
      opacity: 0;
      transition: 0.2s;
    }
    .portf-container .name {
      color: var(--textColorDark);
    }
    .portf-container a {
      font-size: 22px;
      color: var(--textColorDark);
    }
    .portf-container img {
      background: var(--textColorDark);
      border-radius: 50%;
      padding: 5px;
      width: 1.2rem;
      margin: 0 0 -3px 0;
      transform: rotate(180deg);
    }
  }
`