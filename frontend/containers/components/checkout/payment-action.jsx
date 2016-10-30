import RaisedButton from 'material-ui/RaisedButton';
import {Row} from 'react-bootstrap';
class PaymentActionPanel extends React.Component {
  render() {
    return (
      <div className="pull-right">
        <Row>
          <RaisedButton label="Pay" primary={true} />
        </Row>
        <Row>
        <a>Cancle this ticket</a>
        </Row>
      </div>
    );
  }
}

cc.register('components.checkout.paymentActionPanel', PaymentActionPanel)
