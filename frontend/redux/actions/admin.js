import constant from '../constants';
let actions = {
  getUsersCallback: (data) => {
    return {
      type: constant.ADMIN_GET_USERS_CB,
      data: data
    };
  },
  getBoostersCallback: (data) => {
    return {
      type: constant.ADMIN_GET_BOOSTERS_CB,
      data: data
    };
  }
};

export default actions;
