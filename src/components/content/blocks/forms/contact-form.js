import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [text, setText] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name, email, text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Your email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <input type="submit" value="Отправить" />
    </form>
  );
};

export default ContactForm;
