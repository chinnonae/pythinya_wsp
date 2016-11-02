import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, RaisedButton, Divider} from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
var actions = cc.get('redux.actions');
const ticketService = cc.get('services.ticket');
const profileService = cc.get('services.profile');
class BoosterList extends React.Component {
  constructor(props) {
    super(props);
    this.showSnackbar = this.showSnackbar.bind(this);
    ticketService.getTickets(this.props.actions.getTicketCallback);
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
    if(profileService.getProfile().user.is_booster) {
      newTicketView = <RaisedButton onTouchTap={this.showSnackbar} label="New Ticket" primary={true}/>;
    }
    /* rendering */
    return (

      <div className="margin-top">
        {/* start component top */}
        <Col xs={12} sm={12} md={7} lg={8}>
            {/* //component top left-side */}
            <Row style={{height: 100}} className="flex flex-mobile">
              <Col xs={12} sm={5} md={5} lg={5} className="no-padding flex flex-column flex-end-y">
                <div>
                  <div className="flex flex-center">Filter by MMR</div>
                  <Col xs={6} sm={6} md={6} lg={6}>
                    <Input name="start_mmr" label="Start(1500)" elementId="startMMR"></Input>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6}>
                    <Input name="end_mmr" label="End(2500)" elementId="endMMR"></Input>
                  </Col>
                </div>
              </Col>
              {/* //component top right-side */}
              <Col xs={12} sm={7} md={7} lg={7} className="no-padding flex">
                <Col xs={8} sm={8} md={7} lg={7} className="flex flex-column flex-end-y">
                  {/* <div className="flex flex-center">Filter by Booster name</div> */}
                  <Input name="booster_name" label="Filter by booster name" elementId="boosterName"></Input>
                </Col>
                <Col xs={4} sm={4} md={5} lg={5} style={{paddingBottom: 10}} className="flex flex-column flex-end-y">
                  <div>{newTicketView}</div>
                </Col>
              </Col>
            </Row>
          {/* //end component top */}
          {/* //start component booster list */}
          <Col xs={12} sm={12} md={12} lg={12}>
            <BoosterTable/>
          </Col>
        </Col>
        {/* end component booster list */}
        <Col xs={12} sm={12} md={5} lg={4}>
          <Row className="flex flex-column flex-end-y" style={{height: 100}}>
            <p className="text-center">History</p>
          </Row>
          <Row>
            <HistoryTable />
          </Row>
        </Col>
        <Dialog />
        <SnackBar />
        {/* //end component booster list */}
      </div>
    );
  }
}


cc.register('components.booster_list', connect(mapStateToProps,mapDispatchToProps(actions))(BoosterList));
