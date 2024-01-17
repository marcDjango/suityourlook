const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "products" });
  }

  // --------- CRUD ---------

  // ------------------ Méthode POST ------------------
  async create(product) {
    const {
      image,
      brand,
      product_name: productName,
      product_category: productCategory,
      product_price: productPrice,
    } = product;

    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (image, brand, product_name, product_category, product_price) VALUES (?, ?, ?, ?, ?)`,
      [image, brand, productName, productCategory, productPrice]
    );

    return rows.insertId;
  }

  // ------------------ Méthode PUT ------------------
  async update(id, product) {
    const {
      image,
      brand,
      product_name: productName,
      product_category: productCategory,
      product_price: productPrice,
    } = product;

    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET image = ?, brand = ?, product_name = ?, product_category = ?, product_price = ? WHERE id = ?`,
      [image, brand, productName, productCategory, productPrice, id]
    );
    return rows;
  }
}

module.exports = ProductManager;
