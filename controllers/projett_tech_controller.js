/* eslint-disable no-undef */
const project_techn = require("./../models/project_tech");
module.exports = {
  
  getProjectTech: (request, response) => {
    project_techn.getById(request.con, request.params.id, (error, result) => {
      if (error) {
        response.status(400).json({
          message: error.message,
        });
        return;
      }
      return response.status(200).send(result);
    });
  },

  getProjectByTech: (request, response) => {
    project_techn.getByIdTech(
      request.con,
      request.params.id,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        return response.status(200).send(result);
      }
    );
  },

  getTechByProject: (request, response) => {
    project_techn.getByIdProject(
      request.con,
      request.params.id,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        return response.status(200).send(result);
      }
    );
  },

  addProjectTech: (request, response) => {
    project_techn.create(request.con, request.body, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      response.status(200).send("ressource added successfully");
    });
  },

  updateProjectTech: (request, response) => {
    request.body.id = request.params.id;
    project_techn.update(request.con, request.body, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      response.status(200).send("ressource updated successfully");
    });
  },

  deleteProjectTech: (request, response) => {
    project_techn.delete(request.con, request.params.id, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      response.status(200).send("ressource deleted successfully");
    });
  },
};