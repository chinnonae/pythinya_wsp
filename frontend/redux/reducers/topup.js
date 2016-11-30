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
      newState.topups = _.sortBy(action.data, (data) => { return data.coin; });
      return newState;
    case constant.SET_CURRENT_TOPUP:
      newState.currentTopup = state.topups[action.topupId];
      return newState;
    default:
      return state;
  }
};

export default reducer;
