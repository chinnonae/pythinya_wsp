var service = {
	getContactList: function(callback) {
    callback = typeof callback === 'function' ? callback : () => {};
		// var dummy = {
		// 	status: 200,
		// 	result: [{
		// 		"id": 2,
		// 		"email": "chin@gmail.com",
		// 		"first_name": "Chintithi",
		// 		"last_name": "Wisetsombat",
		// 		"telephone": "0832568475"
		// 	}, {
		// 		"id": 3,
		// 		"email": "not@gmail.com",
		// 		"first_name": "Patinya",
		// 		"last_name": "Yongyai",
		// 		"telephone": "0834548877"
		// 	}, {
		// 		"id": 4,
		// 		"email": "p@gmail.com",
		// 		"first_name": "Thongrapee",
		// 		"last_name": "Panyapatiphan",
		// 		"telephone": "0812345678"
		// 	}]
		// };
		// callback(dummy);
		// return; // remove this!!!
    let http = getHttp();
    http.getConstant(http.methods.GET, '/api/ticket/contacts/')
    .done(function(res) {
      callback(res);
    })
    .fail(function(res) {
      console.log(res);
    });
	},
	getHistory: function(callback) {
		callback = typeof callback === 'function' ? callback : () => {};
		// var dummy = {
		// 	status: 200,
		// 	result: [{
		// 		"id": 1,
		// 		"email": "taweesoft@gmail.com",
		// 		"first_name": "Taweerat",
		// 		"last_name": "Chaiman",
		// 		"min_mmr": 1000,
		// 		"max_mmr": 2000,
		// 		"price": 3500,
		// 		"telephone": "0832529994"
		// 	}, {
		// 		"id": 2,
		// 		"email": "chin@gmail.com",
		// 		"first_name": "Chintithi",
		// 		"last_name": "Wisetsombat",
		// 		"min_mmr": 1500,
		// 		"max_mmr": 2500,
		// 		"price": 3000,
		// 		"telephone": "0832568475"
		// 	}, {
		// 		"id": 3,
		// 		"email": "not@gmail.com",
		// 		"first_name": "Patinya",
		// 		"last_name": "Yongyai",
		// 		"min_mmr": 4000,
		// 		"max_mmr": 4300,
		// 		"price": 1300,
		// 		"telephone": "0834548877"
		// 	}, {
		// 		"id": 4,
		// 		"email": "p@gmail.com",
		// 		"first_name": "Thongrapee",
		// 		"last_name": "Panyapatiphan",
		// 		"min_mmr": 3000,
		// 		"max_mmr": 5000,
		// 		"price": 4000,
		// 		"telephone": "0812345678"
		// 	}]
		// };
		// callback(dummy);
		// return; // remove this!!!
    let http = getHttp();
    http.getConstant(http.methods.GET, '/api/ticket/history/')
    .done(function(res) {
      callback(res);
    })
    .fail(function(res) {
      console.log(res);
    });
	},
	getCurrentTicket: function(id, callback) {
		callback = typeof callback === 'function' ? callback : () => {};
		// var dummy = {
		// 	"status": 200,
    //   "result": {
    //     "id": 1,
  	// 		"current_mmr": null,
  	// 		"booster": {
  	// 			"id": 1,
  	// 			"email": "taweesoft@gmail.com",
  	// 			"first_name": "Taweerat",
  	// 			"last_name": "Chaiman"
  	// 		},
  	// 		"client": {
    //       "id": 3,
  	// 			"email": "not@gmail.com",
  	// 			"first_name": "Patinya",
  	// 			"last_name": "Yongyai",
  	// 			"telephone": "0834548877"
    //     },
  	// 		"min_mmr": 1000,
  	// 		"status": 1,
  	// 		"max_mmr": 2000,
  	// 		"price": 1000,
  	// 		"day_used": 5
    //   }
		// };
    // callback(dummy);
    // return; // remove this!!!
    // let http = getHttp();
    http.getConstant(http.methods.GET, '/api/ticket/' + id)
    .done(function(res) {
      callback(res);
    })
    .fail(function(res) {
      console.log(res);
    });
	},
  startBoosting: function(id, callback) {
		callback = typeof callback === 'function' ? callback : () => {};
    let http = getHttp();
    http.getConstant(http.methods.PUT, '/api/ticket/' + id + '/start')
    .done(function(res) {
      window.location = '/booster_panel';
      callback(res);
    })
    .fail(function(res) {
      window.location = '/booster_panel';
      console.log(res);
    });
  }
};

const getProfile = () => {
  return cc.get('services.profile');
};

const getHttp = () => {
  return cc.get('services.http');
};

cc.register('services.booster', service);
