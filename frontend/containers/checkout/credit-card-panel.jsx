import {Row,Col} from 'react-bootstrap';
class CreditCardForm extends React.Component {
  render() {
    /* Components */
    let Input = cc.get('components.input');
    return (
      <form>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Input elementId="card_number" label="Card number"/>
        </Col>
        <Row>
          <Col className="flex" xs={6} sm={6} md={6} lg={6}>
            <Col className="no-padding" xs={4} sm={2} md={2} lg={2}>
              <Input elementId="expire_month" label="MM" />
            </Col>
            <Col xs={6} sm={3} md={3} lg={3}>
              <Input elementId="expire_year" label="YYYY"/>
            </Col>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Input elementId="cvv" label="CVV" placeholder="111"/>
          </Col>
        </Row>
        <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Input elementId="first_name" label="Firstname"/>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Input elementId="last_name" label="Lastname" />
        </Col>
        </Row>
      </form>
    );
  }
}

cc.register('components.creditcardForm', CreditCardForm);
