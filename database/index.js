const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/repos', { useMongoClient: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('connected');
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
}, {collection: 'repos'});

let newGitRepo = mongoose.model('Repo', repoSchema);

let save = (Repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
    var newRepo = new newGitRepo(Repo);
    newRepo.save((err) => {
      if (err) throw new Error;
    })
  
}

module.exports.save = save;