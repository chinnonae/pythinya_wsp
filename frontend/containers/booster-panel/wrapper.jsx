import {Grid, Row, Col} from 'react-bootstrap';
const actions = cc.get('redux.actions');
const boosterService = cc.get('services.booster');
const profileService = cc.get('services.profile');
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
    const profile             = profileService.getProfile();
    let panelView;
    const ticketStatus = profile.boosting_ticket.status;
    if(ticketStatus === AVAILABLE) {
      panelView = <ContactsPanel clients={profile.boosting_ticket.clients} />;
    }else if(ticketStatus === WAITING_FOR_PAYMENT) {
      panelView = <WaitingPaymentPanel ticket={profile.boosting_ticket}/>;
    }else if(ticketStatus === BOOSTING) {
      panelView = <BoostingPanel ticket={profile.boosting_ticket}/>;
    }
    /* rendering */
    return (
      <Grid className="full-width no-padding">
        <Col xs={12} sm={12} md={7} lg={8}>
          { panelView }
        </Col>
        <Col xs={12} sm={12} md={5} lg={4}>
          <HistoryTable />
        </Col>
      </Grid>
    );
  }
}

cc.register('components.boosterPanel', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
