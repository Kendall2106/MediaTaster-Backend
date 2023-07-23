
CREATE TABLE type (
  idType INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(25) NOT NULL
);

CREATE TABLE media (
  id INT PRIMARY KEY AUTO_INCREMENT,
  idType INT not NULL,
  name VARCHAR(255) NOT NULL,
  image BLOB NOT NULL,
  score INT NOT NULL,
  date DATE NOT NULL,
  FOREIGN KEY (idType) REFERENCES type(idType)
);

create table movie (
  idMovie INT PRIMARY KEY,
  FOREIGN KEY (idMovie) REFERENCES media(id)
);

create table game (
  idGame INT PRIMARY KEY,
  hours INT NOT NULL,
  FOREIGN KEY (idGame) REFERENCES media(id)
);

create table serie (
  idSerie INT PRIMARY KEY,
  Temp INT NOT NULL,
  FOREIGN KEY (idSerie) REFERENCES media(id)
);

create table book (
  idBook INT PRIMARY KEY,
  pages INT NOT NULL,
  FOREIGN KEY (idBook) REFERENCES media(id)
);

create table anime (
  idAnime INT PRIMARY KEY,
  Temp INT NOT NULL,
  FOREIGN KEY (idAnime) REFERENCES media(id)
);

INSERT INTO type (name) values ('Terror'), ('Comedia'), ('Ciencia Ficcion'), ('Fantasia'),('Romance'),('Accion'),('Triler');

INSERT INTO media (idType,name,image,score,date)
VALUES (1, 'IT', 'aun no', 10, '2023-05-05'),
       (1, 'Demon Slayer', 'aun no', 10, '2023-05-05'),
       (1, 'Stardew Valley', 'aun no', 10, '2023-05-05'),
       (1, 'Doctor Who', 'aun no', 10, '2023-05-05'),
       (1, 'Avenger', 'aun no', 10, '2023-05-05'),
       (1, '1984', 'aun no', 5, '2023-05-05'),
       (6, 'Ataque de titanes','aun no', 10, '2023-05-05'),
       (5, 'lie in April','aun no', 10, '2023-05-05'),
       (1, 'Cell','aun no', 10, '2023-05-05'),
       (6, 'Halo','aun no', 10, '2023-05-05'),
       (1, 'Resident evil','aun no', 10, '2023-05-05'),
       (2, 'Avatar','aun no', 10, '2023-05-05'),
       (4, 'Wanda Vision','aun no', 10, '2023-05-05'),
       (1, 'Mother','aun no', 10, '2023-05-05'),
       (4, 'Capitan America','aun no', 10, '2023-05-05');


INSERT iNTO book (idBook, pages) values (1,1500), (6,250), (9, 600);
INSERT iNTO anime (idAnime, Temp) values (2,1),(7,6),(8,1);
INSERT iNTO game (idGame, hours) values (3,150),(10,10),(11,20);
INSERT iNTO serie (`idSerie`, `Temp`) values (4,12), (12,4), (13,1);
INSERT iNTO movie (`idMovie`) values (5),(14),(15);




CREATE PROCEDURE sp_listAnime()
BEGIN
    SELECT idAnime, Temp, media.name AS media_name, score, date, type.name AS type_name ,image FROM anime JOIN media ON anime.idAnime = media.id JOIN type ON media.idType = type.idType ORDER BY date DESC, idAnime DESC;
END
DELIMITER ;

CREATE PROCEDURE sp_listBook()
BEGIN
    SELECT idBook, pages, media.name AS media_name, score, date, type.name AS type_name ,image FROM book JOIN media ON book.idBook = media.id JOIN type ON media.idType = type.idType ORDER BY date DESC, idBook DESC;
END

DELIMITER ;

CREATE PROCEDURE sp_listGame()
BEGIN
    SELECT idGame, hours, media.name AS media_name, score, date, type.name AS type_name ,image FROM game JOIN media ON game.idGame = media.id JOIN type ON media.idType = type.idType ORDER BY date DESC, idGame DESC;
END

DELIMITER ;

CREATE PROCEDURE sp_listMovie()
BEGIN
    SELECT idMovie, media.name AS media_name, score, date, type.name AS type_name ,image FROM movie JOIN media ON movie.idMovie = media.id JOIN type ON media.idType = type.idType ORDER BY date DESC, idMovie DESC;
END

DELIMITER ;

