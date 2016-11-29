import {Card, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
const TicketInfoTable = (props) => {
  var ticket = props.ticket;
  return (
      <Table selectable={false} className="success-header">
        <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{backgroundColor: "#e0e0e0"}}>
          <TableRow>
            <TableHeaderColumn>Booster name</TableHeaderColumn>
            <TableHeaderColumn style={{width: "20%"}}>Price</TableHeaderColumn>
            <TableHeaderColumn style={{width: "15%"}}>Day used</TableHeaderColumn>
            <TableHeaderColumn>MMR</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn><div className="alter1">{ticket.booster.first_name + ' ' + ticket.booster.last_name}</div></TableRowColumn>
            <TableRowColumn style={{width: "20%"}}><div className="alter1">{ ticket.price }</div></TableRowColumn>
            <TableRowColumn style={{width: "15%"}}><div className="alter1">{ ticket.day_used }</div></TableRowColumn>
            <TableRowColumn><div className="alter1">{ ticket.min_mmr } - { ticket.max_mmr }</div></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
  );
};

cc.register('components.ticketInfoTable', TicketInfoTable);
