import {Row} from 'react-bootstrap';
import {Divider} from 'material-ui';
class CartPanel extends React.Component {
  render() {
    let topup = this.props.topup;
    return (
      <div className="full-height relative">
        <div className="relative padding-all">
          <div className="flex">
            <img width={25} src="/assets/coins.svg" />
            <Row className="flex flex-column flex-center padding-left">
              <p className="no-margin text-right">{topup.coin} Coins</p>
            </Row>
          </div>
          <Row className="pull-right pull-top flex flex-middle full-height padding-right">
            <p className="no-margin text-right">${topup.baht}</p>
          </Row>
        </div>
        <div className="pull-bottom padding-all full-width">
          <Divider style={{backgroundColor: "#676767"}}/>
          <div className="relative padding-all">
            <p className="no-margin pull-left">Subtotal</p>
            <p className="no-margin pull-right">${topup.baht}</p>
          </div>
          <div className="relative padding-all margin-bottom">
            <p className="no-margin pull-left">Taxes</p>
            <p className="no-margin pull-right">$0</p>
          </div>
          <Divider style={{backgroundColor: "#676767"}}/>
          <div className="relative padding-all margin-bottom">
            <p className="no-margin pull-left">Total</p>
            <p className="no-margin pull-right">${topup.baht}</p>
          </div>
        </div>
      </div>
    );
  }
}

cc.register('components.topup.cartPanel', CartPanel);
