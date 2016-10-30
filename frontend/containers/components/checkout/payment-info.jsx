import {Row, Col, Grid} from 'react-bootstrap';
class PaymentInfoPanel extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={10} md={10} lg={10} className="text-bold text-right">Price</Col>
          <Col xs={12} sm={2} md={2} lg={2} className="text-right">
              2000 Coins
           </Col>
        </Row>
        <Row>
          <Col xs={12} sm={10} md={10} lg={10} className="text-bold text-right">Your balance</Col>
          <Col xs={12} sm={2} md={2} lg={2} className="text-right">3000 - 2000 Coins</Col>
        </Row>
        <Row>
          <Col xs={12} sm={10} md={10} lg={10}></Col>
          <Col xs={12} sm={2} md={2} lg={2} className="text-right">= 1000 Coins</Col>
        </Row>
      </Grid>
    );
  }
}

cc.register('components.checkout.paymentInfoPanel', PaymentInfoPanel)
