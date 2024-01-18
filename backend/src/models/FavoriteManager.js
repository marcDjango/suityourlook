/*eslint-disable*/
// Importing the AbstractManager class
const AbstractManager = require("./AbstractManager");

// Defining the chargingStationManager class that extends AbstractManager
class modelsManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  async readFavorite() {
    const [rows] = await this.database.query(
      `SELECT 
    users.id,
    users.firstname, 
    users.lastname,
    users.email,
    users.genre,
    users.phone,
    users.birthdate,
    users.is_admin,
    users.hair_color,
    users.hair_style,
    users.skin_tone,
    users.lips_type,
    models.id AS model_id,
    models.image AS model_image,
    models.category AS model_category,
    models.name AS models_name,
    models.hair_color AS models_hair_color,
    models.hair_style AS models_hair_style,
    models.skin_tone AS models_skin_tone,
    models.lips_type AS models_lips_style
FROM users
INNER JOIN favorite ON users.id = favorite.users_id 
INNER JOIN models ON favorite.models_id = models.id
`
    );
    return rows;
  }

  async postFavorite(usersData) {
    const [response] = await this.database.query(
      `INSERT INTO favorite (models_id, users_id) VALUES (?, ?)`,
      [usersData.models_id, usersData.users_id]
    );
    return response.affectedRows;
  }
}

// Exporting the ChargingStationManager class
module.exports = modelsManager;
