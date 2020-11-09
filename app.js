const express = require('express');
const  bodyParser = require('body-parser');
const app = express();
var ejs  = require('ejs');
var fs   = require('fs');
var time;
const PORT = 2000;

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json()) ;

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/editor.html')
});
app.post('/preview', (req, res) => {
  var template = fs.readFileSync('./template.ejs', 'utf-8');
  var html     = ejs.render ( template , {data:req.body.editor} );
  fs.writeFileSync("./articles/1/user1.html", html, 'utf8');
  res.send(req.body.editor);
});
app.listen(PORT, () => {
  console.log('Server is up and running on port ' + PORT);
});
