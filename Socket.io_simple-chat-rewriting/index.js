// Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software
// under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard
// server framework for Node.js.

const express = require("express");
console.log("Require Express: " + JSON.stringify(express, 4, null));
const app = express();
console.log("Express(): " + JSON.stringify(app, 4, null));
const http = require("http").createServer(app);
console.log(
  'require("http").createServer(app)' + JSON.stringify(http, null, 4)
);
var io = require("socket.io")(http);
const port = 1789;

app.get("/xxx", function(req, res) {
  res.send("<h1>Hey Stas</h1>");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  // socket.on('chat message', function(msg){
  //   console.log('message: ' + msg);
  // });
  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
  });
});

http.listen(port, function() {
  console.log(`listening on *:${port}`);
});
