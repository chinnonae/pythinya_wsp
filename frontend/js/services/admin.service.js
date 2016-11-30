let services = {
  getUsers: (callback) => {
    callback = typeof callback === 'function' ? callback : () => {};
    let http = getHttp();
    http.getConstant(http.methods.GET, '/api/admin/list/client', {}, false)
    .done((res) => {
      callback(res);
    })
    .fail((res) => {
      console.log(res);
    });
  },
  getVerifiedBoosters: (callback) => {
    callback = typeof callback === 'function' ? callback : () => {};
    let http = getHttp();
    http.getConstant(http.methods.GET, '/api/admin/list/booster', {})
    .done((res) => {
      callback(res);
    })
    .fail((res) => {
      console.log(res);
    });
  },
  getPendingBoosters: (callback) => {
    callback = typeof callback === 'function' ? callback : () => {};
    let http = getHttp();
    http.getConstant(http.methods.GET, '/api/admin/list/pending-booster', {})
    .done((res) => {
      callback(res);
    })
    .fail((res) => {
      console.log(res);
    });
  }
};

const getHttp = () => {
  return cc.get('services.http');
};

cc.register('services.admin', services);
