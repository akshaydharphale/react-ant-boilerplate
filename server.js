const path = require("path");
const express = require("express");
const winston = require("winston");
const helmet = require("helmet");
const distPath = path.join(__dirname, "./dist");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(express.static(distPath));
app.listen(PORT, err => {
  if (err) {
    winston.error(err);
    return;
  }
  winston.info(`Listening on port ${PORT}`);
});
