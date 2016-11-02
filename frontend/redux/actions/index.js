import auth from './auth';
import profile from './profile';
import boosterPanel from './booster-panel';
import waitme from './waitme';
import clientPanel from './client';
var actions = _.merge({},auth, profile, waitme, boosterPanel, clientPanel);

cc.register('redux.actions', actions);
