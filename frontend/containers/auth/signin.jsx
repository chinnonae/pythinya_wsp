import {Card, CardHeader} from 'material-ui/Card';
import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, RaisedButton, Divider} from 'material-ui';
class Signin extends React.Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		console.log("submitting data");
		var username = $("#username")[0].value;
		var password = $("#password")[0].value;
		console.log(username);
		console.log(password);
	}
	render() {
		return (
			<Grid className="flex flex-center flex-middle" style={{height: '90vh'}}>
				<Grid>
					<Row className="flex">
						<Col md={6} lg={6} className="container-center">
							<Card className="padding-left padding-right">
								<form onSubmit={this.onSubmit}>
                  <Row className="flex padding-all">
                    <div className="container-center">
                      Sign in
                    </div>
                  </Row>
                  <Divider />
									<Row className="padding-left padding-right no-margin flex flex-column padding-all" style={{paddingTop: 30, paddingBottom:50}}>
                    <TextField id="username" className="container-center full-width" hintText="Username" floatingLabelText="Username"/>
                    <TextField id="password" className="container-center full-width" hintText="Password" floatingLabelText="Password"/>
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

export default Signin;
