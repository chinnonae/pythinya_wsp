import auth from './auth';
import profile from './profile';
import waitme from './waitme';
var actions = _.merge({},auth,profile, waitme);

cc.register('redux.actions', actions);
