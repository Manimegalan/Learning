const router = require("express").Router();

const { getUser } = require("../controllers/user");

router.route("/").get(getUser);

module.exports = router;
