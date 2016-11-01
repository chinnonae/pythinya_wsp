import {Grid, Row, Col} from 'react-bootstrap';
class Wrapper extends React.Component {
  render() {
    var BoosterInfoPanel = cc.get('components.booster-info.boosterInfoPanel');
    var ProgressInfoPanel = cc.get('components.booster-info.progressInfoPanel');
    return (
      <Grid>
        <Row className="margin-bottom">
          <b>Booster information</b>
          <p>You can contract your booster directly</p>
          <BoosterInfoPanel />
        </Row>
        <Row>
          <ProgressInfoPanel />
        </Row>
      </Grid>
    );
  }
}

cc.register('components.booster-info.wrapper', Wrapper);
