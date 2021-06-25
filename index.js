/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require("express");
const mysql = require("mysql");
const PORT = process.env.PORT || 3400;
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "olga",
  password: "KbgZedOmn@1234",
  database: "Mes_projects_kda",
});
connection.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("La connection à la base des données est établi");
});

app.use(express.json());

app.get("/projects", (req, res) => {
  connection.query("SELECT * FROM projects", (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send(result);
  });
});

app.post("/projects", (req, res) => {
  const {
    Nom_project,
    Description_project,
    url_image_project,
    alt_image_project,
    url_github_project,
  } = req.body;
  connection.query(
    "INSERT INTO projects (Nom_project,Description_project,url_image_project,alt_image_project,url_github_project ) VALUES (?, ?, ?)",
    [
      Nom_project,
      Description_project,
      url_image_project,
      alt_image_project,
      url_github_project,
    ],
    (error, result) => {
      if (error) throw error;
      console.log(result);
      {
        connection.query("SELECT * FROM projects", (error, result) => {
          if (error) throw error;
          console.log(result);
          res.send(result);
        });
      }
    }
  );
});
app.delete("/projects/:id", (req, res) => {});

app.put("/projects/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log("server listens on port", PORT);
});
