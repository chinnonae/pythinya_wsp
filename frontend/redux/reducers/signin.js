const initialState = {
	isSuccess: true
};

const reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;

  const constants = cc.get('redux.constants');
  const newState = _.clone(state);

  switch(action.type) {
    case constants.SIGNIN_CB:
      newState.isSuccess = action.data.isSuccess;
      return newState;
    default:
      return state;
  }
};

export default reducer;
