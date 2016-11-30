import {AppBar, FlatButton} from 'material-ui';
class AdminAppbar extends React.Component {
  render() {
    var rightComponent = (
      <div className="container-middle" >
        <FlatButton>
          <Link className="link-button" style={{color: "white"}} to={'/admin/users'}>Users</Link>
        </FlatButton>
        <FlatButton>
          <Link className="link-button" style={{color: "white"}} to={'/admin/boosters'}>Boosters</Link>
        </FlatButton>
      </div>
    );
    let leftComponent = (
      <div className="full-height flex flex-middle">
        <img width="20" src="/assets/logo.svg" />
        <h4 className="no-margin" style={{paddingLeft: 15, color: "white"}}>Pythinya (Administrator)</h4>
      </div>
    );
    return (
      <AppBar className="black-primary" iconStyleRight={{display: 'flex', margin: 0}} iconStyleLeft={{display: 'flex', margin: 0}} iconElementLeft={leftComponent} iconElementRight={rightComponent}/>
    );
  }
}

cc.register('components.admin.appbar', AdminAppbar);
