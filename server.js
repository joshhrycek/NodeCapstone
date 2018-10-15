"use strict";

const express = require("express");
const morgan = require("morgan");
const config = require("./config.js");

const app = express();

app.use(express.static("public"));

const userRoutes = require('./routes/userRoute');
const playlistRoutes = require('./routes/playlistRoute');

app.use('/playlist'. playlistRoutes);

if (require.main === module) {
  app.listen(process.env.PORT || 8080, function() {
    console.info(`App listening on ${this.address().port}`);
  });
}

module.exports = app;