var components = {};
var Collection = {
  register: function(namespace,component) {
    components[namespace] = component;
  },
  get: function(namespace) {
    return components[namespace];
  }
};

window.cc =Collection;
