import {Grid, Row, Col} from 'react-bootstrap';
class Wrapper extends React.Component {
  render() {
    /* components */
    const Input = cc.get('components.input');
    /* rendering */
    return (
      <Grid className="full-width">
        <Col xs={12} sm={12} md={7} lg={8}>
          <Row>
            <Col xs={7} sm={7} md={7} lg={7}>
              <p>Contact list</p>
              <p>(people who interested your ticket)</p>
            </Col>
            <Col xs={5} sm={5} md={5} lg={5}>
              <p>Filter by customer name</p>
              <Input label="Customer name"/>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={5} lg={4}></Col>
      </Grid>
    );
  }
}

cc.register('components.boosterPanel', Wrapper);
