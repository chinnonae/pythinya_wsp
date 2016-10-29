import auth from './auth';
import profile from './profile';
var actions = _.merge({},auth,profile);

cc.register('redux.actions', actions);
