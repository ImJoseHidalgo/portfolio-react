import styled from "styled-components";

export const Card = styled.div`
  padding-bottom: 15rem;
  img {
    width: 100%;
    margin-bottom: 3rem;
  }
  h3 {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 3rem;
  }
  p {
    font-size: 2rem;
    line-height: 3rem;
  }
  li {
    font-size: 2rem;
  }
  li:first-child {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  span {
    margin: 0 2rem 0 2rem;
  }
  /* a {
    display: inline-block;
    font-size: 2rem;
    background: #161619;
    color: #fff;
    padding: 1rem 2rem;
    text-align: center;
    margin-top: 4rem;
    margin-right: 3rem;
  } */
  a {
    margin-top: 4rem;
    margin-right: 3rem;
    display: inline-block;
    font-size: 2rem;
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

  @media only screen and (max-width: 768px) {
    padding-bottom: 5rem;
    h3 {
      font-size: 3rem;
    }
    .desc {
      display: block;
    }
    p {
      font-size: 1.6rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    li {
      font-size: 1.6rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    span {
      margin: 0 1rem 0 1rem;
    }
    a {
      margin-top: 2rem;
      margin-right: 1rem;
      font-size: 1.6rem;
      padding: .7rem 1rem;
    }
  }
`
export const Grid = styled.div`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media only screen and (max-width: 768px) {
    margin: 3rem 0;
    grid-template-columns: repeat(2, 1fr);
    ul:first-child {
      margin-bottom: 2rem;
    }
  }
`