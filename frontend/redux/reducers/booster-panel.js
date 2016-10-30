var initialState = {
  contacts: []
};

var reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;
  const constant = cc.get('redux.constants');
  const newState = _.clone(state);
  switch(action.type) {
    case constant.CONTACTLIST_CB:
      newState.contacts = action.data.contacts;
      return newState;
    default:
      return state;
  }
};

export default reducer;
