var actions = {
  showLoader: function() {
    return {
      type: getConstant().SHOW_LOADER,
      data: {
        show: true
      }
    };
  },
  hideLoader: function() {
    return {
      type: getConstant().SHOW_LOADER,
      data: {
        show: false
      }
    };
  }
};

function getConstant() {
	return cc.get('redux.constants');
}

export default actions;
