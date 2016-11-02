var service = {
  buyTicket: function(ticketId, callback) {
    callback = typeof callback === 'function' ? callback : () => {};
    var http = getHttp();
    http.getConstant(http.methods.POST, '/api/ticket/' + ticketId + '/pick')
    .done(function(res) {
      callback(res);
    })
    .fail(function(res) {
      console.log(res);
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
