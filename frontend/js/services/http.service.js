let service = {
  getConstant: function(method, url, data = {}, requireToken = true) {
    const profile = cc.get('services.profile');
    var Authorization = requireToken ? { 'Authorization': 'token ' + profile.getToken() } : {};
    return $.ajax({
      method: method,
      url: URL + url,
      headers: _.merge(Authorization),
      data: data
    });
  },
  methods: {
    PUT: 'PUT',
    POST: 'POST',
    GET: 'GET',
    DELETE: 'DELETE'
  }
};

cc.register('services.http', service);
