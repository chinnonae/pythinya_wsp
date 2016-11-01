import RaisedButton from 'material-ui/RaisedButton';
import {Row, Col} from 'react-bootstrap';

const actions = cc.get('redux.actions');

class PaymentActionPanel extends React.Component {
  render() {
    var buttonView;
    if (this.props.reducer.payment.hasEnoughBalance) {
      buttonView = <RaisedButton label="Pay" primary={true} className="full-width"/>
    }else {
      buttonView = <RaisedButton label="Buy more coin" className="full-width"/>
    }
    return (
      <div>
        <Row className="padding-bottom padding-top margin-bottom margin-top text-right">
          <div className="padding-right" style={{ display: "-webkit-inline-box" }}>
          { buttonView }
          </div>
        </Row>
        <Row className="text-right">
          <Col xs={12} sm={6} md={6} lg={6}></Col>
          <Col xs={12} sm={6} md={6} lg={6}>
          <a>Cancel this ticket</a>
          <p>(You will pay a penalty of 10% of the ticket's price)</p>
          </Col>
        </Row>
      </div>
    );
  }
}

cc.register('components.checkout.paymentActionPanel', connect(mapStateToProps, mapDispatchToProps(actions))(PaymentActionPanel))
