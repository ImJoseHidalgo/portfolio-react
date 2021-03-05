import styled from "styled-components";

export const Section3 = styled.section`
  position: relative;
  z-index: 2;
  min-height: 100vh;
  background: var(--lightBackground); /*background: #ecf0f3;*/
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    background: var(--lightBackground);
    height: auto;
  }
`
export const Container = styled.div`
  height: auto;
  position: relative;
  display: flex;
  padding: 10rem 0 8rem;
  .title {
    position: sticky;
    top: 40%;
    height: 50vh;
    width: 40%;
  }
  .title h2 {
    font-size: 3.4rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  .title .line {
    width: 20%;
    height: 0.3rem;
    background: var(--line);
    margin: 8px 0 2rem;
  }
  .title h3 {
    font-size: 2.3rem;
    font-weight: 500;
  }
  .title a {
    position: relative;
    padding: 1rem 2rem;
    border: .2rem solid var(--darkBackground);
    margin: 2rem 0 0 0;
    display: inline-block;
    text-decoration: none;
    color: var(--darkBackground);
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    overflow: hidden;
    opacity: 1;
    letter-spacing: .1rem;
    transition: .1s;
  }
  .title a:hover {
    background: var(--darkBackground);
    color: var(--lightBackground);
  }

  .previews {
    position: relative;
    width: 70%;
    margin-left: 5rem;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
    padding: 5rem 0;
    a {
      font-weight: 600;
      color: #2c3541;
    }
  }
`