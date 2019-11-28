import React, { forwardRef } from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { colors, fonts, spacing, transitions } from "../utils/styles";

const StyledGatsbyLink = styled(GatsbyLink)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: all ${transitions.fast};
  &:hover,
  &:focus {
    text-decoration: underline;
    outline-color: ${colors.accent2};
  }
  &.isActiveSub {
    font-weight: ${fonts.mediumWeight};
  }
  &.isActiveMain {
    font-weight: bolder;
    transition: all 3s;
    /* @keyframes expand {
      100% {
        width: 50%;
      }
    } */
    &:after {
      /* animation: expand ${transitions.fast} cubic-bezier(0.36, 1.15, 0.86, 1.1)
        forwards; */

      content: "";
      width: 50%;
      height: 2px;
      background-color: ${colors.accent1};
      position: absolute;
      bottom: -${spacing.xs};
    }
  }
`;

// forwardRef is used so that Link can be use Reach UI components
const Link = forwardRef((props, ref) => (
  <StyledGatsbyLink
    activeClassName="isActiveSub"
    partiallyActive={true}
    ref={ref}
    {...props}
  />
));

export default Link;
