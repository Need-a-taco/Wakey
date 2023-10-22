const express = require("express"); //requires express module
const socket = require("socket.io"); //requires socket.io module
const fs = require("fs");
const app = express();
var IP = process.env.IP || "172.20.10.9";
var PORT = process.env.PORT || 4000;
const server = app.listen(PORT, IP); //tells to host server on localhost:3000

//Playing variables:
app.use(express.static("public")); //show static files in 'public' directory
console.log("Server is running");
const io = socket(server);

//Socket.io Connection------------------
io.on("connection", (socket) => {
  console.log("New socket connection: " + socket.id);

  socket.on("trumpet", (data) => {
    io.emit("trumpet", data);
    console.log("trumpet",data);
  });

  socket.on("siren", (data) => {
    io.emit("siren", data);
  });

  socket.on("bruh", (data) => {
    io.emit("bruh", data);
  });

  socket.on("fart", (data) => {
    io.emit("fart", data);
  });
});
