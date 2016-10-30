var initialState = {
  contacts: [],
  history: [],
  filteredContacts: [],
  ticket: {
    client: {}
  }
};

var reducer = (state, action) => {
  state                         = typeof state === 'undefined' ? initialState : state;
  const constant                = cc.get('redux.constants');
  const newState                = _.clone(state);
  switch(action.type) {
    case constant.CONTACTLIST_CB:
      newState.contacts         = action.data.contacts;
      newState.filteredContacts = action.data.contacts;
      return newState;
    case constant.HISTORY_CB:
      newState.history          = action.data.history;
      return newState;
    case constant.FILTER_CUSTOMER_NAME:
      newState.filteredContacts = _.filter(state.contacts, function(contact){
        return (contact.first_name + " " + contact.last_name).toLowerCase().indexOf((action.data.word).toLowerCase()) >= 0;
      });
      return newState;
    case constant.CURRENT_TICKET_CB:
      newState.ticket           = action.data.ticket;
      return newState;
    default:
      return state;
  }
};

export default reducer;
