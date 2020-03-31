// ducks pattern

const MESSAGE_LOADING_ACTION = 'MESSAGE_LOADING_ACTION';
const MESSAGE_FAIL_ACTION = 'MESSAGE_FAIL_ACTION';

export const setLoadingAction = (loading) => ({
  type: MESSAGE_LOADING_ACTION,
  loading,
});

export const sendMessageAction = (message) => (dispatch) => {
  dispatch(setLoadingAction(true));

  setTimeout(() => {
    console.log(message);
    dispatch(setLoadingAction(false));
  }, 2000);
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
