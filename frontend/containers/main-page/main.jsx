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

  render() {
    /* Components */
    var Carousel = cc.get("components.carousel");
    var SignupForm = cc.get("components.signup.form");
    var settings = {
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 3,//screen.width <= 768 ? 3 : 1
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
                <SignupForm></SignupForm>
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
