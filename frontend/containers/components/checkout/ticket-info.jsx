import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
class TicketInfoPanel extends React.Component {
  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow style={"background-color: #bdbdbd;"}>
            <TableHeaderColumn>Booster name</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Boosted times</TableHeaderColumn>
            <TableHeaderColumn>Day used</TableHeaderColumn>
            <TableHeaderColumn>MMR</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>Adam</TableRowColumn>
            <TableRowColumn>2,000</TableRowColumn>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>1,500-2,000</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

cc.register('components.checkout.ticketInfoPanel', TicketInfoPanel);
