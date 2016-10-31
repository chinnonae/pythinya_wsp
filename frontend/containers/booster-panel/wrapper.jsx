import {Grid, Row, Col} from 'react-bootstrap';
const actions = cc.get('redux.actions');
const boosterService = cc.get('services.booster');
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    boosterService.getHistory(this.props.actions.getHistoryCallback);
  }
  render() {
    /* components */
    const HistoryTable        = cc.get('components.boosterPanel.historyTable');
    const WaitingPaymentPanel = cc.get('components.boosterPanel.waitingPaymentPanel');
    const ContactsPanel       = cc.get('components.boosterPanel.contactsPanel');
    const BoostingPanel       = cc.get('components.boosterPanel.boosting');
    /* rendering */
    return (
      <Grid className="full-width">
        <Col xs={12} sm={12} md={7} lg={8} className="padding-right">
          <ContactsPanel />
          {/* <WaitingPaymentPanel /> */}
          {/* <BoostingPanel /> */}
        </Col>
        <Col xs={12} sm={12} md={5} lg={4} className="padding-left">
          <Row className="flex flex-column flex-end-y" style={{height: 100}}>
            <p className="text-center">History</p>
          </Row>
          <Row>
            <HistoryTable />
          </Row>
        </Col>
      </Grid>
    );
  }
}

cc.register('components.boosterPanel', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
