import {Card, CardHeader} from 'material-ui/Card';
import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, RaisedButton, Divider} from 'material-ui';
var authService = cc.get('services.auth');

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  callback(res) {
    console.log(res);
  }

  onSubmit(e) {
    e.preventDefault();
    var firstname = $("#firstname")[0].value;
    var lastname = $("#lastname")[0].value;
    var email = $("#email")[0].value;
    var password = $("#password")[0].value;
    var mobileNumber = $("#mobileNumber")[0].value;
    authService.signin(firstname, lastname, email, password, mobileNumber, this.callback);
  }

  render() {
    /* Components */
    var Input = cc.get('components.input');
    /* rendering */
    return (
      <Grid className="flex flex-center flex-middle" style={{height: '90vh'}}>
        <Grid>
          <Row className="flex">
            <Col xs={12} sm={8} md={6} lg={5} className="container-center">
              <Card className="padding-left padding-right padding-bottom">
                <form onSubmit={this.onSubmit}>
                  <Row className="flex padding-all">
                    <div className="container-center">
                      Sign Up
                    </div>
                  </Row>
                  <Divider />
                  <Row className="padding-left padding-right no-margin flex flex-column padding-all" style={{paddingTop: 30, paddingBottom:50}} >
                    <Input label="Firstname" elementId="firstname"/>
                    <Input label="Lastname" elementId="lastname"/>
                    <Input label="E-mail" elementId="email"/>
                    <Input type="password" label="Password" elementId="password"/>
                    <Input label="Mobile number" elementId="mobileNumber"/>
                  </Row>
                  <Row className="flex padding-bottom no-margin padding-left padding-right">
                    <RaisedButton type="submit" className="margin-top full-width" label="Signup" primary={true}/>
                  </Row>
                </form>
              </Card>
            </Col>
          </Row>
        </Grid>
      </Grid>
    );
  }
}

cc.register('components.signup', Signup);
