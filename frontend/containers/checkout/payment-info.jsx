import {Row, Col} from 'react-bootstrap';

const actions = cc.get('redux.actions');

class PaymentInfoPanel extends React.Component {
  render() {
    var ticket = this.props.reducer.payment.ticket;
    var profile = this.props.reducer.profile;
    return (
      <div className="padding-top padding-bottom margin-bottom margin-top">
        <Row className="margin-bottom">
          <Col xs={0} sm={4} md={8} lg={8}></Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">
            <b>Price</b>
          </Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">
              { ticket.price } Coins
           </Col>
        </Row>
        <Row className="margin-bottom">
          <Col xs={0} sm={4} md={8} lg={8}></Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">
            <b>Your balance</b>
          </Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">4000 - { ticket.price } Coins</Col>
        </Row>
        <Row>
          <Col xs={6} sm={10} md={10} lg={10}></Col>
          <Col xs={6} sm={2} md={2} lg={2} className="text-right">{'= ' + (4000 - parseInt(ticket.price))+ 'Coins'}</Col>
        </Row>
      </div>
    );
  }
}

cc.register('components.checkout.paymentInfoPanel', connect(mapStateToProps, mapDispatchToProps(actions))(PaymentInfoPanel));
