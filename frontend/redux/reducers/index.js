import {combineReducers} from 'redux';
import authReducer from './auth';
import profileReducer from './profile';
import appReducer from './app';
var reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  app: appReducer
});
cc.register('redux.reducers', reducers);
