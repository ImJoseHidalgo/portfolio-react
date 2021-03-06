import styled from "styled-components";

export const Section1 = styled.div`
  min-height: 100vh;
  position: relative;
  img {
    position: absolute;
    left: 0;
    height: 100%;
    transform: rotateY(180deg);
  }
  div {
    position: absolute;
    right: 0;
    height: 100%;
    width: 80%;
    background: #161619;
    background: 
      linear-gradient(90deg, 
        rgba(2,0,36,0) 0%, 
        rgba(22, 22, 25, .1) 5%, 
        rgba(22, 22, 25, .2) 10%, 
        rgba(22, 22, 25, .3) 15%, 
        rgba(22, 22, 25, .4) 20%, 
        rgba(22, 22, 25, .5) 25%, 
        rgba(22, 22, 25, .6) 30%, 
        rgba(22, 22, 25, .7) 35%, 
        rgba(22, 22, 25, .8) 40%, 
        rgba(22, 22, 25, .9) 45%, 
        #161619 50%, 
        #161619 100%);
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  `
export const TitleContainer = styled.div`
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 7rem;
    color: #fff;
    margin-bottom: 1rem;
  }
  h2:first-child {
    margin-top: -5rem;
    font-size: 4rem;
  }
  p {
    margin: 1rem 0;
    width: 50%;
    color: #fff;
    font-size: 3rem;
    font-weight: 500;
    line-height: 4rem;
  }
`

export const Section2 = styled.section`
  background: #fff;
  min-height: 100vh;
`

export const AboutMe = styled.div`
  padding: 10rem 0;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  h1 {
    font-size: 5rem;
    text-transform: uppercase;
  }
  p {
    padding-top: 3rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
  p:first-child {
    padding-top: 10rem;
  }
  h4 {
    font-size: 2rem;
    margin: 5rem 0 1rem;
  }
`
export const Skills = styled.div`
  /* margin: 5rem 0; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);                     
  ul li {
    font-size: 1.8rem;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    font-weight: 500;
  }
  img {
    width: 2rem;
    margin-right: 1rem;
  }
`
export const Section3 = styled.section`
  min-height: 40vh;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  `
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  h3 {
    font-weight: 700;
    font-size: 4rem;
    margin-bottom: 5rem;
  }
  p {
    font-size: 1.8rem;
    font-weight: 500;
    color: #999;
    width: 100%;
    text-align: end;
  }
`