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
  a {
    display: inline-block;
    font-size: 2rem;
    background: #161619;
    color: #fff;
    /* width: 15rem; */
    padding: 1rem 2rem;
    text-align: center;
    margin-top: 4rem;
    margin-right: 3rem;
  }
`
export const Grid = styled.div`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`