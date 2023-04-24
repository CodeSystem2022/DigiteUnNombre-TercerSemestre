// hoisting podemos llamar la funcion en cualquier lado del codigo

miFuncion(3, 3)

function miFuncion(a, b){
    // cuerpo o bloque de la funcion
    // console.log("Sumamos: "+ (a + b));
    return a + b // quitamos el log paa usar return en ese caso la agrega implicitamente    
}

// llamamos la funcion 

miFuncion(5, 4)
let resultado = miFuncion(7, 7);
// si sacamos el return va a ser undefined, ya que le funcion no retorna nada a la variable
console.log(resultado);

// funciones del tipo expresion
let x = function(a, b){return a + b;} // necesita cierre con ;
resultado = x(5, 5); // al llamarla se pone variable y ()
console.log(resultado);

// funciones que se llaman a si mismas
// funciones self e invoking

(function(a, b){
    console.log ("Ejectuando la funcion: "+ (a + b));
})(9, 9); // no es reutilizable y se llama una sola vez

// una funcion es un tipo de dato
console.log(typeof miFuncion)

function miFuncionDos(a, b){
    console.log(arguments) //.length
}
miFuncionDos(5, 7, 5);

// toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto)

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(5, 5);
console.log(resultado);

// Función de tipo expresión
let sumar = function(a = 4, b = 8){
console.log(arguments[0]);
console.log(arguments[1]);
return a + b + arguments[2];
}
resultado = sumar(3, 2, 9);
console.log(resultado);

//Sumar todos los argumentos
let respuesta = sumarTodos(5, 4, 13, 10, 9)
console.log(respuesta)
function sumarTodos(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}
//Tipos primitivos
let k = 10;
function cambiarValor(a){
    a = 20
}

cambiarValor(k);
console.log(k);

//Paso por referencia
const persona ={
    nombre: 'Juan',
    apellido: 'Leen'
}

function cambiarValorObjeto(p1){
   p1.nombre = 'Pablo'
   p1.apellido = 'Garcia'
} 
cambiarValorObjeto(persona)
console.log(persona)
