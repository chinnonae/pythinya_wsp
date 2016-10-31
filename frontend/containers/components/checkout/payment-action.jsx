import RaisedButton from 'material-ui/RaisedButton';
import {Row, Col} from 'react-bootstrap';
class PaymentActionPanel extends React.Component {
  render() {
    return (
      <div>
        <Row className="padding-bottom padding-top margin-bottom text-right">
          <Col xs={12} sm={10} md={10} lg={10}></Col>
          <Col xs={12} sm={2} md={2} lg={2}>
          <RaisedButton label="Pay" primary={true} className="full-width"/>
          </Col>
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

cc.register('components.checkout.paymentActionPanel', PaymentActionPanel)
