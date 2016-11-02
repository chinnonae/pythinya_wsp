import {Dialog} from 'material-ui';
const actions = cc.get('redux.actions');
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }
  close() {
    this.props.actions.toggleConfirmDialog(false);
  }
  render() {
    var reducer = this.props.reducer.clientPanel;
    return (
      <Dialog title="Ticket" open={reducer.buyDialog.isShow} onRequestClose={this.close}>
        <p>Do you want to buy this ticket?</p>
      </Dialog>
    );
  }
}

cc.register('components.clientPanel.buyDialog', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
