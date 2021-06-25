/* eslint-disable no-undef */
module.exports = {
  get: (connection, callback) => {
    connection.query("SELECT * FROM projects", callback);
  },
  getById: (connection, idproject, callback) => {
    connection.query(
      "SELECT * FROM projects WHERE id_project=?",
      idproject,
      callback
    );
  },
  create: (connection, project, callback) => {
    connection.query(
      "INSERT INTO projects (Nom_project,description_project,url_image_project,alt_image_project,url_github_project) VALUES(?,?,?,?,?) ",
      project.nom_project,
      project.description_project,
      project.url_image_project,
      project.alt_image_project,
      project.url_github_project,
      callback
    );
  },
  update: (connection, project, callback) => {
    connection.query(
      "UPDATE projects SET nom_project=? description_project=? url_image_project=? alt_image_project=? url_github_project=? WHERE id_project=?",
      [
        project.Nom_project,
        project.description_project,
        project.url_image_project,
        project.alt_image_project,
        project.url_github_project,
        project.id,
      ],
      callback
    );
  },
  delete: (connection, idproject, callback) => {
    connection.query(
      "DELETE FROM projects WHERE id_project=?",
      idproject,
      callback
    );
  },
};
