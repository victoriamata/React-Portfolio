import React, { useState } from 'react';

const Contact: React.FC = () => {
  // State variables for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(''); // Status message

  // Handler function for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if all fields are filled out
    if (!name || !email || !message) {
      setFormStatus('Please complete form.');
    } else {
      setFormStatus('Submitted contact form.');
      // Clear the form fields after submission
      setName('');
      setEmail('');
      setMessage('');
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
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

