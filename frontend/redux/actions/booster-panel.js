const actions = {
  getContactsListCallback: function (res) {
    return {
      type: getConstant().CONTACTLIST_CB,
      data: {
        contacts: res.result
      }
    };
  },
  getHistoryCallback: function (res) {
    return {
      type: getConstant().HISTORY_CB,
      data: {
        history: res.result
      }
    };
  },
  filterCustomer: function (word) {
    return {
      type: getConstant().FILTER_CUSTOMER_NAME,
      data: {
        word: word
      }
    };
  },
  getCurrentTicketCallback: function (res) {
    console.log(res);
    return {
      type: getConstant().CURRENT_TICKET_CB,
      data: {
        ticket: res.result
      }
    };
  },
  toggleConfirmDialog: function(isToggle) {
    return {
      type: getConstant().TOGGLE_CONFIRM_DIALOG,
      data: {
        isToggle: isToggle
      }
    };
  }
};

function getConstant() {
	return cc.get('redux.constants');
}

export default actions;
