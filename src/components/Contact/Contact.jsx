import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef(); // Ref for the form
  const [done, setDone] = useState(false); // State to handle form submission feedback

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Use emailjs to send form data
    emailjs
      .sendForm(
        "service_6j203sw", // Your EmailJS service ID
        "template_cyddn27", // Your EmailJS template ID
        form.current, // Form reference
        "uOiYLKxlqCbxy7H-t" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text); // Log the result of the email send
          setDone(true); // Update state to show success message
          form.current.reset(); // Reset the form after submission
        },
        (error) => {
          console.log(error.text); // Log any errors during email sending
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* Left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      {/* Right side (Form) */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          {/* Name input */}
          <input
            type="text"
            name="user_name" // This name must match the one in your EmailJS template
            className="user"
            placeholder="Name"
            required // Make the field required
          />
          {/* Email input */}
          <input
            type="email"
            name="user_email" // This name must match the one in your EmailJS template
            className="user"
            placeholder="Email"
            required // Make the field required
          />
          {/* Message input */}
          <textarea
            name="message" // This name must match the one in your EmailJS template
            className="user"
            placeholder="Message"
            required // Make the field required
          />
          {/* Submit button */}
          <input type="submit" value="Send" className="button" />
          {/* Show success message if form is submitted */}
          <span>{done && "Thanks for Contacting me!"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
