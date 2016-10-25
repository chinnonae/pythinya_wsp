window.React = require('react');
window.ReactDOM = require('react-dom');
window.$ = require('jquery');
var Turbolinks = require("turbolinks");
Turbolinks.start();
require('./js');
require('./containers');
require('./js/services');
import './stylesheets';
var App = require('./containers/wrapper.jsx');

document.addEventListener("turbolinks:load", function() {
  console.log("loaded turbolinks");
});
