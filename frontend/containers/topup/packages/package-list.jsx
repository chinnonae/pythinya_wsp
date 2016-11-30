import {Row, Col, Grid} from 'react-bootstrap';
class PackageListPanel extends React.Component {
  render() {
    let PackageCard = cc.get('components.topup.packageCard');
    return (
      <Grid>
        <Row>
          {
            _.times(10, function(i) {
              return (
                <Col key={i} xs={12} sm={6} md={4} lg={3} className="margin-top margin-bottom no-margin" style={{padding: 2}}>
                  <PackageCard />
                </Col>
              );
            })
          }
        </Row>
      </Grid>
    );
  }
}

cc.register('components.topup.packageListPanel', PackageListPanel);
