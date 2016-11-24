import {Card} from 'material-ui/Card';
import {RaisedButton} from 'material-ui'
import {Row, Col} from 'react-bootstrap';

const PackageCard = (props) => {
  let style = {
    width: "250px"
  }
  var coinPackage = props.coinPackage;
  return (
    <Card className="margin-all" style={style}>
      <div style={{backgroundColor: "#e0e0e0", width: "250px", height: "250px"}}></div>
      <div className="padding-all relative">
        <Row className="text-center">
          <p>2000 coins</p>
          <p>1800 Baht</p>
          <div className='flex'>
            <RaisedButton primary={true} className="container-center">
              <Link className="link-button" to='/topup/1'>Buy</Link>
            </RaisedButton>
          </div>
        </Row>
      </div>
    </Card>
  );
}

cc.register('components.topup.packageCard', PackageCard);
