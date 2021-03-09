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
    margin-left: 2rem;
  }
`
export const LinkP = styled(Link)`
  font-weight: 600;
  background: #F15E28;
  padding: .5rem 1rem;
  border-radius: .2rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    background: #EF3C1F;
  }
`