const action = {
  getTicketCallback: function(res) {
    return {
      type: getConstant().GET_TICKET_CB,
      data: {
        ticket: res.ticket,
        hasEnoughBalance: res.ticket.price <= 4000 // TODO: REMOVE THIS!!! use the real balance from profile
      }
    };
  },
  buyTicketCallback: function(res) {
    return {
      type: getConstant().BUY_TICKET_CB
    };
  }
};

function getConstant() {
  return cc.get('redux.constants');
}

export default action;
