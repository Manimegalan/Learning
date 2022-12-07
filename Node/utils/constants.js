const config = require("config");

const PORT = process.env.PORT || 5000;

// Body parser
const jsonOptions = { limit: "50mb", strict: false };
const urlencodedOptions = {
  limit: "50mb",
  extended: true,
  parameterLimit: 50000,
};

const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  dbName: config.get("dbName"),
};

module.exports = { PORT, jsonOptions, urlencodedOptions, mongooseOptions };
