import {Grid, Row, Col} from 'react-bootstrap';
const actions = cc.get('redux.actions');
class CoinBar extends React.Component {
  render() {
    let coin = this.props.reducer.profile.user.coin;
    return (
      <div>
        <Row className="relative">
          <div className="pull-right margin-top margin-right">
            <b>{coin + ' Coins'}</b>
          </div>
        </Row>
      </div>
    );
  }
}

cc.register('components.coinBar', connect(mapStateToProps, mapDispatchToProps(actions))(CoinBar));
