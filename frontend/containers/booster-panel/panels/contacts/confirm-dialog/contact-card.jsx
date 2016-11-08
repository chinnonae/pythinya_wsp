import {Card} from 'material-ui/Card';
import {Row, Col} from 'react-bootstrap';
const card = (props) => {
  return (
    <Card>
      <Row className="flex-mobile">
        <Col xs={12} sm={6} md={6} lg={6}>
          <Row className="margin-top margin-bottom">
            <b className="no-margin">Name</b>
            <p className="no-margin">{props.client.first_name + " " + props.client.last_name}</p>
          </Row>
          <Row className="margin-top margin-bottom">
            <b className="no-margin">Phone</b>
            <p className="no-margin">{props.client.telephone}</p>
          </Row>
          <Row className="margin-top margin-bottom">
            <b className="no-margin">Email</b>
            <p className="no-margin">{props.client.email}</p>
          </Row>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>

        </Col>
      </Row>
    </Card>
  );
};

cc.register('components.boosterPanel.contactsPanel.dialog.contactCard', card);
