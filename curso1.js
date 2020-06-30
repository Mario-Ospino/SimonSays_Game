/*
//Manejos con string
var nombre = 'Mario' , apellido = 'Ospino'
var nombreenmayusculas= nombre.toUpperCase() //nombre en mayusculas
var apellidoenminusculas = apellido.toLowerCase()//nombre en minusculaa
var primeraletraapellido = apellido.charAt(0)// primera letra del apellido en la posicion 0
var cantidaddeletrasnombre = nombre.length // atributo para saber la cantidad de letras
var nombrecompleto = nombre + ' ' + apellido //concadenar string

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

//--------------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------------
/*

//objetos
//creamos los objetos
var sacha = {
  nombre: 'Sancha',//atributos del objeto
  apellido: 'grey',
  edad: 28

}
var dario = {
  nombre: 'Dario',
  apellido: 'Ospino',
  edad: 27
}

// manejo de objetos con funciones

function imprimirNombreEnMinuscula(persona){
  var nombre = persona.nombre //accedemos al atributo nombre el objeto que se envia
  //desestructurar objetos
  // var { nombre } = persona
  console.log(nombre.toLowerCase())
  //forma corta console.log(persona.nombre.toLowerCase())
}

//enviamos los objetos
imprimirNombreEnMinuscula(dario)
imprimirNombreEnMinuscula(sacha)

//accediendo directamente a sus atributos como parametros
function imprimirformacorta({nombre}){
  console.log(nombre.toUpperCase())
}
imprimirformacorta(dario)
imprimirformacorta({nombre:'pepito'})

//ejercicio
function informacioncompleta(persona){
var saludo = `hola ${persona.nombre} ${persona.apellido},\nme encanta saber que su edad es de ${persona.edad} es un placer saludarte y que tengas buen dia.`
  console.log(saludo)
}

informacioncompleta(dario)

//los objetos pasados por parametro se pasan por referencia

//modificar sacha

function cumpleaños(persona){
  persona.edad += 1 // se modifica el valor del objeto sacha directamente
}
// copiar a sacha
function cumpleañosviejo(persona){
  //retornamos la copia de un nuevo objeto con los atributos de sacha
  return{
    ...persona, //aqui se copian todos los atributos y si se quiere se pueden añair nuevos
    edad: persona.edad + 1 // se modifica edad
  }
}

var nuevoobjeto = cumpleañosviejo(sacha) //creamos el nuevo objeto a partir de otro.

*/
//--------------------------------------------------------------------------------------------------------------------
/*
var x=4 , y = '4'
var comparacion1 = x==y // los lleva a un mismo tipo de dato y compara
var comparacion2 = x===y // comparar si son el mismo valor y el mismo tipo de datos
//comparacion de objetos
var sacha ={
  nombre: 'sacha'
}
var otropersona = {
  nombre: 'sacha'
}
var comparacionobjetos = sacha==otropersona //da falso porque pregunta por la referencia, para que de true es otrapersona = Sancha
*/
//--------------------------------------------------------------------------------------------------------------------
/*
//condicionales Y Retorno en funciones

var mario = {
  nombre: 'Mario',
  apellido: 'Ospino',
  edad: 21,
  ingeniero: true,
  cocinero: false,
  dj: false,
  guitarrista: false,
  pintor: true
}
const MAYORIA_DE_EDAD = 25
function mayordeedad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es:`)
  //dos formas de hacerlo
  if(persona.ingeniero === true){
    console.log('\n Ingeniero');
  }
  if(persona.cocinero){
    console.log('\n cocinero');
  }else {
    console.log('\n aun no es cocinero');
  }
  if(persona.dj){
    console.log('\n dj');
  }else {
    console.log('\n aun no es dj');
  }
  if(persona.pintor){
    console.log('\n Pintor');
  }
//aqui usamos el retorno de otra funcion
  if(mayordeedad(persona)){
    console.log('Es mayor de edad');
  }else {
    console.log('Es menor de edad');
  }
}
imprimirProfesiones(mario)
*/
