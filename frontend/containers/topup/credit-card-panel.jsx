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
      <div>
        <h4 className="white-text">New Card</h4>
        <CreditCardForm formId="topup-checkout-form" />
        <div className="full-width flex flex-reverse">
          <FlatButton className="success white-text" label="Confirm" onTouchTap={this.pay.bind(this)} />
        </div>
      </div>
    );
  }
}

cc.register('components.topup.creditcardPanel', CreditCardPanel);
