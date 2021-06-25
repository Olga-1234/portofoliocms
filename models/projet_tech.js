/* eslint-disable no-undef */
module.exports = {
  get: (connection, callback) => {
    connection.query("SELECT * FROM projet_tech", callback);
  },
  getById: (connection, idprojet_tech, callback) => {
    connection.query(
      "SELECT * FROM projet_tech WHERE id_projet_tech=?",
      idprojet_tech,
      callback
    );
  },
  create: (connection, projet_tec, callback) => {
    connection.query(
      "INSERT INTO projet_tech(id_projet, id_technologie) VALUES(?,?)",
      projet_tec.id_projet,
      projet_tec.id_technologie,
      callback
    );
  },
  update: (connection, projet_tec, callback) => {
    connection.query(
      "UPDATE projet_tech SET id_projet=? id_technologie=?",
      [projet_tec.id_projet, projet_tec.id_technologie],
      callback
    );
  },
  delete: (connection, idprojet_tec, callback) => {
    connection.query(
      "DELETE FROM projet_tech WHERE id_projet_tech",
      idprojet_tec,
      callback
    );
  },
};
