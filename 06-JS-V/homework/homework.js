// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  // Creamos la funcion constructora
  function Usuario(opciones) {
    //definimos las propiedades con los nombres indicados y los valores dados por el objetos opciones
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }
  // Definimos el método saludar en el prototipo de nuestra función constructora
  Usuario.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  };
  // Retornamos la función construtora
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  // Definimos el metodo saludar en el prototipo de la función constructora dada
  Constructor.prototype.saludar = function() {
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  // Agregamos el método al porototipo String
  String.prototype.reverse = function() {
    // De la manera en que es llamado reverse, this seria asociado a al string por lo que este contiene el string
    // en si, luego podemos separarlo por letra en un array con el metodo .split, lo invertimos con el uso de .reverse del proto
    //type array y por último volver a unirlo en un string con el uso de .join
    // otra forma sería hacer un cilo for para recorrer todo el string y concatenar en una variable cada letra
    //desde la última a la primera
    return this.split('').reverse().join('');
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida
};
