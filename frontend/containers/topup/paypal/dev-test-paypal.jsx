import {Row, Col} from 'react-bootstrap';
import {RaisedButton} from 'material-ui';
let actions = cc.get('redux.actions');
class Paypal extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
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
      <Row className="flex">
        <Col className="container-center" xs={10} sm={10} md={8} lg={8}>
          <CreditCardForm formId="credit-card-form" />
          <Col xs={12} className="flex margin-top">
            <RaisedButton className="full-width" primary={true} label="Confirm" onTouchTap={this.onClick} />
          </Col>
        </Col>
      </Row>
    );
  }
}

cc.register('components.paypal', connect(mapStateToProps, mapDispatchToProps(actions))(Paypal));
