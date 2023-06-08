
class Persona {
    //static contadorObjetosPersona = 0 // atributo estatico
static contadorPersonas = 0 // atributo estatico
static get MAX_OBJ() { 
    return 5 // maximo de objetos
}

email = 'Valor default email' //  no estatico

// De no tener un constructor, por defecto tenemos el constructor vacio
constructor(nombre, apellido) {
    this._nombre = nombre
    this._apellido = apellido
      //Persona.contadorObjetosPersona += 1
      //console.log(`Se incrementa el contador: ${Persona.contadorObjetosPersona}`)
    if(Persona.contadorPersonas < Persona.MAX_OBJ) {
        this.idPersona =  ++Persona.contadorPersonas 
    } else {
        console.log('Se ha superado el maximo de objetos permitidos')
    }
}

// Getter obtiene   y Setter modifica 
get nombre() {
    return this._nombre
}
get apellido() {
    return this._apellido
}
set nombre(nombre) {
    this._nombre = nombre
}
set apellido(apellido) {
    this._apellido = apellido
}

// Heredar método
nombreCompleto() {
    return this.idPersona+ ', '+this._nombre + ', ' + this._apellido
}

// toString lo hereda de clase Object
toString() {
    return this.nombreCompleto()
}

static saludar() {
    console.log('Saludo desde el método static')
}

static saludar2(persona) {
    console.log(`${persona.nombre} ${persona.apellido}`)
}
}

//* CLASE HIJA/O: Empleado */
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
    super(nombre, apellido)
    this._departamento = departamento
    }

get departamento() {
    return this._departamento
    }

set departamento(departamento) {
    this._departamento = departamento
    }


nombreCompleto() {
    // Se aplica el polimorfismo
    // El metodo que se ejecuta depende si es una referencia de la clase padre o hija
    return super.nombreCompleto() + ', departamento: ' + this._departamento
    }
}

// Instancio objetos de mi clase Persona
let persona1 = new Persona('jorge', 'marcos')
let persona2 = new Persona('Marti', 'de armas')

// Con el setter modifico los nombres
persona1.nombre = 'juan carlos'
persona2.nombre = 'carolina Laura'

// Con el setter modifico los apellidos
persona1.apellido = 'campderros'
persona2.apellido = 'miranda'

// Instancio un objeto de la clase empelado
let empleado1 = new Empleado('Maríajulieta', 'lopez', 'ventas')
console.log(empleado1);
console.log(empleado1.nombreCompleto());

  // Palabra static con métodos: Parte 1 y 2 /
   
// no se puede usar desde el objeto
// No puedo hacer: persona1.saludar()

Persona.saludar(); 
Persona.saludar2(persona1); // pasamos persona1 el objeto

Empleado.saludar(); 
Empleado.saludar2(empleado1);  // solo se observa en consola 
// solo funciona a travez de la clase y no del objeto

  //* Atributos estáticos */

// console.log(persona1.contadorObjetosPersona) 
// se  accede por referencia de clase
console.log(Persona.contadorPersonas); 
console.log(Empleado.contadorPersonas);  

  // Atributos estáticos vs No estáticos /
console.log(persona1.email);
console.log(empleado1.email);
//Se puede acceder de la clase??
// no se puede console.log(Persona.email)
   
  console.log(persona1.toString()); 
  console.log(persona2.toString()); 
  console.log(empleado1.toString()); 
  console.log(Persona.contadorPersonas) 

const persona3 = new Persona('Carla', 'Pertosi')
  console.log(persona3.toString()); // 
  console.log(Persona.contadorPersonas); // 4

  //* Creación de constantes estáticas */
// Se crea un metodo estatico 
console.log(Persona.MAX_OBJ) 
// No puedo modificar ni alterar: Persona.MAX_OBJ = 10 no cambia datos
const persona4 = new Persona('Franco', 'Diaz')
  console.log(persona4.toString())