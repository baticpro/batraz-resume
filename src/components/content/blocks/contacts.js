import React from 'react';
import { MdMailOutline } from 'react-icons/md';
import { MY_MAIL } from '../../../config';
import ContactForm from './forms/contact-form';
import { connect } from 'react-redux';
import { sendMessageAction } from '../../../redux/reducers/contacts';

const Contacts = ({ sendMessage }) => {
  const onSubmit = (message) => {
    sendMessage(message);
  };

  return (
    <div className="content-container contacts">
      <h3>
        Get in <span>Touch</span>
      </h3>

      <div className="flex-grid">
        <div className="flex-30">
          <div className="contact-box">
            <MdMailOutline size={45} />
            <h4>{MY_MAIL}</h4>
          </div>
        </div>
        <div className="flex-70">
          <ContactForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  sendMessage: sendMessageAction,
};

export default connect(null, mapDispatchToProps)(Contacts);
