import {Dialog, FlatButton} from 'material-ui';
const actions = cc.get('redux.actions');
class AlertDialog extends React.Component {
  close() {
    this.props.actions.showAlertDialog(false);
  }
  render() {
    let open = this.props.reducer.app.alertDialog.isShow;
    let message = this.props.reducer.app.alertDialog.message;
    let actionButton = [<FlatButton label="OK" className="success-text" onTouchTap={this.close.bind(this)} />];
    return (
      <Dialog actionsContainerClassName="black-primary" titleClassName="black-primary white-text" bodyClassName="black-primary white-text" title="Message" actions={actionButton} open={open} onRequestClose={this.close.bind(this)}>
        { message }
      </Dialog>
    );
  }
}

cc.register('components.alertDialog', connect(mapStateToProps, mapDispatchToProps(actions))(AlertDialog));
