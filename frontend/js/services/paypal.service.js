const AUTH_ID = 'QVl5UnhPSmZraGdSb0Q5bE9ucVgxS21rVEs0TUlTMWNoemJVZ0kxbGhDcE9jSjIzTXlRZTBIQk9vQzJVNm9KLUs0X3ZhdFRZWXBNN1VCZng6RU5tOHY1WElyZVhDNTQ3SkpUYl9ZOTV4ckc3S1VlcEkzM0doU1lzRE5XdkVtc0V6cWVDMHZ6X1Y0TGp6RENVUnh1YjdLaHJXclh4eG9rQnE=';
let service = {
  getToken: () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'POST',
        url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
        headers: {
          Accept: 'application/json',
          'Accept-Language': "es_US",
          Authorization: 'Basic ' + AUTH_ID,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          grant_type: 'client_credentials'
        }
      })
      .done((res) => {
        resolve(res);
      })
      .fail((res) => {
        console.log('Error');
        console.log(res);
        reject(res);
      });
    });
  },
  makePayment: (data, callback) => {
    callback = typeof callback === 'function' ? callback : () => {};
    getToken()
    .then((res) => {
      $.ajax({
        method: 'POST',
        url: 'https://api.sandbox.paypal.com/v1/payments/payment',
        headers: {
          Authorization: 'Bearer ' + res.access_token
        },
        data: paymentFormatter(data)
      })
      .done((res) => {
        callback(res);
      })
      .fail((err) => {
        console.log(err);
      });
    });
  }
};


let paymentFormatter = (data) => {
  return {
    intent: 'sale',
    payer: {
      payment_method: 'credit_card',
      funding_instruments: [
        {
          credit_card: {
            number: data.card_number,
            type: 'visa',
            expire_month: data.expire_month,
            expire_year: data.expire_year,
            cvv2: data.cvv,
            first_name: data.first_name,
            last_name: data.last_name
          }
        }
      ]
    },
    transactions: [
      {
        amount: {
          total: data.total,
          currency: 'THB'
        }
      }
    ]
  };
};
cc.register('services.paypal',service);
