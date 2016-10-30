import {Grid, Row, Col} from 'react-bootstrap';
const actions = cc.get('redux.actions');
const boosterService = cc.get('services.booster');
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    boosterService.getContactList(this.props.actions.getContactsListCallback);
    boosterService.getHistory(this.props.actions.getHistoryCallback);
  }
  render() {
    /* components */
    const Input        = cc.get('components.input');
    const ContactTable = cc.get('components.boosterPanel.contactTable');
    const HistoryTable = cc.get('components.boosterPanel.historyTable');
    /* rendering */
    return (
      <Grid className="full-width">
        <Col xs={12} sm={12} md={7} lg={8} className="padding-right">
          <Row className="flex no-margin" style={{height: 100}}>
            <Col className="no-padding flex flex-column flex-end-y" xs={7} sm={7} md={7} lg={7}>
              <p>Contact list</p>
              <p>(people who interested your ticket)</p>
            </Col>
            <Col xs={5} sm={5} md={5} lg={5} className="flex flex-column flex-end-y no-padding">
              {/* <p className="no-margin text-center">Filter by customer name</p> */}
              <Input label="Filter by Customer name"/>
            </Col>
          </Row>
          <Row>
            <ContactTable />
          </Row>
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
