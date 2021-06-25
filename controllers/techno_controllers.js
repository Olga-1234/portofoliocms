const techno = require("./../models/techno");

module.exports = {
  getTechnos: (request, response) => {
    techno.get(request.con, (error, result) => {
      if (error) {
        response.status(400).json({
          message: error.message,
        });
        return;
      }
      return response.status(200).send(result);
    });
  },

  getTechno: (request, response) => {
    techno.getById(request.con, request.params.id, (error, result) => {
      if (error) {
        response.status(400).json({
          message: error.message,
        });
        return;
      }
      return response.status(200).send(result);
    });
  },

  getIdTechno: (request, response) => {
    techno.getIdByName(request.con, request.body, (error, result) => {
      if (error) {
        response.status(400).json({
          message: error.message,
        });
        return;
      }
      return response.status(200).send(result);
    });
  },

  addTechno: (request, response) => {
    techno.create(request.con, request.body, (error) => {
      if (error) {
        response.status(400).json({
          message: error.message,
        });
        return;
      }
      response.status(200).send("ressource added successfully");
    });
  },

  updateTechno: (request, response) => {
    request.body.id = request.params.id;
    techno.update(request.con, request.body, (error) => {
      if (error) {
        response.status(400).json({
          message: error.message,
        });
        return;
      }
      response.status(200).send("ressource updated successfully");
    });
  },

  deleteTechno: (request, response) => {
    techno.delete(request.con, request.params.id, (error) => {
      if (error) {
        response.status(400).json({
          message: error.message,
        });
        return;
      }
      response.status(200).send("ressource deleted successfully");
    });
  },
};