import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
const actions = cc.get('redux.actions');
class BoosterTable extends React.Component {
  onClick(item) {
    this.props.actions.toggleConfirmDialog(true,item);
  }
  render() {
    var self = this;
    return (
      <Card>
        <Table selectable={false} className="hoverable">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{backgroundColor: "#e0e0e0"}}>
            <TableRow>
              <TableHeaderColumn style={{width: "35%"}}><h4 style={{color: "#000000"}}>Booster name</h4></TableHeaderColumn>
              <TableHeaderColumn><h4 style={{color: "#000000"}}>Price</h4></TableHeaderColumn>
              <TableHeaderColumn><h4 style={{color: "#000000"}}>Boosted times</h4></TableHeaderColumn>
              <TableHeaderColumn><h4 style={{color: "#000000"}}>Day used</h4></TableHeaderColumn>
              <TableHeaderColumn><h4 style={{color: "#000000"}}>MMR</h4></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              _.map(this.props.reducer.clientPanel.tickets, function(item, i) {
                console.log(item);
                return (
                  <TableRow onMouseUp={self.onClick.bind(self,item)} key={i} className="pointer">
                    <TableRowColumn style={{width: "35%"}}><h4>{item.booster.first_name + " " + item.booster.last_name}</h4></TableRowColumn>
                    <TableRowColumn><h4>{item.price}</h4></TableRowColumn>
                    <TableRowColumn><h4>{"4"}</h4></TableRowColumn>
                    <TableRowColumn><h4>{item.day_used}</h4></TableRowColumn>
                    <TableRowColumn><h4>{item.min_mmr + "-" + item.max_mmr}</h4></TableRowColumn>
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
