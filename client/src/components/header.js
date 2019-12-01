import React, { useContext } from "react";
import styled from "styled-components";

import Gear from "./icons/gear";
import Logo from "./logo";
import Nav from "./nav";

import {
  border,
  breakpoints,
  colors,
  dimensions,
  fonts,
  shadows,
  spacing,
  zIndexes,
} from "../utils/styles";

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${colors.licorice};
  position: fixed;
  z-index: ${zIndexes.bottom};
`;

const HeaderTag = styled.header`
  height: ${dimensions.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacing.sm};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTag>
        <Logo />
        <Nav />
      </HeaderTag>
    </HeaderWrapper>
  );
};

export default Header;
