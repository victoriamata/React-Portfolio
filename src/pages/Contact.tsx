import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs

const Contact: React.FC = () => {
  // State variables for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState(""); // Status message

  // EmailJS service setup
  const serviceID = "service_29lwgj8";
  const templateID = "template_lxibl8r";
  const userID = "1UPD38bpv3rTeuMYX";

  // Handler function for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if all fields are filled out
    if (!name || !email || !message) {
      setFormStatus("Please complete the form.");
    } else {
      // Send the email using EmailJS
      emailjs
        .sendForm(serviceID, templateID, userID)
        .then(
          (result) => {
            setFormStatus("Form submitted successfully!");
            console.log(result.text);
          },
          (error) => {
            setFormStatus("Something went wrong, please try again.");
            console.log(error.text);
          }
        );

      // Clear the form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name" // Add name attribute to match the template
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email" // Add name attribute to match the template
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message" // Add name attribute to match the template
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display form status message */}
      {formStatus && <p>{formStatus}</p>}
    </section>
  );
};

export default Contact;
