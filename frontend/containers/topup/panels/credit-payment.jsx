import {Divider, RaisedButton} from 'material-ui';
import {Grid, Row, Col} from 'react-bootstrap';
class CreditPaymentPanel extends React.Component {
  render() {
    var Input = cc.get('components.input');
    return (
      <div className="flat-card padding-all">
        <div className="text-center padding-all">
          <b>Payment</b>
        </div>
        <div className="padding-left padding-right">
          <div className="padding-left padding-right">
            <Divider />
          </div>
        </div>
        <div className="padding-all">
          <Row className="margin-top">
            <Col xs={12} sm={9} md={9} lg={9}>
              <Input label="Credit card number"/>
            </Col>
            <Col xs={12} sm={3} md={3} lg={3}>
              <Input label="CVV" />
            </Col>
          </Row>
          <Row className="margin-bottom">
            <Col xs={12} sm={12} md={12} lg={12}>
              <Input label="Password" />
            </Col>
          </Row>
          <Row className="padding-left padding-right">
            <RaisedButton className="full-width" label="Confirm" primary={true} />
          </Row>
        </div>
      </div>
    );
  }
}

cc.register('components.topup.creditPaymentPanel', CreditPaymentPanel);
