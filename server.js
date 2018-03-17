var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 3005;
var app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// send every request to the React app
// define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function(){
  console.log('Server started on Port ' + PORT);
});