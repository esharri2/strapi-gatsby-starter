import React from "react";
import styled from "styled-components";

import { colors, fonts } from "../utils/styles";

const Text = styled.h1`
  color: ${colors.malibu};
  font-weight: ${fonts.heavy};
  font-size: 4rem;
  text-transform: uppercase;
  line-height: 1;
  margin: 0;
`;

const Logo = props => {
  const heading = <Text className={props.className}>Logo</Text>;

  if (props.link) {
    return <a href={props.link}>{heading}</a>;
  } else {
    return heading;
  }
};

export default Logo;
