import {Card} from 'material-ui/Card';
import {RaisedButton} from 'material-ui';
import {Row,Col, Grid} from 'react-bootstrap';
import {lightBlue500} from 'material-ui/styles/colors';
const actions = cc.get('redux.actions');
const boosterService = cc.get('services.booster');
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.profile = this.props.reducer.profile;
    this.actions = this.props.actions;
    this.ticketId = this.profile.boosting_ticket.id;
    this.updateMMR = this.updateMMR.bind(this);
    // boosterService.getCurrentTicket(1, this.props.actions.getCurrentTicketCallback);
    // this.props.actions.getCurrentTicketCallback(this.props.ticket);
  }
  done() {
    boosterService.doneBoosting(this.ticketId, this.actions.doneBoostingCallback);
  }
  updateMMR() {
    let currentMMR = $('#current-mmr')[0].value;
    boosterService.updateMMR(this.ticketId, currentMMR, this.actions.updateMMRCallback);
  }
  render() {
    /* components */
    let boostingTicket = this.profile.boosting_ticket;
    const Input = cc.get('components.input');
    const customerName = boostingTicket.clients[0].first_name + " " + boostingTicket.clients[0].last_name;
    const currentMMRLabel = boostingTicket.current_mmr ? boostingTicket.current_mmr : 'Current MMR';
    return (
      <Card className="padding-all" style={{marginTop: 100}}>
        <Grid className="full-width">
          <Col smOffset={1} sm={10} md={8} mdOffset={2} xs={10} xsOffset={1} lg={8} lgOffset={2}>
            <Row className="text-center flex flex-center margin-bottom">
              <span className="display-box">You are boosting MMR for &nbsp;
                <p>{customerName}</p>
              </span>
            </Row>
            <Row className="flex margin-bottom flex-mobile">
              <Col className="flex flex-column text-center" xs={12} sm={6} md={6} lg={6}>
                <h4>from MMR</h4>
                <h2>{boostingTicket.min_mmr}</h2>
                <h4>to MMR</h4>
                <h2>{boostingTicket.max_mmr}</h2>
              </Col>
              <Col className="flex flex-middle flex-center text-center" xs={12} sm={6} md={6} lg={6}>
                <div className="flex flex-column">
                  <span>Current MMR</span>
                  <Input label={currentMMRLabel} elementId="current-mmr"/>
                  <RaisedButton onTouchTap={this.updateMMR} backgroundColor={lightBlue500} labelColor='white' label="Update"/>
                </div>
              </Col>
            </Row>
            <Row className='flex'>
              <RaisedButton onTouchTap={this.done.bind(this)} className="container-center" buttonStyle={{width: 200}} primary={true} label="Done" />
            </Row>
          </Col>
        </Grid>
      </Card>
    );
  }
}

cc.register('components.boosterPanel.boosting', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
