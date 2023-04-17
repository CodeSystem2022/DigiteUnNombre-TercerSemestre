// while
let contador = 0;
while(contador <3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo While")

// do while
let conteo = 0;
do{
    console.log(conteo);
    conteo ++;
}while(conteo <3);
console.log("Fin del ciclo DO While")

// for
for(let contando = 0; contando <3; contando++){
    console.log(contando);
}
console.log("Fin del ciclo for");

// Palabra reservada break
for(let contando = 0; contando <=10; contando++){
    if(contando %2 == 0){
        console.log(contando) //muestra números pares
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer número par");


// Palabra continue
for(let contando = 0; contando <=10; contando++){
    if(contando %2 !== 0){
        continue; //va a la siguiente iteración
    }
    console.log(contando)
}
console.log("Termina el ciclo");


// Etiquetas o Labels
inicio:
for(let contando = 0; contando <=10; contando++){
    if(contando %2 !== 0){
        break inicio; //va a la siguiente iteración
    }
    console.log(contando)
}
console.log("Termina el ciclo");
