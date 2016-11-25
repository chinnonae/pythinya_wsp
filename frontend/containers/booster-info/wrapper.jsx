import {Grid, Row, Col} from 'react-bootstrap';
import {Card} from 'material-ui';
const actions = cc.get('redux.actions');
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.profile = this.props.reducer.profile;
    this.booster = this.profile.holding_ticket[0].booster;
    this.togglePanel = this.togglePanel.bind(this);
    this.state = {
      showBoosterInfo: false
    }
  }
  togglePanel() {
    console.log("Clicked")
    this.setState({
      showBoosterInfo: !this.state.showBoosterInfo
    })

  }
  render() {
    var BoosterInfoPanel = cc.get('components.booster-info.boosterInfoPanel');
    var ProgressInfoPanel = cc.get('components.booster-info.progressInfoPanel');
    var Panel = <ProgressInfoPanel action={this.togglePanel}/>;
    if (this.state.showBoosterInfo === true)
      Panel = <BoosterInfoPanel booster={this.booster} action={this.togglePanel}/>;
    return (
      <Grid  className="flex flex-center flex-middle" style={{height: "calc(100vh - 64px)"}}>
        <div className="full-width flex flex-center">
          <Col xs={12} sm={12} md={6} lg={6}>
            <Card className="black-secondary padding-all">
              { Panel }
            </Card>
          </Col>
        </div>
      </Grid>
    );
  }
}

cc.register('components.booster-info.wrapper', connect(mapStateToProps, mapDispatchToProps(actions))(Wrapper));
