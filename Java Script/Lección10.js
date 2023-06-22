class Producto{
    static contadorProductos = 0;
constructor (nombre, precio){
    this._idProducto =++ Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;

}
get _idProducto(){
    return this._idProducto;

}
get nombre(){
    return this._nombre;

}
set nombre (nombre){

    this._nombre = nombre;
}

get precio(){
    return this._precio;

}
 
set precio(precio){
    this._precio = precio;
}

toString (){// Template Literales: Nos permite insertar codigo dinamicamente
    return 'idProducto : ${this.idProducto}, nombre: ${this._nombre},precio: $${rhis._precio}';


}
}// fin de la clase producto

class Orden {
    static contadorOrdenes = 0;
    static getMAX_PRODUCTOS (){

        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = ++[];
        this._contadorProductosAgregados = 0;

    }
    ger idOrden(){
retunr this._idOrden;
    }
    agregarproducto (Producto){
        if(this._productos.length < Orden.getMAX_PRODUCTOS()){
            this._productos.push(producto); //tenemos 2 tipos de sintaxis :1

            //this._productos [this._contadorProductosAgregados++] = producto;// segunda sintaxis
        }
        else {
            console.log('Nose pueden agregar mas productos');
        }
    }// fin metodo agregar productos

    calcularTotal(){
        let totalVenta = 0;
for (let producto of this._productos){
    totalVenta += producto.precio;
}//fin ciclo for
return totalVenta;
    }//fin del metodo calcular total

    mostrarOrden (){
        let productoOrden = ' ';
        for(let producto of this._productos);{

        
        productoOrden += '\n {' producto.toString()+' }';
        }// fin ciclo for
        console.log('orden:${this._idOrden}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}')

        }//fin metodo mostrar orden

}// fin clase orden


Let Producto1 = new Producto('Pantalon',200);
Let producto2 = new Producto('camisa',150);
Let Producto3 = new producto ('cinturon',50);

Let Orden1= new Orden();
Let Orden2 = new Orden();
Orden1.agregarproducto(Producto1);
Orden1.agregarproducto(producto2);
Orden1.agregarproducto(producto3);
Orden2.agregarproducto(Producto1);
Orden2.agregarproducto(producto2);
Orden2.agregarproducto(producto3);
Orden1.mostrarOrden();
Orden2.mostrarOrden();