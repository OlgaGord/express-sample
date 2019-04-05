const express = require("express");
const app = express();

const port = 9000;

app.get("/", (req, res) => res.send("hello everyone!"));
app.get("/home", (req, res) => res.send("You are home!"));
// app.get("/user/username", (req, res) => res.send("You are Olga!"));
app.get("/user/username", (req, res) =>
  res.send("Welcome " + req.params.username + "!")
);

app.listen(port, () => console.log(`Sample App ${port}!`));
// app.get("/", (req, res) => res.send("Hello World!!"));
