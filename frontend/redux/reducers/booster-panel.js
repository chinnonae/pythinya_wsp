const errorField = {
  max_mmr: false,
  min_mmr: false,
  price: false,
  day_used: false
};
var initialState = {
  contacts: [],
  history: [],
  filteredContacts: [],
  ticket: {
    clients: [{}]
  },
  dialog: {
    item: null
  },
  createTicketDialog: {
    isSuccess: true,
    errorField: errorField,
    message: ""
  },
  showConfirmDialog: false
};

var reducer = (state, action) => {
  const errorField = {
    max_mmr: false,
    min_mmr: false,
    price: false,
    day_used: false
  };
  state                          = typeof state === 'undefined' ? initialState : state;
  const constant                 = cc.get('redux.constants');
  const newState                 = _.clone(state, true);
  newState.errorField            = errorField;
  switch(action.type) {
    case constant.CONTACTLIST_CB:
      newState.contacts          = action.data.contacts;
      newState.filteredContacts  = action.data.contacts;
      return newState;
    case constant.HISTORY_CB:
      newState.history           = action.data.history;
      return newState;
    case constant.FILTER_CUSTOMER_NAME:
      newState.filteredContacts  = _.filter(state.contacts, function(contact){
        return (contact.first_name + " " + contact.last_name).toLowerCase().indexOf((action.data.word).toLowerCase()) >= 0;
      });
      return newState;
    case constant.CURRENT_TICKET_CB:
      newState.ticket            = action.data.ticket;
      return newState;
    case constant.TOGGLE_CONFIRM_DIALOG:
      newState.showConfirmDialog = action.data.isToggle;
      newState.dialog.item = action.data.item;
      return newState;
    case constant.CREATE_TICKET_CB:
      if (action.data.status === BAD_REQUEST) {
        newState.createTicketDialog.isSuccess = false;
        let fields = _.clone(errorField, true);
        _.map(action.data.field, function(field) {
          fields[field] = true;
        });
        newState.createTicketDialog.errorField = fields;
        newState.createTicketDialog.message = action.data.message;
      }else{
        location.reload();
      }
      return newState;
    default:
      return state;
  }
};

export default reducer;
