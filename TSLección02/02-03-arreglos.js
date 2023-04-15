// let autos = new Array('Ferrari', 'Renault','BMW') esta sintaxis es vieja
const autos = ['Ferrari', 'Renault','BMW'];
console.log(autos);


// Recorremos los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i <autos.length; i++){
    console.log(i+' : '+autos[i]);
}

//Modificamos los elementos del arreglo
autos[1] = 'Volvo';
console.log(autos[1]);

//Agregamos nuevos valores al arreglo
autos.push('Audi');
console.log(autos)

//Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Fiat';
console.log(autos)


//Tercera forma de agregar elementos CUIDADO
autos[6] = 'Ford'
console.log(autos)


// Preguntar si es array (arreglo)
console.log(Array.isArray(autos)) //devuelve un booleano

console.log(autos instanceof Array) // Preguntamos si la variable es instancia de la clase Array -- bool
