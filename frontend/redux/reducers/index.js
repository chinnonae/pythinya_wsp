import {combineReducers} from 'redux';
import authReducer from './auth';
import profileReducer from './profile';
import boosterPanelReducer from './booster-panel';
import appReducer from './app';
import clientReducer from './client';
import paymentReducer from './payment';
import topupReducer from './topup';
import adminReducer from './admin';
var reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  app: appReducer,
  boosterPanel: boosterPanelReducer,
  clientPanel: clientReducer,
  payment: paymentReducer,
  topup: topupReducer,
  admin: adminReducer
});
cc.register('redux.reducers', reducers);
