var auth = {
	signin: function(username, password, callback) {
		$.ajax({
				method: 'POST',
				url: URL + '/api/user/signin/',
				data: {
					username: username,
					password: password
				},
			})
			.done(function(res) {
				if (typeof callback === 'function') {
					callback(res);
				}
			})
			.fail(function(res) {
				if (typeof callback === 'function') {
					callback(res);
				}
			});
	},
	signup: function(user, callback) {
		$.ajax({
				method: 'POST',
				url: URL + '/api/user/signup/',
				data: user
			})
			.done(function(res) {
				if (typeof callback === 'function') {
					callback(res);
				}
			})
			.fail(function(res) {
				if (typeof callback === 'function') {
					callback(res);
				}
			});
	}
};

cc.register('services.auth', auth);
