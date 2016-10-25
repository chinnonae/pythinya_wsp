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
		var data = {};
		/* serializing data from form*/
		_.map(user, function(item) {
			data[item.name] = item.value;
		});
    console.log(data);
		$.ajax({
				method: 'POST',
				url: URL + '/api/user/signup/',
				data: data,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
        dataType: 'json'
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
