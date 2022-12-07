const router = require("express").Router();

const { uploadSubjectFromCsv } = require("../controllers/subject");

router.route("/upload").post(uploadSubjectFromCsv);

module.exports = router;
