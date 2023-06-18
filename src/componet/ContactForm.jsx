import React, { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/jsapi";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.load("forms", "1", {
        callback: () => {
          const formContainer = document.getElementById("form-container");
          window.google.setOnLoadCallback(() => {
            window.google.forms.createForm("https://docs.google.com/forms/d/e/1FAIpQLSchTi6rPeWLR9yv2k75cxrebRow3Uk_OWuBFpUkBrL2PAU7-A/viewform?embedded=true", formContainer);
          });
        },
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="form-container" />;
};

export default ContactForm;
