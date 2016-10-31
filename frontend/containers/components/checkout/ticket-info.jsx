import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
class TicketInfoPanel extends React.Component {
  render() {
    return (
      <div className="margin-bottom margin-top padding-bottom padding-top">
        <Card>
          <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{backgroundColor: "#e0e0e0"}}>
              <TableRow>
                <TableHeaderColumn>Booster name</TableHeaderColumn>
                <TableHeaderColumn style={{width: "20%"}}>Price</TableHeaderColumn>
                <TableHeaderColumn style={{width: "15%"}}>Boosted times</TableHeaderColumn>
                <TableHeaderColumn style={{width: "15%"}}>Day used</TableHeaderColumn>
                <TableHeaderColumn>MMR</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>Adam</TableRowColumn>
                <TableRowColumn style={{width: "20%"}}>2,000</TableRowColumn>
                <TableRowColumn style={{width: "15%"}}>5</TableRowColumn>
                <TableRowColumn style={{width: "15%"}}>3</TableRowColumn>
                <TableRowColumn>1,500-2,000</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

cc.register('components.checkout.ticketInfoPanel', TicketInfoPanel);
