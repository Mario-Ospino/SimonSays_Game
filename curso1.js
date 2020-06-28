
//Manejos con string
var nombre = 'Mario' , apellido = 'Ospino'
var nombreenmayusculas= nombre.toUpperCase() //nombre en mayusculas
var apellidoenminusculas = apellido.toLowerCase()//nombre en minusculaa
var primeraletraapellido = apellido.charAt(0)// primera letra del apellido en la posicion 0
var cantidaddeletrasnombre = nombre.length // atributo para saber la cantidad de letras
var nombrecompleto = nombre + ' ' + apellido //concadenar string
/*
//interpolacion de texto
var nombrecompletointerpolado =  `${nombre} ${apellido.toUpperCase()}`//dentro de las llaves se puede poner codigo js

var str = nombre.substr(1,3) // tomar desde la posicion 1 y cuantos espacios depues de ahi tomar (3 espacios)

//Reto - mostrar la ultima letra del nombre

var ultimaletranombre = nombre.charAt(nombre.length - 1)
console.log('Tu nombre es '+ nombre + ' y la ultima letra es "'+ ultimaletranombre+'".')


// variables : numeros

var edad = 27
var edadnueva = edad
edadnueva += 2 // incremento lo que tenga + 2
//edadnueva -= 2 // decremento lo que tenga - 2
var peso = 75, carne = 1
peso += carne


var preciodevino = 200.3
//var total = preciodevino * 3 // los decimales no se guardan con precision
// var total = preciodevino * 100 * 3 / 100 ahora si da el resultado exacto
var total = Math.round(preciodevino * 100 * 3) / 100 // para ser mas preciso si no se sabe la cantidad de decimales
var totalstr = total.toFixed(3) // mostrar 3 decimales despues de la ,
var total2 = parseFloat(totalstr)//pasar de un string a un float

var pizza = 8
var personas = 4
var cantidadporcionespersonas = pizza / personas


//funciones

//modificanco de forma global a la variable
function imprimirNombreEnMayuscula(){
  nombre =nombre.toUpperCase()
  console.log(nombre)
}
imprimirNombreEnMayuscula()


//modificanco de forma local sin afectar la global
function imprimirNombreEnMinuscula(nombre){
  //window.nombre asi si queremos hacer referencia a la global
  nombre =nombre.toLowerCase()
  console.log(nombre)
}
imprimirNombreEnMinuscula(nombre)
*/
