const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let fewestGuesses = {fewestGuesses:99};

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.get('/fewest-guesses', function (req, res) {
  return res.status(200).json(fewestGuesses);
});

app.post('/fewest-guesses', function (req, res) {
	if (req.body.guessCount < fewestGuesses) {
        fewestGuesses.fewestGuesses = req.body.guessCount;
    }
    
    return res.status(200).json(fewestGuesses);
});

app.listen(8081, () => {
  console.log(`Your app is listening on port 8081`);
});