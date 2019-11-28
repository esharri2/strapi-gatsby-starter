import React, { useContext } from "react";
import styled from "styled-components";

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
} from "../utils/styles";

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${colors.licorice};
`;

const HeaderTag = styled.header`
  height: ${dimensions.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacing.sm};
`;

// const HeaderLogo = styled(Logo)`
//   grid-area: logo;
//   font-size: 2rem;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// `;

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
