import {Card} from 'material-ui/Card';
import {RaisedButton} from 'material-ui';
const actions = cc.get('redux.actions');
const boosterService = cc.get('services.booster');
class WaitingPaymentPanel extends React.Component {
  constructor(props) {
    super(props);
    boosterService.getCurrentTicket(this.props.actions.getCurrentTicketCallback);
  }
  render() {
    var reducer = this.props.reducer.boosterPanel;
    var customerName = reducer.client.first_name + " " + reducer.client.last_name;
    var mmrRange = reducer.min_mmr + '-' + reducer.max_mmr;
    var price = reducer.price + ' coins';
    return (
      <Card className="flex flex-column flex-center">
        <Row>
          <p>Waiting for payment from&nbsp;</p>
          <p>{customerName}</p>
        </Row>
        <Row>
          <p>Customer name</p>
          <p>{customerName}</p>
        </Row>
        <Row>
          <p>MMR Range</p>
          <p>{mmrRange}</p>
        </Row>
        <Row>
          <p>Price</p>
          <p>{price}</p>
        </Row>
        <Row>
          <RaisedButton label="Cancel" />
        </Row>
      </Card>
    );
  }
}

cc.register('components.boosterPanel.waitingPaymentPanel', connect(mapStateToProps, mapDispatchToProps(actions))(WaitingPaymentPanel));
