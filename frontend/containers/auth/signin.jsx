import {Card, CardHeader} from 'material-ui/Card';
import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, RaisedButton, Divider} from 'material-ui';
class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
  callback(res) {
    console.log(res.token);
  }
	onSubmit(e) {
		e.preventDefault();
    var authService = cc.get('services.auth');
		var username = $("#username")[0].value;
		var password = $("#password")[0].value;
    authService.signin(username, password, this.callback);
	}
	render() {
    var Input = cc.get('components.input');
		return (
			<Grid className="flex flex-center flex-middle" style={{height: '90vh'}}>
				<Grid>
					<Row className="flex">
						<Col xs={12} sm={8} md={6} lg={5} className="container-center">
							<Card className="padding-left padding-right padding-bottom">
								<form onSubmit={this.onSubmit}>
                  <Row className="flex padding-all">
                    <div className="container-center">
                      Sign in
                    </div>
                  </Row>
                  <Divider />
									<Row className="padding-left padding-right no-margin flex flex-column padding-all" style={{paddingTop: 30, paddingBottom:50}}>
                    <Input label="Username" elementId="username"/>
                    <Input type="password" label="Password" elementId="password"/>
									</Row>
                  <Row className="flex padding-bottom no-margin padding-left padding-right">
                    <RaisedButton type="submit" className="margin-top full-width" label="Signin" primary={true}/>
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

cc.register('components.signin', Signin);
