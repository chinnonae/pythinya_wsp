import {Row, Col} from 'react-bootstrap';

const actions = cc.get('redux.actions');

class PaymentInfoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.ticket = this.props.reducer.profile.holding_ticket[0];
    this.profile = this.props.reducer.profile;
  }
  render() {
    return (
      <div className="padding-top padding-bottom margin-bottom margin-top">
        <Row className="margin-bottom">
          <Col xs={0} sm={4} md={8} lg={8}></Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">
            <b>Price</b>
          </Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">
              { this.ticket.price } Coins
           </Col>
        </Row>
        <Row className="margin-bottom">
          <Col xs={0} sm={4} md={8} lg={8}></Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">
            <b>Your balance</b>
          </Col>
          <Col xs={6} sm={4} md={2} lg={2} className="text-right">{ this.profile.coin + ' - ' + this.ticket.price } Coins</Col>
        </Row>
        <Row>
          <Col xs={6} sm={10} md={10} lg={10}></Col>
          <Col xs={6} sm={2} md={2} lg={2} className="text-right">{'= ' + (parseInt(tihs.profile.coin) - parseInt(this.ticket.price))+ ' Coins'}</Col>
        </Row>
      </div>
    );
  }
}

cc.register('components.checkout.paymentInfoPanel', connect(mapStateToProps, mapDispatchToProps(actions))(PaymentInfoPanel));
