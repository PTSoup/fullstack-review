const express = require('express');
const bodyparser = require('body-parser');
const helpers = require('../helpers/github.js');
var Repo = require('../database/index.js');

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
  
  helpers.getReposByUsername(req.body.username, (error, response, body) => {
  
    let parsed = JSON.parse(body);

    if (parsed[0] !== undefined) {
      console.log(typeof(body));
      let newRepo = {
        id: parsed[0].id, // don't update this
        login: parsed[0].owner.login,
        avatar_url: parsed[0].owner.avatar,
        html_url: parsed[0].owner.html_url,
        size: parsed[0].size,
        stargazers_count: parsed[0].stargazers_count,
        watchers_count: parsed[0].watchers_count,
        open_issues: parsed[0].open_issues,
        forks_count: parsed[0].forks_count
      }
      console.log(`we found a repo!:`, newRepo)
      Repo.save(newRepo)
      res.send(`it worked`);
    } else {
      res.send(`it didn't work`);
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

