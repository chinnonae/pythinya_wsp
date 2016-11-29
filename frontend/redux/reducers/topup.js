const intialState = {
  currentTopup: {},
  topups: []
};

let reducer = (state, action) => {
  state = typeof state === 'undefined' ? intialState : state;
  const newState = _.clone(state, true);
  const constant = cc.get('redux.constants');
  switch(action.type) {
    case constant.GET_TOPUPS_CB:
      console.log(data);
      newState.topups = data;
      return newState;
    default:
      return state;
  }
};

export default reducer;
