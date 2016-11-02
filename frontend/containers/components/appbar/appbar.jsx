import {AppBar, FlatButton} from 'material-ui';
var action = cc.get('redux.actions');
var profileService = cc.get('services.profile');
var authService = cc.get('services.auth');
class Appbar extends React.Component {
  componentDidMount() {
    /* call get profile after first render*/
    profileService.getProfile(this.props.actions.profileCallback);
  }
  signout() {
    authService.signout(this.props.actions.signoutCallback);
  }
  render() {
    var view;
    let boosterPanelView;
    if(this.props.reducer.profile) { // If user has been logged in
      if(this.props.reducer.profile.user.is_booster) {
        boosterPanelView = (
          <FlatButton>
            <Link className="link-button" style={{color: "white"}} to={'/booster_panel'}>Booster Panel</Link>
          </FlatButton>
        );
      }
      var name = serializeName(this.props.reducer.profile.user);
      view = (
        <div>
          {boosterPanelView}
          <FlatButton onClick={this.signout.bind(this)} style={{color: "white"}}>
            <Link className="link-button" style={{color: "white"}} >{name}</Link>
          </FlatButton>
        </div>
      );
    } else { //otherwise show sign in and sign up button.
      view = (
        <div>
          <FlatButton>
            <Link className="link-button" style={{color: "white"}} to={'/signin'}>Sign in</Link>
          </FlatButton>
          <FlatButton>
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
    return (
      <AppBar title="Pythinya" iconStyleRight={{display: 'flex', margin: 0}} iconElementRight={rightComponent}/>
    );
  }
}

function serializeName(user) {
  return _.template('${firstname} ${lastname}')({ firstname: user.first_name, lastname: user.last_name});
}

cc.register('components.appbar', connect(mapStateToProps, mapDispatchToProps(action))(Appbar));
