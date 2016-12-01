import {Card, CardHeader} from 'material-ui/Card';
import {Col, Grid, Row, Form, Image} from 'react-bootstrap';
import {TextField, RaisedButton, Divider} from 'material-ui';
//signup
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
var authService = cc.get('services.auth');
//list
var actions = cc.get('redux.actions');
//Slider
var Slider = require('react-slick');

class Main extends React.Component {

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
    console.log(this.props);
    var error = !this.props.reducer.auth.isSuccess;
    var emailLabel = "E-mail";
    emailLabel += error ? _.template(' (${message})')({message: this.props.reducer.auth.message}) : '';
    var Carousel = cc.get("components.carousel");
    var settings = {
      // dots: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    /* rendering */
    return (
      <Grid id="signup-panel" className="flex flex-center no-padding full-width" style={{height: "calc(100vh - 64px)"}}>
        <Grid className="full-width">
          <Row className="flex flex-mobile main-left-right-padding" style={{height: "60%", backgroundColor: "#4a4a4a"}}>
            <Col md={6} lg={6} className="gray-fade-right full-width" >
              <div className="flex flex-center flex-middle" style={{height: "100%", width: "100%"}}>
                <Image style={{width: "25%"}} src="/assets/logo.svg" />
              </div>
            </Col>
            <Col md={6} lg={6} className="flex flex-middle flex-center flex-column full-width">
              <Image className="pythinya-scale" src="/assets/pythinya.png"/>
              <br></br>
              <Divider className="divider-width"/>
              <h3
                style={{height: 1.7}}>MMR Booster</h3>
              <div className="flex flex-column margin-top padding-top">
                <RaisedButton href={'/signup'} label="Sign up" backgroundColor={"#F6A623"} labelColor={"#FFFFFF"}/>
                <p className="text-center">or</p>
                <RaisedButton href={'/signup/booster'} label="Become a booster" backgroundColor={"#4990E2"} labelColor={"#FFFFFF"}/>
              </div>
            </Col>
          </Row>
          <br></br>
          <Row className="flex flex-mobile" style={{height: "35%"}}>
            <Col md={6} lg={6} className="no-padding full-width" style={{paddingRight: 7.5}}>
              <div className="flex flex-center flex-middle flex-column black-secondary full-height">
                <img  src="/assets/dota2logo.svg"></img>
                <h4>Supported Dota 2</h4>
              </div>
            </Col>
            <Col md={6} lg={6} className="no-padding full-width" style={{paddingLeft: 7.5}}>
              <div className="flex flex-center flex-middle flex-column black-secondary full-height">
                <img
                  src="/assets/handshake-flat.svg"></img>
                <h4>Trusted Boosters</h4>
              </div>
            </Col>
          </Row>
        </Grid>

      </Grid>

    );
  }
}

cc.register('components.main', connect(mapStateToProps, mapDispatchToProps(actions))(Main));
