var initialState = {
  showLoader : false
};

const reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;
  const newState = _.clone(state);
  const constant = cc.get('redux.constants');
  switch(action.type) {
    case constant.SHOW_LOADER:
      newState.showLoader = action.data.show;
      return newState;
    default:
      return state;
  }
};

export default reducer;
