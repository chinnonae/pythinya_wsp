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
        <Table selectable={false} className="hoverable success-header">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{width: "25%"}}>Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Coins</TableHeaderColumn>
              <TableHeaderColumn>Current MMR</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              _.map(this.props.reducer.admin.users, function(item, i) {
                let tdClassName = (i % 2 === 0) ? 'alter1' : 'alter2';
                return (
                  <TableRow onMouseUp={self.onClick.bind(self,item)} key={i} className="pointer">
                    <TableRowColumn style={{width: "25%"}}><div className={tdClassName}>{item.booster.first_name + " " + item.booster.last_name}</div></TableRowColumn>
                    <TableRowColumn><div className={tdClassName}>{item.price}</div></TableRowColumn>
                    <TableRowColumn><div className={tdClassName}>{"4"}</div></TableRowColumn>
                    <TableRowColumn><div className={tdClassName}>{item.day_used}</div></TableRowColumn>
                    <TableRowColumn><div className={tdClassName}>{item.min_mmr + "-" + item.max_mmr}</div></TableRowColumn>
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