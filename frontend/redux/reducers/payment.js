const initialState = {
  hasEnoughBalance: false,
  ticket: {
    booster: {},
    client: {}
  }
};

const reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;
  const constant = cc.get('redux.constants');
  const newState = _.clone(state);
  switch(action.type) {
    case constant.GET_TICKET_CB:
      newState.ticket = action.data.ticket;
      newState.hasEnoughBalance = action.data.hasEnoughBalance;
      return newState;
    default:
      return state;
  }
};

export default reducer;
