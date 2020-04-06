import React, { useState } from 'react';
import './contact-form.scss';

const ContactForm = ({ onSubmit, loading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit({ name, email, text });

    // TODO refactor this bullshit
    setName('');
    setEmail('');
    setText('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Your name:"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          placeholder="Your email:"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <textarea
          placeholder="Message:"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </label>
      <button disabled={loading} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
