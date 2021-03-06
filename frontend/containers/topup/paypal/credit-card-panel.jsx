import {Row,Col} from 'react-bootstrap';
class CreditCardForm extends React.Component {
  render() {
    /* Components */
    let Input = cc.get('components.input');
    return (
      <form id={this.props.formId}>
        <Col xs={12} sm={12} md={12} lg={12} className="no-padding">
          <Input name="card_number" className="margin-top" elementId="card_number" label="Card number"/>
          <img src="/assets/visalogo.jpg" className="pull-right pull-top" width={40}/>
        </Col>
        <Row>
          <Col className="flex no-padding" xs={12} sm={6} md={6} lg={6}>
            <Col className="no-padding" xs={4} sm={4} md={4} lg={4}>
              <Input name="expire_month" elementId="expire_month" label="MM" />
            </Col>
            <Col style={{paddingRight: 0}} xs={8} sm={5} md={5} lg={5}>
              <Input name="expire_year" elementId="expire_year" label="YYYY"/>
            </Col>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} className="no-padding"  style={{paddingLeft: 15}}>
            <Input name="cvv" elementId="cvv" label="CVV" placeholder="111"/>
          </Col>
        </Row>
        <Row>
        <Col xs={12} sm={6} md={6} lg={6} className="no-padding" style={{paddingRight: 15}}>
          <Input name="first_name" elementId="first_name" label="Firstname"/>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="no-padding" style={{paddingLeft: 15}}>
          <Input name="last_name" elementId="last_name" label="Lastname" />
        </Col>
        </Row>
      </form>
    );
  }
}

cc.register('components.creditcardForm', CreditCardForm);
