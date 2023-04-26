
package clase02.enumeraciones;

public class testEnumeraciones {
    public static void main(String[] args) {
    //    System.out.println("Dia 1: "+dias.LUNES); // no es una clase sino una enumeracion
    //     indicarDiaSemana(dias.DOMINGO);                                         // son constantes                                         
    // las enumeraciones se tratan como cadenas no se debe usar comillas
    // y se accede a travez del operador de punto
        System.out.println("Continente No. 1: "+Continentes.AMERICA);
        System.out.println("No. de paises en el 1ro. continenes: "+Continentes.AFRICA.getPaises());
        System.out.println("No. de habitantes en el 1ro. continenes: "+Continentes.AFRICA.getHabitantes());
        
        System.out.println("Continente No. 2: "+Continentes.AMERICA);
        System.out.println("No. de paises en el 2do. continenes: "+Continentes.EUROPA.getPaises());
        System.out.println("No. de habitantes en el 2do. continenes: "+Continentes.EUROPA.getHabitantes());
        
        System.out.println("Continente No. 3: "+Continentes.AMERICA);
        System.out.println("No. de paises en el 3ro. continenes: "+Continentes.ASIA.getPaises());
        System.out.println("No. de habitantes en el 3ro. continenes: "+Continentes.ASIA.getHabitantes());
        
        System.out.println("Continente No. 4: "+Continentes.AMERICA);
        System.out.println("No. de paises en el 4To. continenes: "+Continentes.AMERICA.getPaises());
        System.out.println("No. de habitantes en el 4To. continenes: "+Continentes.AMERICA.getHabitantes());
    
        System.out.println("Continente No. 5: "+Continentes.AMERICA);
        System.out.println("No. de paises en el 5To. continenes: "+Continentes.OCEANIA.getPaises());
        System.out.println("No. de habitantes en el 5To. continenes: "+Continentes.OCEANIA.getHabitantes());
    
    
    
    }
    
    private static void indicarDiaSemana(dias dias){
        switch(dias){
            case LUNES:
                System.out.println("primer dia");
                break;
            case MARTES:
                System.out.println("segundo dia");
                break;
            case MIERCOLES:
                System.out.println("tercer dia");
                break;
            case JUEVES:
                System.out.println("cuarto dia");
                break;
            case VIERNES:
                System.out.println("quinto dia");
                break;
            case SABADO:
                System.out.println("sexto dia");
                break;
            case DOMINGO:
                System.out.println("primer SEPTIMO");
                break;
            default:
                System.out.println("Dia no encontrado");
            }
        
                
               
    }
    
    
}
