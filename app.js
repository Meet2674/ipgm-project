const express = require('express');
const  bodyParser = require('body-parser');
const app = express();
var ejs  = require('ejs');
var fs   = require('fs');
const PORT = 2000;

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json()) ;

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/tp.html')
});
app.post('/preview', (req, res) => {
  var template = fs.readFileSync('./template.ejs', 'utf-8');
  var html     = ejs.render ( template , {data:req.body.editor} );
  fs.writeFileSync("./user1.html", html, 'utf8');
  res.send(req.body.editor);
});
app.listen(PORT, () => {
  console.log('Server is up and running on port ' + PORT);
});
