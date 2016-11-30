
let actions = {
  getTopupsCallback: (data) => {
    return {
      type: getConstant().GET_TOPUPS_CB,
      data: data
    };
  },
  setCurrentTopup: (topupId) => {
    return {
      type: getConstant().SET_CURRENT_TOPUP,
      topupId: topupId
    };
  }
};

function getConstant() {
	return cc.get('redux.constants');
}

export default actions;
