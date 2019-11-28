import React from "react";
import styled from "styled-components";

import Input from "./input";
import Label from "./label";

import { convertToYYYYMMDD } from "../utils/time";
import { spacing } from "../utils/styles";

const FormFieldWrapper = styled.div`
  margin-bottom: ${spacing.md};
`;

const FormField = props => {
  //Need to convert all date string to date input friendly format
  const value =
    props.type === "date" ? convertToYYYYMMDD(props.value) : props.value;

  // Note checkboxes may not be working properly
  const checked =
    props.type === "radio" || props.type === "checkbox"
      ? { checked: props.checked }
      : "";

  const InputComponent = (
    <Input
      onChange={props.onChange}
      id={props.id}
      name={props.name || props.id}
      type={props.type}
      placeholder={props.placeholder}
      value={value}
      autocomplete={props.autocomplete || "off"}
      {...checked}
    />
  );

  return (
    <FormFieldWrapper className={props.className}>
      {checked ? (
        <Label htmlFor={props.id} type={props.type}>
          <span>{props.label}</span>
          {InputComponent}
        </Label>
      ) : (
        <>
          <Label htmlFor={props.id}>{props.label}</Label>
          {InputComponent}
        </>
      )}
    </FormFieldWrapper>
  );
};
export default FormField;
