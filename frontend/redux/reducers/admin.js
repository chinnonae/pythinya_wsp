import constant from '../constants';
let initialState = {
  users: [{
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
  }]
};

let reducer = (state, action) => {
  state = typeof state === 'undefined' ? initialState : state;
  let newState = _.clone(state);
  switch(action.type) {
    case constant.ADMIN_GET_USERS_CB:
      newState.users = action.data;
      return newState;
    case constant.ADMIN_GET_BOOSTERS_CB:
      newState.boosters = action.data;
      return newState;
    default:
      return state;
  }
};

export default reducer;
