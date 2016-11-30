import constant from '../constants';
let initialState = {
  users: [],
  boosters: [{
    name: "Taweerat Chaiman",
    email: 'taweesoft@gmail.com',
    coins: 15000,
    current_mmr: 4500,
    status: 'Being boosted'
  },
  {
    name: "Patinya Yongyai",
    email: 'patinya@gmail.com',
    coins: 7500,
    current_mmr: 3000,
    status: 'Available'
  },{
    name: "Thongrapee Panyapathipan",
    email: 'kulaspa@gmail.com',
    coins: 3000,
    current_mmr: 5525,
    status: 'Waiting for payment'
  }],

  pending_boosters: [{
    name: "Taweerat Chaiman",
    email: 'taweesoft@gmail.com',
    coins: 15000,
    current_mmr: 4500,
    telephone: "0832529994",
    steam_id: "taweesoft",
    status: 'Being boosted'
  },
  {
    name: "Patinya Yongyai",
    email: 'patinya@gmail.com',
    coins: 7500,
    current_mmr: 3000,
    telephone: "0834445234",
    steam_id: "sasmaxnot19",
    status: 'Available'
  }]
};

let reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;
  let newState = _.clone(state);
  switch(action.type) {
    case constant.ADMIN_GET_USERS_CB:
      newState.users = userFormatter(action.data);
      return newState;
    case constant.ADMIN_GET_VERIFIED_BOOSTERS_CB:
      newState.boosters = action.data;
      return newState;
    case constant.ADMIN_GET_PENDING_BOOSTERS_CB:
      newState.pending = action.data;
      return newState;
    default:
      return state;
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
      status: data.status
    };
    formatted.push(obj);
  });
  return formatted;
};

export default reducer;
