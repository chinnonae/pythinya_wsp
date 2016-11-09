import {Grid, Row, Col} from 'react-bootstrap';
const actions = cc.get('redux.actions');
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.profile = this.props.reducer.profile;
    this.booster = this.profile.holding_ticket[0].booster;
  }
  render() {
    var BoosterInfoPanel = cc.get('components.booster-info.boosterInfoPanel');
    var ProgressInfoPanel = cc.get('components.booster-info.progressInfoPanel');
    var ContactCard = cc.get('components.boosterPanel.contactsPanel.dialog.contactCard');
    return (
      <Grid  className="flex flex-center flex-middle" style={{height: "calc(100vh - 64px)"}}>
        <div className="full-width">
          <Row className="margin-bottom flex">
            <Col xs={12} sm={12} md={12} lg={12} className="container-center">
              <b>Booster information</b>
              <p>You can contract your booster directly</p>
              <ContactCard client={this.booster} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="container-center">
            <ProgressInfoPanel />
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

cc.register('components.booster-info.wrapper', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
