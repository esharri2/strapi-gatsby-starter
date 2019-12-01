import React from "react";
import styled from "styled-components";

import { breakpoints, dimensions, spacing } from "../utils/styles";

const { lg, xs } = spacing;

const MainTag = styled.main`
  margin: 0 auto;
  padding: ${lg} ${lg} ${dimensions.footerHeightPlus} ${lg};
  min-height: calc(
    100vh - ${dimensions.headerHeight} - ${dimensions.footerHeight}
  );

  max-width: ${props => (props.mobileSized ? breakpoints.sm : breakpoints.lg)};

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: ${lg} ${xs} ${dimensions.footerHeightPlus} ${xs};
  }

  padding-top: ${props =>
    props.hasFixedHeader ? dimensions.headerHeight : lg};
`;

const Main = props => (
  <MainTag
    hasFixedHeader={props.hasFixedHeader}
    mobileSized={props.mobileSized}
    {...props}
  >
    {props.children}
  </MainTag>
);

export default Main;
