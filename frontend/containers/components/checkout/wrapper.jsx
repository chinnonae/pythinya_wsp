import {Grid} from 'react-bootstrap';
const checkoutService = cc.get('services.checkout');
const actions = cc.get('redux.actions');
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    checkoutService.getTicket(1,this.props.actions.getTicketCallback); // TODO: Change ticketId to the real one from profile
  }
  render() {
    var TicketInfoPanel = cc.get('components.checkout.ticketInfoPanel');
    var PaymentInfoPanel = cc.get('components.checkout.paymentInfoPanel');
    var PaymentActionPanel = cc.get('components.checkout.paymentActionPanel');
    return (
      <Grid className="flex flex-center flex-middle" style={{height: "calc(100vh - 64px)"}}>
        <Grid className="full-width padding-all">
          <TicketInfoPanel />
          <PaymentInfoPanel />
          <PaymentActionPanel />
        </Grid>
      </Grid>
    );
  }
}

cc.register('components.checkout.wrapper', connect(mapStateToProps,mapDispatchToProps(actions))(Wrapper));
