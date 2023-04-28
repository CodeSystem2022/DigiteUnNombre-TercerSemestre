
package paquete1;


class Clase2 extends Clase1{
    String atributoDefault = "Valor del atributo dedfault";
    
    //Clase2(){
    //    System.out.println("Constructor Default");
    //}
    
    public Clase2(){
       super();
       this.atributoDefault = "Modificacionh del atributo default";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault();
    }
    
    void metodoDefault(){
        System.out.println("Metodo Default");
    }
}
