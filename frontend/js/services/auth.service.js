var auth = {
	signin: function(username, password, callback) {
    getWaitmeService().show();
    let http = getHttpService();
    callback = typeof callback === 'function' ? callback : () => {};
    var data = {
      username: username,
      password: password
    };
    http.getConstant(http.methods.POST, '/api/user/signin/', data, false)
    .done(function(res) {
      getWaitmeService().hide();
      callback(res);
    })
    .fail(function(res) {
      getWaitmeService().hide();
      callback(res);
    });
	},
	signup: function(user, callback) {
    getWaitmeService().show();
    let http = getHttpService();
    callback = typeof callback === 'function' ? callback : () => {};
		var data = {};
		/* serializing data from form*/
		_.map(user, function(item) {
			data[item.name] = item.value;
		});
    console.log(data);
    http.getConstant(http.methods.POST, '/api/user/signup/', data, false)
    .done(function(res) {
      getWaitmeService().hide();
      callback(res);
    })
    .fail(function(res) {
      getWaitmeService().hide();
      callback(res);
    });
	},
  signout: function(callback) {
    callback = typeof callback === 'function' ? callback : () => {};
    var profileService = cc.get('services.profile');
    profileService.clear();
    callback();
  }
};

function getWaitmeService() {
  return cc.get('services.waitme');
}

function getHttpService() {
  return cc.get('services.http');
}

cc.register('services.auth', auth);
