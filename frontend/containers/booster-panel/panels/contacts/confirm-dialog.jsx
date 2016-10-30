import {Dialog, FlatButton} from 'material-ui';
const actions = cc.get('redux.actions');
class ConfirmDialog extends React.Component {
  closeDialog() {
    this.props.actions.toggleConfirmDialog(false);
  }
  render() {
    const reducer = this.props.reducer.boosterPanel;
    const actions = [
      <FlatButton onTouchTap={this.closeDialog.bind(this)} label="Close"/>,
      <FlatButton label="Yes"/>
    ];
    return (
      <Dialog title="Confirm" actions={actions} open={reducer.showConfirmDialog}>
        <span>Do you want to boost for this client?</span>
      </Dialog>
    );
  }
}

cc.register('components.boosterPanel.contactsPanel.dialog', connect(mapStateToProps, mapDispatchToProps(actions))(ConfirmDialog));
