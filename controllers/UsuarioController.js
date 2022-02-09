

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

UsuarioController.userLogin = async (req, res) => {

    let data = req.body;

    if((data.nombre == "Roberto") && (data.password == "hell")){
        res.send("Login correcto");
    } else {
        res.send("Login incorrecto");
    }
};


module.exports = UsuarioController;