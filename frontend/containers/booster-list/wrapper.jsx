import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, RaisedButton, Divider} from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
var actions = cc.get('redux.actions');
const ticketService = cc.get('services.ticket');
const profileService = cc.get('services.profile');
const boosterService = cc.get('services.booster');
class BoosterList extends React.Component {
  constructor(props) {
    super(props);
    this.showSnackbar = this.showSnackbar.bind(this);
    ticketService.getTickets(this.props.actions.getTicketCallback);
    boosterService.getHistory(this.props.actions.getHistoryCallback);
  }
  showSnackbar() {
    let element = $('.snackbar-wrapper');
    element.addClass('snackbar-wrapper-show');
  }
  render() {
    /* component*/
    var Input = cc.get('components.input');
    var self = this;
    var BoosterTable = cc.get('components.boosterList.boosterTable');
    let Dialog = cc.get('components.clientPanel.buyDialog');
    let SnackBar = cc.get('components.createTicket.snackbar');
    const HistoryTable = cc.get('components.boosterPanel.historyTable');
    let newTicketView;
    let profile = profileService.getProfile();
    if(profile.user.is_booster) {
      newTicketView = <RaisedButton id="new-ticket-btn" onTouchTap={this.showSnackbar} label="New Ticket" primary={true}/>;
    }
    /* rendering */
    return (

      <div>
        <Col xs={12} sm={12} md={7} lg={8} className="margin-top">
          <Col xs={12} sm={12} md={12} lg={12} className="no-padding">
            <Card className="black-secondary padding-all" >
              <div className="flex flex-middle">
                <img width={15} src="/assets/menu.svg"/>
                <p className="no-margin padding-left">Tickets</p>
              </div>
              <BoosterTable/>
            </Card>
          </Col>
        </Col>
        <Col xs={12} sm={12} md={5} lg={4} className="margin-top">
          <HistoryTable />
        </Col>
        <Dialog />
        <SnackBar />
      </div>
    );
  }
}


cc.register('components.booster_list', connect(mapStateToProps,mapDispatchToProps(actions))(BoosterList));
