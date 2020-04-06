// ducks pattern

import { AWS_LAMBDA_URL, FAIL_MESSAGE, SUCCESS_MESSAGE } from '../../config';
import { executeRecaptcha } from '../../utils/re-captcha';

const MESSAGE_LOADING_ACTION = 'MESSAGE_LOADING_ACTION';
const MESSAGE_SUCCESS_ACTION = 'MESSAGE_LOADING_SUCCESS';
const MESSAGE_FAIL_ACTION = 'MESSAGE_LOADING_SUCCESS';
const MESSAGE_CLEAR_ACTION = 'MESSAGE_CLEAR_SUCCESS';

export const setClearAction = (clear) => ({
  type: MESSAGE_CLEAR_ACTION,
  clear,
});

export const setLoadingAction = (loading) => ({
  type: MESSAGE_LOADING_ACTION,
  loading,
});

export const setSuccessAction = (success) => ({
  type: MESSAGE_SUCCESS_ACTION,
  success,
});

export const setFailAction = (error) => ({
  type: MESSAGE_FAIL_ACTION,
  error,
});

export const sendMessageAction = (message) => async (dispatch) => {
  dispatch(setLoadingAction(true));

  try {
    const token = await executeRecaptcha();
    const data = await fetch(AWS_LAMBDA_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ ...message, token }),
    });

    console.log(data);
    dispatch(setSuccessAction(SUCCESS_MESSAGE));
  } catch (e) {
    console.log(e);
    dispatch(setFailAction(FAIL_MESSAGE));
  }
};

const initialState = {
  loading: false,
  error: null,
  success: null,
};

export const contactsReducer = (state = initialState, { type, ...rest }) => {
  // IMHO switch case getting faq
  if (type) return { ...initialState, ...rest };
  return state;
};
