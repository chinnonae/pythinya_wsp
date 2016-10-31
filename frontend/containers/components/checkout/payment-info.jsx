import {Row, Col} from 'react-bootstrap';
class PaymentInfoPanel extends React.Component {
  render() {
    return (
      <div className="padding-top padding-bottom margin-bottom margin-top">
        <Row className="margin-bottom">
          <Col xs={0} sm={4} md={8} lg={8}></Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">
            <b>Price</b>
          </Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">
              2000 Coins
           </Col>
        </Row>
        <Row className="margin-bottom">
          <Col xs={0} sm={4} md={8} lg={8}></Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">
            <b>Your balance</b>
          </Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">3000 - 2000 Coins</Col>
        </Row>
        <Row>
          <Col xs={6} sm={10} md={10} lg={10}></Col>
          <Col xs={6} sm={2} md={2} lg={2} className="text-right">= 1000 Coins</Col>
        </Row>
      </div>
    );
  }
}

cc.register('components.checkout.paymentInfoPanel', PaymentInfoPanel)
