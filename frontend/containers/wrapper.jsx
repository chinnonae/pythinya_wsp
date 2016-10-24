import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory} from 'react-router';
import Signin from './auth/signin.jsx';
import Signup from './auth/signup.jsx';
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
