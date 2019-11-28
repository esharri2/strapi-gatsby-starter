import React from "react";
import styled from "styled-components";

import { colors } from "../utils/styles";

const ButtonLinkStyleTag = styled.button`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${colors.maroon};
  cursor: pointer;
`;

const Button = props => (
  <ButtonLinkStyleTag {...props}>{props.children}</ButtonLinkStyleTag>
);

export default Button;
