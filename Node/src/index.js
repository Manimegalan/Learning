require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const os = require("os");
var upload = require("multer")({ dest: os.tmpdir() });

const db = require("../db");
const routes = require("../routes");
const { useErrorHandler } = require("../middlewares/error-handler");

const { PORT, jsonOptions, urlencodedOptions } = require("../utils/constants");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json(jsonOptions));
app.use(bodyParser.urlencoded(urlencodedOptions));
app.use(upload.array());

app.use(db.connect);

// Routes
app.use(routes);

// Error Handling
app.use(useErrorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
