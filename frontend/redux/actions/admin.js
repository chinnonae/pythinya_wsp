import constant from '../constants';
let actions = {
  getUsersCallback: (data) => {
    return {
      type: constant.ADMIN_GET_USERS_CB,
      data: data.clients
    };
  },
  getVerifiedBoostersCallback: (data) => {
    return {
      type: constant.ADMIN_GET_VERIFIED_BOOSTERS_CB,
      data: data
    };
  },
  getPendingBoostersCallback: (data) => {
    return {
      type: constant.ADMIN_GET_PENDING_BOOSTERS_CB,
      data: data
    };
  }
};

export default actions;
