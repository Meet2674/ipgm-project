//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const md5 = require('md5');
const fs = require('fs');
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
mongoose.connect("mongodb://localhost:27017/ipgm", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const User = require('./models/Profile.js');
const Article = require('./models/Article.js');
app.get('/', function(req, res) {
  res.render("login");
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/editor.html')
});

app.get('/dashboard', function(req, res) {
  res.sendFile(__dirname + "/dashboard.html");
});

app.post('/preview', (req, res) => {
  res.render('template', {
    data: req.body.editor
  });
});
// console.log(Article.find({}));
app.post('/', function(req, res) {
  const newUser = new User({
    email: req.body.emailsignup,
    password: md5(req.body.passwordsignup),
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  newUser.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.render("readmore");
    }
  })
});

app.post('/login', function(req, res) {
  const username = req.body.username;
  const password = md5(req.body.password);

  User.findOne({
    email: username
  }, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          Article.find({},function(err,data){
          var article = data;
          res.locals.article = article;
          res.render("readmore");
          author = foundUser.firstName + " " + foundUser.lastName;
          console.log(author);
          });
        }
      }
    }
  });
});

app.listen(3000, function() {
  console.log('Server is running at 3000');
});