CREATE PROCEDURE sp_listMedia()
BEGIN
    SELECT id, media.name AS media_name, score, date, type.name AS type_name ,image FROM media JOIN type ON media.idType = type.idType WHERE score = 5 ORDER BY date DESC, id DESC;
END 
DELIMITER ;

CREATE PROCEDURE sp_listSerie()
BEGIN
    SELECT idSerie, Temp, media.name AS media_name, score, date, type.name AS type_name ,image FROM serie JOIN media ON serie.idSerie = media.id JOIN type ON media.idType = type.idType ORDER BY date DESC, idSerie DESC;
END




DELIMITER //
CREATE PROCEDURE sp_registerAnime(
  IN p_name VARCHAR(255),
  IN p_date DATE,
  IN p_score iNT,
  IN p_type INT,
  IN p_temp INT
)
BEGIN
  
  DECLARE lastMediaId INT;

  INSERT INTO media (idType, name, image, score, date)
  VALUES (p_type, p_name, 'nop', p_score, p_date);

  SET lastMediaId = LAST_INSERT_ID();

  INSERT INTO anime (idAnime, Temp)
  VALUES (lastMediaId, p_temp);

END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE sp_registerBook(
  IN p_name VARCHAR(255),
  IN p_date DATE,
  IN p_score iNT,
  IN p_type INT,
  IN p_pages INT
)
BEGIN
  
  DECLARE lastMediaId INT;

  INSERT INTO media (idType, name, image, score, date)
  VALUES (p_type, p_name, 'nop', p_score, p_date);

  SET lastMediaId = LAST_INSERT_ID();

  INSERT INTO book (idBook, pages)
  VALUES (lastMediaId, p_pages);

END //
DELIMITER ;



DELIMITER //
CREATE PROCEDURE sp_registerGame(
  IN p_name VARCHAR(255),
  IN p_date DATE,
  IN p_score iNT,
  IN p_type INT,
  IN p_hours INT
)
BEGIN
  
  DECLARE lastMediaId INT;

  INSERT INTO media (idType, name, image, score, date)
  VALUES (p_type, p_name, 'nop', p_score, p_date);

  SET lastMediaId = LAST_INSERT_ID();

  INSERT INTO game (idGame, hours)
  VALUES (lastMediaId, p_hours);

END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE sp_registerMovie(
  IN p_name VARCHAR(255),
  IN p_date DATE,
  IN p_score iNT,
  IN p_type INT
)
BEGIN
  
  DECLARE lastMediaId INT;

  INSERT INTO media (idType, name, image, score, date)
  VALUES (p_type, p_name, 'nop', p_score, p_date);

  SET lastMediaId = LAST_INSERT_ID();

  INSERT INTO movie (idMovie)
  VALUES (lastMediaId);

END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE sp_registerSerie(
  IN p_name VARCHAR(255),
  IN p_date DATE,
  IN p_score iNT,
  IN p_type INT,
  IN p_temp INT
)
BEGIN
  
  DECLARE lastMediaId INT;

  INSERT INTO media (idType, name, image, score, date)
  VALUES (p_type, p_name, 'nop', p_score, p_date);

  SET lastMediaId = LAST_INSERT_ID();

  INSERT INTO serie (idSerie, Temp)
  VALUES (lastMediaId, p_temp);

END //
DELIMITER ;










CREATE PROCEDURE sp_deleteMovie(
  IN p_id INT
)
BEGIN
  DELETE FROM movie WHERE idMovie = p_id;
  DELETE FROM media WHERE id = p_id;
END

CREATE PROCEDURE sp_deleteAnime(
  IN p_id INT
)
BEGIN
  DELETE FROM anime WHERE idAnime = p_id;
  DELETE FROM media WHERE id = p_id;
END

CREATE PROCEDURE sp_deleteSerie(
  IN p_id INT
)
BEGIN
  DELETE FROM serie WHERE idSerie = p_id;
  DELETE FROM media WHERE id = p_id;
END

CREATE PROCEDURE sp_deleteGame(
  IN p_id INT
)
BEGIN
  DELETE FROM game WHERE idGame = p_id;
  DELETE FROM media WHERE id = p_id;
END

CREATE PROCEDURE sp_deleteBook(
  IN p_id INT
)
BEGIN
  DELETE FROM book WHERE idBook = p_id;
  DELETE FROM media WHERE id = p_id;
END