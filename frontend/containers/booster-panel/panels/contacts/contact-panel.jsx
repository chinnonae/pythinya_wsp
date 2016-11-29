import {Row, Col} from 'react-bootstrap';
const actions = cc.get('redux.actions');
import {Card} from 'material-ui';
const boosterService = cc.get('services.booster');
class ContactsPanel extends React.Component {
    constructor(props) {
        super(props);
        // boosterService.getContactList(this.props.actions.getContactsListCallback);
        this.props.actions.getContactsListCallback(this.props.clients);
        this.onFilter = this.onFilter.bind(this);
    }
    onFilter() {
        var word = $('#customer-filter')[0].value;
        this.props.actions.filterCustomer(word); // filtering the customer list.
    }
    render() {
        /* components*/
        const ContactTable = cc.get('components.boosterPanel.contactTable');
        const Input = cc.get('components.input');
        const ConfirmDialog = cc.get('components.boosterPanel.contactsPanel.dialog');
        /* rendering */
        return (
            <div>
                <ConfirmDialog/>
                <Card className="black-secondary padding-all">
                    <div className="flex flex-middle">
                        <img width={15} src="/assets/menu.svg"/>
                        <div>
                            <p className="no-margin padding-left">Contact list</p>
                            <p className="no-margin padding-left" style={{
                                fontSize: "0.8em"
                            }}>(people who are interested in your ticket)</p>
                        </div>
                    </div>
                    <ContactTable/>
                </Card>
            </div>
        );
    }
}

cc.register('components.boosterPanel.contactsPanel', connect(mapStateToProps, mapDispatchToProps(actions))(ContactsPanel));
