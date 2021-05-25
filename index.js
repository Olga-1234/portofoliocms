/* eslint-disable no-undef */
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const listProjet = require("./listProjet.json")
const bodyparser = require("body-parser");

const { body, validationResult } = require('express-validator');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.get("/api/listProjet", (req, res) => {
  fs.readFile("listProjet.json", (error, file) => {
    const projets = JSON.parse(file);
    res.json(projets);
  });
});
app.get("/api/listProjet/:id",(req,res)=>{
    const {id}=req.params;
    const projetFound=listProjet.find(projet=>projet.id === +id);
    projetFound ? res.json(projetFound):res.status(404).json({error:`projet not found`})
})
app.delete("/api/listProjet/:id",(req,res)=>{
    const {id}=req.params;
    const projet=listProjet.find(projet=>projet.id === +id);
    projet ? listProjet.splice(listProjet.indexOf(projet),1) : res.status(404).json({error:`projet is deleted`})
    fs.writeFile("listProjet.json",JSON.stringify(listProjet),(error)=>{
        if(error){console.log(error)}
    })
    res.json(listProjet)

})
app.post("/api/listProjet/:id",
body('titre').isLength({min:3}).withMessage("mot trop court"),
body('description').isLength({max:255}).withMessage("text trop long"),
body('image').isLength({min:4}).withMessage("url trop court"),
body('alt').isLength({max:20}).withMessage("text trop long"),
body('link').isLength({min:5}),
(req,res)=>{
    const error =validationResult(req);
    if (!error.isEmpty()){
return res.status(400).json({errors: errors.array()});
}
const id = listProjet.length ? listProjet[listProjet.length -1].id +1 :1;
const {titre, description, image, alt, link} =req.body;
const projet ={
    id,
    titre,
    description,
    image,
    alt,
    link
    
}
}
)
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => console.log(`server running  on port ${PORT}`));
