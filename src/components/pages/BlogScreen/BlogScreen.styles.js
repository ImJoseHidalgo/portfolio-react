import styled from "styled-components";

export const Section1 = styled.section`
  min-height: 100vh;
  background: #fff;
`
export const Title = styled.div`
  /* border: 1px solid blue; */
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1 {
    font-size: 3rem;
    /* font-weight: 500; */
    margin-bottom: 1rem;
  }
  h3 {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 9rem;
    padding-bottom: 3rem;
    margin-bottom: -3rem;
    border-bottom: 2px solid rgba(0,0,0,.13);
    -webkit-text-stroke-width: 0.5rem;
    letter-spacing: .5rem;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    min-height: 25vh;
    h1 {
      font-size: 2rem;
      text-transform: uppercase;
    }
    h3 {
      font-size: 2rem;
      width: 100%;
      margin-bottom: -3rem;
    }
    h3 {
      font-size: 6rem;
      -webkit-text-stroke-width: 0.25rem;
      letter-spacing: .05rem;
    }
  }
`
export const PostsContainer = styled.div`
  /* border: 1px solid red; */
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (max-width: 600px) {
    width: 90%;
    grid-template-columns: 1fr;
  }
`
export const Post = styled.div`
  background: #fff;
  border-bottom: 2px solid rgba(0,0,0,.13);
  transition: .1s;
  height: 100%;
  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }
  p {
    margin: 1rem 0;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #666;
  }
  p:last-child {
    font-size: 1.4rem;
    text-transform: none;
  }
  h3 {
    font-weight: 400;
    color: #666;
    margin: 1rem 0;
  }
  &:hover {
    transform: translateY(-.3rem);
    border-bottom: 2px solid rgba(0,0,0,.3);
  }

  @media only screen and (max-width: 600px) {
    h3 {
      font-size: 2rem;
    }
  }
`