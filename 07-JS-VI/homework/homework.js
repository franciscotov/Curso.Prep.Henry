// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  cb();
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  // usamos la función reduce para sumar los números del array y pasamos el resultado a la función callback recibida
  //pd : lo pasado a la función reduce es una función de flecha
  cb(numeros.reduce((acc, i) => acc+i));
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //iteramos por los elementos de array usando forEach
  //sabiendo que cb es una función callback que es lo que necesita forEach la pasamos como parámetro
  array.forEach(cb);
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // usamos el método .map pasando nuestra función cb dada, esto nos devuelve un nuevo array 
  return array.map(cb);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
