import auth from './auth';
import profile from './profile';
import boosterPanel from './booster-panel';
import waitme from './waitme';
import clientPanel from './client';
import payment from './payment';
import app from './app';
var actions = _.merge({},auth, profile, waitme, boosterPanel, payment, clientPanel, app);
cc.register('redux.actions', actions);
