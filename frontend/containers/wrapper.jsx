import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './app.jsx';
const waitmeService = cc.get('services.waitme');
injectTapEventPlugin();
class Wrapper extends React.Component {
	constructor(props) {
		super(props);
    const reducers = cc.get('redux.reducers');
    this.store = createStore(reducers);
	}
  loadJS() {
    $('input').phAnim(); //call animated-input everytime that dom updated
  }
	render() {
    var Signin = cc.get('components.signin');
    var Signup = cc.get('components.signup');
    var BoosterPanel = cc.get('components.boosterPanel');
    waitmeService.subscribe(this.store);
		return (
			<Provider store={this.store}>
				<Router onUpdate={this.loadJS.bind(this)} history={browserHistory}>
					<Route path='/' component={App}>
						<Route path='signin' component={Signin} />
						<Route path='signup' component={Signup} />
            <Route path='booster_panel' onEnter={requirePermission} component={BoosterPanel} />
					</Route>
				</Router>
			</Provider>
		);
	}
}

const requirePermission = (nextState, replace, callback) => {
  let cb = (res) => {
    if(res === null) { // not sign in
      replace('/signin');
    }else if(!res.user.is_booster) {
      replace('/');
    }
    callback();
  };
  let profile = cc.get('services.profile').getProfile(cb);
};

cc.register('root', Wrapper);
