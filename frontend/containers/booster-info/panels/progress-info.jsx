import {Row} from 'react-bootstrap';
import {RaisedButton} from 'material-ui';
class ProgressInfoPanel extends React.Component {
  render () {
    return (
      <div>
        <div className="flex flex-center">
          <img width="60" src="/assets/logo-amber.svg" />
        </div>
        <div className="flex flex-center">
          <div className="text-center">
            <Row>
              <h2><p>55%</p></h2>
            </Row>
            <Row>
              <p>of boosting</p>
            </Row>
            <Row>
              <p>If you have any problem you can contact your booster directly</p>
            </Row>
          </div>
        </div>
          <Row className="flex flex-center margin-bottom margin-top">
            <RaisedButton
              style={{width: "30%"}}
              onClick={this.props.action}
              backgroundColor={"#F6A623"}
              label="Booster Information"
              labelColor="white"
            />
          </Row>
      </div>
    );
  }
}

cc.register('components.booster-info.progressInfoPanel', ProgressInfoPanel);
