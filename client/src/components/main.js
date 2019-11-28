import React from "react";
import styled from "styled-components";

import { breakpoints, dimensions, spacing } from "../utils/styles";

const MainTag = styled.main`
  margin: 0 auto;
  /* max-width: ${breakpoints.large}; */
  padding: ${spacing.lg} ${spacing.lg} ${dimensions.footerHeightPlus} ${
  spacing.lg
};
  max-width: ${props =>
    props.mobileSized ? breakpoints.small : breakpoints.large};

  @media screen and (max-width: ${breakpoints.small}) {
    padding: ${spacing.lg} ${spacing.xs} ${dimensions.footerHeightPlus} ${
  spacing.xs
};
  }
`;

const Main = props => (
  <MainTag mobileSized={props.mobileSized} {...props}>
    {props.children}
  </MainTag>
);

export default Main;
