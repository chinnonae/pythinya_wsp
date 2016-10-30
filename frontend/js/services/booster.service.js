var service = {
	getContactList: function(callback) {
		const cb = typeof callback === 'function' ? callback : () => {};
		var dummy = {
			status: 200,
			result: [{
				"id": 1,
				"email": "taweesoft@gmail.com",
				"first_name": "Taweerat",
				"last_name": "Chaiman",
        "telephone": "0832529994"
			}, {
				"id": 2,
				"email": "chin@gmail.com",
				"first_name": "Chintithi",
				"last_name": "Wisetsombat",
        "telephone": "0832568475"
			}, {
				"id": 3,
				"email": "not@gmail.com",
				"first_name": "Patinya",
				"last_name": "Yongyai",
        "telephone": "0834548877"
			}, {
				"id": 4,
				"email": "p@gmail.com",
				"first_name": "Thongrapee",
				"last_name": "Panyapatiphan",
        "telephone": "0812345678"
			}]
		};
		cb(dummy);
		return; // remove this!!!
		$.ajax({
				methos: 'GET',
				url: URL + '/api/ticket/contacts',
				headers: {
					'Authorization': _.template('token ${token}')({
						token: cookie.get('token')
					})
				}
			})
			.done(function(res) {
				cb(res);
			})
			.fail(function(res) {
				console.log(res);
			});
	},
  getHistory: function(callback) {
		const cb = typeof callback === 'function' ? callback : () => {};
    var dummy = {
			status: 200,
			result: [{
				"id": 1,
				"email": "taweesoft@gmail.com",
				"first_name": "Taweerat",
				"last_name": "Chaiman",
        "min_mmr": 1000,
        "max_mmr": 2000,
        "price": 3500,
        "telephone": "0832529994"
			}, {
				"id": 2,
				"email": "chin@gmail.com",
				"first_name": "Chintithi",
				"last_name": "Wisetsombat",
        "min_mmr": 1500,
        "max_mmr": 2500,
        "price": 3000,
        "telephone": "0832568475"
			}, {
				"id": 3,
				"email": "not@gmail.com",
				"first_name": "Patinya",
				"last_name": "Yongyai",
        "min_mmr": 4000,
        "max_mmr": 4300,
        "price": 1300,
        "telephone": "0834548877"
			}, {
				"id": 4,
				"email": "p@gmail.com",
				"first_name": "Thongrapee",
				"last_name": "Panyapatiphan",
        "min_mmr": 3000,
        "max_mmr": 5000,
        "price": 4000,
        "telephone": "0812345678"
			}]
		};
		cb(dummy);
		return; // remove this!!!
    $.ajax({
				methos: 'GET',
				url: URL + '/api/ticket/history',
				headers: {
					'Authorization': _.template('token ${token}')({
						token: cookie.get('token')
					})
				}
			})
			.done(function(res) {
				cb(res);
			})
			.fail(function(res) {
				console.log(res);
			});
  }
};

cc.register('services.booster', service);
