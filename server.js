const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

let fewestGuesses = {fewestGuesses:99};

app.use(morgan('combined'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.get('/fewest-guesses', function (req, res) {
  return res.status(200).json(fewestGuesses);
});

app.post('/fewest-guesses', jsonParser,  function (req, res) {
	console.log(req.body.guessCount);
	if (req.body.guessCount < fewestGuesses.fewestGuesses) {
        console.log("IN THE IF" + req.body.guessCount);
        fewestGuesses.fewestGuesses = req.body.guessCount;
    }
    
    return res.status(200).json(fewestGuesses);
});

app.listen(8081, () => {
  console.log(`Your app is listening on port 8081`);
});

module.exports = {app}

