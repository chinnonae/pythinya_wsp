var profile = null;
var service = {
	getProfile: function(callback) {
		const token = cookie.get('token');
    callback = typeof callback === 'function' ? callback : () => {};
    if (profile && token) {
      callback(profile);
      return;
    }
		if (token) {
      let http = getHttp();
      http.getConstant(http.methods.GET, '/api/user/profile/')
      .done(function(res) {
        profile = res;
        callback(res);
      })
      .fail(function(res) {
        console.log(res);
      });
		}
	},
  clear: function() {
    profile = null;
  },
  getToken: function() {
    return cookie.get('token');
  }
};

const getHttp = () => {
  return cc.get('services.http');
};

cc.register('services.profile', service);
