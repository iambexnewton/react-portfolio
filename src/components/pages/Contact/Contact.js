import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "/Users/beckynewton/Desktop/react-projects/react-portfolio/src/button.js";
import "/Users/beckynewton/Desktop/react-projects/react-portfolio/src/components/pages/Contact/Contact.css";

function ContactPage() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => console.log(data);
  const message = watch("message") || "";
  const messageCharsLeft = 1500 - message.length;
  return (
    <main className="main">
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="contact-title">Contact</div>
          <div className="text">Say hi</div>
          <div className="socials-container">
            <div>LinkedIn</div>
            <div>Github</div>
            <div>Twitter</div>
            <div>Medium</div>
          </div>
        </div>
        <div className="form-section-wrapper">
          <div className="form-title">Send me an email</div>
          <div className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
              <input
                type="text"
                className="user_name"
                {...register("user_name", { required: true })}
                placeholder="Name"
                maxLength="30"
              />
              <br />
              <input
                type="email"
                className="user_email"
                {...register("user_email", { required: true })}
                placeholder="Email"
                maxLength="50"
              />
              <br />
              <textarea
                className="message"
                {...register("message", { required: true })}
                placeholder="Message"
                maxLength="1500"
              />
              <p className="message-chars-left">{messageCharsLeft}</p>
              <br />

              <Button className=".btn--primary" type="submit" value="Send">
                SEND
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
