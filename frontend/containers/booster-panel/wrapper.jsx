import {Grid, Row, Col} from 'react-bootstrap';
const actions = cc.get('redux.actions');
const boosterService = cc.get('services.booster');
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    boosterService.getContactList(this.props.actions.getContactsListCallback);
  }
  render() {
    /* components */
    const Input = cc.get('components.input');
    /* rendering */
    return (
      <Grid className="full-width">
        <Col xs={12} sm={12} md={7} lg={8}>
          <Row className="flex">
            <Col className="flex flex-column flex-end-y" xs={7} sm={7} md={7} lg={7}>
              <p>Contact list</p>
              <p>(people who interested your ticket)</p>
            </Col>
            <Col xs={5} sm={5} md={5} lg={5}>
              <p className="text-center">Filter by customer name</p>
              <Input label="Customer name"/>
            </Col>
          </Row>
          <Row>

          </Row>
        </Col>
        <Col xs={12} sm={12} md={5} lg={4}></Col>
      </Grid>
    );
  }
}

cc.register('components.boosterPanel', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
