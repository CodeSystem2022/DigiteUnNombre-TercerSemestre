// casi todo lo que manejamos son objetos en java script
// un objeto puede tener propiedades y metodos
let x = 10; // variable primitiva
console.log(x.length); // da undefined pq no tiene propiedades o metodos asociados 
                        // ya que es primitivo

// creamos un objeto
let persona = {
    nombre: "carlos",
    apellido: "gil",
    email: "carlos@email.com",
    edad: 34,
    // creamos una propiedad
    nombreCompleto: function(){ // metodo o funcion en JS
        return this.nombre+" "+this.apellido;
    }
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto())

// formas de crear un objeto
let persona2 = new Object(); // creamos un objeto de memoria
persona2.nombre = "juan";
persona2.direccion = "libertador";
persona2.telefono = "260670630";
// creado el objeto de memoria podemos asignar propiedades y metodos como arriba
console.log(persona2.telefono);

// como acceder a las propiedades?
console.log(persona["apellido"]) // accedemos como un arreglo
// for in
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

// agregar o eliminar propiedades de un objeto
persona.apellido = "betancud"; // cambiamos dinamicamente el valor
delete persona.apellido;
console.log(persona)

// distintas formas para imprimir un objeto
// numero 1 las mas facil
console.log(persona.nombre+" "+persona.apellido)

// numero 2
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// numero 3
let personaArray = Object.values(persona);
console.log(personaArray)
