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
      data: data.boosters
    };
  },
  getPendingBoostersCallback: (data) => {
    return {
      type: constant.ADMIN_GET_PENDING_BOOSTERS_CB,
      data: data.pending_booster
    };
  },
  pendingBoosterAction: (data) => {
    location.reload();
    return {
      type: constant.ADMIN_PENDING_BOOSTERS_ACTION_CB
    };
  }
};

export default actions;
