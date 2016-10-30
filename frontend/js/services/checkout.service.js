import cookie from 'js-cookie';
var checkout = {
  var token = cookie.get('token');
  getTicket: function(ticketId, callback) {
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
