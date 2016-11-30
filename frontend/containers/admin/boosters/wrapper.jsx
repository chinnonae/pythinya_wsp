import {Card, FlatButton} from 'material-ui';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import {Row, Col} from 'react-bootstrap';
const VERIFIED = 1;
const PENDING = 2;
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewState: VERIFIED,
      pending: {
        open: false,
        user: {}
      },
      verified: {
        open: false,
        user: {}
      }
    };
  }
  componentDidMount() {
    let adminService = cc.get('services.admin');
  }
  changeViewState(state) {
    this.setState({
      viewState: state
    });
  }
  togglePendingBoosterInfoDialog(toggle, user) {
    this.setState({
      pending: {
        open: toggle,
        user: user
      }
    });
  }
  toggleVerifiedBoosterInfoDialog(toggle, user) {
    this.setState({
      verified: {
        open: toggle,
        user: user
      }
    });
  }
  render() {
    let BoostersTable = cc.get('components.admin.boosters.boostersTable');
    let PendingBoostersTable = cc.get('components.admin.boosters.pendingBoostersTable');
    let PendingBoosterInfoDialog = cc.get('components.admin.boosters.pendingInfoDialog');
    let VerifiedBoosterInfoDialog = cc.get('components.admin.boosters.verifiedInfoDialog');
    let view;
    let style = {
      backgroundColor: "rgba(129,199,132,0.47)"
    };

    if(this.state.viewState === VERIFIED) {
      view = (
        <Card className="black-secondary padding-all">
          <div className="flex flex-middle">
            <img width={15} src="/assets/menu.svg"/>
            <p className="no-margin padding-left">Verified boosters</p>
          </div>
          <BoostersTable onClick={this.toggleVerifiedBoosterInfoDialog.bind(this)} />
        </Card>
      );
    }else if(this.state.viewState === PENDING) {
      view = (
        <Card className="black-secondary padding-all">
          <div className="flex flex-middle">
            <img width={15} src="/assets/menu.svg"/>
            <p className="no-margin padding-left">Pending boosters</p>
          </div>
          <PendingBoostersTable onClick={this.togglePendingBoosterInfoDialog.bind(this)} />
        </Card>
      );
    }
    return (
      <div className="padding-all">
        <PendingBoosterInfoDialog open={this.state.pending.open} user={this.state.pending.user} onClose={this.togglePendingBoosterInfoDialog.bind(this)} />
        <VerifiedBoosterInfoDialog open={this.state.verified.open} user={this.state.verified.user} onClose={this.toggleVerifiedBoosterInfoDialog.bind(this)}/>
        <Row>
          <Col xs={12} sm={12} md={4} lg={3} className="no-padding">
            <Card className="black-secondary padding-all">
              <FlatButton onTouchTap={this.changeViewState.bind(this,VERIFIED)} className="full-width white-text" style={this.state.viewState === VERIFIED ? style : {}}>
                <div className="flex flex-center flex-middle">
                  Verified boosters
                  <PlayArrow style={{paddingLeft: 7}} color="white"/>
                </div>
              </FlatButton>
              <FlatButton onTouchTap={this.changeViewState.bind(this,PENDING)} className="full-width white-text" style={this.state.viewState === PENDING ? style : {}}>
                <div className="flex flex-center flex-middle">
                  Pending boosters
                  <PlayArrow style={{paddingLeft: 7}} color="white"/>
                </div>
              </FlatButton>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={8} lg={9}>
            {view}
          </Col>
        </Row>

      </div>
    );
  }
}

cc.register('components.admin.boosters.wrapper', Wrapper);
