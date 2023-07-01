package UTN;

import UTN.conexion.Conexion;

public class Main {
    public static void main(String[] args) {
        var conexion = Conexion.getConnection();
        if (Conexion != null)
            System.out.println(¨Conexión exitosa: ¨ +conexion);
        else
            System.out.println(¨Error al conectarse¨);
    } //Fin main
} // Fin clase