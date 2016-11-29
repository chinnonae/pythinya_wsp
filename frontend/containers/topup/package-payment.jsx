import {Row, Col, Grid} from 'react-bootstrap';
class PackagePaymentPanel extends React.Component {
  render() {
    var CreditPaymentPanel = cc.get('components.paypal');
    var PackageCard = cc.get('components.topup.packageCard');
    let CardPanel = cc.get('components.cardPanel');
    return (
      <CardPanel>
        
      </CardPanel>
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
