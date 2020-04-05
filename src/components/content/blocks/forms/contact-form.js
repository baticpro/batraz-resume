import React, { useRef, useState } from 'react';
import './contact-form.scss';
import { ReCaptcha } from 'react-recaptcha-google';
import { RECAPTCHA_KEY } from '../../../../config';

const ContactForm = ({ onSubmit, loading }) => {
  const [name, setName] = useState('test');
  const [token, setToken] = useState('tnull');
  const [email, setEmail] = useState('rest@mail.ru');
  const [text, setText] = useState('testing text');
  const captchaRef = useRef(null);

  const onVerifyCaptcha = (t) => {
    setToken(t);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name, email, text, token });
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
        <ReCaptcha
          ref={captchaRef}
          size="normal"
          render="explicit"
          sitekey={RECAPTCHA_KEY}
          verifyCallback={onVerifyCaptcha}
        />
      </label>
      <button disabled={loading} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
