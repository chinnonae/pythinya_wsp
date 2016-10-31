var profile = null;
var service = {
	getProfile: function(callback) {
		const token = cookie.get('token');
    const cb = typeof callback === 'function' ? callback : () => {};
    if (profile && token) {
      cb(profile);
      return;
    }
		if (token) {
			$.ajax({
					method: 'GET',
					url: URL + '/api/user/profile/',
					headers: {
						'Authorization': _.template('token ${token}')({
							token: token
						})
					}
				})
				.done(function(res) {
          profile = res;
					cb(res);
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

cc.register('services.profile', service);
