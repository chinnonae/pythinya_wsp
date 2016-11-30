import {Row, Col, Grid} from 'react-bootstrap';
const actions = cc.get('redux.actions');
class PackageListPanel extends React.Component {
  constructor(props) {
    super(props);
    const topupService = cc.get('services.topup');
    topupService.getTopups(this.props.actions.getTopupsCallback);
  }
  render() {
    let PackageCard = cc.get('components.topup.packageCard');
    let topup = this.props.reducer.topup;
    return (
      <Grid>
        <Row>
          {
            _.map(topup.topups, (topup,i) => {
              return (
                <Col key={i} xs={12} sm={6} md={4} lg={3} className="margin-bottom no-margin" style={{padding: 2}}>
                  <PackageCard topup={topup} />
                </Col>
              );
            })
          }
        </Row>
      </Grid>
    );
  }
}

cc.register('components.topup.packageListPanel', connect(mapStateToProps, mapDispatchToProps(actions))(PackageListPanel));
