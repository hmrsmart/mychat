const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
//const cookieParser = require("cookie-parser")

//app.use(cookieParser())
// serve static assets normally
app.use(express.static(path.join(__dirname, "public")))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (req, res) => {
  //console.log(req.cookies);
  //res.send("Success!")
  res.sendFile(path.join(__dirname, "public", 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
