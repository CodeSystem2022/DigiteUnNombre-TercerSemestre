
package test;

import domain.*;

public class TestClaseObject {
    public static void main(String[] args) {
        empleado empleado1 = new empleado("Martin", 5000);
        empleado empleado2 = new empleado("Martin", 5000);
        
        if(empleado1 == empleado2){
            System.out.println("Tienen la misma referencia en memoria");
        }
        else{
            System.out.println("Tienen distinta referencia en memoria");
        }
        
        if(empleado1.equals(empleado2)){
            System.out.println("Los objetos son iguales en contenido");
        }
        else{
            System.out.println("Los objetos son distintos en contenido");
        }
        
        if(empleado1.hashCode() == empleado2.hashCode()){
            System.out.print("El valor hashCode es igual");
        }
        else{
            System.out.print("El valor hashCode es diferente");
        }
    }
}