
package test;


public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
       //Clases envolventes o Wrapper
       /*
       Clases envolventes de tipo primitivos
       int = la clase envolvente es Integer
       long = ---- es Long
       float = ----- es Float
       double = ---- es Double
       boolean = ---- es Boolean
       byte = ---- es Byte
       char = ---- es Character
       short = ---- es Short
       */
       
       int enteroPrim = 10; //Tipo primitivo
       System.out.println("enteroPrim = " + enteroPrim); 
       Integer entero = 10; // tipo object con la clase inter
       System.out.println("entero = " + entero.doubleValue()); //autoboxing
       
       int entero2 = entero; //unboxing
       System.out.println("entero2 = " + entero2);
    }
   }
