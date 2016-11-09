var service = {
  buyTicket: function(ticketId, callback, errorCallback) {
    callback = typeof callback === 'function' ? callback : () => {};
    var http = getHttp();
    http.getConstant(http.methods.PUT, '/api/ticket/' + ticketId + '/pick')
    .done(function(res) {
      callback(res);
    })
    .fail(function(res) {
      console.log(res);
      let error = JSON.parse(res.responseText);
      errorCallback(true,error.message);
    });
  },
  getTickets: function(callback) {
    callback = typeof callback === 'function' ? callback : () => {};
    var http = getHttp();
    http.getConstant(http.methods.GET, '/api/ticket/')
    .done(function(res) {
      callback(res);
    })
    .fail(function(res) {
      console.log(res);
    });
  }
};

const getHttp = () => {
  return cc.get('services.http');
};

cc.register('services.ticket', service);
