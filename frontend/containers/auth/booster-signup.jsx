import {Card, CardHeader} from 'material-ui/Card';
import {Col, Grid, Row, Form} from 'react-bootstrap';
import {TextField, FlatButton, Divider} from 'material-ui';
var authService = cc.get('services.auth');
var actions = cc.get('redux.actions');
class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    var forms = $('input');
    var data = new FormData();
    // data = new FormData(forms[7]);
    // data = _.merge(data, new FormData(forms[1]));
    // data = _.merge(data, new FormData(forms[2]));
    // data = _.merge(data, new FormData(forms[3]));
    // data = _.merge(data, new FormData(forms[4]));
    // data = _.merge(data, new FormData(forms[5]));
    // data = _.merge(data, new FormData(forms[6]));
    // data = _.merge(data, new FormData(forms[7]));
		/* serializing data from form*/
		// _.map($('#signup-form').serializeArray(), function(item) {
		// 	data[item.name] = item.value;
		// });
    // data = _.merge(data, new FormData($("#id_card")));
    _.map($('input[type="text"]'), (form) => {
      data.append(form.name,form.value);
    });
    _.map($('input[type="password"]'), (form) => {
      data.append(form.name,form.value);
    });
    _.map($('input[type="file"]')[0].files, (form) => {
      data.append('id_card',form);
    });
    console.log(data);
    authService.boosterSignup(data, this.props.actions.boosterSignupCallback);
  }
  render() {
    /* Components */
    var Input = cc.get('components.input');
    var error = !this.props.reducer.auth.isSuccess;
    var emailLabel = "E-mail";
    emailLabel += error ? _.template(' (${message})')({message: this.props.reducer.auth.message}) : '';
    /* rendering */
    return (
      <Grid id="signup-panel" className="flex flex-center flex-middle gray-fade-all">
        <div className="padding-all full-width">
          <Row className="flex">
            <Col xs={12} sm={8} md={6} lg={5} className="container-center no-padding">
              <Card className="black-secondary padding-left padding-right padding-bottom">
                <form id="signup-form" onSubmit={this.onSubmit}>
                  <Row className="flex padding-top">
                    <div className="container-center">
                      <p>Become a booster</p>
                    </div>
                  </Row>
                  <Row className="padding-left padding-right no-margin flex flex-column padding-all" style={{paddingTop: 30, paddingBottom:30}} >
                    <Input name="first_name" label="Firstname" elementId="firstname"/>
                    <Input name="last_name" label="Lastname" elementId="lastname"/>
                    <Input error={error} name="email" label={emailLabel} elementId="email"/>
                    <Input name="password" type="password" label="Password" elementId="password"/>
                    <Input name="telephone" label="Mobile number" elementId="mobileNumber"/>
                    <Input name="steam_id" label="Steam ID" elementId="steam_id"/>
                    <Input name="current_mmr" label="MMR" elementId="current_mmr"/>
                    <b className="white-text">Upload citizen card image</b>
                    <input name="id_card" className="margin-left white-text" type="file" id="id_card"/>
                  </Row>
                  <Row className="flex padding-bottom no-margin padding-left padding-right">
                    <FlatButton id="submit-btn" type="submit" className="margin-top full-width blue white-text" label="Sign up"/>
                  </Row>
                </form>
              </Card>
              <Card className="black-secondary flex flex-center padding-all flex margin-top">
                <Link to={'/signin'} className="container-center white-text">Already be a member? Sign in now</Link>
              </Card>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

cc.register('components.boosterSignup', connect(mapStateToProps, mapDispatchToProps(actions))(Signup));