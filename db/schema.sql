CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (

  id int(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  date DATETIME NOT NULL,

  PRIMARY KEY (id)

);