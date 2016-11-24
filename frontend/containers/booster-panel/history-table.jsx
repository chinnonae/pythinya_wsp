import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
class HistoryTable extends React.Component {
  render() {
    return (
      <Card className="black-secondary padding-all">
        <div className="flex flex-middle">
          <img width={15} src="/assets/menu.svg"/>
          <p className="no-margin padding-left">History</p>
        </div>
        <Table className="amber-header" selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{width: "45%"}}>Customer name</TableHeaderColumn>
              <TableHeaderColumn>MMR</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={false}>
            {
              _.map(this.props.reducer.boosterPanel.history, function(item, i) {
                let tdClassName = (i % 2 === 0) ? 'alter1' : 'alter2';
                return (
                  <TableRow key={i}>
                    <TableRowColumn style={{width: "45%"}}><div className={tdClassName}>{item.booster.first_name + " " + item.booster.last_name}</div></TableRowColumn>
                    <TableRowColumn><div className={tdClassName}>{item.min_mmr + '-' + item.max_mmr}</div></TableRowColumn>
                    <TableRowColumn><div className={tdClassName}>{item.price}</div></TableRowColumn>
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
