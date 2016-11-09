const initialState = {
  isAuth: false
};

const reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;
  const newState = _.clone(state);
  const constant = cc.get('redux.constants');
  switch(action.type) {
    case constant.PROFILE_CB:
      let isAuth = action.data.profile === null ? false : true;
      return _.merge(newState, action.data.profile, {isAuth: isAuth});
    default:
      return state;
  }
};

export default reducer;
