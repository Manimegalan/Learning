const mongoURI = require("config").get("mongoURI");
const mongoose = require("mongoose");
const { mongooseOptions } = require("../utils/constants");

let dbConnection;
mongoose.Promise = global.Promise;

exports.connect = async (req, res, next) => {
  if (dbConnection) {
    console.log("🛢️ Connection already established...");
    next();
  } else {
    mongoose.connect(mongoURI, mongooseOptions).then(
      (db) => {
        console.log("🛢️ Connection initiated...");
        dbConnection = db.connections[0].readyState;
        console.log("🛢️ Connection established...");
        next();
      },
      (err) => {
        console.log("🚨 Error connecting with Database...");
        console.log(err);
        return;
      }
    );
  }
};
