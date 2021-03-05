import styled from "styled-components";

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
  }

  .container .btn {
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
  }

  @media only screen and (max-width: 600px) {
    .container {
      top: 30%;
      left: 10%;
      width: 70%;
    }
    .container h2 {
      width: 100%;
      margin: 3rem 0;
      font-size: 1.6rem;
      font-weight: 600;
    }
    .container h2 strong {
      font-weight: 600;
    }
  }
`