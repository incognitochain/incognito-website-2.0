
var express = require('express');
//var router = express.Router();
var cors = require('cors')
var request = require('request');
const app = express()
const port = 3001

const axios = request("axios");

app.use(cors())

//console.log("AAAA")



app.get('/btc/balance/:address', function(req, res, next) {
  console.log(req.params);
  request({
    uri: 'https://api.blockchain.info/haskoin-store/btc/address/'+req.params.address+'/balance'
  }).pipe(res);
});

app.get('/btc/tx/:address', function(req, res, next) {
    console.log(req.params);
    request({
      uri: 'https://api.blockchain.info/haskoin-store/btc/address/'+req.params.address+'/transactions/full'
    }).pipe(res);
  });


app.get('/bnb/balance/:address', function(req, res, next) {
console.log(req.params);
request({
    uri: 'https://explorer.binance.org/api/v1/balances/'+req.params.address
}).pipe(res);
});

app.get('/bnb/tx/:address', function(req, res, next) {
    console.log(req.params);
    request({
    uri: 'https://explorer.binance.org/api/v1/txs?page=1&rows=25&address='+req.params.address
    }).pipe(res);
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
 