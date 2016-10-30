var Slider = require('react-slick');

var SampleNextArrow = React.createClass({
  render: function() {
    return <div {...this.props} style={{display: 'block', background: 'red'}}></div>;
  }
});

var SamplePrevArrow = React.createClass({
  render: function() {
    return (
      <div {...this.props} style={{display: 'block', background: 'red'}}></div>
    );
  }
});

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
}

cc.register('components.carousel', Carousel);
