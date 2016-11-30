import {Card} from 'material-ui/Card';
import {RaisedButton} from 'material-ui';
import {Row, Col} from 'react-bootstrap';

const PackageCard = (props) => {
  let style = {
    width: "250px"
  };
  var coinPackage = props.coinPackage;
  return (
    <Card className="black-secondary relative padding-all">
      <div className="flex">
        <img width={25} src="/assets/coins.svg" />
        <Row className="flex flex-column flex-center padding-left">
          <p className="no-margin text-right">{props.topup.coin} Coins</p>
          <p className="small-text no-margin text-right">${props.topup.baht}</p>
        </Row>
      </div>
      <Row className="pull-right pull-top flex flex-middle full-height padding-right">
        <Link className="success-text pointer" to={`/topup/${props.topup.id}`}>Buy now</Link>
      </Row>
    </Card>
  );
};

cc.register('components.topup.packageCard', PackageCard);


{/* <Card className="black-secondary margin-all flex" style={style}>
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
</Card> */}
