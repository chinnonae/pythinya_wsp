import RaisedButton from 'material-ui/RaisedButton';
import {Row} from 'react-bootstrap';
class PaymentActionPanel extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <RaisedButton className="pull-right" label="Pay" primary={true} />
        </Row>
        <Row>
        <a className="pull-right">Cancle this ticket</a>
        </Row>
      </div>
    );
  }
}

cc.register('components.checkout.paymentActionPanel', PaymentActionPanel)
