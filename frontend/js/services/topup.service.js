let service = {
  getTopups: (callback) => {
    callback = typeof callback === 'function' ? callback : () => {};
    const token = cookie.get('token');
    let http = getHttp();
    http.getConstant(http.methods.GET, '/api/topup', _ , true)
    .done((res) => {
      callback(res.packages);
    })
    .fail((res) => {
      console.log(res);
    });
  }
};

const getHttp = () => {
  return cc.get('services.http');
};
