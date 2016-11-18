let actions = {
  makePaymentCallback: (res) => {
    return {
      type: cc.get('redux.constants').MAKE_PAYMENT_CALLBACK,
      data: res
    };
  }
};

export default actions;
