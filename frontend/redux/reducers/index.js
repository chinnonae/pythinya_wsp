import {combineReducers} from 'redux';
import authReducer from './auth';
import profileReducer from './profile';
var reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer
});
cc.register('redux.reducers', reducers);
