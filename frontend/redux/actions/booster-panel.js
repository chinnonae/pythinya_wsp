const actions = {
  getContactsListCallback: function (res) {
    return {
      type: getConstant().CONTACTLIST_CB,
      data: {
        contacts: res.result
      }
    };
  }
};

function getConstant() {
	return cc.get('redux.constants');
}

export default actions;
