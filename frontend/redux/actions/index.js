import auth from './auth';
import profile from './profile';
import boosterPanel from './booster-panel';
import waitme from './waitme';
var actions = _.merge({},auth, profile, waitme, boosterPanel);

cc.register('redux.actions', actions);
