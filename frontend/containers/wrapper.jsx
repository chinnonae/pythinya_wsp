import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
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
<<<<<<< HEAD

=======
    var BoosterPanel = cc.get('components.boosterPanel');
>>>>>>> development
    waitmeService.subscribe(this.store);
		var Main = cc.get('components.main');

    var Carousel = cc.get('components.carousel');

		return (
			<Provider store={this.store}>
				<Router onUpdate={this.loadJS.bind(this)} history={browserHistory}>
					<Route path='/' component={App}>
<<<<<<< HEAD
						<IndexRoute component={Main}/>
						<Route path='signin' component={Signin}/>
						<Route path='signup' component={Signup}/>
            <Route path='carousel' component={Carousel}/>
=======
						<Route path='signin' component={Signin} />
						<Route path='signup' component={Signup} />
            <Route path='booster_panel' component={BoosterPanel} />
>>>>>>> development
					</Route>
				</Router>
			</Provider>
		);
	}
}

cc.register('root', Wrapper);
