window.React = require('react');
window.ReactDOM = require('react-dom');
window.$ = require('jquery');
window._ = require('lodash');
window.cookie = require('js-cookie');
window.connect = require('react-redux').connect;
window.Router = require('react-router').Router;
window.Link = require('react-router').Link;
import { bindActionCreators } from 'redux';
window.mapStateToProps = (state) => {
  return { reducer: state };
};
window.mapDispatchToProps = (action) => {
  return (dispatch) => {
    return { actions: bindActionCreators(action, dispatch) };
  };
};
var Turbolinks = require("turbolinks");
Turbolinks.start();
require('./js');
require('./redux');
require('./containers');
import './stylesheets';
// var App = require('./containers/wrapper.jsx');
var App = cc.get('root');
ReactDOM.render(
	<App />, document.getElementById('app'));

document.addEventListener("turbolinks:load", function() {
  console.log("loaded turbolinks");
});
