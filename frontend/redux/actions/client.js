var actions = {
  buyTicketCallback: function(res) {
    return {
      type: getConstant().BUY_TICKET_CB,
      data: res
    };
  },
  toggleConfirmBuyDialog: function(isShow, data) {
    return {
      type: getConstant().TOGGLE_BUY_TICKET_CONFIRM_DIALOG,
      data: data,
      isShow: isShow
    };
  },
  getTicketCallback: function(res) {
    return {
      type: getConstant().GET_TICKET_CB,
      data: res.result
    };
  }
};

const getConstant = () => {
  return cc.get('redux.constants');
};

export default actions;
