const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  //we're connected!
})


let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  id: Number, // don't update this
  login: String,
  avatar_url: String,
  html_url: String,
  size: Number,
  stargazers_count: Number,
  watchers_count: Number,
  open_issues: Number,
  forks_count: Number

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, Repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;