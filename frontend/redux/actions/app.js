var actions = {
  showAlertDialog: function(isShow, message) {
    return {
      type: getConstant().SHOW_ALERT_DIALOG,
      data: {
        isShow: isShow,
        message: message
      }
    };
  }
};

const getConstant = () => {
  return cc.get('redux.constants');
};

export default actions;
