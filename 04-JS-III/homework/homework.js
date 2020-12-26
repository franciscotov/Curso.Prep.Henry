// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  //leemos el primer elemento y lo devolvemos
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  //usamos la propiedad length para leer el ultimo dato y devolverlo
  return array[array.length-1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  //usamos la propiedad .length que nos devuelve un entero indicando la longitud del array
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // podemos leer los elementos de un array anidado en un bucle for, ya que los elementos de un array son mutables
  // podemos modificar a gusto, en este cado sumar una unidad
  for(var i=0; i < array.length; i++) {
    array[i] += 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // usamos el metodo .push el cual empuja un elemento al final del arreglo
  array.push(elemento);
  // retornamos el array modificado
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  //usamos la pista, el meodo .unshift agrega un elemento al array en la primera posición
  array.unshift(elemento);
  //retornamos el array modificado
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // iniciamos una variable vacia la cual contendra la suma de los strings en el arreglo
  var str = '';
  //iteramos en arreglo palabras
  for(var i=0; i<palabras.length; i++) {
    //si es la ultima palabras agregamos esta a str sin espacio
    if(i == palabras.length-1) str += palabras[i];
    //agregamos la palabra corespondiente mas espacio
    else str += palabras[i] + ' ';
  }
  //retornamos la concatenacion de palabras
  return str;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  //iteramos los elementos del array
  for(var i=0; i<array.length; i++) {
    //si elemento es igual al valor correspondiente de array retornamos true
    if(elemento === array[i]) return true;
  }
  //si pasa el ciclo for sabemos que elemento no se encontró, retornamos false
  return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // creamos una variable que contendrá la suma de los intems
  var sum = 0;
  //iteramos el arreglo
  for(var i=0; i<numeros.length; i++) {
    //sumamos el item correspondiente a la variable sum
    sum += numeros[i];
  }
  //retornamos la suma
  return sum;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  //usamos la funcion agregarNumeros el cual nos devuelve la suma de los valores del array
  //lo dividimos entre la longitud del array lo cual nos da el promedio y lo retornamos
  return agregarNumeros(resultadosTest)/resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  //variable para contener el valor mas alto
  var max = 0;
  //iteramos el arreglo
  for(var i=0; i<numeros.length; i++) {
    // si el valor correspondiente del arreglo numeros es mayor que max, actualizamos max a ese valor,
    //así nos aseguramos de tener el el valor mas alto
    if(max < numeros[i]) max = numeros[i];
  }
  //retornamos max
  return max;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  //si no hay argumentos retornamos 0
  if(arguments.length == 0) return 0;
  //iniciamor una variable que contendrá la multiplicacion
  var mult = 1;
  //iteramos el arreglo
  for(var i=0; i<numeros.length; i++) {
    //multiplicamos cada uno de los valores en el arreglo argumentos equivalente a
    // mult = mult*arguments[i]
    mult *= arguments[i];
  }
  //retornamos el resultado
  return mult;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
