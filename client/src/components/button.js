import React from "react";
import styled from "styled-components";

import { border, colors, spacing } from "../utils/styles";

const ButtonTag = styled.button`
  display: flex;
  border: ${border.size} ${border.style} transparent;
  border-radius: ${border.radius};
  font-size: 1rem;
  padding: ${spacing["2xs"]} ${spacing.xs};
  cursor: pointer;
  background-color: ${colors.licorice};
  color: ${colors.malibu};
  &:hover,
  &:focus {
    background-color: ${colors.licorice}99;
  }
`;

const Button = props => (
  <ButtonTag aria-label={props.title} {...props}>
    {props.children}
  </ButtonTag>
);

export default Button;
