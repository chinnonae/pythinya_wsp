import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory} from 'react-router';
var Signin = cc.get('components.signin');
var Signup = cc.get('components.signup');
import App from './app.jsx';
injectTapEventPlugin();
export default class Wrapper extends React.Component {
	render() {
		return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='signin' component={Signin} />
          <Route path='signup' component={Signup} />
        </Route>
      </Router>
		);
	}
}
ReactDOM.render(
	<Wrapper/>, document.getElementById('app'));
