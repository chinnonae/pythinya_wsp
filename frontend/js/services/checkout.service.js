import cookie from 'js-cookie';
var checkout = {
  getTicket: function(ticketId, callback) {
    var token = cookie.get('token');
		$.ajax({
				method: 'GET',
				url: URL + '/api/ticket/' + ticketId
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
  buyTicket: function(ticketId, callback) {
    var token = cookie.get('token');
		$.ajax({
				method: 'PUT',
				url: URL + '/api/ticket/' + ticketId +'/buy',
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
  cancelTicket: function(ticketId, callback) {
    var token = cookie.get('token');
		$.ajax({
				method: 'PUT',
				url: URL + '/api/ticket/' + ticketId +'/cancel',
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
}

cc.register('services.checkout', checkout)
