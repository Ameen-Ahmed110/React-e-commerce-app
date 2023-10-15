import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 5rem;
  background-color: #f9fafc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  padding-left: 1.4rem;

  a {
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: #ed7064;
  }
`;

export default PageNavigation;