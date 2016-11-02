const actions = {
  getContactsListCallback: function (res) {
    return {
      type: getConstant().CONTACTLIST_CB,
      data: {
        contacts: res
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
    return {
      type: getConstant().CURRENT_TICKET_CB,
      data: {
        ticket: res
      }
    };
  },
  toggleConfirmDialog: function(isToggle,item) {
    return {
      type: getConstant().TOGGLE_CONFIRM_DIALOG,
      data: {
        isToggle: isToggle,
        item: item
      }
    };
  },
  startBoostingCallback: function(res) {
    return {
      type: getConstant().START_BOOSTING_CB
    };
  }
};

function getConstant() {
	return cc.get('redux.constants');
}

export default actions;
