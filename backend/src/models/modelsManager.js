// Importing the AbstractManager class
const AbstractManager = require("./AbstractManager");

// Defining the chargingStationManager class that extends AbstractManager
class modelsManager extends AbstractManager {
  constructor() {
    super({ table: "models" });
  }
}

// Exporting the ChargingStationManager class
module.exports = modelsManager;
