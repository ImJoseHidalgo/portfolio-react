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
`
export const Container = styled.section`
  h1 {
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 4rem;
  }
  h4 {
    background: #000;
    font-weight: 600;
    color: #fff;
    font-size: 2rem;
    padding: 1rem 2rem;
    margin: 2rem 0;
  }
  a {
    text-decoration: underline;
  }
  ${props => props.container && css`
    max-width: 75rem;
    margin: auto;
  `}
`