
package clase02;


public class TestArgumentosVariables {
    public static void main(String[] args) {
        // llamamos al metodo
        imprimirNumeros(3, 4, 5 );
        imprimirNumeros(1, 2);
        variosParametros("juan","perez", 7, 8, 9);
    }
    //el argumento variable siempre va al final
    private static void variosParametros(String nombre, String apellido, int ...numeros){
        System.out.println("nombre "+nombre);
        imprimirNumeros(numeros);
        System.out.println("apellido "+apellido);
    }
    
    private static void imprimirNumeros(int ...numeros){ // arreglo tipo entero
        // la diferencia con arreglos es que no necesitamos saber la cantidad de elementos a pasar
        // a este metodo
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("elementos: "+numeros[i]);
        }
    }
}
