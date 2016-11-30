import {Grid, Row, Col} from 'react-bootstrap';
const actions = cc.get('redux.actions');
class CoinBar extends React.Component {
  render() {
    let coin = this.props.reducer.profile.user.coin;
    return (
      <Row className="relative margin-bottom">
        <div className="margin-top margin-right flex flex-column" style={{flexDirection: "row-reverse"}}>
          <div className="flex flex-column">
            <b className="text-right">{coin + ' Coins'}</b>
            <Link className="text-right white-text" to="/topup">Buy more coins</Link>
          </div>
        </div>
      </Row>
    );
  }
}

cc.register('components.coinBar', connect(mapStateToProps, mapDispatchToProps(actions))(CoinBar));
