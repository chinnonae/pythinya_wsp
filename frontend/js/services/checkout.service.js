import cookie from 'js-cookie';
var checkout = {
  getTicket: function(ticketId, callback) {
    var token = cookie.get('token');
    callback = typeof callback === 'function' ? callback : () => {};
		$.ajax({
				method: 'GET',
				url: URL + '/api/ticket/' + ticketId,
        headers: {
          'Authorization' : 'token ' + cc.get('services.profile').getToken()
        }
			})
			.done(function(res) {
				callback(res);
			})
			.fail(function(res) {
				callback(res);
			});
	},
  payTicket: function(ticketId, callback) {
    var token = cookie.get('token');
    callback = typeof callback === 'function' ? callback : () => {};
		$.ajax({
				method: 'PUT',
				url: URL + '/api/ticket/' + ticketId +'/buy',
        headers: {
          'Authorization' : 'token ' + cc.get('services.profile').getToken()
        }
			})
			.done(function(res) {
				callback(res);
			})
			.fail(function(res) {
				// callback(res);
			});
	},
  cancelTicket: function(ticketId, callback) {
    var token = cookie.get('token');
    callback = typeof callback === 'function' ? callback : () => {};
		$.ajax({
				method: 'PUT',
				url: URL + '/api/ticket/' + ticketId +'/cancel',
        headers: {
          'Authorization' : 'token ' + cc.get('services.profile').getToken()
        }
			})
			.done(function(res) {
				callback(res);
			})
			.fail(function(res) {
				callback(res);
			});
	}
};

cc.register('services.checkout', checkout);
