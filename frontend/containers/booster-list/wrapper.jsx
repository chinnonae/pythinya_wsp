import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, RaisedButton, Divider} from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
var actions = cc.get('redux.actions');
const ticketService = cc.get('services.ticket');
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
    /* rendering */
    return (

      <div className="flex flex-center">
        {/* start component top */}
        <Col xs={12} sm={12} md={12} lg={8}>
          <div className="container-center">
            {/* //component top left-side */}
            <Col xs={12} sm={5} md={5} lg={5} className="no-padding">
              <div className="flex flex-center">Filter by MMR</div>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Input name="start_mmr" label="Start(1500)" elementId="startMMR"></Input>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Input name="end_mmr" label="End(2500)" elementId="endMMR"></Input>
              </Col>
            </Col>
            {/* //component top right-side */}
            <Col xs={12} sm={7} md={7} lg={7} className="no-padding">
              <Col xs={12} sm={8} md={8} lg={8}>
                <div className="flex flex-center">Filter by Booster name</div>
              </Col>
              <div>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Input name="booster_name" label="Booster name" elementId="boosterName"></Input>
                </Col>
                <Col xsOffset={4} xs={8} smOffset={0} sm={4} mdOffset={0} md={4} lg={4}>
                  <br></br>
                  <RaisedButton onTouchTap={this.showSnackbar} label="New Ticket" primary={true}/>
                </Col>
              </div>
            </Col>
          </div>
          {/* //end component top */}
          {/* //start component booster list */}
          <Col xs={12} sm={12} md={12} lg={12}>
            <BoosterTable/>
          </Col>
        </Col>
        {/* end component booster list */}
        <Col xs={0} sm={0} md={0} lg={4}>

        </Col>
        <Dialog />
        <SnackBar />
        {/* //end component booster list */}
      </div>
    );
  }
}


cc.register('components.booster_list', connect(mapStateToProps,mapDispatchToProps(actions))(BoosterList));
