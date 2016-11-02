var service = {
  buyTicket: function(ticketId, callback) {
    callback = typeof callback === 'function' ? callback : () => {};
    var http = getHttp();
    http.getConstant(http.methods.POST, '/api/ticket/' + ticketId + '/buy/')
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

cc.register('services.client');
