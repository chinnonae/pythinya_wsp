const initialState = null;

const reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;
  const newState = _.clone(state);
  const constant = cc.get('redux.constants');
  switch(action.type) {
    case constant.PROFILE_CB:
      return action.data.profile;
    default:
      return state;
  }
};

export default reducer;
