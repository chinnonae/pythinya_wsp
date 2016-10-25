import {combineReducers} from 'redux';
import signinReducer from './signin';
var reducers = combineReducers({
  signin: signinReducer
});
cc.register('redux.reducers', reducers);
