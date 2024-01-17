SET foreign_key_checks = 0;

-- -----------------------------------------------------
-- Schema suit_your_look
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `suit_your_look` DEFAULT CHARACTER SET utf8 ;
USE `suit_your_look` ;

-- -----------------------------------------------------
-- Table `suit_your_look`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suit_your_look`.`users` (
  `id` INT NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `hashed_password` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `birthdate` VARCHAR(45) NULL,
  `is_admin` VARCHAR(45) NOT NULL,
  `hair_color` VARCHAR(45) NULL,
  `hair_style` VARCHAR(45) NULL,
  `skin_tone` VARCHAR(45) NULL,
  `lips_type` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suit_your_look`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suit_your_look`.`products` (
  `id` INT NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `product_name` VARCHAR(45) NOT NULL,
  `product_category` VARCHAR(45) NOT NULL,
  `product_price` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suit_your_look`.`models`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suit_your_look`.`models` (
  `id` INT NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `hair_color` VARCHAR(45) NULL,
  `hair_style` VARCHAR(45) NULL,
  `skin_tone` VARCHAR(45) NULL,
  `lips_type` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suit_your_look`.`models_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suit_your_look`.`models_products` (
  `models_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  PRIMARY KEY (`models_id`, `products_id`),
  INDEX `fk_models_has_products_products1_idx` (`products_id` ASC) VISIBLE,
  INDEX `fk_models_has_products_models_idx` (`models_id` ASC) VISIBLE,
  CONSTRAINT `fk_models_has_products_models`
    FOREIGN KEY (`models_id`)
    REFERENCES `suit_your_look`.`models` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_models_has_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `suit_your_look`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `suit_your_look`.`favorite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `suit_your_look`.`favorite` (
  `models_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`models_id`, `users_id`),
  INDEX `fk_models_has_users_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_models_has_users_models1_idx` (`models_id` ASC) VISIBLE,
  CONSTRAINT `fk_models_has_users_models1`
    FOREIGN KEY (`models_id`)
    REFERENCES `suit_your_look`.`models` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_models_has_users_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `suit_your_look`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

Set foreign_key_checks = 1;
