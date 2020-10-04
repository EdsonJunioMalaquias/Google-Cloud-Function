"use strict";

var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.status(200).send("Google Cloud Function");
});

var server = app.listen(process.env.PORT || "3000", () => {
  console.log("App listening on port %s", server.address().port);
});
