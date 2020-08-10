// se crea un objeto Bicicleta, para poder llamar este modulo, con los atributos id, color, modelo, ubicacion
var Bicicleta = function (id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
}
//Object.prototype.toString() : Devuelve la cadena de texto (string) que representa al objeto
//en caso que se quiera tener un texto que identifique el modulo bicicleta
Bicicleta.prototype.toString = function() {
  return 'id: ' + this.id + ' ¦ color: ' + this.color;
}
//crea una propiedad allBicis, el cual es un array para guardar las bicicletas creadas, provicional db
// un array es una agrupacion de datos del mismo tipo.
Bicicleta.allBicis = [];
Bicicleta.add = function(aBici) {
  Bicicleta.allBicis.push(aBici);
}
//se ingresan dos bicicletas
var a = new Bicicleta(1, 'rojo', 'Urbano', [11.0182637, -74.8565346]);
var b = new Bicicleta(2, 'Blanca', 'Urbano', [11.0223752, -74.8666837]);
//las Bicicletas creadas se agregan al array
Bicicleta.add(a);
Bicicleta.add(b);
//modulo necesario para poder exportar el objeto Bicicleta
module.exports = Bicicleta;
