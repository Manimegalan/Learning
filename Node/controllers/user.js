const service = require("../services/user");

exports.getUser = async (req, res, next) => {
  const result = await service.getUser();
  res.send(result);
};
