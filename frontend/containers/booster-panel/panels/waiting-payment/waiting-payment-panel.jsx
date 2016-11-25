import {Card} from 'material-ui/Card';
import {FlatButton, Divider} from 'material-ui';
import {Row,Col, Grid} from 'react-bootstrap';
import {deepOrange300} from 'material-ui/styles/colors';
const actions = cc.get('redux.actions');
const boosterService = cc.get('services.booster');

class WaitingPaymentPanel extends React.Component {
  constructor(props) {
    super(props);
    // boosterService.getCurrentTicket(1, this.props.actions.getCurrentTicketCallback);
    // this.props.actions.getCurrentTicketCallback(this.props.ticket);
    this.cancel = this.cancel.bind(this);
    this.profile = this.props.reducer.profile;
  }
  cancel() {
    let id = this.profile.boosting_ticket.id;
    boosterService.cancelBoosting(id, this.props.actions.cancelBoostingCallback);
  }
  render() {
    let Stepper = cc.get('components.boosterPanel.stepper');
    let boostingTicket = this.profile.boosting_ticket;
    let customer = boostingTicket.clients[0];
    var customerName = boostingTicket.clients[0].first_name + " " + boostingTicket.clients[0].last_name;
    var mmrRange = boostingTicket.min_mmr + '-' + boostingTicket.max_mmr;
    var price = boostingTicket.price + ' coins';
    return (
      <Card className="padding-all black-secondary">
        <div className="flex flex-middle">
          <img width={15} src="/assets/menu.svg"/>
          <p className="no-margin padding-left">Waiting for payment</p>
        </div>
        <Stepper activeStep={1} />
        <Divider style={{marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 20, backgroundColor: "rgba(155,155,155,0.6)"}}/>
        <Row className="text-center flex flex-column flex-center margin-bottom">
          <p id="waiting-label">You are waiting for payment from the client</p>
          <p className="small-text">If you have any problem you can contact the client directly.</p>
        </Row>
        <div style={{marginTop: 40, marginBottom: 40}}>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p className="text-right"><b>Customer name</b></p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p>{customerName}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p className="text-right"><b>Email</b></p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p>{customer.email}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p className="text-right"><b>Telephone</b></p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p>{customer.telephone}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p className="text-right"><b>MMR range</b></p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p>{mmrRange}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p className="text-right"><b>Price</b></p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p>{price}</p>
            </Col>
          </Row>
        </div>
        <Row className='flex flex-center'>
          <FlatButton onClick={this.cancel} style={{paddingLeft: 20, paddingRight: 20}} labelColor='white' className="error white-text" label="Cancel" />
        </Row>
        <p className="text-center small-text margin-top">(You will be deducted 10% of ticket’s price)</p>
      </Card>
    );
  }
}

cc.register('components.boosterPanel.waitingPaymentPanel', connect(mapStateToProps, mapDispatchToProps(actions))(WaitingPaymentPanel));
