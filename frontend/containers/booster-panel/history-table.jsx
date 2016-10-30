import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
class HistoryTable extends React.Component {
  render() {
    return (
      <Card>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Customer name</TableHeaderColumn>
              <TableHeaderColumn>MMR</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              _.map(this.props.reducer.boosterPanel.history, function(item, i) {
                return (
                  <TableRow key={i}>
                    <TableRowColumn>{item.first_name + " " + item.last_name}</TableRowColumn>
                    <TableRowColumn>{item.min_mmr + '-' + item.max_mmr}</TableRowColumn>
                    <TableRowColumn>{item.price}</TableRowColumn>
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

cc.register('components.boosterPanel.historyTable', connect(mapStateToProps)(HistoryTable));
