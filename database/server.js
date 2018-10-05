var express = requiere('express');
var mongoose = requiere('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/scootersdata', function (err, res) {
  if(err) console.log ('ERROR: conecting to  database: ' + err);
  else console.log('connected to database');
});

app.configure(function functionName() {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function (req, res) {
  res.send('database');
});

requiere('./routes')(app);

app.listen(5000);
console.log('server listening port 5000');
