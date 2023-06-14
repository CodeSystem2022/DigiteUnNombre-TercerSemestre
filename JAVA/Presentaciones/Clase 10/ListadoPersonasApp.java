import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
//Definimos la lista fuera del ciclo while

        List<Persona> personas = new ArrayList<>();

        //Empezamos con el menu

        var salir = false;
        while (!salir) {
            mostrarMenu();

            try {
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e) {
                System.out.println("Ocurrio un error: " + e.getMessage());
            }
            System.out.println();

        }//Fin del ciclo while

    }//Fin metodo main

    private static void mostrarMenu(){
        //mostramos las opciones
        System.out.println("""
                ***** Listado de Personas ****
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.print("Digite una de las opciones: ");


    } //fin metodo mostrarmenu

    private static boolean ejecutarOperacion(Scanner entrada,List<Persona> personas){
var opcion = Integer.parseInt(entrada.nextLine());
var salir = false;
//Revisamos la pcion gitada a traves de un switch

        switch (opcion){
            case 1 ->{ //agregar una persoa a la lista
                System.out.print("Digite el nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Digite el telefono: ");
                var tel= entrada.nextLine()
                System.out.print("Digite el correo: ");
                var email = entrada.nextLine()
// creamos el objeto personas

 var persona = new Persona (nombre, tel, email);
            personas.add(Persona);
                System.out.println("La lista tiene: "+personas.size()+"Elementos");


            }// fin caso 1
            case 2 -> {// Listar a las personas
                System.out.println("Listado de personas: ");

                //Mejoras con lambda y el metodo de referencia

                //personas.forEach(persona -> System.out.println(persona));

                personas.forEach(System.out::println); //metodo de referencia
                }// Fin caso 2
            case ->3 {//Salir del ciclo

                System.out.println("Hasta pronto...: ");
                salir = true
            }//Fin caso 3
            default -> System.out.println("Opcion incorrecta: "+opcion);

        }//Fin del switch
        return salir;

    }//Fin del metodo ejecutarOperacion
}//Fin de la clase Listapersona



