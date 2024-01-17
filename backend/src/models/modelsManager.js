// Importing the AbstractManager class
const AbstractManager = require("./AbstractManager");

// Defining the chargingStationManager class that extends AbstractManager
class modelsManager extends AbstractManager {
  // Constructor initializes the class and sets the table name to "charging_station"
  constructor() {
    // Calling the constructor of the parent class (AbstractManager) with the table name
    super({ table: "models" });
  }

  async readModelsAndProducts() {
    const [rows] = await this.database.query(
      `SELECT models.*, 
            products.id AS product_id, 
            products.image AS product_image, 
            products.brand AS product_brand, 
            products.product_name AS product_name, 
            products.product_category AS product_category, 
            products.product_price AS product_price 
     FROM ${this.table} 
     INNER JOIN models_products ON models.id = models_products.models_id 
     INNER JOIN products ON models_products.products_id = products.id`
    );
    // Returning the first row (assuming there is only one result)
    return rows;
  }
}

// Exporting the ChargingStationManager class
module.exports = modelsManager;
