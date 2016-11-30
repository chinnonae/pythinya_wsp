import {Row, Col, Grid} from 'react-bootstrap';
const actions = cc.get('redux.actions');
class PackagePaymentPanel extends React.Component {
  componentWillMount() {
    let topupId = this.props.params.id;
    this.props.actions.setCurrentTopup(topupId);
  }
  render() {
    var CreditPaymentPanel = cc.get('components.paypal');
    var PackageCard = cc.get('components.topup.packageCard');
    let CardPanel = cc.get('components.cardPanel');
    let CreditCardPanel = cc.get('components.topup.creditcardPanel');
    let CartPanel = cc.get('components.topup.cartPanel');
    let currentTopup = this.props.reducer.topup.currentTopup;
    return (
      <Row className="flex">
        <Col xs={12} sm={12} md={9} lg={9} className="container-center"  style={{height: "70vh"}}>
          <CardPanel title="Checkout" className="full-height">
            <Row className="flex flex-mobile full-height height-mobile"  style={{height: "70vh"}}>
              <Col xs={12} sm={12} md={7} lg={7}>
                <CreditCardPanel topup={currentTopup}/>
              </Col>
              <Col xs={12} sm={12} md={5} lg={5} style={{backgroundColor: "#4a4a4a", marginRight: "-15px"}}  >
                <CartPanel topup={currentTopup} />
              </Col>
            </Row>
          </CardPanel>
        </Col>
      </Row>
    );
  }
}

cc.register('components.topup.packagePaymentPanel', connect(mapStateToProps, mapDispatchToProps(actions))(PackagePaymentPanel));
