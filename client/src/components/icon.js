import React from "react";
import styled from "styled-components";

import { colors, spacing } from "../utils/styles";

//TODO used prop types to control padding prop options

const IconWrapper = styled.span`
  background-color: transparent;
  pointer-events: none;
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  margin-right: ${props => (props.padding === "right" ? spacing.xs : 0)};
  margin-left: ${props => (props.padding === "left" ? spacing.xs : 0)};

  svg {
    height: 100%;
    width: 100%;
    fill: ${props => (props.color ? props.color : colors.periwinklegrey)};
  }
`;

const Icon = props => {
  return (
    <IconWrapper
      padding={props.padding}
      className={props.className}
      color={props.color}
      aria-hidden
    >
      {props.children}
    </IconWrapper>
  );
};

export default Icon;
