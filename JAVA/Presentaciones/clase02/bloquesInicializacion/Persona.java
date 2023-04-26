
package clase02.bloquesInicializacion;

public class Persona {
    // existes bloques estaticos y no estaticos
    // cargamos atributos
    private final int idPersona;
    private static int contadorPersonas;
    
    
    // creamos bloque estatico, solo atributos estatic
    static{
        System.out.println("Ejecucion bloque estatico");
        ++Persona.contadorPersonas;
    }
    
    // creamos bloque dinamico ( contexto dinamico)
    {
        System.out.println("Ejecucion bloque dinamico");
        this.idPersona = Persona.contadorPersonas++;
        // incrementamos el atributo contador personas
    }
    // en el contexto dinamico usamos el this y en el estatico no
    // algo importante es que el bloque se ejecuta antes de nuestro constructor
    // el dinamico se ejectua cada vez que tengamos un objeto
    // el estatico no
    
    // creamos un costructor de clase
    public Persona(){
        System.out.println("Ejecucion del cosntructor");
    }
    
    public int getidPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
}
