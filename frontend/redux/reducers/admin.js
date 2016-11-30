import constant from '../constants';
let initialState = {
  users: [],
  boosters: []
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
