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
    case constant.GET_PICKED_TICKET_CB:
      newState.ticket = action.data.ticket;
      newState.hasEnoughBalance = action.data.hasEnoughBalance;
      return newState;
    case constant.BUY_PICKED_TICKET_CB:
      return newState;
    case constant.CANCEL_PICKED_TICKET_CB:
      window.location = '/client';
      return newState;
    default:
      return state;
  }
};

export default reducer;
