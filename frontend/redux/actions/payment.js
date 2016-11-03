const action = {
  getPickedTicketCallback: function(res) {
    return {
      type: getConstant().GET_PICKED_TICKET_CB,
      data: {
        ticket: res,
        hasEnoughBalance: res.price <= 4000 // TODO: REMOVE THIS!!! use the real balance from profile
      }
    };
  },
  payPickedTicketCallback: function(res) {
    return {
      type: getConstant().PAY_PICKED_TICKET_CB
    };
  },
  cancelPickedTicketCallback: function(res) {
    return {
      type: getConstant().CANCEL_PICKED_TICKET_CB
    };
  }
};

function getConstant() {
  return cc.get('redux.constants');
}

export default action;
