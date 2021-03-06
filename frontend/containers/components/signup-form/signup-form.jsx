import {Card, CardHeader} from 'material-ui/Card';
import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, RaisedButton, Divider} from 'material-ui';
var authService = cc.get('services.auth');
var actions = cc.get('redux.actions');

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    var form = $('#signup-form');
    authService.signup(form.serializeArray(), this.props.actions.signupCallback);
  }

  render() {
    /* Components */
    var Input = cc.get('components.input');
    var error = !this.props.reducer.auth.isSuccess;
    var emailLabel = "E-mail";
    emailLabel += error ? _.template(' (${message})')({message: this.props.reducer.auth.message}) : '';
    /* rendering */
    return (
      <div className="flat-card padding-left padding-right padding-bottom">
        <form id="signup-form" onSubmit={this.onSubmit}>
          <Row className="flex padding-all">
            <div className="container-center">
              Sign Up
            </div>
          </Row>
          <Divider />
          <Row className="padding-left padding-right no-margin flex flex-column padding-all" style={{paddingTop: 30, paddingBottom:50}} >
            <Input name="first_name" label="Firstname" elementId="firstname"/>
            <Input name="last_name" label="Lastname" elementId="lastname"/>
            <Input error={error} name="email" label={emailLabel} elementId="email"/>
            <Input name="password" type="password" label="Password" elementId="password"/>
            <Input name="telephone" label="Mobile number" elementId="mobileNumber"/>
          </Row>
          <Row className="flex padding-bottom no-margin padding-left padding-right">
            <RaisedButton type="submit" className="margin-top full-width" label="Signup" primary={true}/>
          </Row>
        </form>
      </div>
    );
    }
}

cc.register('components.signup.form', connect(mapStateToProps, mapDispatchToProps(actions))(SignupForm));
