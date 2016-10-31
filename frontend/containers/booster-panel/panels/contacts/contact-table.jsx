import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
const actions = cc.get('redux.actions');
class ContactTable extends React.Component {
  onClick(item) {
    this.props.actions.toggleConfirmDialog(true,item);
  }
  render() {
    var self = this;
    return (
      <Card>
        <Table selectable={false} className="hoverable">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{width: "45%"}}>Customer name</TableHeaderColumn>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Phone</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              _.map(this.props.reducer.boosterPanel.filteredContacts, function(item, i) {
                return (
                  <TableRow onMouseUp={self.onClick.bind(self,item)} key={i} className="pointer">
                    <TableRowColumn style={{width: "45%"}}>{item.first_name + " " + item.last_name}</TableRowColumn>
                    <TableRowColumn>{"2 days ago"}</TableRowColumn>
                    <TableRowColumn>{item.telephone}</TableRowColumn>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </Card>
    );
  }
}

cc.register('components.boosterPanel.contactTable', connect(mapStateToProps, mapDispatchToProps(actions))(ContactTable));
