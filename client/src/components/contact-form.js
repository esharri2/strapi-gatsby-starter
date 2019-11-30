import React, { useState } from "react";

import Button from "./button";
import FormField from "./form-field";
import Paragraph from "./paragraph";
import Spinner from "./spinner";

import useFormInput from "../utils/customHooks/useFormInput";
import useValidityCheck from "../utils/customHooks/useValidityCheck";
import { validateEmail } from "../utils/validators";

const ContactForm = () => {
  const name = useFormInput("test");
  const email = useFormInput("test@test.com");
  const message = useFormInput("fart");
  const isEmailValid = useValidityCheck(false, email, validateEmail);

  const [error, setError] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsSending(true);
    try {
      const response = await fetch(`${process.env.API_URL}/contact`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });
      const myJson = await response.json();
      console.log(JSON.stringify(myJson));
    } catch (error) {
      console.error(error);
      setError("Yo there an error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      {isSent && (
        <>
          <Paragraph>Your message was sent!</Paragraph>
          <Paragraph>Returning you to the previous page...</Paragraph>
        </>
      )}
      {!isSent &&
        (isSending ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmit}>
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
            {error || (
              <Button
                as="input"
                disabled={!isEmailValid}
                type="submit"
                value="Send"
              />
            )}
          </form>
        ))}
    </div>
  );
};

export default ContactForm;
