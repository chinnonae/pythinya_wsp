import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
class ContactTable extends React.Component {
  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Customer name</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>

          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

cc.register('components.boosterPanel.contactTable', connect(mapStateToProps)(ContactTable));
