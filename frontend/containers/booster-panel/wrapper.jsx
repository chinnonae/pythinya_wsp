import {Grid, Row, Col} from 'react-bootstrap';
class Wrapper extends React.Component {
  render() {
    return (
      <Grid>
        <Col xs={12} sm={12} md={7} lg={8}>
          
        </Col>
        <Col xs={12} sm={12} md={5} lg={4}></Col>
      </Grid>
    );
  }
}

cc.register('components.boosterPanel', Wrapper);
