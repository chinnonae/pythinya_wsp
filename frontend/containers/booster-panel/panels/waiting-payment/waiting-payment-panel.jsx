import {Card} from 'material-ui/Card';
import {RaisedButton} from 'material-ui';
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
    let boostingTicket = this.profile.boosting_ticket;
    console.log(this.props.reducer);
    var customerName = boostingTicket.clients[0].first_name + " " + boostingTicket.clients[0].last_name;
    var mmrRange = boostingTicket.min_mmr + '-' + boostingTicket.max_mmr;
    var price = boostingTicket.price + ' coins';
    return (
      <Card className="padding-all" style={{marginTop: 100}}>
        <Grid className="full-width">
          <Col smOffset={1} sm={10} md={8} mdOffset={2} xs={10} xsOffset={1} lg={8} lgOffset={2}>
            <Row className="text-center flex flex-center margin-bottom">
              <span className="display-box">Waiting for payment from &nbsp;
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
          </Col>
        </Grid>
      </Card>
    );
  }
}

cc.register('components.boosterPanel.waitingPaymentPanel', connect(mapStateToProps, mapDispatchToProps(actions))(WaitingPaymentPanel));
