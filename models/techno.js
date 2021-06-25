/* eslint-disable no-undef */

module.exports = {
  get: (connection, callback) => {
    connection.query("SELECT * FROM technologies", callback);
  },
  getById: (connection, idTechno, callback) => {
    connection.query(
      "SELECT * FROM technologies WHERE id_technologie=?",
      idTechno,
      callback
    );
  },
  create: (connection, techno, callback) => {
    connection.query(
      "INSERT INTO technologies (nom_technologie) VALUES(?)",
      techno.nom_technologies,
      callback
    );
  },
  update: (connection, techno, callback) => {
    connection.query(
      "UPDATE technologies SET nom_technologie=? WHERE id_technologie=?",
      [techno.nom_technologies, techno.id],
      callback
    );
  },
  delete: (connection, idTechno, callback) => {
    connection.query(
      "DELETE  FROM technologies WHERE id_technologie=?",
      idTechno,
      callback
    );
  },
};
