import {Row, Col, Grid} from 'react-bootstrap';
class Wrapper extends React.Component {
  render() {
    var CreditPaymentPanel = cc.get('components.topup.creditPaymentPanel');
    return (
      <Grid className="no-margin full-width">
        <Row className="flex">
          <Col xs={12} sm={6} md={6} lg={6} className="container-center">
            <CreditPaymentPanel />
          </Col>
        </Row>
      </Grid>
    );
  }
}

cc.register('components.topup.wrapper', Wrapper);
