const service = require("../services/subject");
const { parseCSV } = require("../utils/helpers");

exports.uploadSubjectFromCsv = async (req, res, next) => {
  const { files } = req;
  const [result] = await Promise.all(
    files.map(async (file) => await parseCSV({ file }))
  );
  res.status(200).send(result);
};
