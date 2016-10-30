
import {Grid} from 'react-bootstrap';
class Wrapper extends React.Component {
  render() {
    var TicketInfoPanel = cc.get('components.checkout.ticketInfoPanel');
    var PaymentInfoPanel = cc.get('components.checkout.paymentInfoPanel');
    var PaymentActionPanel = cc.get('components.checkout.paymentActionPanel');
    return (
      <Grid className="flex flex-center flex-middle" style={{height: "calc(100vh - 64px)"}}>
        <Grid className="full-width padding-all flat-card">
          <TicketInfoPanel />
          <PaymentInfoPanel />
          <PaymentActionPanel />
        </Grid>
      </Grid>
    );
  }
}

cc.register('components.checkout.wrapper', Wrapper);
