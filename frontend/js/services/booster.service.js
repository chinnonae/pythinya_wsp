var service = {
	getContactList: function(callback) {
    callback = typeof callback === 'function' ? callback : () => {};
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
    http.getConstant(http.methods.GET, '/api/ticket/' + id)
    .done(function(res) {
      callback(res);
    })
    .fail(function(res) {
      console.log(res);
    });
	},
  startBoosting: function(ticketId, clientId, callback) {
		callback = typeof callback === 'function' ? callback : () => {};
    let http = getHttp();
    http.getConstant(http.methods.PUT, '/api/ticket/' + ticketId + '/choose-client/' + clientId)
    .done(function(res) {
      window.location = '/booster_panel';
      callback(res);
    })
    .fail(function(res) {
      console.log(res);
    });
  },
  doneBoosting: function(id, callback) {
		callback = typeof callback === 'function' ? callback : () => {};
    let http = getHttp();
    http.getConstant(http.methods.PUT, '/api/ticket/' + id + '/complete')
    .done(function(res) {
      window.location = '/client';
      callback(res);
    })
    .fail(function(res) {
      console.log(res);
    });
  },
  cancelBoosting: function(id, callback) {
    callback = typeof callback === 'function' ? callback : () => {};
    let http = getHttp();
    http.getConstant(http.methods.PUT, '/api/ticket/' + id + '/cancel')
    .done(function(res) {
      window.location = '/client';
      callback(res);
    })
    .fail(function(res) {
      console.log(res);
    });
  },
  updateMMR: function(id, currentMMR, callback) {
    callback = typeof callback === 'function' ? callback : () => {};
    let data = {
      current_mmr: currentMMR
    };
    let http = getHttp();
    http.getConstant(http.methods.PUT, '/api/ticket/' + id + '/progress', data)
    .done((res) => {
      callback(res);
    })
    .fail((res) => {
      console.log(res);
    });
  },
  createTicket: function(rawData, callback, errorCallback) {
    callback = typeof callback === 'function' ? callback : () => {};
    let http = getHttp();
    let data = {};
    _.map(rawData, function(item) {
      data[item.name] = parseInt(item.value);
    });
    if(data.max_mmr <= data.min_mmr) { // error
      callback({
        status: BAD_REQUEST,
        field: ['max_mmr', 'min_mmr'],
        message: "Maximum MMR must more than Minimum MMR"
      });
      return;
    }else if(data.day_used <= 0) {
      callback({
        status: BAD_REQUEST,
        field: ['day_used'],
        message: 'Minimum day used is 1'
      });
      return;
    }else if(data.max_mmr < 0 || data.min_mmr < 0) {
      callback({
        status: BAD_REQUEST,
        field: ['max_mmr', 'min_mmr'],
        message: "MMR must be positive number"
      });
      return;
    }else if(data.price < 0) {
      callback({
        status: BAD_REQUEST,
        field: ['price'],
        message: "Price must be positive number"
      });
      return;
    }
    http.getConstant(http.methods.POST, '/api/ticket/', data)
    .done(function(res) {
      callback(res);
    })
    .fail(function(res) {
      let error = JSON.parse(res.responseText);
      errorCallback(true, error.message);
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
