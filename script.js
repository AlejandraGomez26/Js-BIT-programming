// funcion en JS
// function nombre de la funcion (parametros){}

// funciones en variable

// Function X (){

// }

// let x= () => {

// }
// const x= () => {

// }
// x()
// llamar una funcion
// nombre de la funcion()

// function suma(num1, num2){
//     console.log(num1 + num2)
// }

// suma(2,3)

// Dado un numero cualquiera el estudiante debe
// construir un algoritmo
// que le imprima el siguiente numero primo a ese número

// Restricciones

// Deben el usuario debe escribir el numero por consola
// o por prompt y este debe responderle con el numero
// primo sisguiente a ese numero

// si el numero ingresado por el usuario no es un numero primo
// este debe indicarle al usuario que el numero no es primo

// ESTRICTAMENTE PROHIBIDO EL USO DE CHA GPT - 0 AUTOMATICO

let n = parseInt(prompt("Ingrese un numero"));
let solo =0;


if (primo(n)){
    console.log( n + " es primo")
    siguiente_n(n)
}
else {
    console.log(n+ " no es primo")
    siguiente_n(n)
}


function primo (numero) {
    for( let i = 2; i< numero; i ++){
       if (numero % i === 0){
          return false;
       }
    }
    return numero !== 1;
 }
 function siguiente_n (numero_dado){
solo = numero_dado
solo++
while (primo(solo) == false){
    solo++
}
console.log ("El numero primo siguiente es " + solo)
 }