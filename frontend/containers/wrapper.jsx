import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './app.jsx';
const waitmeService = cc.get('services.waitme');
const actions = cc.get('redux.actions');
injectTapEventPlugin();
let store;
class Wrapper extends React.Component {
	constructor(props) {
		super(props);
    const reducers = cc.get('redux.reducers');
    this.store = createStore(reducers);
    store = this.store;
	}
  loadJS() {
    $('input').phAnim(); //call animated-input everytime that dom updated
  }
	render() {
    var Signin = cc.get('components.signin');
    var Signup = cc.get('components.signup');
    var BoosterPanel = cc.get('components.boosterPanel');
    var ClientPanel = cc.get('components.clientPanel.wrapperTemp');
    let CreateTicket = cc.get('components.createTicket');
    var PackageListPanel = cc.get('components.topup.packageListPanel');
    var PackagePaymentPanel = cc.get('components.topup.packagePaymentPanel');
    var BoosterInfo = cc.get('components.booster-info.wrapper');
    waitmeService.subscribe(this.store);
		var Main = cc.get('components.main');
		var BoosterList = cc.get('components.booster_list');
    var Carousel = cc.get('components.carousel');
    var Checkout = cc.get('components.checkout.wrapper');

		return (
			<Provider store={this.store}>
				<Router onUpdate={this.loadJS.bind(this)} history={browserHistory}>
					<Route path='/' onEnter={loadProfile} component={App}>
						<IndexRoute onEnter={isAuth} component={Main}/>
						<Route path='signin' component={Signin}/>
						<Route path='signup' component={Signup}/>
						<Route path='client' onEnter={isPicked} component={BoosterList}/>
            <Route path='booster_panel' onEnter={requirePermission} component={BoosterPanel} />
            <Route path='track'>
              <Route path='checkout' onEnter={isPickedCheckout} component={Checkout}/>
              <Route path='boosting' component={BoosterInfo}/>
            </Route>
            <Route path='topup' component={PackageListPanel}></Route>
            <Route path='topup/:packageId' component={PackagePaymentPanel} />
					</Route>
				</Router>
			</Provider>
		);
	}
}

const loadProfile = (nextState, replace, callback) => {
  cc.get('services.profile').fetchProfile()
  .then((res) => {
    console.log('loading profile');
    console.log(res);
    store.dispatch(actions.profileCallback(res));
    callback();
  });
};

const track = (nextState, replace, callback) => {
  cc.get('services.profile').fetchProfile()
  .then((res) => {
    if(res === null) { // not sign in
      replace('/signin');
    }else if((res.holding_ticket).length === 0){
      replace('/client');
    }else {
      replace('/track/checkout');
    }
    callback();
  });
};

const isPickedCheckout = (nextState, replace, callback) => {
  cc.get('services.profile').fetchProfile()
  .then((res) => {
    if(res === null) { // not sign in
      replace('/signin');
    }else if((res.holding_ticket)[0].status === BOOSTING){
      replace('/track/boosting');
    }
    callback();
  });
};

const isPickedBoosting = (nextState, replace, callback) => {
  cc.get('services.profile').fetchProfile()
  .then((res) => {
    if(res === null) { // not sign in
      replace('/signin');
    }else if((res.holding_ticket)[0].status === WAITING_FOR_PAYMENT){
      replace('/track/checkout');
    }
    callback();
  });
};

const isPicked = (nextState, replace, callback) => {
  cc.get('services.profile').fetchProfile()
  .then((res) => {
    if(res === null) { // not sign in
      replace('/signin');
    }else if((res.holding_ticket).length > 0) {
      replace('/track');
    }
    callback();
  });
};

const isAuth =(nextState, replace, callback) => {
  cc.get('services.profile').fetchProfile()
  .then((res) => {
    if(res !== null) { // not sign in
      replace('/client');
    }
    callback();
  });
};
const requirePermission = (nextState, replace, callback) => {
  cc.get('services.profile').fetchProfile()
  .then((res) => {
    if(res === null) { // not sign in
      replace('/signin');
    }else if(!res.user.is_booster) {
      replace('/');
    }else if(!res.boosting_ticket) {
      store.dispatch(actions.showAlertDialog(true, 'You have to create ticket first.'));
      replace('/client');
    }
    callback();
  });
};

cc.register('root', Wrapper);
