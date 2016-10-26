import cookie from 'js-cookie';
var action = {
	signinCallback: function(res) {
		var isSuccess = typeof res.token !== 'undefined';
    if(isSuccess) {
      saveToken(res.token);
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
      saveToken(res.token);
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
	}
};

function getConstant() {
	return cc.get('redux.constants');
}

function saveToken(token) {
  cookie.set('token', token);
}
cc.register('redux.actions.auth', action);
