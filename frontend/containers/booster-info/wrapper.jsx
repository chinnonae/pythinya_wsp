import {Grid, Row, Col} from 'react-bootstrap';
class Wrapper extends React.Component {
  render() {
    var BoosterInfoPanel = cc.get('components.booster-info.boosterInfoPanel');
    var ProgressInfoPanel = cc.get('components.booster-info.progressInfoPanel');
    var ContactCard = cc.get('components.boosterPanel.contactsPanel.dialog.contactCard');
    var client = {
      first_name: 'Adam',
      last_name: 'L',
      telephone: '083-252-9994',
      email: 'adam.l@gmail.com'
    }
    return (
      <Grid  className="flex flex-center flex-middle" style={{height: "calc(100vh - 64px)"}}>
        <div className="full-width">
          <Row className="margin-bottom flex">
            <Col xs={12} sm={6} md={6} lg={6} className="container-center">
              <b>Booster information</b>
              <p>You can contract your booster directly</p>
              <ContactCard client={client} />
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

cc.register('components.booster-info.wrapper', Wrapper);
