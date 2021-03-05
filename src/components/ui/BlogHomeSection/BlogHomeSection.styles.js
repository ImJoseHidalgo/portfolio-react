import styled from "styled-components";

export const BlogSection = styled.section`
  position: relative;
  z-index: 2;
  background: var(--darkBackground);
  .container {
    padding: 10rem 0;
  }
  .container h2 {
    color: var(--textColorLight);
  }
  .container h2:first-child {
    font-size: 12rem;
    margin-bottom: 2rem;
  }
  .container h2:last-child {
    font-size: 4rem;
  }
`