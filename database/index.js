const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log(`We're connected`);
})


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: interface,
  login: Text,
  avatar_url: Text,
  html_url: Text,
  size: int,
  stargazers_count: int,
  watchers_count: int,
  open_issues: int,
  forks_count: int

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, Repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log(`Your repo has been saved!`);
  if (err) {
   throw err;
  }
}

module.exports.save = save;