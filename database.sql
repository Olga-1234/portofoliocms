
CREATE DATABASE IF NOT EXISTS Mes_projects_kda DEFAULT CHARACTER SET utf8 ;
USE Mes_projects_kda ; 


CREATE TABLE IF NOT EXISTS projects
(
  id_project INT NOT NULL AUTO_INCREMENT,
  nom_project VARCHAR(255) NOT NULL,
  description_project VARCHAR(255) NOT NULL,
  url_image_project VARCHAR(255) NULL,
  alt_image_project VARCHAR(255) NULL,
  url_github_project VARCHAR(255),
  PRIMARY KEY (id_project)
);

CREATE TABLE IF NOT EXISTS technologies
(
    id_technologie INT NOT NULL AUTO_INCREMENT,
    nom_technologie VARCHAR(255) NOT NULL,
   PRIMARY KEY (id_technologie)

);

CREATE TABLE IF NOT EXISTS project_tech
(
    id_project_tech INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_project INT  NOT NULL,
    id_technologie INT NOT NULL,
    PRIMARY KEY (id_project_tech),
    CONSTRAINT fk_project FOREIGN KEY (id_project) REFERENCES projects (id_project) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_technologies FOREIGN KEY (id_technologie) REFERENCES technologies (id_technologie) ON DELETE CASCADE ON UPDATE CASCADE
);
