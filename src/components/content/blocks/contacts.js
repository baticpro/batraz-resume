import React from 'react';
import { MdMailOutline } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { TiSocialSkypeOutline } from 'react-icons/ti';
import { MY_MAIL, MY_SKYPE, MY_TOWN } from '../../../config';
import ContactForm from './forms/contact-form';
import { connect } from 'react-redux';
import { sendMessageAction } from '../../../redux/reducers/contacts';
import Loader from '../../shared/loader';
import './contacts.scss';

const Contacts = ({ sendMessage, loading }) => {
  const onSubmit = (message) => {
    sendMessage(message);
  };

  return (
    <div className="content-container contacts">
      <h3>
        Get in <span>Touch</span>
      </h3>

      <Loader size="small" loading={loading} />
      <div className="flex-grid">
        <div className="flex-30 contact-wrapper">
          <div className="contact-box shadowed">
            <MdMailOutline size={35} />
            <h4>{MY_MAIL}</h4>
          </div>
          <div className="contact-box shadowed">
            <GoLocation size={35} />
            <h4>{MY_TOWN}</h4>
          </div>
          <div className="contact-box shadowed">
            <TiSocialSkypeOutline size={35} />
            <h4>{MY_SKYPE}</h4>
          </div>
        </div>
        <div className="flex-70">
          <p className="hint">You can write me message right here and I'll get it on my email.</p>
          <ContactForm loading={loading} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  sendMessage: sendMessageAction,
};

const mapStateToProps = (state) => ({
  loading: state.contactsReducer.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
