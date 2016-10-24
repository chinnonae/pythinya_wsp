import {Card, CardHeader} from 'material-ui/Card';
import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, RaisedButton} from 'material-ui';
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
						<Col md={5} lg={5} className="container-center">
							<Card>
								<form onSubmit={this.onSubmit}>
									<CardHeader title="Signin"/>
									<Row className="padding-left padding-right no-margin flex flex-column padding-all" style={{paddingTop: 50, paddingBottom:50}}>
                    <TextField id="username" className="container-center" hintText="Username" floatingLabelText="Username"/>
                    <TextField id="password" className="container-center" hintText="Password" floatingLabelText="Password"/>
									</Row>
                  <Row className="flex padding-bottom">
                    <RaisedButton type="submit" className="container-center margin-top" label="Signin" primary={true}/>
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
