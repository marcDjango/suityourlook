const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const models = await tables.models.readAll();

    res.status(200).json(models);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const model = await tables.models.read(req.params.id);
    if (!model) {
      res.sendStatus(404);
    } else {
      res.status(200).json(model);
    }
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const model = await tables.models.edit(req.body, req.params.id);
    if (model == null) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
};

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

const destroy = async (req, res, next) => {
  try {
    const result = await tables.models.delete(req.params.id);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
