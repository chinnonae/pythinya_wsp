import {Card, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
const TicketInfoTable = (props) => {
  var ticket = props.ticket;
  return (
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
  )
}

cc.register('components.ticketInfoTable', TicketInfoTable);
