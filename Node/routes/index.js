const app = require("express")();

const user = require("./user");
const subject = require("./subject");

app.use("/user", user);
app.use("/subject", subject);

module.exports = app;
