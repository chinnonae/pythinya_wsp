var actions = {
  showAlertDialog: function(isShow, message) {
    return {
      type: getConstant().SHOW_ALERT_DIALOG,
      data: {
        isShow: isShow,
        message: message
      }
    };
  },
  toggleSnackBar: (isShow, message, callback) => {
    return {
      type: getConstant().TOGGLE_SNACK_BAR,
      data: {
        isShow: isShow,
        message: message,
        callback: callback
      }
    };
  }
};

const getConstant = () => {
  return cc.get('redux.constants');
};

export default actions;
