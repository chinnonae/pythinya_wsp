import {Row, Grid} from 'react-bootstrap';
import {RaisedButton, Card} from 'material-ui';
class BoosterInfoPanel extends React.Component {
  render() {
    return (
      <div>
        <Card className="black-secondary padding-all">
          <div className="full-height flex flex-middle padding-all">
            <img width="20" src="/assets/logo-amber.svg" />
            <h4 className="no-margin" style={{marginLeft: 15, color: "white"}}>Booster Information</h4>
          </div>
          <div className="flex flex-center" style={{marginTop: 87, marginBottom: 70}}>
            <div style={{display: "table"}}>
              <Row className="flex">
                <b><p style={{width: 50, textAlign: "right"}}>Name</p></b>
                <p className="no-margin padding-left">{this.props.booster.first_name + " " + this.props.booster.last_name}</p>
              </Row>
              <Row className="flex">
                <b><p style={{width: 50, textAlign: "right"}}>Phone</p></b>
                <p className="no-margin padding-left">{this.props.booster.telephone}</p>
              </Row>
              <Row className="flex">
                <b><p style={{width: 50, textAlign: "right"}}>Email</p></b>
                <p className="no-margin padding-left">{this.props.booster.email}</p>
              </Row>
            </div>
          </div>
          <Row className="flex flex-center" style={{marginBottom: 60}}>
            <RaisedButton
              style={{width: "30%"}}
              onClick={this.props.action}
              backgroundColor={"#F6A623"}
              label="Back"
              labelColor="white"
            />
          </Row>
        </Card>
      </div>
    );
  }
}

cc.register('components.booster-info.boosterInfoPanel', BoosterInfoPanel);
