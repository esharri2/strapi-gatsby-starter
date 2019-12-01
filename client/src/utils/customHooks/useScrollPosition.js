import { useState, useRef, useEffect } from "react";
import { convertToYYYYMMDD } from "../time.js";

export default function() {
  const [isThrottled, setIsThrottled] = useState(false);

  // Note: useRef instead of useState to prevent rerender (?)
  const scrollPosition = useRef();

  // setTimeout to turn off the throttle
  useEffect(() => {
    if (isThrottled) {
      setTimeout(() => {
        setIsThrottled(false);
      }, 500);
    }
  }, [isThrottled]);

  // add scroll listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("listener attached!");
    // return () => {
    //   // Clean up the subscription
    //   console.log("may remove event listener?");
    // };
  }, []);

  const handleScroll = () => {
    if (!isThrottled) {
      scrollPosition.current = window.scrollY;
      setIsThrottled(true);
    }
  };

  return scrollPosition.current;
}
