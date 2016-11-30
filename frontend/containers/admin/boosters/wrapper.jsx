import {Card, FlatButton} from 'material-ui';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import {Row, Col} from 'react-bootstrap';
class Wrapper extends React.Component {
  render() {
    let BoostersTable = cc.get('components.admin.boosters.boostersTable');
    return (
      <div className="padding-all">
        <Row>
          <Col xs={12} sm={12} md={4} lg={3} className="no-padding">
            <Card className="black-secondary padding-all">
              <FlatButton className="full-width white-text flex flex-center" style={{display: 'flex'}}>
                <div className="flex flex-center flex-middle">
                  Verified boosters
                  <PlayArrow style={{paddingLeft: 7}} color="white"/>
                </div>
              </FlatButton>
              <FlatButton className="full-width white-text">
                <div className="flex flex-center flex-middle">
                  Pending boosters
                  <PlayArrow style={{paddingLeft: 7}} color="white"/>
                </div>
              </FlatButton>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={8} lg={9}>
            <Card className="black-secondary padding-all">
              <div className="flex flex-middle">
                <img width={15} src="/assets/menu.svg"/>
                <p className="no-margin padding-left">Boosters</p>
              </div>
              <BoostersTable />
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

cc.register('components.admin.boosters.wrapper', Wrapper);
