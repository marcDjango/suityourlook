/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    queries.push(
      database.query(
        `INSERT INTO products (image, brand, product_name, product_category, product_price) VALUES (?, ?, ?, ?, ?)`,
        [
          "https://www.garnier.fr/-/media/project/loreal/brand-sites/garnier/emea/fr/fr-fr/prd-haircare/shampooing-11152022/argan_sh_3600542418553.png?w=500&rev=1959780c8ec549fdae5b955a8b56f1c5&hash=44CD1EB270866623BE2B2BA7E26B54F1",
          "Garnier",
          "Richesse d'Argan",
          "Hair Care",
          10,
        ]
      )
    );

    queries.push(
      database.query(
        `INSERT INTO models (image, category, name, hair_color, hair_style, skin_tone, lips_type) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          "https://media.vogue.fr/photos/621ce51fd521d794b1af5027/2:3/w_2560%2Cc_limit/1358691846",
          "Gala",
          "Scarlett Johansson",
          "Blonde",
          "Mi-long",
          "Medium",
          "Fine",
        ]
      )
    );

    queries.push(
      database.query(
        `INSERT INTO users (firstname, lastname, email, hashed_password, genre, phone, birthdate, is_admin, hair_color, hair_style, skin_tone, lips_type ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          "Theo",
          "Napoly",
          "theonapoly@me.com",
          "$argon2id$v=19$m=65536,t=5,p=1$+S3Gb/M9gk60MWLsMtJB4A$I0/8gdRdQVhnsImLjdDNK2Uy7xdKnUnDvCaM7r2nYE0",
          "1",
          "0606060606",
          "2000-01-01",
          "1",
          "Brun",
          "Court",
          "Medium",
          "Fine",
        ]
      )
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
