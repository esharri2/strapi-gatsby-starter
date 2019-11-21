import { useState } from "react";
import { convertToYYYYMMDD } from "../time.js";

export default function(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event = {}) {
    let value;
    if (!event.target) {
      value = event; //string passed directly to function to bypass form input
    } else if (event.target.type === "date") {
      value = convertToYYYYMMDD(event.target.value);
    } else if (event.target.type === "checkbox") {
      value = event.target.value === "true" ? "false" : "true";
    } else {
      value = event.target.value;
    }
    setValue(value);
  }

  return { value, onChange: handleChange };
}
