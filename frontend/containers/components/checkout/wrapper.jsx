import RaisedButton from 'material-ui/RaisedButton';
import {Col, Grid, Row} from 'react-bootstrap';
import {Card, CardHeader} from 'material-ui/Card';
class Wrapper extends React.Component {
  render() {
    var TicketInfoPanel = cc.get('components.checkout.ticketInfoPanel');
    var PaymentInfoPanel = cc.get('components.checkout.paymentInfoPanel');
    return (
      <Grid className="flex flex-center flex-middle" style={{height: "calc(100vh - 64px)"}}>
        <Grid className="full-width padding-all flat-card">
          <TicketInfoPanel />
          <PaymentInfoPanel />
          <Row>
            <RaisedButton className="pull-right" label="Pay" primary={true} />
          </Row>
          <Row>
          <a className="pull-right">Cancle this ticket</a>
          </Row>
        </Grid>
      </Grid>
    );
  }
}

cc.register('components.checkout.wrapper', Wrapper);
