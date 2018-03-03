CREATE DATABASE login_db;
USE login_db;

CREATE table account
(
	id int NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL
	PRIMARY KEY(id)
);