import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 2px 2px 1rem rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  perspective: 150rem;
  transition: 0.5s;
  &:hover {
    box-shadow: 1rem 1rem 8rem rgba(0, 0, 0, 0.1);
  }
  img {
    width: 100%;
    position: relative;
    /* border-radius: 8px;
    border-top: 15px solid #282C34;
    border-right: 3px solid #282C34;
    border-bottom: 6px solid #282C34;
    border-left: 3px solid #282C34; */
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    padding: 5rem 2rem;
    display: flex;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    background: var(--lightBackground);
    transform: scaleY(0);
    transform-origin: top;
    transition: 0.4s;
    overflow: hidden;
  }
  &:hover .content {
    transform: scaleY(1);
  }
  .content h2 {
    color: var(--textColorDark);
    transition: 0.3s;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-size: 3rem;
    transform: translateY(-30rem);
    opacity: 0;
  }
  .content p {
    color: var(--textColorDark);
    transition: 0.3s;
    font-size: 1.6rem;
    font-weight: 500;
    transform: translateY(-30rem);
    opacity: 0;
  }
  .content .links .btn {
    position: relative;
    padding: 1rem 2rem;
    border: .1rem solid var(--darkBackground);
    margin: 3rem 0.5rem 0;
    display: inline-block;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    overflow: hidden;
    opacity: 0;
    transition: .5s;
  }
  .content .links .btn:hover {
    color: #000;
  }
  .content .links .btn span {
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
  .content .links .btn:hover span {
    width: 30rem;
    height: 30rem;
  }
  &:hover .content .links .btn {
    transition: opacity 0.3s 0.6s;
    opacity: 1;
  }
  .content .technologies {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 4rem;
    transform: translateY(-30rem);
    transition: 0.3s;
    opacity: 0;
  }
  .content .technologies p {
    color: var(--textColorDark);
    font-size: 1.6rem;
    margin: 0 1rem 0 0;
    padding: 0;
    transform: translateY(-30rem);
  }
  .content .technologies img {
    width: 2rem;
    border-radius: 0;
    margin: 0 0.5rem;
  }
  &:hover h2,
  &:hover p,
  &:hover .content .technologies,
  .content .technologies p {
    transform: translateY(0rem);
    transition-delay: 0.3s;
    opacity: 1;
  }

  @media only screen and (max-width: 600px) {
    .content {
      flex-direction: column;
      /* border-radius: 8px 8px 5px 5px;
      border-top: 15px solid #282C34;
      border-right: 3px solid #282C34;
      border-bottom: 6px solid #282C34;
      border-left: 3px solid #282C34; */
    }
    /* img {
      border-radius: 8px 8px 5px 5px;
    } */
    .content h2 {
      font-size: 2rem;
      transform: translateY(0rem);
    }
    .content p {
      display: none;
    }
    .content .technologies {
      display: none;
    }
    .content .links .btn {
      margin: 0 0.5rem;
    }
  }
`
