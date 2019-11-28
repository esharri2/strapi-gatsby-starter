import React from "react";
import styled from "styled-components";
import { fonts, spacing } from "../utils/styles";

const ParaTag = styled.p`
  margin: ${spacing.xs} 0;
  line-height: ${fonts.lineHeight};
`;

const Paragraph = props => <ParaTag {...props}>{props.children}</ParaTag>;

export default Paragraph;
