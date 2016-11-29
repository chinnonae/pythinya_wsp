import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
const actions = cc.get('redux.actions');
class ContactTable extends React.Component {
  onClick(item) {
    this.props.actions.toggleConfirmDialog(true,item);
  }
  render() {
    var self = this;
    return (
      <Table selectable={false} className="hoverable success-header">
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={{width: "45%"}}>Customer name</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {
            _.map(this.props.reducer.boosterPanel.filteredContacts, function(item, i) {
              let tdClassName = (i % 2 === 0) ? 'alter1' : 'alter2';
              return (
                <TableRow onMouseUp={self.onClick.bind(self,item)} key={i} className="pointer">
                  <TableRowColumn style={{width: "45%"}}><div className={tdClassName}>{item.first_name + " " + item.last_name}</div></TableRowColumn>
                  <TableRowColumn><div className={tdClassName}>{"2 days ago"}</div></TableRowColumn>
                  <TableRowColumn><div className={tdClassName}>{item.telephone}</div></TableRowColumn>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    );
  }
}

cc.register('components.boosterPanel.contactTable', connect(mapStateToProps, mapDispatchToProps(actions))(ContactTable));
