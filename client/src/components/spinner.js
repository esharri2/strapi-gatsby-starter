import React from "react";
import styled, { keyframes } from "styled-components";

import { colors, dimensions } from "../utils/styles";

const Overlay = styled.div`
  height: calc(90vh - ${dimensions.headerHeight});
  width: 100vw;
  position: fixed;
  left: 0;
  top: ${dimensions.headerHeight} + 5px;
  background-color: ${colors.lightest};
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
`;

const Ring = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 5px ${colors.medium};
  border-top: solid 8px ${colors.accent1};
  /* animation: ${rotate} 2s ease-in-out infinite, ${fadeIn} 1s ease-out; */
  animation: ${rotate} 2s ease-in-out infinite;
`;

const Spinner = props => (
  <Overlay>
    <Ring />
  </Overlay>
);

export default Spinner;
