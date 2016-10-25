import {combineReducers} from 'redux';
import signinReducer from './signin';
import signupReducer from './signup';
var reducers = combineReducers({
  signin: signinReducer,
  signup: signupReducer
});
cc.register('redux.reducers', reducers);
