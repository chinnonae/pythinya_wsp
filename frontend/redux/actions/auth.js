import cookie from 'js-cookie';
var action = {
	signinCallback: function(res) {
		var isSuccess = typeof res.token !== 'undefined';
    if(isSuccess) {
      cookie.set('token', res.token);
      window.location = "/";
    }
		return {
			type: getConstant().SIGNIN_CB,
			data: {
				isSuccess: isSuccess
			}
		};
	},
	signupCallback: function(res) {
		var isSuccess = res.status === SUCCESS;
		var message = "";
		if (isSuccess) {
      cookie.set('token', res.token);
      window.location = "/";
		} else {
			message = res.message;
		}
		return {
			type: getConstant().SIGNUP_CB,
			data: {
				isSuccess: isSuccess,
				message: message
			}
		};
	},
  signoutCallback: function() {
    cookie.remove('token');
    window.location = '/';
    return {
      type: getConstant().SIGNOUT
    };
  },
  boosterSignupCallback: (res) => {
    var isSuccess = res.status === SUCCESS;
    var message = "";
    if (isSuccess) {
      window.location = "/";
    } else {
      message = res.message;
    }
    return {
      type: getConstant().BOOSTER_SIGNUP_CB,
      data: {
        isSuccess: isSuccess,
        message: message
      }
    };
  }
};

function getConstant() {
	return cc.get('redux.constants');
}

export default action;
cc.register('redux.actions.auth', action);
