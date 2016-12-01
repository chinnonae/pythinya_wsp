const AUTH_ID = 'QVl5UnhPSmZraGdSb0Q5bE9ucVgxS21rVEs0TUlTMWNoemJVZ0kxbGhDcE9jSjIzTXlRZTBIQk9vQzJVNm9KLUs0X3ZhdFRZWXBNN1VCZng6RU5tOHY1WElyZVhDNTQ3SkpUYl9ZOTV4ckc3S1VlcEkzM0doU1lzRE5XdkVtc0V6cWVDMHZ6X1Y0TGp6RENVUnh1YjdLaHJXclh4eG9rQnE=';
let getToken = () => {
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
};
let service = {
  makePayment: (data, callback) => {
    let waitmeService = cc.get('services.waitme');
    let snackbarService = cc.get('services.snackbar');
    waitmeService.show();
    callback = typeof callback === 'function' ? callback : () => {};
    let snackbarCallback = () => {
      window.location = '/';
    };

    getToken()
    .then((res) => {
      $.ajax({
        method: 'POST',
        url: 'https://api.sandbox.paypal.com/v1/payments/payment',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + res.access_token,
        },
        data: JSON.stringify(paymentFormatter(data))
      })
      .done((res) => {
        waitmeService.hide();
        snackbarService.show('Success',snackbarCallback);
        notify(res);
        console.log(JSON.stringify(res));
        callback(res);
      })
      .fail((err) => {
        waitmeService.hide();
        snackbarService.show('Fail, please try again');
        console.log(err);
      });
    });
  }
};

let notify = (res) => {
  let http = cc.get('services.http');
  let credit_card = res.payer.funding_instruments[0].credit_card;
  let transaction = res.transactions[0];
  let description = JSON.parse(transaction.description);
  let data = {
    "purchase_date": "1 December 2016",
    "name": credit_card.firstname + " " + credit_card.last_name,
    "credit_card_name": credit_card.firstname + " " + credit_card.last_name,
    "credit_card_brand": credit_card.type,
    "credit_card_last_four": credit_card.number,
    "receipt_id": res.id,
    "date": "1 December 2016",
    "coin": description.coins,
    "amount": transaction.amount.total,
    "total": transaction.amount.total,
    "email": description.email
  };
  http.getConstant(http.methods.POST, '/api/payment', data);
};

let paymentFormatter = (data) => {
  return {
    intent: "sale",
    payer: {
      payment_method: "credit_card",
      funding_instruments: [
        {
          credit_card: {
            number: data.card_number,
            type: "visa",
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
          currency: "USD"
        },
        description: JSON.stringify(data.description),
      }
    ]
  };
};


cc.register('services.paypal',service);
