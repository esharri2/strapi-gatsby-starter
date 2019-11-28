import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fonts, spacing } from "../utils/styles";

const HeadingTag = styled.h1`
  font-family: ${fonts.heading};
  color: ${colors.licorice};
  text-transform: uppercase;
  margin: ${spacing.xs} 0;
  padding: 0;
  text-align: ${props => (props.center === true ? "center" : "left")};
  font-size: ${props => {
    const base = 2.5;
    const percent = (10 - props.level) / 10;
    return `${base * percent}rem`;
  }};
`;

const Heading = props => {
  return (
    <HeadingTag
      center={props.center}
      className={props.className}
      as={`h${props.level}`}
      level={props.level}
    >
      {props.children}
    </HeadingTag>
  );
};

Heading.propTypes = {
  level: PropTypes.number,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
