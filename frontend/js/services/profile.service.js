var service = {
	getProfile: function(callback) {
		const token = cookie.get('token');
    const profile = cookie.get('profile');
    callback = typeof callback === 'function' ? callback : () => {};
		if (token) {
      let http = getHttp();
      http.getConstant(http.methods.GET, '/api/user/profile/')
      .done(function(res) {
        cookie.set('profile', res);
        callback(res);
      })
      .fail(function(res) {
        console.log(res);
      });
		}else {
      callback(null);
    }
    if (profile && token) {
      let obj = JSON.parse(profile);
      return obj;
    }
	},
  clear: function() {
    cookie.remove('profile');
    cookie.remove('token');
  },
  getToken: function() {
    return cookie.get('token');
  }
};

const getHttp = () => {
  return cc.get('services.http');
};

cc.register('services.profile', service);
