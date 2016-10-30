import {Row, Col} from 'react-bootstrap';
class PaymentInfoPanel extends React.Component {
  render() {
    return (
      <div className="padding-top padding-bottom">
        <Row>
          <Col xs={0} sm={4} md={8} lg={8}></Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-bold text-right">Price</Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">
              2000 Coins
           </Col>
        </Row>
        <Row>
          <Col xs={0} sm={4} md={8} lg={8}></Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-bold text-right">Your balance</Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">3000 - 2000 Coins</Col>
        </Row>
        <Row>
          <Col xs={6} sm={4} md={10} lg={10}></Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">= 1000 Coins</Col>
        </Row>
      </div>
    );
  }
}

cc.register('components.checkout.paymentInfoPanel', PaymentInfoPanel)
