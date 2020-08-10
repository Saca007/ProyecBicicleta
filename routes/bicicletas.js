//se usa el modulo de rutas de exprees express.Router
var express = require ('express');
var router = express.Router();
var bicicletaController = require('../controllers/bicicleta');
// sirve para cuando la personas se dirijan a /bicicletas las dirija al index de bicicletas (al listado de las bicicletas)
router.get('/', bicicletaController.bicicleta_list);

module.exports = router;
