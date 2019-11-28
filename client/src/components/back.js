import React from "react";
import styled from "styled-components";
import Link from "../components/link";

import { colors } from "../utils/styles";

import ChevronLeftIcon from "./icons/chevron-left";

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Back = props => {
  const to = props.to;
  // Send user to specific location
  if (to) {
    return <CustomLink to={`/${to}/`}>Back to {to}</CustomLink>;
  }

  const handleClick = event => {
    event.preventDefault();
    if (typeof window === "undefined") {
      return;
    }
    window.history.back();
  };

  return (
    <CustomLink onClick={handleClick}>
      <ChevronLeftIcon color={colors.licorice} />
      Back
    </CustomLink>
  );
};

export default Back;
