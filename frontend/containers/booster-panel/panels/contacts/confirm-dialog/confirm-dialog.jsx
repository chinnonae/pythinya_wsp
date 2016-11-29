import {Dialog, FlatButton, Card} from 'material-ui';
import {Row, Col} from 'react-bootstrap';
const actions = cc.get('redux.actions');
const boosterService = cc.get('services.booster');
class ConfirmDialog extends React.Component {
  constructor(props) {
    super(props);
    this.closeDialog = this.closeDialog.bind(this);
    this.startBoosting = this.startBoosting.bind(this);
  }
  closeDialog() {
    this.props.actions.toggleConfirmDialog(false);
  }
  startBoosting() {
    let ticketId = this.props.reducer.profile.boosting_ticket.id;
    let clientId = this.props.reducer.boosterPanel.dialog.item.id;
    boosterService.startBoosting(ticketId, clientId,this.props.actions.startBoostingCallback);
  }
  render() {
    /* components */
    const ContactCard = cc.get('components.boosterPanel.contactsPanel.dialog.contactCard');
    const reducer = this.props.reducer.boosterPanel;
    const actions = [
      <FlatButton onTouchTap={this.closeDialog} className="white-text" label="Close"/>,
      <FlatButton id="confirm-boosting-btn" className="success-text" onTouchTap={this.startBoosting} primary={true} label="Yes"/>
    ];
    return (
      <Dialog actionsContainerClassName="black-primary" titleClassName="black-primary white-text" bodyClassName="black-primary"  title="Confirm" actions={actions} open={reducer.showConfirmDialog} onRequestClose={this.closeDialog}>
        <p>Do you want to boost for this client?</p>
        <Row className="flex margin-top padding-top">
          <Col sm={12} xs={12} md={7} lg={7} className="container-center">
            <ContactCard client={reducer.dialog.item}/>
          </Col>
        </Row>
      </Dialog>
    );
  }
}

cc.register('components.boosterPanel.contactsPanel.dialog', connect(mapStateToProps, mapDispatchToProps(actions))(ConfirmDialog));
