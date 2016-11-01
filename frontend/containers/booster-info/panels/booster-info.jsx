import {Card} from 'material-ui/Card';
class BoosterInfoPanel extends React.Component {
  render() {
    return (
      <div>
        <Card className="padding-all">
          <b>Name</b>
          <p>Adam L</p>
          <b>Phone</b>
          <p>083-252-9994</p>
          <b>Email</b>
          <p>adam.l@gmail.com</p>
        </Card>
      </div>
    );
  }
}

cc.register('components.booster-info.boosterInfoPanel', BoosterInfoPanel);
