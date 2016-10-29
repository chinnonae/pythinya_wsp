import RaisedButton from 'material-ui/RaisedButton';
import {Col, Grid, Row} from 'react-bootstrap';
import {Card, CardHeader} from 'material-ui/Card';
class Wrapper extends React.Component {
  render() {
    var TicketInfoPanel = cc.get('components.checkout.ticketInfoPanel');
    return (
      <Grid className="flex flex-center flex-middle">
        <Grid className="full-width padding-all">
          <TicketInfoPanel />
          <Row>
            <Col xs={12} sm={10} md={10} lg={10} className="text-bold">Price</Col>
            <Col xs={12} sm={2} md={2} lg={2}>
              <div className="text-bold">2000</div>Coins
             </Col>
          </Row>
          <Row>
            <Col xs={12} sm={10} md={10} lg={10} className="text-bold">Your balance</Col>
            <Col s={12} sm={2} md={2} lg={2}>3000 - 2000 Coins</Col>
          </Row>
          <Row>
            <Col xs={12} sm={10} md={10} lg={10}></Col>
            <Col s={12} sm={2} md={2} lg={2}>= 1000 Coins</Col>
          </Row>
          <Row>
            <RaisedButton className="pull-right" label="Pay" primary={true} />
          </Row>
          <Row>
          <p className="pull-right">Cancle this ticket</p>
          </Row>
        </Grid>
      </Grid>
    );
  }
}

cc.register('components.checkout.wrapper', Wrapper);
