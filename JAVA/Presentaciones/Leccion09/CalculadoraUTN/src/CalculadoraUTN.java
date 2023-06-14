import java.util.Scanner;
public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true) {
            System.out.println("**** Aplicación Calculadora ****");
            mostrarMenu();

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion, entrada);
                } // fin del if
                else if (operacion == 5) {
                    System.out.println("Hasta pronto");
                    break;
                } else {
                    System.out.println("Opción erronea: " + operacion);
                }
                //Imprimir salto de linea
                System.out.println();
            } catch (Exception e){ //Fin del try , comienzo del catch
                System.out.println("Ocurrió un error: "+e.getMessage());
            }
        }// Fin While

    }// Fin main
    private static void mostrarMenu(){
        //Mostramos el menú
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Multiplicación
                    4. División
                    5. Salir
                    """);
        System.out.print("Qué operación desea realizar: ");
    } // Fin mostrarMenu

    private static void ejecutarOperacion(float operacion, Scanner entrada){
        System.out.print("Digite el valor para el operando 1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando 2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;
        switch ((int) operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma = " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta = " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación = " + resultado);
            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("Resultado de la división = " + resultado);
            }
            default -> System.out.println("Opción incorrecta: " + operacion);
        } //Fin switch
    }//Fin método ejecutar operación
}//Fin clase
