import styled, { css } from "styled-components";

export const Section1 = styled.section`
  min-height: 100vh;
  background: #fff;
  padding-bottom: 10rem;
  p {
    /* background: red; */
    font-size: 2rem;
    margin: 2rem 0;
    line-height: 3rem;
    font-weight: 400;
    color: #666;
  }
  p:first-child {
    margin-top: 1rem;
  }
  h5 {
    font-size: 2rem;
    padding: 5rem 0 1rem;
    font-weight: 400;
    color: #666;
  }
  blockquote {
    font-size: 2rem;
    margin: 2rem 0;
    line-height: 3rem;
    font-weight: 400;
    color: #666;
  }
  strong {
    font-size: 3rem;
    font-weight: 400;
    text-transform: capitalize;
    /* background: blue; */
  }
  figure {
    text-align: center;
  }
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 40vh;
  div {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
  span {
    position: absolute;
    max-width: 80%;
    background: #fff;
    padding: 1rem 2rem;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 400;
    color: #666;
  }
  @media only screen and (max-width: 600px) {
    min-height: 20vh;
    img {
      height: 20vh;
    }
    span {
      font-size: 3rem;
    }
  }
`
export const Container = styled.section`
  h1 {
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 4rem;
  }
  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 6rem;
  }
  h3 {
    background: #282C34;
    border-radius: 5px;
    font-weight: 600;
    color: #fff;
    font-size: 2rem;
    padding: 1rem 2rem;
    margin: 2rem 0;
  }
  h4 {
    width: fit-content;
    font-size: 2rem;
    font-weight: 400;
    background: #282C34;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    font-family: monospace;
  }
  a {
    text-decoration: underline;
  }
  strong {
    font-size: 2rem;
    font-weight: 700;
    text-transform: lowercase;
  }
  img {
    width: 100%;
  }

  ${props => props.container && css`
    max-width: 75rem;
    margin: auto;
  `}

  @media only screen and (max-width: 600px) {
    width: 90%;
    h1 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
    h2 {
      font-size: 2.4rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    h3 {
      font-weight: 700;
      font-size: 1.6rem;
    }
    p, strong, blockquote, h5 {
      font-size: 1.6rem;
    }
  }
`