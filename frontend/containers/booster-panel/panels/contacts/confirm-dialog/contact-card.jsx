import {Card} from 'material-ui/Card';
import {Row, Col} from 'react-bootstrap';
const card = (props) => {
  return (
    <div>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6}>
          <p className="no-margin text-right"><b>Name</b></p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <p className="no-margin">{props.client.first_name + " " + props.client.last_name}</p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <p className="no-margin text-right"><b>Telephone</b></p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <p className="no-margin">{props.client.telephone}</p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <p className="no-margin text-right"><b>Email</b></p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <p className="no-margin">{props.client.email}</p>
        </Col>
      </Row>
    </div>
  );
};

cc.register('components.boosterPanel.contactsPanel.dialog.contactCard', card);
