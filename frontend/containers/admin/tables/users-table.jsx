import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
const actions = cc.get('redux.actions');
class UsersTable extends React.Component {
  onClick(item) {
    // this.props.actions.toggleConfirmBuyDialog(true,item);
  }
  render() {
    var self = this;
    return (
        <Table selectable={false} className="hoverable amber-header">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{width: "25%"}}>Name</TableHeaderColumn>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
              <TableHeaderColumn>Coins</TableHeaderColumn>
              <TableHeaderColumn>Current MMR</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              _.map(this.props.reducer.admin.users, function(item, i) {
                let tdClassName = (i % 2 === 0) ? 'alter1 alter1-amber' : 'alter2 alter2-amber';
                return (
                  <TableRow onMouseUp={self.onClick.bind(self,item)} key={i} className="pointer">
                    <TableRowColumn style={{width: "25%"}}><div className={tdClassName}>{item.name}</div></TableRowColumn>
                    <TableRowColumn><div className={tdClassName}>{item.email}</div></TableRowColumn>
                    <TableRowColumn><div className={tdClassName}>{item.coins}</div></TableRowColumn>
                    <TableRowColumn><div className={tdClassName}>{item.current_mmr}</div></TableRowColumn>
                    <TableRowColumn><div className={tdClassName}>{item.status}</div></TableRowColumn>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
    );
  }
}

cc.register('components.admin.users.usersTable', connect(mapStateToProps, mapDispatchToProps(actions))(UsersTable));
