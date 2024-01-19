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
        image: "https://i.ibb.co/9YB5Dmm/scarlett-johanssonv2.png",
        category: "Gala",
        name: "Scarlett Johansson",
        hair_color: "Blonde",
        hair_style: "Mi-long",
        skin_tone: "Medium",
        lips_type: "Fine",
      },
      {
        image:
          "https://cache.marieclaire.fr/data/photo/w1000_ci/5j/looks-beyonce19.jpg",
        category: "Travail",
        name: "Beyoncé",
        hair_color: "Black",
        hair_style: "Long",
        skin_tone: "Dark",
        lips_type: "Large",
      },
      {
        image:
          "https://images.unsplash.com/photo-1582876533492-51fd2f162272?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Soirée",
        name: "Celine",
        hair_color: "Black",
        hair_style: "Frisée",
        skin_tone: "Dark",
        lips_type: "Plump",
      },
      {
        image:
          "https://assets.ynap-content.com/story-metadata-image-1537436915819.jpeg",
        category: "Gala",
        name: "Emma Watson",
        hair_color: "Brown",
        hair_style: "Long",
        skin_tone: "Light",
        lips_type: "Full",
      },
      {
        image:
          "https://www.byrdie.com/thmb/xGD8y_ERDJ9-LmZRS5LbPpAy8QI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__261173__priyanka-chopra-diy-skincare-261173-1529603346196-main.700x0c-c1492540b45e43f2a82511c380753b4a.jpg",
        category: "Soirée",
        name: "Priyanka Chopra",
        hair_color: "Brown",
        hair_style: "Wavy",
        skin_tone: "Medium",
        lips_type: "Plump",
      },
      {
        image:
          "https://i.pinimg.com/originals/cf/76/02/cf7602b77b623b187e4637568e0cde0c.jpg",
        category: "Travail",
        name: "Chris Hemsworth",
        hair_color: "Blonde",
        hair_style: "Buzz Cut",
        skin_tone: "Fair",
        lips_type: "Thin",
      },
      {
        image:
          "https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_15_juillet_2016.2Fzoe-saldana.2F3608532-1-fre-FR.2Fzoe-saldana.2Ejpg/420x420/quality/80/zoe-saldana-son-violent-coup-de-gueule-contre-le-racisme-ordinaire.jpg",
        category: "Travail",
        name: "Zoe Saldana",
        hair_color: "Black",
        hair_style: "Bob",
        skin_tone: "Medium",
        lips_type: "Thin",
      },
      {
        image:
          "https://www.femina.ch/assets/content/migration/main/2-natalie-portman-novembre-2016-los-angeles-hollywood-film-awards_0.jpg",
        category: "Gala",
        name: "Natalie Portman",
        hair_color: "Brown",
        hair_style: "Curly",
        skin_tone: "Light",
        lips_type: "Full",
      },

      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg",
        category: "Soirée",
        name: "Gal Gadot",
        hair_color: "Black",
        hair_style: "Ponytail",
        skin_tone: "Medium",
        lips_type: "Plump",
      },
      {
        image:
          "https://media.glamourmagazine.co.uk/photos/6138b0139734ef64a15ef9d0/master/pass/margot-robbie-glamour-29sep16-getty-b.jpg",
        category: "Gala",
        name: "Margot Robbie",
        hair_color: "Blonde",
        hair_style: "Bun",
        skin_tone: "Fair",
        lips_type: "Plump",
      },
      {
        image:
          "https://i.pinimg.com/474x/a2/c1/6a/a2c16a45b38973d457e7c21be11718eb.jpg",
        category: "Travail",
        name: "Zendaya",
        hair_color: "Brown",
        hair_style: "Braids",
        skin_tone: "Medium",
        lips_type: "Full",
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
