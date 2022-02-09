const axios = require('axios');

const PersonajeController = {};



PersonajeController.getAll = async (req, res) => {
  
        try {

            let resultado = await axios.get("https://rickandmortyapi.com/api/character");

            res.send(resultado.data.results);

        } catch (error) {

            res.send(error);

        }; 
};


module.exports = PersonajeController;