const tables = require("../tables");

const add = async (req, res, next) => {
  try {
    const model = await tables.models_products.postModelsProducts(req.body);
    if (!model) {
      res.sendStatus(404);
    } else {
      res.status(201).json(model);
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  add,
};
