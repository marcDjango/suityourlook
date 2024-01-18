const validateUser = (req, res, next) => {
  // validate req.body then call next() if everything is ok
  const {
    firstname,
    lastname,
    email,
    hashed_password: hashedPassword,
    is_admin: isAdmin,
    genre,
    phone,
  } = req.body;
  const errors = [];
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

  if (firstname == null) {
    errors.push({
      field: "firstname",
      message:
        "Attention ! Ce champ est obligatoire. Veuillez le remplir pour poursuivre",
    });
  } else if (firstname.length >= 45) {
    errors.push({
      field: "firstname",
      message:
        "Oups ! Vous avez dépassé la limite de caractères autorisée pour ce champ. Veuillez réduire le nombre de caractères à 45 ou moins et réessayer.",
    });
  }
  if (lastname == null) {
    errors.push({
      field: "lastname",
      message:
        "Attention ! Ce champ est obligatoire. Veuillez le remplir pour poursuivre",
    });
  } else if (lastname.length >= 45) {
    errors.push({
      field: "lastname",
      message:
        "Oups ! Vous avez dépassé la limite de caractères autorisée pour ce champ. Veuillez réduire le nombre de caractères à 45 ou moins et réessayer.",
    });
  }
  if (!emailRegex.test(email)) {
    errors.push({
      field: "email",
      message:
        "Veuillez entrer une adresse e-mail valide. L'adresse e-mail doit suivre le format nom@example.com.",
    });
  } else if (email.length >= 45) {
    errors.push({
      field: "email",
      message:
        "Oups ! Vous avez dépassé la limite de caractères autorisée pour ce champ. Veuillez réduire le nombre de caractères à 45 ou moins et réessayer.",
    });
  }
  if (hashedPassword == null) {
    errors.push({
      field: "hashed_password",
      message:
        "Attention ! Ce champ est obligatoire. Veuillez le remplir pour poursuivre",
    });
  } else if (hashedPassword.length >= 255) {
    errors.push({
      field: "hashed_password",
      message:
        "Oups ! Vous avez dépassé la limite de caractères autorisée pour ce champ. Veuillez réduire le nombre de caractères à 255 ou moins et réessayer.",
    });
  }
  if (genre == null) {
    errors.push({
      field: "genre",
      message:
        "Attention ! Ce champ est obligatoire. Veuillez le remplir pour poursuivre",
    });
  }
  if (isAdmin == null) {
    errors.push({
      field: "is_admin",
      message:
        "Attention ! Ce champ est obligatoire. Veuillez le remplir pour poursuivre",
    });
  }
  if (phone == null) {
    errors.push({
      field: "phone",
      message:
        "Attention ! Ce champ est obligatoire. Veuillez le remplir pour poursuivre",
    });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = validateUser;
