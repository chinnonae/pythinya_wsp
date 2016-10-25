
var action = {
  signinCallback: function(res) {
    return {
      type: getConstant().SIGNIN_CB,
      data: {
        isSuccess: typeof res.token !== 'undefined'
      }
    };
  },
  signupCallback: function(res) {
    return {
      type: getConstant().SIGNUP_CB,
      data: {
        isSuccess: typeof res.token !== 'undefined'
      }
    };
  }
};

function getConstant() {
  return cc.get('redux.constants');
}
cc.register('redux.actions.auth', action);
