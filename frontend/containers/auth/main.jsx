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
      <Grid id="signup-panel" className="flex flex-center full-width " style={{height: "calc(100vh - 64px)"}}>
        <Grid className="padding-all full-width">
          <Row className="flex" >
            <div className="container">
              <Col lg={7}>
                <Image src="/assets/dota2logo.png" className="full-width full-height" />
              </Col>

              <Col xs={12} sm={12} md={12} lg={5} className="color-signup">
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
              </Col>
            </div>
          </Row>
          {/* <Row className="flex"> */}
          <div className="container full-width">
            <Slider {...settings}>
              <div><Image className="box-size" src="/assets/kanoon.jpg"></Image></div>
              <div><Image className="box-size" src="/assets/nonae.jpg"></Image></div>
              <div><Image className="box-size" src="/assets/not.jpg"></Image></div>
              <div><Image className="box-size" src="/assets/p.jpg"></Image></div>
            </Slider>
          </div>
          {/* </Row> */}
        </Grid>
      </Grid>
    );
  }
}

cc.register('components.main', connect(mapStateToProps, mapDispatchToProps(actions))(Main));
