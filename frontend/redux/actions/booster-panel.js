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
  }
};

function getConstant() {
	return cc.get('redux.constants');
}

export default actions;
