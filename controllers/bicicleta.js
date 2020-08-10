//importa el modulo de bicicleta
var Bicicleta = require('../../models/bicicleta');

//renderizar: es generar una imagen en 2D o 3D
//se hace un metodo, para renderizar una vista que contine una tabla con las bicicletas (allBicis)
exports.bicicleta_list = funtion(req, res) {
  res.render('bicicletas/index', { bicis: Bicicleta.allBicis});
}
