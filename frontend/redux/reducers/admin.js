import constant from '../constants';
let initialState = {
  users: [],
  boosters: [],
  pending_boosters: []
};

let reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;
  let newState = _.clone(state);
  switch(action.type) {
    case constant.ADMIN_GET_USERS_CB:
      newState.users = userFormatter(action.data);
      return newState;
    case constant.ADMIN_GET_VERIFIED_BOOSTERS_CB:
      newState.boosters = userFormatter(action.data);
      return newState;
    case constant.ADMIN_GET_PENDING_BOOSTERS_CB:
      newState.pending = boosterFormatter(action.data);
      return newState;
    case constant.ADMIN_PENDING_BOOSTERS_ACTION_CB:
      return newState;
    default:
      return state;
  }
};

const getStatus = (status, isBooster) => {
  switch(status){
    case AVAILABLE:
      return 'Available';
    case WAITING_FOR_PAYMENT:
      return 'Waiting for payment';
    case BOOSTING:
      if(isBooster) {
        return "Boosting";
      }else {
        return 'Being Boosted';
      }
  }
};
const userFormatter = (raw) => {
  let formatted = [];
  _.map(raw, (data) => {
    let obj = {
      name: data.first_name + " " + data.last_name,
      coins: data.coin,
      current_mmr: data.currentMMR === -1 ? 'TBA' : data.currentMMR,
      email: data.email,
      status: getStatus(data.status),
      telephone: data.telephone,
      steam_id: data.steam_id
    };
    formatted.push(obj);
  });
  return formatted;
};

const boosterFormatter = (raw) => {
  let formatted = [];
  _.map(raw, (data) => {
    let obj = {
      name: data.user.first_name + " " + data.user.last_name,
      coins: data.user.coin,
      current_mmr: data.current_mmr === -1 ? 'TBA' : data.current_mmr,
      email: data.user.email,
      status: 'Pending',
      telephone: data.user.telephone,
      steam_id: data.steam_id,
      id: data.user.id,
      src: `/assets/id_card/${data.id_card_image_src}`
    };
    formatted.push(obj);
  });
  return formatted;
};

export default reducer;
