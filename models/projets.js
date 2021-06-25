/* eslint-disable no-undef */
module.exports ={
    get: (connection,callback)=>{
        connection.query("SELECT * FROM projets", callback);
    },
    getById: (connection,idProjet,callback)=>{
        connection.query("SELECT * FROM projets WHERE id_projet=?",
        idProjet,
        callback);
    },
    create:(connection,projet,callback)=>{
        connection.query("INSERT INTO projets (Nom_projet,description_projet,url_image_projet,alt_image_projet,url_github_projet) VALUES(?,?,?,?,?) ", projet.nom_projet, projet.description_projet, projet.url_image_projet, projet.alt_image_projet, projet.url_github_projet,callback )
    },
    update:(connection,projet,callback)=>{
        connection.query("UPDATE projets SET nom_projet=? description_projet=? url_image_projet=? alt_image_projet=? url_github_projet=? WHERE id_projet=?",[projet.Nom_projet, projet.description_projet, projet.url_image_projet, projet.alt_image_projet, projet.url_github_projet, projet.id], callback)
    },
    delete :(connection,idProjet,callback)=>{
        connection.query("DELETE FROM projets WHERE id_projet=?", idProjet, callback)
    }

};