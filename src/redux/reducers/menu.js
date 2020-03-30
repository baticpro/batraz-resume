// ducks pattern

const SET_ACTIVE_ACTION = 'SET_ACTIVE_ACTION';

export const setActiveAction = (active) => ({
  type: SET_ACTIVE_ACTION,
  active,
});

const initialState = {
  active: 'about-me',
};

export const menuReducer = (state = initialState, action) => {
  if (action.type === SET_ACTIVE_ACTION) {
    return { ...state, active: action.active };
  }

  return state;
};
