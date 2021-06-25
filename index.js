/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 3400;
const app = express();


const connection = mysql.createConnection({
	host: 'localhost',
	user: 'olga',
	password: 'KbgZedOmn@1234',
	database: 'Mes_projets_kda',
});
connection.connect((error) => {
	if (error) {
		console.log(error);
		return;
	}
	console.log('La connection à la base des données est établi');
});

app.use(express.json());

app.get('/projets', (req, res) => {
	connection.query('SELECT * FROM projets', (error, result) => {
		if (error) throw error;
		console.log(result);
		res.send(result);
	});
});

app.post('/projets', (req, res) => 
{
	const { Nom_projet, Description_projet, url_image_projet, alt_image_projet, url_github_projet } = req.body;
	connection.query(
		'INSERT INTO projets (Nom_projet,Description_projet,url_image_projet,alt_image_projet,url_github_projet ) VALUES (?, ?, ?)',
		[Nom_projet, Description_projet, url_image_projet, alt_image_projet, url_github_projet],
		(error, result) => {
			if (error) throw error;
			console.log(result);
			{
				connection.query('SELECT * FROM projets', (error, result) => {
					if (error) throw error;
					console.log(result);
					res.send(result);
				});
			}
		},
	);
});
app.delete('/projets/:id', (req, res) => {

});

app.put('/projets/:id', (req, res) => {});

app.listen(PORT, () => {
	console.log('server listens on port', PORT);
});




