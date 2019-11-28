import React from "react";
import styled from "styled-components";

import Link from "./link";
import List from "./list";
import ListItem from "./list-item";

import { colors, fonts, spacing } from "../utils/styles";

const NavTag = styled.nav`
  font-size: 1.1rem;
  color: ${colors.malibu};
`;

const NavList = styled(List)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavListItem = styled(ListItem)`
  padding: 0 ${spacing.sm};
  &:last-of-type {
    padding-right: 0;
  }
`;

const Nav = props => {
  return (
    <NavTag>
      <NavList>
        <NavListItem>
          <Link to="/">Accusamus</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/">Debitis</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/">Odio</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/">Sapiente</Link>
        </NavListItem>
      </NavList>
    </NavTag>
  );
};

export default Nav;
