import {Card} from 'material-ui';
let actions = cc.get('redux.actions');
class Wrapper extends React.Component {
  render() {
    let UserTable = cc.get('components.admin.users.usersTable');
    return (
      <div className="padding-all">
        <Card className="black-secondary padding-all">
          <div className="flex flex-middle">
            <img width={15} src="/assets/menu.svg"/>
            <p className="no-margin padding-left">Users</p>
          </div>
          <UserTable />
        </Card>
      </div>
    );
  }
}

cc.register('components.admin.users.wrapper', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
