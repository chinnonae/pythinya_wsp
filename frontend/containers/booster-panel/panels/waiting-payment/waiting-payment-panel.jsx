import {Card} from 'material-ui/Card';
import {RaisedButton, Divider} from 'material-ui';
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
        <Row className="text-center flex flex-center margin-bottom">
          <span id="waiting-label" className="display-box">Waiting for payment from &nbsp;
            <p>{customerName}</p>
          </span>
        </Row>
        <Row className="relative flex margin-bottom">
          <p>Customer name</p>
          <p className="pull-right">{customerName}</p>
        </Row>
        <Row className="relative flex margin-bottom">
          <p>MMR Range</p>
          <p className="pull-right">{mmrRange}</p>
        </Row>
        <Row className="relative flex margin-bottom">
          <p>Price</p>
          <p className="pull-right">{price}</p>
        </Row>
        <Row className='flex'>
          <RaisedButton backgroundColor={deepOrange300} onClick={this.cancel} labelColor='white' className="container-center" label="Cancel" />
        </Row>
      </Card>
    );
  }
}

cc.register('components.boosterPanel.waitingPaymentPanel', connect(mapStateToProps, mapDispatchToProps(actions))(WaitingPaymentPanel));
