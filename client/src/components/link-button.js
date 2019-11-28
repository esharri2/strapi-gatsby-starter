import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import Button from "./button";

const Link = styled(GatsbyLink)`
  text-decoration: none;
`;

const LinkButton = props => (
  <Link {...props}>
    <Button>{props.children}</Button>
  </Link>
);

export default LinkButton;
