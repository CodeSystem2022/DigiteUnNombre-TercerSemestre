from capa_datos_persona.Persona import Persona
from capa_datos_persona.conexion import Conexion

from logger_base import log


class PersonaDAO:
    """
    DAO SIGNIFICA DATA ACCESS OBJECTO
    CRUD SIGNIFIVA:
        create - insertar
        read   - seleccionar
        update - actualizar
        delete - eleiminar
    """
    _SELECCIONAR = "SELECT * FROM persona ORDER BY id_persona"
    _INSERTAR = "INSERT INTO persona(nombre,apellido,email)VALUES(%s. %s, %s)"
    _ACTUALIAR = "UPDATE persona SET nombre =%s,email=%s WHERE id_persona=%s"
    _ELIMINAR = "DELETE FROM persona WHERE id_persona=%s"

    # Definimos los métodos de clase
    @classmethod
    def seleccionar(cls):
        # with conexion.Conexion.obtenerConexion():
        with conexion.Conexion.obtenerCursor() as cursor:
            cursor.execute(cls._SELECCIONAR)
            registros = cursor.fetchall()
            personas = []
            for registro in registros:
                persona = Persona(registro[0], registro[1], registro[2], registro[3])
                personas.append(persona)
            return personas

    @classmethod
    def insertar(cls, persona):
        with conexion.Conexion.obtenerConexion():
            with conexion.Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email)
                cursor.execute(cls._INSERTAR, valores)
                log.debug(f'Persona Insertada: {persona}')
                return cursor.rowcount

    @classmethod
    def actualizar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTUALIZAR, valores)
                log.debug(f'Persona ACTUALIZADA: {persona}')
                return cursor.rowcount

    @classmethod
    def eliminar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.id_persona,)
                cursor.execute(cls._ELIMINAR, valores)
                log.debug(f'Persona eliminada: {persona}')
                return cursor.rowcount


if __name__ == '__main__':
    persona1 = Persona(id_persona=13)
    personas_eliminadas = PersonaDAO.eliminar(persona1)
    log.debug(f'Personas eliminadas: {personas_eliminadas}')

    #  persona1 = Persona(1, 'Juan', 'Penia', 'lpenia@mail.com')
    # personas_actualizadas = PersonaDAO.actualizar(persona1)
    # log.debug(f'Personas actualizadas: {personas_actualizadas}'))

    # persona1 = Persona(nombre='Omero', apellido='Simp', email='OmmeroS@mail.com')
    # personas_insertadas = PersonaDAO.insertar(persona1)
    # log.debug(f'Personas insertadas: {personas_insertadas}')

    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)
