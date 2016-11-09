const action = {
  getPickedTicketCallback: function(res) {
    let profile = cc.get('services.profile').getProfile();
    console.log(profile);
    return {
      type: getConstant().GET_PICKED_TICKET_CB,
      data: {
        ticket: res,
        hasEnoughBalance: res.price <= parseInt(profile.user.coin)
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
