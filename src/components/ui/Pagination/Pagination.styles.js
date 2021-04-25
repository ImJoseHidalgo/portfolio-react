import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListContainer = styled.div`
  background: #fff;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin: 0 .2rem;
  }
  h3 {
    margin-right: 1rem;
    font-weight: 700;
  }
  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 2rem;
    }
  }
`
export const LinkP = styled(Link)`
  font-weight: 600;
  background: #161619;
  padding: .5rem 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 700;
  border: 1px solid #000;

  &:hover {
    color: #000;
    background: #fff;
  }
`