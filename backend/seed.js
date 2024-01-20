/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop

    /* ************************************************************************* */

    const productData = [
      {
        image:
          "https://aphrocos.com/wp-content/uploads/2023/05/71neATqQxcL-1.jpg",
        brand: "L'Oreal",
        product_name: "Revitalift Hyaluronic Acid",
        product_category: "Skincare",
        product_price: 25.99,
      },
      {
        image:
          "https://images.asos-media.com/products/loreal-elvive-dream-lengths-super-blowdry-cream-150ml/23134801-1-nocolour?$n_640w$&wid=513&fit=constrain",
        brand: "L'Oreal",
        product_name: "Elvive Dream Length Air Dry Cream",
        product_category: "Hair Care",
        product_price: 12.5,
      },
      {
        image:
          "https://www.garnier.fr/-/media/project/loreal/brand-sites/garnier/emea/fr/fr-fr/prd-haircare/shampooing-11152022/argan_sh_3600542418553.png?w=500&rev=1959780c8ec549fdae5b955a8b56f1c5&hash=44CD1EB270866623BE2B2BA7E26B54F1",
        brand: "Garnier",
        product_name: "Richesse d'Argan",
        product_category: "Hair Care",
        product_price: 10,
      },
      {
        image:
          "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw1c2cf447/ProductImages/OAP7233/3600524074647/3600524074647_1.jpg?sw=375&sh=375&sm=cut&sfrm=jpg&q=70",
        brand: "L'Oréal",
        product_name: "Elseve Bond Repair",
        product_category: "Shampoo",
        product_price: 5.99,
      },
      {
        image:
          "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw570400b9/ProductImages/3600524118426/3600524118426-01.jpg?sw=375&sh=375&sm=cut&sfrm=jpg&q=70",
        brand: "L'Oréal",
        product_name: "Elseve Pro Bond Repair Sérum",
        product_category: "Hair Care",
        product_price: 13.5,
      },
      {
        image:
          "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwf5b642a0/ProductImages/OAP7391/30149649/0000030149649_1.jpg?sw=465&sh=465&sm=cut&sfrm=png&q=70",
        brand: "L'Oréal",
        product_name: "Mascara Panorama Volume Millions de Cils",
        product_category: "Make Up",
        product_price: 14.9,
      },
      {
        image:
          "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw017d1a19/ProductImages/OAP6052/3600522337072/3600522337072_1.jpg?sw=375&sh=375&sm=cut&sfrm=jpg&q=70",
        brand: "L'Oréal",
        product_name: "Infaillible 24h DUO",
        product_category: "Make Up",
        product_price: 14.9,
      },
      {
        image:
          "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwb95a7b4c/ProductImages/OAP3000/3600524057503/3600524057503_1.jpg?sw=375&sh=375&sm=cut&sfrm=jpg&q=70",
        brand: "L'Oréal",
        product_name: "Accord Parfait",
        product_category: "Make Up",
        product_price: 12.66,
      },
      {
        image:
          "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwb95a7b4c/ProductImages/OAP3000/3600524057503/3600524057503_1.jpg?sw=375&sh=375&sm=cut&sfrm=jpg&q=70",
        brand: "L'Oréal",
        product_name: "Infaillible 24H ",
        product_category: "Make Up",
        product_price: 6.3,
      },
      {
        image:
          "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwb95a7b4c/ProductImages/OAP3000/3600524057503/3600524057503_1.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=70",
        brand: "L'Oréal",
        product_name: "Fond de teint accord parfait ",
        product_category: "Make Up",
        product_price: 12.66,
      },
      {
        image:
          "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwb95a7b4c/ProductImages/OAP3000/3600524057503/3600524057503_1.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=70",
        brand: "L'Oréal",
        product_name: "Poudre accord parfait ",
        product_category: "Make Up",
        product_price: 15,
      },
      {
        image:
          "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw3d2fd98a/ProductImages/OAP6973/30172999/30172999_1.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=70",
        brand: "L'Oréal",
        product_name: "Color Queen Ombre",
        product_category: "Make Up",
        product_price: 10,
      },
    ];

    const modelData = [
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705619109/entre_amis_qsx7zm.png",
        category: "Entre amis",
        name: "Laura",
        hair_color: "Brun foncé",
        hair_style: "Ondulé",
        skin_tone: "Medium",
        lips_type: "Dessinée",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705619107/5_onxb9g.png",
        category: "Entre amis",
        name: "Diana",
        hair_color: "Noir",
        hair_style: "Long",
        skin_tone: "Claire",
        lips_type: "Naturelle",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705618850/u0o8rhgptf2tjmtvja2t.png",
        category: "Entre amis",
        name: "Celine",
        hair_color: "Brun",
        hair_style: "Long",
        skin_tone: "Medium",
        lips_type: "Pulpeuse",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705619104/femme_entre_amis_xntmev.png",
        category: "Entre amis",
        name: "Marine",
        hair_color: "Brun foncé",
        hair_style: "Long",
        skin_tone: "Claire",
        lips_type: "Autre",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705621316/3_mmth40.png",
        category: "Gala",
        name: "Emma",
        hair_color: "Châtain",
        hair_style: "Court",
        skin_tone: "Medium",
        lips_type: "Déssinée",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705621313/2_bxfgqo.png",
        category: "Gala",
        name: "Stéphanie",
        hair_color: "Châtain",
        hair_style: "Tresse",
        skin_tone: "Claire",
        lips_type: "Déssinée",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705621308/gala_vsfxlx.png",
        category: "Gala",
        name: "Sam",
        hair_color: "Noir",
        hair_style: "Chignon",
        skin_tone: "Foncée",
        lips_type: "Epaisse",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705769383/5_ud8v6u.png",
        category: "Gala",
        name: "Maude",
        hair_color: "Roux",
        hair_style: "Long",
        skin_tone: "Pâle",
        lips_type: "Fine",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705621772/1_hjfwhl.png",
        category: "Mariage",
        name: "Zoe",
        hair_color: "Noir",
        hair_style: "Afro",
        skin_tone: "Foncée",
        lips_type: "Pulpeuse",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705621776/3_opekyt.png",
        category: "Mariage",
        name: "Natalie",
        hair_color: "Roux",
        hair_style: "Bohème",
        skin_tone: "Pâle",
        lips_type: "Fine",
      },

      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705621778/5_ldkl7v.png",
        category: "Mariage",
        name: "Gal",
        hair_color: "Brun foncé",
        hair_style: "Long",
        skin_tone: "Medium",
        lips_type: "En cœur",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705622118/artistique_bkntyd.png",
        category: "Artistique",
        name: "Lucie",
        hair_color: "Coloré",
        hair_style: "Long",
        skin_tone: "Claire",
        lips_type: "Pulpeuse",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705622117/5_bya5iu.png",
        category: "Artistique",
        name: "Noémie",
        hair_color: "Coloré",
        hair_style: "Court",
        skin_tone: "Pâle",
        lips_type: "Pulpeuse",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705622113/2_esua8h.png",
        category: "Artistique",
        name: "Elisabeth",
        hair_color: "Noir",
        hair_style: "Long",
        skin_tone: "Claire",
        lips_type: "En coeur",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705769405/soire%CC%81e_hoewej.png",
        category: "Soirée",
        name: "Fa",
        hair_color: "Noir",
        hair_style: "Afro",
        skin_tone: "Foncée",
        lips_type: "En coeur",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705769404/3_ehh2go.png",
        category: "Soirée",
        name: "Mirah",
        hair_color: "Noir",
        hair_style: "Ondulé",
        skin_tone: "Foncée",
        lips_type: "Pulpeuse",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705769405/5_vvdgze.png",
        category: "Soirée",
        name: "Louise",
        hair_color: "Châtain",
        hair_style: "Chignon",
        skin_tone: "Claire",
        lips_type: "Naturelle",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705622526/bureau_mi9uxj.png",
        category: "Travail",
        name: "Marie",
        hair_color: "Châtain",
        hair_style: "Long",
        skin_tone: "Claire",
        lips_type: "Naturelle",
      },
      {
        image:
          "https://res.cloudinary.com/dikhzx4qt/image/upload/v1705622523/femme_bureau_2_rjs2ml.png",
        category: "Travail",
        name: "Véronique",
        hair_color: "Gris",
        hair_style: "Court",
        skin_tone: "Claire",
        lips_type: "Naturelle",
      },
    ];

    const userData = [
      {
        firstname: "Theo",
        lastname: "Napoly",
        email: "theonapoly@me.com",
        hashed_password:
          "$argon2id$v=19$m=65536,t=5,p=1$HASm7dRJ9fsoJKlLbW9Y4g$NPC4JtJDq7Vqx//3X+sQuY3HsCOTSR5PwbPxxbbqnyE",
        genre: "1",
        phone: "0606060606",
        birthdate: "2000-01-01",
        is_admin: "1",
        hair_color: "Brun",
        hair_style: "Court",
        skin_tone: "Medium",
        lips_type: "Fine",
      },
      {
        firstname: "Emma",
        lastname: "Johnson",
        email: "emmajohnson@example.com",
        hashed_password:
          "$argon2id$v=19$m=65536,t=5,p=1$HASm7dRJ9fsoJKlLbW9Y4g$NPC4JtJDq7Vqx//3X+sQuY3HsCOTSR5PwbPxxbbqnyE",
        genre: "2",
        phone: "0712345678",
        birthdate: "1995-05-15",
        is_admin: "0",
        hair_color: "Blonde",
        hair_style: "Long",
        skin_tone: "Fair",
        lips_type: "Full",
      },
    ];

    const modelsProductsData = [
      {
        models_id: 1,
        products_id: 1,
      },
      {
        models_id: 1,
        products_id: 2,
      },
      {
        models_id: 1,
        products_id: 3,
      },
      {
        models_id: 1,
        products_id: 4,
      },
      {
        models_id: 1,
        products_id: 5,
      },
      // Modèle 2
      {
        models_id: 2,
        products_id: 6,
      },
      {
        models_id: 2,
        products_id: 7,
      },
      {
        models_id: 2,
        products_id: 8,
      },
      {
        models_id: 2,
        products_id: 9,
      },
      {
        models_id: 2,
        products_id: 10,
      },
      // Modèle 3
      {
        models_id: 3,
        products_id: 1,
      },
      {
        models_id: 3,
        products_id: 2,
      },
      {
        models_id: 3,
        products_id: 3,
      },
      {
        models_id: 3,
        products_id: 4,
      },
      {
        models_id: 3,
        products_id: 5,
      },
      // Modèle 4
      {
        models_id: 4,
        products_id: 6,
      },
      {
        models_id: 4,
        products_id: 7,
      },
      {
        models_id: 4,
        products_id: 8,
      },
      {
        models_id: 4,
        products_id: 9,
      },
      {
        models_id: 4,
        products_id: 10,
      },
      // Modèle 5
      {
        models_id: 5,
        products_id: 1,
      },
      {
        models_id: 5,
        products_id: 2,
      },
      {
        models_id: 5,
        products_id: 3,
      },
      {
        models_id: 5,
        products_id: 4,
      },
      {
        models_id: 5,
        products_id: 5,
      },
      // Modèle 6
      {
        models_id: 6,
        products_id: 1,
      },
      {
        models_id: 6,
        products_id: 2,
      },
      {
        models_id: 6,
        products_id: 3,
      },
      {
        models_id: 6,
        products_id: 4,
      },
      {
        models_id: 6,
        products_id: 5,
      },
      {
        models_id: 6,
        products_id: 6,
      },
      {
        models_id: 6,
        products_id: 7,
      },
      {
        models_id: 6,
        products_id: 8,
      },
      {
        models_id: 6,
        products_id: 9,
      },
      {
        models_id: 6,
        products_id: 10,
      },
      // Modèle 7
      {
        models_id: 7,
        products_id: 1,
      },
      {
        models_id: 7,
        products_id: 2,
      },
      {
        models_id: 7,
        products_id: 3,
      },
      {
        models_id: 7,
        products_id: 4,
      },
      {
        models_id: 7,
        products_id: 5,
      },
      {
        models_id: 7,
        products_id: 6,
      },
      {
        models_id: 7,
        products_id: 7,
      },
      {
        models_id: 7,
        products_id: 8,
      },
      {
        models_id: 7,
        products_id: 9,
      },
      {
        models_id: 7,
        products_id: 10,
      },
      // Modèle 8
      {
        models_id: 8,
        products_id: 1,
      },
      {
        models_id: 8,
        products_id: 2,
      },
      {
        models_id: 8,
        products_id: 3,
      },
      {
        models_id: 8,
        products_id: 4,
      },
      {
        models_id: 8,
        products_id: 5,
      },
      // Modèle 9
      {
        models_id: 9,
        products_id: 1,
      },
      {
        models_id: 9,
        products_id: 2,
      },
      {
        models_id: 9,
        products_id: 3,
      },
      {
        models_id: 9,
        products_id: 4,
      },
      {
        models_id: 9,
        products_id: 5,
      },
      // Modèle 10
      {
        models_id: 10,
        products_id: 1,
      },
      {
        models_id: 10,
        products_id: 2,
      },
      {
        models_id: 10,
        products_id: 3,
      },
      {
        models_id: 10,
        products_id: 4,
      },
      {
        models_id: 10,
        products_id: 5,
      },
      // Modèle 11
      {
        models_id: 11,
        products_id: 1,
      },
      {
        models_id: 11,
        products_id: 2,
      },
      {
        models_id: 11,
        products_id: 3,
      },
      {
        models_id: 11,
        products_id: 4,
      },
      {
        models_id: 11,
        products_id: 5,
      },
      // Modèle 12
      {
        models_id: 12,
        products_id: 6,
      },
      {
        models_id: 12,
        products_id: 7,
      },
      {
        models_id: 12,
        products_id: 8,
      },
      {
        models_id: 12,
        products_id: 9,
      },
      {
        models_id: 12,
        products_id: 10,
      },
      // Modèle 13
      {
        models_id: 13,
        products_id: 1,
      },
      {
        models_id: 13,
        products_id: 2,
      },
      {
        models_id: 13,
        products_id: 3,
      },
      {
        models_id: 13,
        products_id: 4,
      },

      // Modèle 14
      {
        models_id: 14,
        products_id: 1,
      },
      {
        models_id: 14,
        products_id: 2,
      },
      {
        models_id: 14,
        products_id: 3,
      },
      {
        models_id: 14,
        products_id: 4,
      },
      // Modèle 15
      {
        models_id: 15,
        products_id: 1,
      },
      {
        models_id: 15,
        products_id: 2,
      },
      {
        models_id: 15,
        products_id: 3,
      },
      {
        models_id: 15,
        products_id: 4,
      },
      // Modèle 16
      {
        models_id: 16,
        products_id: 1,
      },
      {
        models_id: 16,
        products_id: 2,
      },
      {
        models_id: 16,
        products_id: 3,
      },
      {
        models_id: 16,
        products_id: 4,
      },
      // Modèle 17
      {
        models_id: 17,
        products_id: 1,
      },
      {
        models_id: 17,
        products_id: 2,
      },
      {
        models_id: 17,
        products_id: 3,
      },
      {
        models_id: 17,
        products_id: 4,
      },
      // Modèle 18
      {
        models_id: 18,
        products_id: 1,
      },
      {
        models_id: 18,
        products_id: 2,
      },
      {
        models_id: 18,
        products_id: 3,
      },
      {
        models_id: 18,
        products_id: 4,
      },
    ];
    // Generating Seed Data

    const modelQueryPromises = modelData.map((model) => {
      return database.query(
        `INSERT INTO models (image, category, name, hair_color, hair_style, skin_tone, lips_type) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          model.image,
          model.category,
          model.name,
          model.hair_color,
          model.hair_style,
          model.skin_tone,
          model.lips_type,
        ]
      );
    });

    const productQueryPromises = productData.map((product) => {
      return database.query(
        `INSERT INTO products (image, brand, product_name, product_category, product_price) VALUES (?, ?, ?, ?, ?)`,
        [
          product.image,
          product.brand,
          product.product_name,
          product.product_category,
          product.product_price,
        ]
      );
    });

    const userQueryPromises = userData.map((user) => {
      return database.query(
        `INSERT INTO users (firstname, lastname, email, hashed_password, genre, phone, birthdate, is_admin, hair_color, hair_style, skin_tone, lips_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          user.firstname,
          user.lastname,
          user.email,
          user.hashed_password,
          user.genre,
          user.phone,
          user.birthdate,
          user.is_admin,
          user.hair_color,
          user.hair_style,
          user.skin_tone,
          user.lips_type,
        ]
      );
    });

    const allPromises = [
      ...productQueryPromises,
      ...modelQueryPromises,
      ...userQueryPromises,
    ];

    await Promise.all(allPromises);

    const modelsProductsQueryPromises = modelsProductsData.map(
      (modelProduct) => {
        return database.query(
          `INSERT INTO models_products (models_id, products_id) VALUES (?, ?)`,
          [modelProduct.models_id, modelProduct.products_id]
        );
      }
    );

    await Promise.all(modelsProductsQueryPromises);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
