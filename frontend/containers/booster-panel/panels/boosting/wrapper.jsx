import {Card} from 'material-ui/Card';
import {RaisedButton, FlatButton, Divider} from 'material-ui';
import {Row,Col, Grid} from 'react-bootstrap';
import {lightBlue500} from 'material-ui/styles/colors';
const actions = cc.get('redux.actions');
const boosterService = cc.get('services.booster');
const profileService = cc.get('services.profile');
import InputRange from 'react-input-range';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.profile = this.props.reducer.profile;
    this.actions = this.props.actions;
    this.ticketId = this.profile.boosting_ticket.id;
    this.updateMMR = this.updateMMR.bind(this);
    this.state = {
      min: this.profile.boosting_ticket.min_mmr,
      max: this.profile.boosting_ticket.max_mmr,
      current: this.profile.boosting_ticket.current_mmr || this.profile.boosting_ticket.min_mmr
    };
    // boosterService.getCurrentTicket(1, this.props.actions.getCurrentTicketCallback);
    // this.props.actions.getCurrentTicketCallback(this.props.ticket);
  }
  done() {
    boosterService.doneBoosting(this.ticketId, this.actions.doneBoostingCallback);
  }
  updateMMR() {
    boosterService.updateMMR(this.ticketId, this.state.current, this.actions.updateMMRCallback)
    .then((res) => {
      profileService.fetchProfile(this.actions.profileCallback);
    });
  }
  handleValueChange(component, value) {
    this.setState({
      current: value,
    });
  }
  increase() {
    this.setState({
      current: this.state.current + 25
    }, () => {
      this.updateMMR();
    });
  }
  decrease() {
    this.setState({
      current: this.state.current - 25
    }, () => {
      this.updateMMR();
    });
  }

  render() {
    /* components */
    let Stepper = cc.get('components.boosterPanel.stepper');
    let boostingTicket = this.profile.boosting_ticket;
    const Input = cc.get('components.input');
    const customerName = boostingTicket.clients[0].first_name + " " + boostingTicket.clients[0].last_name;
    let customer = boostingTicket.clients[0];
    const currentMMRLabel = boostingTicket.current_mmr ? boostingTicket.current_mmr : 'Current MMR';
    return (
      <Card className="padding-all black-secondary">
        <div className="flex flex-middle">
          <img width={15} src="/assets/menu.svg"/>
          <p className="no-margin padding-left">Boosting</p>
        </div>
        <Stepper activeStep={2} />
        <Divider style={{marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 20, backgroundColor: "rgba(155,155,155,0.6)"}}/>
        <Row className="text-center flex flex-column flex-center margin-bottom">
          <p id="waiting-label">You are boosting MMR</p>
          <p className="small-text">If you have any problem you can contact the client directly.</p>
        </Row>
        <div style={{marginTop: 40, marginBottom: 40}}>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p className="text-right"><b>Customer name</b></p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p>{customerName}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p className="text-right"><b>Email</b></p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p>{customer.email}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p className="text-right"><b>Telephone</b></p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <p>{customer.telephone}</p>
            </Col>
          </Row>
        </div>

        <div style={{marginTop: 40, marginBottom: 40}}>
          <Row className="flex flex-center">
            <Col xs={11} sm={8} md={9} lg={7} className="flex flex-center">
              <p className="no-margin" style={{whiteSpace: "nowrap", paddingRight: 30}}>Current MMR</p>
              <InputRange
                maxValue={this.state.max}
                minValue={this.state.min}
                value={this.state.current}
                onChange={this.handleValueChange.bind(this)}
              />
            </Col>
          </Row>
          <Row className="margin-top flex flex-center">
            <FlatButton onTouchTap={this.decrease.bind(this)} label="-25" className="error white-text" style={{minWidth: 55, marginRight: 10}}/>
            <FlatButton onTouchTap={this.increase.bind(this)} label="+25" className="success white-text margin-left" style={{minWidth: 55, marginLeft: 10}} />
          </Row>
        </div>
        <Row className="flex flex-center">
          <FlatButton label="Done" style={{paddingLeft: 20, paddingRight: 20}} className="success white-text" onTouchTap={this.done.bind(this)} />
        </Row>
      </Card>
    );
  }
}

cc.register('components.boosterPanel.boosting', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
