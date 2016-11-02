import {Row, Col, Grid} from 'react-bootstrap';
class PackageListPanel extends React.Component {
  render() {
    let PackageCard = cc.get('components.topup.packageCard');
    return (
      <Grid>
        <Row>
          {
            _.times(10, function() {
              return (
                <Col xs={12} sm={6} md={4} lg={3} className="flex margin-top margin-bottom">
                  <div className="container-center">
                    <PackageCard />
                  </div>
                </Col>
              )
            } )
          }
        </Row>
      </Grid>
    );
  }
}

cc.register('components.topup.packageListPanel', PackageListPanel);
