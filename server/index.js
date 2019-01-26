const express = require('express');
const bodyparser = require('body-parser');
const helpers = require('../helpers/github.js');

let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))



app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(`this`, req.body.username);
  
  var body = helpers.getReposByUsername(req.body.username, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = body;
      console.log(`this here is the body:`, info);
      res.send(`Ok desu`);
    }
  });

  
  

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

