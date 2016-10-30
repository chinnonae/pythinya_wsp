import {combineReducers} from 'redux';
import authReducer from './auth';
import profileReducer from './profile';
import boosterPanelReducer from './booster-panel';
var reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  boosterPanel: boosterPanelReducer
});
cc.register('redux.reducers', reducers);
