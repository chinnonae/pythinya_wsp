var myProfile = null;
var service = {
	fetchProfile: function(callback) {
    callback = typeof callback === 'function' ? callback : () => {};
		const token = cookie.get('token');
    const profile = cookie.get('profile');
    return new Promise((resolve, reject) => {
  		if (token) {
        let http = getHttp();
        http.getConstant(http.methods.GET, '/api/user/profile/')
        .done(function(res) {
          cookie.set('profile', res);
          myProfile = res;
          callback(res);
          resolve(res);
        })
        .fail(function(res) {
          reject(res);
        });
  		}else {
        resolve(null);
      }
    });
	},
  clear: function() {
    cookie.remove('profile');
    cookie.remove('token');
  },
  getToken: function() {
    return cookie.get('token');
  },
  getProfile: function() {
    const profile = cookie.get('profile');
    let obj = JSON.parse(profile);
    return obj;
  }
};

const getHttp = () => {
  return cc.get('services.http');
};

cc.register('services.profile', service);
