import React, { UseRef } from "react";
import { emailjs } from "@emailjs/browser";

export const contactUs = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "contact_form",
        form.current,
        "user_MkV95FVGRUEdUVzwk18yd",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-wrapper">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            name="email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            name="subject"
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Your message"
            name="message"
          />
        </div>
        <div className="form-group">
          <input type="submit" className="button" value="Send Message" />
        </div>
      </div>
    </form>
  );
};
