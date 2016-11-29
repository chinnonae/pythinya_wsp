import {Card, CardHeader} from 'material-ui/Card';
import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, RaisedButton, FlatButton, Divider} from 'material-ui';
const actions = cc.get('redux.actions.auth');
class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
    var authService = cc.get('services.auth');
		var username = $("#email")[0].value;
		var password = $("#password")[0].value;
    authService.signin(username, password, this.props.actions.signinCallback);
	}
	render() {
    var Input = cc.get('components.input');
    var error = !this.props.reducer.auth.isSuccess;
    var emailLabel = "Email";
    emailLabel += error ? " (Invalid email or password)" : "";
		return (
			<Grid className="flex flex-center flex-middle gray-fade-all" style={{height: "calc(100vh - 64px)"}}>
				<Grid className="full-width padding-all">
					<Row className="flex">
						<Col xs={12} sm={8} md={6} lg={5} className="container-center no-padding">
              <Card className="black-secondary padding-left padding-right padding-bottom">
                <form onSubmit={this.onSubmit}>
                  <Row className="flex padding-top">
                    <div className="container-center">
                      <p>Sign in</p>
                    </div>
                  </Row>
                  <Row className="padding-left padding-right no-margin flex flex-column padding-all" style={{paddingTop: 30, paddingBottom:30}}>
                    <Input error={error} label={emailLabel} elementId="email"/>
                    <Input error={error} type="password" label="Password" elementId="password"/>
                  </Row>
                  <Row className="flex padding-bottom no-margin padding-left padding-right">
                    <FlatButton id="submit-btn" type="submit" className="margin-top full-width amber white-text" label="Sign in"/>
                  </Row>
                </form>
              </Card>
              <Card className="black-secondary padding-all margin-top flex flex-center">
                <Link to={'/signup'} className="container-center white-text">Don't have an account? Sign up now</Link>
              </Card>
						</Col>
					</Row>
				</Grid>
			</Grid>
		);
	}
}

cc.register('components.signin', connect(mapStateToProps,mapDispatchToProps(actions))(Signin));
