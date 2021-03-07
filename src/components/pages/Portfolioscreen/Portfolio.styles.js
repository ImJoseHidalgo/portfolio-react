import styled, { keyframes } from "styled-components";

const arrow = keyframes`
  0% { transform: translateY(0rem) }
  50% { transform: translateY(-1rem) }
  100% { transform: translateY(0rem) }
`
export const Section1 = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #fff; */
  img {
    position: absolute;
    width: 45rem;
    height: 45rem;
    top: calc(50% - 22.5rem);
    left: calc(50% - 22.5rem);
    opacity: .8;
  }
  img:last-child {
    top: calc(100% - 10rem);
    left: calc(50% - 2.5rem);
    opacity: 1;
    bottom: 0;
    width: 5rem;
    height: 5rem;
    background: #fff;
    animation: ${arrow} 1.5s ease-in-out infinite;
  }
  h1 {
    position: relative;
    z-index: 2;
    font-size: 6rem;
    text-transform: uppercase;
    background: #fff;
    padding: 0 .5rem;
  }
  &:before {
    content: '';
    position: absolute;
    width: 50%;
    right: 0;
    height: 100%;
    background: #161619;
  }
`
export const Section2 = styled.section`
  min-height: 50vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5rem;
  h3 {
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  p {
    /* font-weight: 500; */
    font-size: 1.8rem;
    line-height: 3rem;
  }
  p:first-child {
    margin-bottom: 3rem;
  }
`
export const Section3 = styled.section`
  min-height: 100vh;
  background: #fff;
  padding-bottom: 5rem;
`
