import cookie from 'js-cookie';
var auth = {
	signin: function(username, password, callback) {
    getWaitmeService().show();
		$.ajax({
				method: 'POST',
				url: URL + '/api/user/signin/',
				data: {
					username: username,
					password: password
				},
			})
			.done(function(res) {
        getWaitmeService().hide();
				if (typeof callback === 'function') {
					callback(res);
				}
			})
			.fail(function(res) {
        getWaitmeService().hide();
				if (typeof callback === 'function') {
					callback(res);
				}
			});
	},
	signup: function(user, callback) {
    getWaitmeService().show();
		var data = {};
		/* serializing data from form*/
		_.map(user, function(item) {
			data[item.name] = item.value;
		});
		$.ajax({
				method: 'POST',
				url: URL + '/api/user/signup/',
				data: data
			})
			.done(function(res) {
        getWaitmeService().hide();
				if (typeof callback === 'function') {
					callback(res);
				}
			})
			.fail(function(res) {
        getWaitmeService().hide();
				if (typeof callback === 'function') {
					callback(res);
				}
			});
	},
  signout: function(callback) {
    const cb = typeof callback === 'function' ? callback : () => {};
    var profileService = cc.get('services.profile');
    profileService.clear();
    cb();
  }
};

function getWaitmeService() {
  return cc.get('services.waitme');
}
cc.register('services.auth', auth);
