// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  return x > y ? x:y;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if(idioma == "aleman") {
    return "Guten Tag!";
  } else if(idioma == "mandarin") {
    return "Ni Hao!";
  } else if(idioma == "ingles") {
    return "Hello!"
  }else {
    return "Hola!"
  }
}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    // si numero es igual a 10 o igual a 5
    if(numero === 10 || numero === 5){
      return true;
    }
    return false
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  // preguntamos si numero es mayor que 20 y menor que 50
  if(numero > 20 && numero < 50) {
    return true;
  }
  // si no se cumple lo anterior retornamos false
  return false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  // usando la pista tenemos que el metodo floor nos devuelve el numero redondeado al entero cercano mas bajo
  //por lo que si numero es un entero el retorno de floor va a ser igual a numero, para los demas casos numero no 
  //es un entero
  return Math.floor(numero) == numero ? true: false;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  //comprobamos que es divisible entre ambos que es el caso de mayor "importancia"
  //luego anidamos los statements separados y por ultimo el caso de que no se cumpla ninguna condición
  if(numero % 3 == 0 && numero % 5 == 0) {
    return "fizzbuzz";
  } else if(numero % 3 == 0) {
    return "fizz";
  } else if(numero % 5 == 0) {
    return "buzz";
  }
  return numero;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  //notamos que un número no puede ser divisible por un número que sea mayor a la mitad de ese número
  //salvo por el mismo, aprovechamos esto para hacer mas eficiente el bucle
  //corremos en blucle y para cada número preguntamos si en número es divisible por el valor de nuestra variable i
  // en cuyo caso no será primo y retornamos false, si pasa el bucle retornamos true ya que numero solo puede ser
  //divisible por él mismo y por 1
  //primero preguntamos si numero es 1 o 0 en cuyo caso retornamos falso
  if(numero == 1 || numero == 0) return false; 
  for(var i = 2; i < (numero/2 + 1); i++){
    if(numero % i == 0 && numero != i) {
      return false;
    }
  }
  return true;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
