import {Dialog, FlatButton} from 'material-ui';
const actions = cc.get('redux.actions');
const ticketService = cc.get('services.ticket');
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.buy = this.buy.bind(this);
  }
  close() {
    this.props.actions.toggleConfirmBuyDialog(false);
  }
  buy() {
    let id = this.props.reducer.clientPanel.buyDialog.ticket.id;
    ticketService.buyTicket(id, this.props.actions.buyTicketCallback, this.props.actions.showAlertDialog);
  }
  render() {
    /* Components */
    let TicketInfoTable = cc.get('components.ticketInfoTable');
    let actionButton = [
      <FlatButton label="Cancel" className="white-text" onTouchTap={this.close} />,
      <FlatButton id="buy-ticket-btn" label="Buy" className="margin-left success-text" onTouchTap={this.buy} />
    ];
    /* rendering */
    var reducer = this.props.reducer.clientPanel;
    return (
      <Dialog actionsContainerClassName="black-primary" titleClassName="black-primary white-text" bodyClassName="black-primary" title="Ticket" actions={actionButton} open={reducer.buyDialog.isShow} onRequestClose={this.close}>
        <p>Do you want to buy this ticket?</p>
        <TicketInfoTable ticket={reducer.buyDialog.ticket}/>
      </Dialog>
    );
  }
}

cc.register('components.clientPanel.buyDialog', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
