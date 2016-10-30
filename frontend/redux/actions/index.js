import auth from './auth';
import profile from './profile';
import boosterPanel from './booster-panel';
var actions = _.merge({},auth,profile, boosterPanel);

cc.register('redux.actions', actions);
