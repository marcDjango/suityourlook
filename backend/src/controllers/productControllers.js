const tables = require("../tables");
const { cloudinary } = require("../../cloudinary");

// ------------------ Méthode GET ------------------
const browse = async (req, res, next) => {
  try {
    const response = await tables.products.readAll();
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// ------------------ Méthode GET BY ID ------------------
const read = async (req, res, next) => {
  try {
    const response = await tables.products.read(req.params.id);
    if (response == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(response);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// ------------------ Méthode POST ------------------
const add = async (req, res, next) => {
  try {
    const insertId = await tables.products.create(req.body);
    console.info(req.body);
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// ------------------ Méthode PUT ------------------
const edit = async (req, res, next) => {
  try {
    const response = await tables.products.update(req.params.id, req.body);
    if (response.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.status(204).json(response);
    }
  } catch (err) {
    next(err);
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
    const response = await tables.products.add(updatedObject);
    console.info(response);
    res.json({ response, msg: "YAYAYAYAA" });
  } catch (error) {
    console.error(error);
  }
};

// ------------------ Méthode DELETE ------------------
const destroy = async (req, res, next) => {
  try {
    const response = await tables.products.delete(req.params.id);
    if (response.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, add, edit, destroy, uploadCloud };
