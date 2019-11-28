import React from "react";
import styled from "styled-components";

import Link from "./link";

import {
  border,
  breakpoints,
  colors,
  dimensions,
  fonts,
  shadows,
  spacing,
} from "../utils/styles";

const FooterWrapper = styled.footer`
  height: ${dimensions.footerHeight};
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${colors.licorice};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.xs};
  @media screen and (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }
`;

const FooterLinksSection = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${colors.periwinklegrey};
    padding-right: ${spacing.md};
  }
`;

const Copyright = styled.span`
  color: ${colors.periwinklegrey};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinksSection>
        <Link to="/Contact/">Contact</Link>
        <Link to="/About/">About</Link>
        <Link to="/Terms/">Terms of Service</Link>
      </FooterLinksSection>
      <FooterLinksSection>
        <Copyright>Ⓒ {new Date().getFullYear()} Lorem Ipsum</Copyright>
      </FooterLinksSection>
    </FooterWrapper>
  );
};

export default Footer;
