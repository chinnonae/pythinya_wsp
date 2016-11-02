import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
const actions = cc.get('redux.actions');
class BoosterTable extends React.Component {
  onClick(item) {
    this.props.actions.toggleConfirmBuyDialog(true,item);
  }
  render() {
    var self = this;
    return (
      <Card>
        <Table selectable={false} className="hoverable">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{backgroundColor: "#e0e0e0"}}>
            <TableRow>
              <TableHeaderColumn style={{width: "35%"}}>Booster name</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
              <TableHeaderColumn>Boosted times</TableHeaderColumn>
              <TableHeaderColumn>Day used</TableHeaderColumn>
              <TableHeaderColumn>MMR</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              _.map(this.props.reducer.clientPanel.tickets, function(item, i) {
                return (
                  <TableRow onMouseUp={self.onClick.bind(self,item)} key={i} className="pointer">
                    <TableRowColumn style={{width: "35%"}}>{item.booster.first_name + " " + item.booster.last_name}</TableRowColumn>
                    <TableRowColumn>{item.price}</TableRowColumn>
                    <TableRowColumn>{"4"}</TableRowColumn>
                    <TableRowColumn>{item.day_used}</TableRowColumn>
                    <TableRowColumn>{item.min_mmr + "-" + item.max_mmr}</TableRowColumn>
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

cc.register('components.boosterList.boosterTable', connect(mapStateToProps, mapDispatchToProps(actions))(BoosterTable));
