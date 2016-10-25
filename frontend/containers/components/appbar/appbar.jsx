import {AppBar, FlatButton} from 'material-ui';
class Appbar extends React.Component {
  render() {
    var rightComponent = (
      <div className="container-middle" >
        <FlatButton href="/signin" style={{color: "white"}} label="Sign in"/>
        <FlatButton href="/signup" style={{color: "white"}} label="Sign up"/>
      </div>
    );
    return (
      <AppBar title="Pythinya" iconStyleRight={{display: 'flex', margin: 0}} iconElementRight={rightComponent}/>
    );
  }
}

cc.register('components.appbar', Appbar);
