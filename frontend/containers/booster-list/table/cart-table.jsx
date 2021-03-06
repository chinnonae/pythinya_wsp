import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
class CartTable extends React.Component {
  render() {
    return (
      <Card>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{backgroundColor: "#e0e0e0"}}>
            <TableRow>
              <TableHeaderColumn style={{width: "45%"}}>Customer name</TableHeaderColumn>
              <TableHeaderColumn>MMR</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={false}>
            {
              _.map(this.props.reducer.boosterPanel.history, function(item, i) {
                return (
                  <TableRow key={i}>
                    <TableRowColumn style={{width: "45%"}}>{item.first_name + " " + item.last_name}</TableRowColumn>
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

cc.register('components.boosterPanel.cartTable', connect(mapStateToProps)(CartTable));
