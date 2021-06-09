const models = require("../../models");

const create = async (req, res, next) => {
  const data = req.body;

  try {
    const result = await models.UserDetail.create({
      userId: req.session.userId,
      ...data,
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = create;