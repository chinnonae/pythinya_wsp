let initialState = {
  tickets: [],
  buyDialog: {
    isShow: false,
    ticket: null
  }
};

const reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;
  const constant = cc.get('redux.constants');
  const newState = _.clone(state, true);
  switch(action.type) {
    case constant.BUY_TICKET_CB:
      location.reload();
      return newState;
    case constant.TOGGLE_BUY_TICKET_CONFIRM_DIALOG:
      newState.buyDialog.isShow = action.isShow;
      newState.buyDialog.ticket = action.data;
      return newState;
    case constant.SHOW_ALERT_DIALOG:
      if(action.data.isShow) {
        newState.buyDialog.isShow = false;
      }
      return newState;
    case constant.GET_TICKET_CB:
      newState.tickets = action.data;
      return newState;
    default:
      return state;
  }
};

export default reducer;
