import {Card, CardHeader} from 'material-ui/Card';
import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, RaisedButton, Divider} from 'material-ui';
var authService = cc.get('services.auth');
var actions = cc.get('redux.actions');
class Signup extends React.Component {

  render() {
    /* Components */
    var SignupForm = cc.get('components.signup.form');
    /* rendering */
    return (
      <Grid id="signup-panel" className="flex flex-center" style={{height: "calc(100vh - 64px)"}}>
        <Grid className="padding-all full-width">
          <Row className="flex">
            <Col xs={12} sm={8} md={6} lg={5} className="container-center">
              <SignupForm></SignupForm>
              <div className="flat-card padding-all flex margin-top">
                <Link to={'/signin'} className="container-center">Already be a member? Sign in now</Link>
              </div>
            </Col>
          </Row>
        </Grid>
      </Grid>
    );
  }
}

cc.register('components.signup', connect(mapStateToProps, mapDispatchToProps(actions))(Signup));
