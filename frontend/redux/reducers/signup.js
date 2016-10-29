const initialState = {
	isSuccess: true,
  message: ""
};

const reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;

  const constants = cc.get('redux.constants');
  const newState = _.clone(state);

  switch(action.type) {
    case constants.SIGNUP_CB:
      newState.isSuccess = action.data.isSuccess;
      newState.message = action.data.message;
      return newState;
    default:
      return state;
  }
};

export default reducer;
