import {Row, Col} from 'react-bootstrap';
import {FlatButton} from 'material-ui';
class CreditCardPanel extends React.Component {
  pay() {
    let paypalService = cc.get('services.paypal');
    let data = $('#credit-card-form').serializeArray();
    let dataObj = {};
    _.map(data, (item) => { dataObj[item.name] = item.value; });
    dataObj.total = 1000;
    paypalService.makePayment(dataObj,this.props.actions.makePaymentCallback);
  }
  render() {
    let CreditCardForm = cc.get('components.creditcardForm');
    return (
      <div className="margin-top">
        <h5 className="white-text">New Card</h5>
        <Row className="flex">
          <Col className="container-center" xs={12} sm={12} md={10} lg={10}>
              <CreditCardForm formId="topup-checkout-form" />
              <div className="full-width flex flex-reverse">
                <FlatButton className="margin-top success white-text" style={{paddingLeft: 20, paddingRight: 20}}  label="Confirm" onTouchTap={this.pay.bind(this)} />
              </div>
          </Col>
        </Row>
      </div>
    );
  }
}

cc.register('components.topup.creditcardPanel', CreditCardPanel);
