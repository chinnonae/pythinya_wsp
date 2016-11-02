import {combineReducers} from 'redux';
import authReducer from './auth';
import profileReducer from './profile';
import boosterPanelReducer from './booster-panel';
import appReducer from './app';
import clientReducer from './client';
var reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  app: appReducer,
  boosterPanel: boosterPanelReducer,
  clientPanel: clientReducer
});
cc.register('redux.reducers', reducers);
