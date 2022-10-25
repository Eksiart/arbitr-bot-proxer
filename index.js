const bodyParser = require('body-parser')
const axios = require('axios');
const express = require('express');

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const {url, ...options} = req.body;

  axios.post(url, options)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.log(error);
    res.send(error);
  })
})

app.listen(port, () => {
  console.log(`Binance proxer started at ${port}`)
})