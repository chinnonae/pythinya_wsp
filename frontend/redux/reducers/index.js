import {combineReducers} from 'redux';
import authReducer from './auth';
import profileReducer from './profile';
import boosterPanelReducer from './booster-panel';
import appReducer from './app';
var reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  app: appReducer,
  boosterPanel: boosterPanelReducer
});
cc.register('redux.reducers', reducers);
