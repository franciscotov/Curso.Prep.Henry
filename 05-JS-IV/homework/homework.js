// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  //creamos el objeto con la propiedad nombre
  var obj = {nombre};
  //agregamos la propiedad edad y asignamos el valor 'edad'
  obj.edad = edad;
  //agregamos el método retornando el strig correspondiente
  obj.meow = function() { return "Meow!"; };
  //retornamos el objeto
  return obj;
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  //agregamos la propiedad usando el strign arumento 'property'
  objeto[property] = null;
  //retornamos el objeto
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  // hacemos uso de la notacion de corchetes para leer el metodo e invocarlo
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  // leemos la propiedad numeroMisterioso y lo multiplicamos por 5, develvemos el resultado
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, propiedad) {
  // Elimina la propiedad "propiedad" de "objeto"
  // Devuelve el objeto
  // Tu código:
  // Usamos la palabr reservada delete para eliminar la propiedad
  delete objeto[propiedad];
  // Devolvemos el objeto
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  // Creamos el objeto y usamos la forma comprimida para establecer las propiedades
  var newObj = {nombre, email, password};
  // Retornamos el objeto
  return newObj;

}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  // Consultamos la propiedad email en usuario y preguntamos si es distinta de null devolviendo true para ese caso
  // y false si lo es, retornamos el booleano correspondiente
  return usuario.email ? true : false;
}


function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  // consultamos via notacion de corchetes, si existe la propiedad con el nombre del valor de la variable 'propiedad'
  return objeto[propiedad] ? true: false;
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  // obtenemos el valor de la propiedad password en usuario y lo comparamos con el valor de la variable 'password'
  return usuario.password === password ? true : false;
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  // Actualizamos el valor de la propiedad password en en objeto usuario con el valor de nuevaPassword
  usuario.password = nuevaPassword;
  // Retornamos el objeto 
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  // Usamos el metodo .push para agregar el valor 'nuevoAmigo' en el array usuario.amigos
  usuario.amigos.push(nuevoAmigo);
  // Retornamos el objeto
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  // Iteramos por cada valor el arreglo  usuarios
  for(var i=0; i < usuarios.length; i++) {
    //para cada objeto usuario dado por ususarios[i] establecemos la propiedad esPremium en true
    usuarios[i].esPremium = true;
  }
  // Retornamos el arreglo
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  // Creamos una variable sum
  //var usuario  = {posts : [{likes = 1},{},{},{}]}
  var sum = 0;
  //iteramos los items de usuario.posts
  for(item in usuario.posts) {
    sum += usuario.posts[item]['likes']; //sumamos la cantidad de likes para el post correspondiente
  }
  return sum;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") 
  //y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function() {
    return this.precio - (this.precio * this.porcentajeDeDescuento);
  }
  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
