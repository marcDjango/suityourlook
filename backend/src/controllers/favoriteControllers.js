const tables = require("../tables");

const readFavorite = async (req, res, next) => {
  try {
    const models = await tables.favorite.readFavorite();

    res.status(200).json(models);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const model = await tables.favorite.postFavorite(req.body);
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
  readFavorite,
  add,
};
