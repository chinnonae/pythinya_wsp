import {Row, Col} from 'react-bootstrap';
const actions          = cc.get('redux.actions');
const boosterService   = cc.get('services.booster');
class ContactsPanel extends React.Component {
  constructor(props) {
    super(props);
    boosterService.getContactList(this.props.actions.getContactsListCallback);
    this.onFilter = this.onFilter.bind(this);
  }
  onFilter() {
    var word = $('#customer-filter')[0].value;
    this.props.actions.filterCustomer(word); // filtering the customer list.
  }
  render() {
    /* components*/
    const ContactTable  = cc.get('components.boosterPanel.contactTable');
    const Input         = cc.get('components.input');
    const ConfirmDialog = cc.get('components.boosterPanel.contactsPanel.dialog');
    /* rendering */
    return (
      <div>
        <ConfirmDialog />
        <Row className="flex no-margin" style={{height: 100}}>
          <Col className="no-padding flex flex-column flex-end-y" xs={7} sm={7} md={7} lg={7}>
            <p>Contact list</p>
            <p>(people who interested your ticket)</p>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} className="flex flex-column flex-end-y no-padding">
            {/* <p className="no-margin text-center">Filter by customer name</p> */}
            <Input elementId="customer-filter" onChange={this.onFilter} label="Filter by Customer name"/>
          </Col>
        </Row>
        <Row>
          <ContactTable />
        </Row>
      </div>
    );
  }
}

cc.register('components.boosterPanel.contactsPanel', connect(mapStateToProps, mapDispatchToProps(actions))(ContactsPanel));
