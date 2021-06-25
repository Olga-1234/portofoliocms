/* eslint-disable no-undef */
const mysql = require("mysql");
module.exports = mysql.createConnection({
  host: process.env.db_host || "localhost",
  user: process.env.db_user || "olga",
  password: process.env.db_password || "KbgZedOmn@1234",
  database: process.env.db_database_name || "Mes_projets_kda",
});
