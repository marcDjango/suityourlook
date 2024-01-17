const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  // --------- CRUD ---------

  // ------------------ Méthode POST ------------------
  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const {
      firstname,
      lasttname,
      email,
      hashed_password: hashedPassword,
      genre,
      phone,
      birthdate,
      is_admin: isAdmin,
      hair_color: hairColor,
      hair_style: hairStyle,
      skin_tone: skinTone,
      lips_type: lipsType,
    } = user;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lasttname, email, hashed_password, genre, phone, birthdate, is_admin, hair_color, hair_style, skin_tone, lips_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        firstname,
        lasttname,
        email,
        hashedPassword,
        genre,
        phone,
        birthdate,
        isAdmin,
        hairColor,
        hairStyle,
        skinTone,
        lipsType,
      ]
    );
    return result.insertId;
  }

  // ------------------ Méthode PUT ------------------
  async update(id, user) {
    const {
      firstname,
      lasttname,
      email,
      hashed_password: hashedPassword,
      genre,
      phone,
      birthdate,
      is_admin: isAdmin,
      hair_color: hairColor,
      hair_style: hairStyle,
      skin_tone: skinTone,
      lips_type: lipsType,
    } = user;
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lasttname = ?, email = ?, hashed_password = ?, genre = ?, phone = ?, birthdate = ?, is_admin = ?, hair_color = ?, hair_style = ?, skin_tone = ?, lips_type WHERE id = ?`,
      [
        firstname,
        lasttname,
        email,
        hashedPassword,
        genre,
        phone,
        birthdate,
        isAdmin,
        hairColor,
        hairStyle,
        skinTone,
        lipsType,
        id,
      ]
    );
    return rows;
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    return rows[0];
  }
}

module.exports = UserManager;
