const tables = require("../tables");
const { cloudinary } = require("../../cloudinary");

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
    const model = await tables.models.add(req.body);
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

// ------------------ Méthode POST for CLOUDINARY ------------------
const uploadCloud = async (req, res) => {
  // Post sur Cloudinary
  try {
    const { objectToPost } = req.body;
    const uploadResponse = await cloudinary.uploader.upload(
      objectToPost.image,
      {
        upload_presets: "wwh5pcwo",
      }
    );
    delete objectToPost.image;
    const updatedObject = { ...objectToPost, image: uploadResponse.secure_url };

    console.info("updatedObject", updatedObject);
    console.info("uploadResponse", uploadResponse);

    // Post en database
    const response = await tables.models.add(updatedObject);
    console.info(response);
    res.json({ response, msg: "YAYAYAYAA" });
  } catch (error) {
    console.error(error);
  }
};

// ------------------ Méthode GET URL for CLOUDINARY ------------------
const getImagesFromCloud = async (req, res) => {
  try {
    const { ressource } = await cloudinary.search
      .expression("folder:dev_setups")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute();
    const publicIds = ressource.map((file) => file.public_id);
    res.send(publicIds);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const readModelsAndProducts = async (req, res, next) => {
  try {
    const models = await tables.models.readModelsAndProducts();

    res.status(200).json(models);
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
  uploadCloud,
  getImagesFromCloud,
  readModelsAndProducts,
};
