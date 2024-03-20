import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./theme";

export const Header = styled.header`
  display: flex;
  background-color: ${colors.primary};
  color: ${colors.light};
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const BtnLink = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.dark};
  padding: 0.7em 1.2em;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
  margin-bottom: 1em;
  display: inline-block;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${colors.secondaryDark};
  }
`;

export const DetailsCont = styled.div`
  background-color: ${colors.light};
  border-radius: 10px;
  margin-top: 2em;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 1.5em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h3, h4 {
    color: ${colors.dark};
    margin-bottom: 0.5em;
  }
`;

export const CenteredCont = styled.div`
  height: 80vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenterInfo = styled.div`
  text-align: center;
  margin-top: 2em;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      margin-right: 1em;
    }
  }
`;
