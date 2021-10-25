const express = require("express");
const app = express();

app.listen(8081, () => {
  console.log("Application started and Listening on port 8081");
});

app.get("/", (req, res) => {
  res.send('<html><head><title>sg.signiance.com</title></head><body><h1 align="center">Hello World</h1><span>Hello World 2</span></body></html>');
});