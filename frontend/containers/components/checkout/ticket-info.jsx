import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';

const actions = cc.get('redux.actions');

class TicketInfoPanel extends React.Component {
  render() {
    var ticket = this.props.reducer.payment.ticket;
    return (
      <div className="margin-bottom margin-top padding-all">
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
                <TableRowColumn style={{width: "20%"}}>{ ticket.price }</TableRowColumn>
                <TableRowColumn style={{width: "15%"}}>5</TableRowColumn>
                <TableRowColumn style={{width: "15%"}}>3</TableRowColumn>
                <TableRowColumn>{ ticket.min_mmr } - { ticket.max_mmr }</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

cc.register('components.checkout.ticketInfoPanel', connect(mapStateToProps, mapDispatchToProps(actions))(TicketInfoPanel));
