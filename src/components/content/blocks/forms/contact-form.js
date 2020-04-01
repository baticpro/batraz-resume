import React, { useState } from 'react';
import './contact-form.css';

const ContactForm = ({ onSubmit, loading }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [text, setText] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name, email, text });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Your name:"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Your email:"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <textarea placeholder="Message:" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button disabled={loading} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;