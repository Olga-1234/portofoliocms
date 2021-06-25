/* eslint-disable no-undef */
module.exports = {
  get: (connection, callback) => {
    connection.query("SELECT * FROM project_tech", callback);
  },
  getById: (connection, idproject_tech, callback) => {
    connection.query(
      "SELECT * FROM project_tech WHERE id_project_tech=?",
      idproject_tech,
      callback
    );
  },
  create: (connection, project_tec, callback) => {
    connection.query(
      "INSERT INTO project_tech(id_project, id_technologie) VALUES(?,?)",
      project_tec.id_project,
      project_tec.id_technologie,
      callback
    );
  },
  update: (connection, project_tec, callback) => {
    connection.query(
      "UPDATE project_tech SET id_project=? id_technologie=?",
      [project_tec.id_project, project_tec.id_technologie],
      callback
    );
  },
  delete: (connection, idproject_tec, callback) => {
    connection.query(
      "DELETE FROM project_tech WHERE id_project_tech",
      idproject_tec,
      callback
    );
  },
};
