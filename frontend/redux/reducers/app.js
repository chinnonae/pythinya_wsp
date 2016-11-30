var initialState = {
  showLoader : false,
  alertDialog: {
    isShow: false,
    message: ''
  },
  snackbar: {
    isShow: false,
    message: '',
    callback: null
  }
};

const reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;
  const newState = _.clone(state);
  const constant = cc.get('redux.constants');
  switch(action.type) {
    case constant.SHOW_LOADER:
      newState.showLoader = action.data.show;
      return newState;
    case constant.SHOW_ALERT_DIALOG:
      newState.alertDialog.isShow = action.data.isShow;
      newState.alertDialog.message = action.data.message;
      return newState;
    case constant.TOGGLE_SNACK_BAR:
      newState.snackbar.isShow = action.data.isShow;
      newState.snackbar.message = action.data.message;
      newState.snackbar.callback = action.data.callback;
      return newState;
    default:
      return state;
  }
};

export default reducer;
