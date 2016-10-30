import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
class ContactTable extends React.Component {
  render() {
    return (
      <Card>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Customer name</TableHeaderColumn>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Phone</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              _.map(this.props.reducer.boosterPanel.contacts, function(item, i) {
                return (
                  <TableRow key={i} className="pointer">
                    <TableRowColumn>{item.first_name + " " + item.last_name}</TableRowColumn>
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

cc.register('components.boosterPanel.contactTable', connect(mapStateToProps)(ContactTable));
