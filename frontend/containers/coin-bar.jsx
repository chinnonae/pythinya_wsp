import {Grid, Row, Col} from 'react-bootstrap';
const actions = cc.get('redux.actions');
class CoinBar extends React.Component {
  render() {
    let coin = this.props.reducer.profile.user.coin;
    return (
      <Row className="relative margin-bottom">
        <div className="margin-top margin-right flex" style={{flexDirection: "row-reverse"}}>
          <b>{coin + ' Coins'}</b>
        </div>
      </Row>
    );
  }
}

cc.register('components.coinBar', connect(mapStateToProps, mapDispatchToProps(actions))(CoinBar));
