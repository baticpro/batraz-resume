import React from 'react';
import { MdClose } from 'react-icons/md';
import { connect } from 'react-redux';
import { setClearAction } from '../../redux/reducers/contacts';
import './alert.scss';

const Alert = ({ success, fail, clear }) => {
  if (!success && !fail) return null;

  return (
    <div className={`alert shadowed ${success ? 'alert-success' : 'alert-danger'}`}>
      {success || fail}

      <div className="close" onClick={() => clear(true)}>
        <MdClose />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  clear: setClearAction,
};

const mapStateToProps = (state) => ({
  loading: state.contactsReducer.loading,
  success: state.contactsReducer.success,
  error: state.contactsReducer.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
