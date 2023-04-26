
package clase02.enumeraciones;

public enum Continentes {
    AFRICA(53, "1.2 billones"),
    EUROPA(46, "1.1 billones"),
    ASIA(44, "2.2 billones"),
    AMERICA(34, "3.3 billones"),
    OCEANIA(14, "4.4 billones");
    
    private final int paises;
    private String habitantes;
    
    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }
    // creamos el get para sacar el encapsulado
    public int getPaises(){
      return this.paises;
    }
    public String getHabitantes(){
        return this.habitantes;
    }
}
