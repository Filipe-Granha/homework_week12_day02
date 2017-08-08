var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");
var MongoClient = require("mongodb").MongoClient;
var db;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));






// getting all employees // working in Insomnia
app.get("/employees", function(req, res) {
  db.collection("employees").find().toArray(function(err, results) {
    res.json(results);
  });
});

// posting an employee // posts only one at a time. Could we post a whole array?
app.post("/employees", function(req, res) {
  db.collection("employees").save(req.body, function(err, result) {
    res.redirect("/");
  });
});



// deleting all employees // working in Insomnia
app.post("/delete", function(req, res) {
  db.collection("employees").drop({}, function(err, result) {
    res.redirect("/");
  });
});






MongoClient.connect("mongodb://localhost:27017/company_stats", function(err, database) { 
  if(err) {
    console.log(err);
    return;
  }
  db = database;
  console.log("connected to database");
  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
}); 





app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');

});
