import React from "react";
import styled from "styled-components";
import { border, breakpoints, colors, spacing } from "../utils/styles";

const InputTag = styled.input`
  font-size: inherit;
  padding: ${spacing.xs};
  margin: ${spacing.xs} 0;
  width: 100%;
  max-width: ${breakpoints.sm};
  border: none;
  /* border-bottom: ${border.size} ${border.style} ${colors.md}; */

  /* &:focus {
    outline-color: ${colors.accent2};
  } */

  &[type="radio"] {
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    padding: 0;
    margin: 0 ${spacing.sm};

    & + label::before {
      cursor: pointer;
    }

    &:after {
      content: "";
      display: block;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 2px ${border.style} ${colors.maroon};
      cursor: pointer;
    }

    &:checked {
      &:after {
        background-color: ${colors.maroon};
      }
    }
  }
`;

const TextAreaTag = styled(InputTag)`
  height: calc(${breakpoints.xs} / 4);
`;

const Input = props =>
  props.type === "textarea" ? (
    <TextAreaTag as="textarea" {...props}>
      {props.children}
    </TextAreaTag>
  ) : (
    <InputTag {...props}>{props.children}</InputTag>
  );
export default Input;
