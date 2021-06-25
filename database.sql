
CREATE DATABASE IF NOT EXISTS Mes_projets_kda DEFAULT CHARACTER SET utf8 ;
USE Mes_projets_kda ; 


CREATE TABLE IF NOT EXISTS projets
(
  id_projet INT NOT NULL AUTO_INCREMENT,
  nom_projet VARCHAR(255) NOT NULL,
  description_projet VARCHAR(255) NOT NULL,
  url_image_projet VARCHAR(255) NULL,
  alt_image_projet VARCHAR(255) NULL,
  url_github_projet VARCHAR(255),
  PRIMARY KEY (id_projet)
);

CREATE TABLE IF NOT EXISTS technologies
(
    id_technologie INT NOT NULL AUTO_INCREMENT,
    nom_technologie VARCHAR(255) NOT NULL,
   PRIMARY KEY (id_technologie)

);

CREATE TABLE IF NOT EXISTS projet_tech
(
    id_projet_tech INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_projet INT  NOT NULL,
    id_technologie INT NOT NULL,
    PRIMARY KEY (id_projet_tech),
    CONSTRAINT fk_projet FOREIGN KEY (id_projet) REFERENCES projets (id_projet) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_technologies FOREIGN KEY (id_technologie) REFERENCES technologies (id_technologie) ON DELETE CASCADE ON UPDATE CASCADE
);
