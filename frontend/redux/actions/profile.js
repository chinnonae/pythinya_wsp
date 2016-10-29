
var action = {
  profileCallback: function(profile) {
    return {
      type: getConstant().PROFILE_CB,
      data: {
        profile: profile
      }
    };
  }
};

function getConstant() {
	return cc.get('redux.constants');
}

export default action;
