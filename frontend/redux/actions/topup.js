
let actions = {
  getTopupsCallback: (data) => {
    return {
      type: getConstant().GET_TOPUPS_CB,
      data: data
    };
  }
};

function getConstant() {
	return cc.get('redux.constants');
}
