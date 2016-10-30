import {Card} from 'material-ui/Card';
import {RaisedButton} from 'material-ui';
import {Row,Col, Grid} from 'react-bootstrap';
const actions = cc.get('redux.actions');
const boosterService = cc.get('services.booster');
class WaitingPaymentPanel extends React.Component {
  constructor(props) {
    super(props);
    boosterService.getCurrentTicket(1, this.props.actions.getCurrentTicketCallback);
  }
  render() {
    var reducer = this.props.reducer.boosterPanel.ticket;
    var customerName = reducer.client.first_name + " " + reducer.client.last_name;
    var mmrRange = reducer.min_mmr + '-' + reducer.max_mmr;
    var price = reducer.price + ' coins';
    return (
      <Card className="padding-all" style={{marginTop: 100}}>
        <div style={{width: "60%"}} className="container-center">
          <Row className="text-center flex flex-center margin-bottom">
            <p>Waiting for payment from &nbsp;</p>
            <p>{customerName}</p>
          </Row>
          <Row className="relative flex">
            <p>Customer name</p>
            <p className="pull-right">{customerName}</p>
          </Row>
          <Row className="relative flex">
            <p>MMR Range</p>
            <p className="pull-right">{mmrRange}</p>
          </Row>
          <Row className="relative flex">
            <p>Price</p>
            <p className="pull-right">{price}</p>
          </Row>
          <Row className='flex'>
            <RaisedButton className="container-center" label="Cancel" />
          </Row>
        </div>
      </Card>
    );
  }
}

cc.register('components.boosterPanel.waitingPaymentPanel', connect(mapStateToProps, mapDispatchToProps(actions))(WaitingPaymentPanel));
