/*eslint-disable*/
// Importing the AbstractManager class
const AbstractManager = require("./AbstractManager");

// Defining the chargingStationManager class that extends AbstractManager
class modelsProductsManager extends AbstractManager {
  constructor() {
    super({ table: "models_products" });
  }

  async postModelsProducts(modelsData) {
    const [response] = await this.database.query(
      `INSERT INTO models_products (models_id, products_id) VALUES (?, ?)`,
      [modelsData.models_id, modelsData.products_id]
    );
    return response.affectedRows;
  }
}

// Exporting the ChargingStationManager class
module.exports = modelsProductsManager;
