import {Dialog, FlatButton, Card} from 'material-ui';
import {Row, Col} from 'react-bootstrap';
const actions = cc.get('redux.actions');
class ConfirmDialog extends React.Component {
  constructor(props) {
    super(props);
    this.closeDialog = this.closeDialog.bind(this);
  }
  closeDialog() {
    this.props.actions.toggleConfirmDialog(false);
  }
  render() {
    /* components */
    const ContactCard = cc.get('components.boosterPanel.contactsPanel.dialog.contactCard');
    const reducer = this.props.reducer.boosterPanel;
    const actions = [
      <FlatButton onTouchTap={this.closeDialog} label="Close"/>,
      <FlatButton primary={true} label="Yes"/>
    ];
    return (
      <Dialog title="Confirm" actions={actions} open={reducer.showConfirmDialog} onRequestClose={this.closeDialog}>
        <p>Do you want to boost for this client?</p>
        <Row className="flex margin-top padding-top">
          <Col sm={12} xs={12} md={7} lg={7} className="container-center">
            <p>Client's information</p>
            <p>You can contact your client directly.</p>
            <ContactCard client={reducer.dialog.item}/>
          </Col>
        </Row>
      </Dialog>
    );
  }
}

cc.register('components.boosterPanel.contactsPanel.dialog', connect(mapStateToProps, mapDispatchToProps(actions))(ConfirmDialog));
