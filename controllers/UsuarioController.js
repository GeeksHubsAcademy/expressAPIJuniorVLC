

const UsuarioController = {};


UsuarioController.getAll = async (req, res) => {
  
        try {

            let data = [{
                nombre : "Juan",
                edad: 26,
                hobbie : "futbol"
            },{
                nombre: "Javier",
                edad: 32,
                hobbie: "JavaScript"
            }];

            res.send(data);

        } catch (error) {

            res.send(error);

        }; 
};

UsuarioController.getEnemigos = async (req, res) => {

    let cuerpo = req.body;
    console.log(cuerpo);

    try {
        res.send(cuerpo.nombre);

    } catch (error) {

        res.send(error);

    }; 
};



module.exports = UsuarioController;