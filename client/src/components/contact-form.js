import React from "react";

import Button from "./button";
import FormField from "./form-field";

import useFormInput from "../utils/customHooks/useFormInput";
import useValidityCheck from "../utils/customHooks/useValidityCheck";
import { validateEmail } from "../utils/validators";

const ContactForm = () => {
  const name = useFormInput("");
  const email = useFormInput("");
  const message = useFormInput("");
  const isEmailValid = useValidityCheck(false, email, validateEmail);

  return (
    <form name="contact" method="POST" data-netlify="true">
      <FormField
        id="name"
        placeholder="Name"
        label="Your name"
        type="text"
        {...name}
      />
      <FormField
        id="email"
        placeholder="Email address"
        type="email"
        label="Email"
        {...email}
      />
      <FormField
        value=""
        id="message"
        type="textarea"
        label="Message"
        placeholder="Tell us what's on your mind!"
        {...message}
      />
      <Button as="input" disabled={!isEmailValid} type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
