import React from "react";
import styled, { keyframes } from "styled-components";

import { colors, dimensions } from "../utils/styles";

const Overlay = styled.div`
  height: 100%;
  width: 100%;
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

const Ring = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 5px ${colors.licorice};
  border-top: solid 8px ${colors.malibu};
  animation: ${rotate} 1.5s linear infinite;
`;

const Spinner = props => (
  <Overlay>
    <Ring />
  </Overlay>
);

export default Spinner;
