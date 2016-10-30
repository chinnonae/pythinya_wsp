import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


import App from './app.jsx';
injectTapEventPlugin();
class Wrapper extends React.Component {
	constructor(props) {
		super(props);
    const reducers = cc.get('redux.reducers');
    this.store = createStore(reducers);
	}
	render() {
    var Signin = cc.get('components.signin');
    var Signup = cc.get('components.signup');
		var Main = cc.get('components.main');
		return (
			<Provider store={this.store}>
				<Router history={browserHistory}>
					<Route path='/' component={App}>
						<IndexRoute component={Main}/>
						<Route path='signin' component={Signin}/>
						<Route path='signup' component={Signup}/>
					</Route>
				</Router>
			</Provider>
		);
	}
}

cc.register('root', Wrapper);
