import React, { useState, useRef } from "react";
import styled from "styled-components";

import Button from "./button";
import ChevronUp from "./icons/chevron-up";

import {
  colors,
  hexTransparencies,
  shadows,
  transitions,
  zIndexes,
} from "../utils/styles";
import useScrollPosition from "../utils/customHooks/useScrollPosition";

const FixedButton = styled(Button)`
  position: fixed;
  bottom: 50px;
  right: 50px;
  /* font-size: 40px; */
  z-index: ${zIndexes.top};
  display: ${props => (props.hide ? `none` : `block`)};
  background-color: ${colors.malibu + hexTransparencies[90]};
  color: ${colors.licorice};
  box-shadow: ${shadows.sm};
  transition: box-shadow ${transitions.fast};

  &:hover {
    background-color: ${colors.malibu};
    box-shadow: ${shadows.lg};
  }
`;

const BackToTop = () => {
  const scrollPosition = useScrollPosition(0);

  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <FixedButton
      onClick={handleClick}
      hide={scrollPosition < 200 ? true : false}
    >
      <ChevronUp color={colors.licorice} />
    </FixedButton>
  );
};

export default BackToTop;
