var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 3005;
var mongoose = require('mongoose');
var routes = require('routes');
var app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
// send every request to the React app
// define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytarticles",
  {
    useMongoClient: true
  }
);

app.listen(PORT, function(){
  console.log('Server started on Port ' + PORT);
});