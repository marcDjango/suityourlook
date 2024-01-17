const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "products" });
  }

  // --------- CRUD ---------

  // ------------------ Méthode POST ------------------
  async create(product) {
    const { title, description, image, is_archived: isArchived } = product;

    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (title, description, image, is_archived) VALUES (?, ?, ?, ?)`,
      [title, description, image, isArchived]
    );

    return rows.insertId;
  }

  // ------------------ Méthode PUT ------------------
  async update(id, product) {
    const { title, description, image, is_archived: isArchived } = product;

    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, description = ?, image = ?, is_archived = ? WHERE id = ?`,
      [title, description, image, isArchived, id]
    );
    return rows;
  }
}

module.exports = ProductManager;
