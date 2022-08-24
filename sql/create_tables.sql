DROP TABLE IF EXISTS inappropriateWords;
DROP TABLE IF EXISTS ContactForms;
DROP TABLE IF EXISTS UserUser;
DROP TABLE IF EXISTS PhotosCategories;
DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS Ratings;
DROP TABLE IF EXISTS Photos;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
	userId INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(60) NOT NULL,
	surnames VARCHAR(60) NOT NULL,
	phoneNumber INT(9) NOT NULL,
	email VARCHAR(60) NOT NULL UNIQUE,
	userName VARCHAR(60) NOT NULL,		
	password VARCHAR(1000) NOT NULL,
	profilePictureURL VARCHAR(1000) NOT NULL,
	
	PRIMARY KEY (userId),
	UNIQUE (phoneNumber),
	
	
	-- RN-C03
	
	UNIQUE (userName)
);

CREATE TABLE Photos (
	photoId INT NOT NULL AUTO_INCREMENT,
	url VARCHAR(1000) NOT NULL,
	uploadDate DATETIME DEFAULT CURRENT_TIMESTAMP,
	title VARCHAR(60) NOT NULL,
	description VARCHAR(150) NOT NULL,
	visibility VARCHAR(7) NOT NULL,
	userId INT NOT NULL,
	
	PRIMARY KEY (photoId),
	FOREIGN KEY (userId) REFERENCES Users (userId),
	
	CONSTRAINT invalidVisibility CHECK (visibility IN ('Pública', 'Privada'))
);

CREATE TABLE Ratings (
	ratingId INT NOT NULL AUTO_INCREMENT,
	dateP DATETIME DEFAULT CURRENT_TIMESTAMP,
	punctuation INT NOT NULL,
	userId INT NOT NULL,
	photoId INT NOT NULL,
	PRIMARY KEY (ratingId),
	FOREIGN KEY (userId) REFERENCES Users (userId),
	FOREIGN KEY (photoId) REFERENCES Photos (photoId),
	
	-- RN-C04
	UNIQUE(userId,photoId),
	
	CONSTRAINT invalidPunctuation CHECK (punctuation >=1 AND punctuation<=5)
);

CREATE TABLE Comments(
	commentId INT NOT NULL AUTO_INCREMENT,
	txt VARCHAR(150) NOT NULL,
	dateP DATETIME DEFAULT CURRENT_TIMESTAMP,
	userId INT NOT NULL,
	photoId INT NOT NULL,  
	PRIMARY KEY (commentId),
	FOREIGN KEY (userId) REFERENCES Users (userId),
	FOREIGN KEY (photoId) REFERENCES Photos (photoId) ON DELETE CASCADE
);

CREATE TABLE Categories(
	categoryId INT NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(50) NOT NULL,
	PRIMARY KEY (categoryId),
	
	-- RN-B06
	UNIQUE(NAME)
	
);

CREATE TABLE PhotosCategories(
	photoCategoryId INT NOT NULL AUTO_INCREMENT,
	photoId INT NOT NULL,
	categoryId INT NOT NULL,
	PRIMARY KEY (photoCategoryId),
	FOREIGN KEY (photoId) REFERENCES Photos (photoId) ON DELETE CASCADE,
	FOREIGN KEY (categoryId) REFERENCES Categories (categoryId),
	UNIQUE (photoId, categoryId)
);

CREATE TABLE UserUser(

	-- UserId1 sigue a UserId2

	userUserId INT NOT NULL AUTO_INCREMENT,
	userId1 INT NOT NULL,
	userId2 INT NOT NULL,
	PRIMARY KEY (userUserId),
	FOREIGN KEY (userId1) REFERENCES Users (userId),
	FOREIGN KEY (userId2) REFERENCES Users (userId),
	
	UNIQUE(userId1, userId2),
	
	CONSTRAINT invalidUser CHECK (userId1 != userId2)
);

CREATE TABLE ContactForms (
	contactFormId INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(60) NOT NULL,
	surnames VARCHAR(60) NOT NULL,
	phoneNumber INT(9) NOT NULL,
	email VARCHAR(60) NOT NULL,		
	comments VARCHAR(2000) NOT NULL,
	
	PRIMARY KEY (contactFormId)	
);

CREATE TABLE inappropriateWords (
	inappropriateWordId INT NOT NULL AUTO_INCREMENT,
	word VARCHAR(60) NOT NULL,
	
	PRIMARY KEY (inappropriateWordId)	
);





-- Triggers

-- RN-C01

DELIMITER //
CREATE OR REPLACE TRIGGER triggerLimitPhotos
	BEFORE INSERT ON Photos
	FOR EACH ROW
	BEGIN
		DECLARE numPhotos INT;
		SET numPhotos = (SELECT COUNT(*) FROM photos WHERE userId=NEW.userId);
	
	
	
		IF (numPhotos > 49) THEN
			SIGNAL SQLSTATE '45000' SET message_text =
			'No puedes tener subidas más de 50 fotos';
		END IF;
	END//
DELIMITER ;

-- RN-B05

DELIMITER //
CREATE OR REPLACE TRIGGER triggerUpdatePhoto
	BEFORE UPDATE ON Photos
	FOR EACH ROW
	BEGIN
		DECLARE numComments INT;
		SET numComments = (SELECT COUNT(*) FROM photos JOIN comments ON (photos.photoId = comments.photoId) WHERE photos.photoId=NEW.photoId);
	
	
	
		IF (numComments > 0 AND OLD.visibility='Pública' AND NEW.visibility='Privada') THEN
			SIGNAL SQLSTATE '45000' SET message_text =
			'No puede marcarse como privada una foto que tiene comentarios';
		END IF;
	END//
DELIMITER ;

DELIMITER //
CREATE OR REPLACE TRIGGER triggerDeletePhoto
	BEFORE DELETE ON photos
	FOR EACH ROW
	BEGIN
		DECLARE numComments INT;
		SET numComments = (SELECT COUNT(*) FROM photos JOIN comments ON (photos.photoId = comments.photoId) WHERE photos.photoId=OLD.photoId);
	
	
		IF (numComments > 0) THEN
			SIGNAL SQLSTATE '45000' SET message_text =
			'No puede eliminarse una foto que tiene comentarios';
		END IF;
	END//
DELIMITER ;