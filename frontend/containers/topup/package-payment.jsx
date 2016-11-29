import {Row, Col, Grid} from 'react-bootstrap';
class PackagePaymentPanel extends React.Component {
  render() {
    var CreditPaymentPanel = cc.get('components.paypal');
    var PackageCard = cc.get('components.topup.packageCard');
    let CardPanel = cc.get('components.cardPanel');
    let CreditCardPanel = cc.get('components.topup.creditcardPanel');
    return (
      <Row className="flex">
        <Col xs={12} sm={12} md={9} lg={9} className="container-center">
          <CardPanel title="Checkout">
            <Row>
              <Col xs={12} sm={12} md={7} lg={7}>
                <CreditCardPanel />
              </Col>
              <Col xs={12} sm={12} md={5} lg={5}>

              </Col>
            </Row>
          </CardPanel>
        </Col>
      </Row>
    );
  }
}

cc.register('components.topup.packagePaymentPanel', PackagePaymentPanel);

{/* <Grid className="no-margin full-width">
  <Row className="flex">
    <Col xs={12} sm={9} md={9} lg={9} className="container-center">
      <div className="flex flex-center">
        <PackageCard />
      </div>
      <CreditPaymentPanel />
    </Col>
  </Row>
</Grid> */}
