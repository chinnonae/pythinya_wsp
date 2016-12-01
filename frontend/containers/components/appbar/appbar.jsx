import {AppBar, FlatButton} from 'material-ui';
var action = cc.get('redux.actions');
var profileService = cc.get('services.profile');
var authService = cc.get('services.auth');
class Appbar extends React.Component {
  componentDidMount() {
    /* call get profile after first render*/
    profileService.fetchProfile().then((res) => { this.props.actions.profileCallback(res); });
  }
  signout() {
    authService.signout(this.props.actions.signoutCallback);
  }
  render() {
    var view;
    let boosterPanelView;
    if(this.props.reducer.profile.isAuth) { // If user has been logged in
      if(this.props.reducer.profile.user.is_booster) {
        boosterPanelView = (
          <FlatButton id="booster-panel-btn">
            <Link className="link-button" style={{color: "white"}} to={'/booster_panel'}>Booster Panel</Link>
          </FlatButton>
        );
      }
      var name = serializeName(this.props.reducer.profile.user);
      view = (
        <div>
          <FlatButton>
            <Link className="link-button" style={{color: "white"}} to={'/client'}>Tickets</Link>
          </FlatButton>
          {boosterPanelView}
          <FlatButton id="signout-btn" onClick={this.signout.bind(this)} style={{color: "white"}}>
            <Link className="link-button" style={{color: "white"}} >{name}</Link>
          </FlatButton>
        </div>
      );
    } else { //otherwise show sign in and sign up button.
      view = (
        <div>
          <FlatButton id="signin-button">
            <Link className="link-button" style={{color: "white"}} to={'/signin'}>Sign in</Link>
          </FlatButton>
          <FlatButton id="signup-button">
            <Link className="link-button" style={{color: "white"}} to={'/signup'}>Sign up</Link>
          </FlatButton>
        </div>
      );
    }
    var rightComponent = (
      <div className="container-middle" >
        {view}
      </div>
    );
    let leftComponent = (
      <div className="full-height flex flex-middle pointer" onClick={() => { window.location = '/'; }}>
        <img width="20" src="/assets/logo.svg" />
        <h4 className="no-margin" style={{paddingLeft: 15, color: "white"}}>Pythinya</h4>
      </div>
    );
    return (
      <AppBar className="black-primary" iconStyleRight={{display: 'flex', margin: 0}} iconStyleLeft={{display: 'flex', margin: 0}} iconElementLeft={leftComponent} iconElementRight={rightComponent}/>
    );
  }
}

function serializeName(user) {
  return _.template('${firstname} ${lastname}')({ firstname: user.first_name, lastname: user.last_name});
}

cc.register('components.appbar', connect(mapStateToProps, mapDispatchToProps(action))(Appbar));
