import auth from './auth';
import profile from './profile';
import boosterPanel from './booster-panel';
import waitme from './waitme';
import payment from './payment';
var actions = _.merge({},auth, profile, waitme, boosterPanel, payment);

cc.register('redux.actions', actions);
