import {Card} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
class ProgressInfoPanel extends React.Component {
  render () {
    return (
      <div>
        <Card>
          <div className="full-width padding-all" style={{backgroundColor: "#e0e0e0"}}>
            <label>Progress</label>
          </div>
          <div className="padding-all">
            <p>How many your MMR is boosted</p>
            <LinearProgress mode="determinate" value="50" style={{height: "20px"}}/>
          </div>
        </Card>
      </div>
    );
  }
}

cc.register('components.booster-info.progressInfoPanel', ProgressInfoPanel);
