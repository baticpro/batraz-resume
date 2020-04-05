// ducks pattern

import { AWS_LAMBDA_URL } from '../../config';

const MESSAGE_LOADING_ACTION = 'MESSAGE_LOADING_ACTION';
const MESSAGE_FAIL_ACTION = 'MESSAGE_FAIL_ACTION';

export const setLoadingAction = (loading) => ({
  type: MESSAGE_LOADING_ACTION,
  loading,
});

export const sendMessageAction = (message) => (dispatch) => {
  dispatch(setLoadingAction(true));

  fetch(AWS_LAMBDA_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(message),
  })
    .then((data) => {
      console.log(data);
      dispatch(setLoadingAction(false));
    })
    .catch((e) => {
      console.log(e);
    });
};

export const setErrorAction = (error) => ({
  type: MESSAGE_FAIL_ACTION,
  error,
});

const initialState = {
  loading: false,
  error: {},
};

export const contactsReducer = (state = initialState, { type, ...rest }) => {
  // IMHO switch case getting faq
  if (type) return { ...initialState, ...rest };
  return state;
};
