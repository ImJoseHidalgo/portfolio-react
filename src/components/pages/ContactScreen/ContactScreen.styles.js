import styled from "styled-components";

export const ContactTitle = styled.section`
  background: #fff;
`
export const Container = styled.div`
  min-height: 37vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.8rem;
    line-height: 3rem;
    margin-bottom: 3rem;
    color: #666;
  }
  a {
    color: #666;
    text-decoration: underline;
  }
  a:hover {
    color: #000;
  }
  @media only screen and (max-width: 768px) {
    min-height: 40vh;
    width: 90%;
    padding-top: 5rem;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.4rem;
      margin-bottom: 0;
    }
  }
`
export const ContactForm = styled.form`
  background: #fff;
  min-height: 70vh;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  input, textarea {
    width: 100%;
    border: none;
    margin: 2rem 0;
    font-size: 1.8rem;
    padding: 1rem;
    outline: none;
    border-bottom: 3px solid rgba(0,0,0,.1);
    transition: .3s;
  }
  input:hover, textarea:hover {
    border-bottom: 3px solid rgba(0,0,0,1);
  }
  button {
    width: fit-content;
    background: #161619;
    color: #fff;
    outline: none;
    padding: 1rem 2rem;
    text-transform: uppercase;
    margin-top: 3rem;
    /* font-size: 1.3rem; */
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    padding-bottom: 5rem;
    input, textarea {
      font-size: 1.6rem;
    }
  }
`