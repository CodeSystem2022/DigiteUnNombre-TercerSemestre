from capa_datos_persona.Persona import Persona
from capa_datos_persona.conexion import Conexion
from capa_datos_persona.cursor_del_pool import CursorDelPool
from logger_base import logging


class PersonaDAO:
    ¨¨¨
    DAO significa: Data Access Object
    CRUD significa:
                  Create -> Insertar
                  Read -> Seleccionar
                  Update -> Actualizar
                  Delete -> Eliminar
    ¨¨¨
    _SELECCIONAR = ´SELECT * FROM persona ORDER BY id_persona´
    _INSERTAR = ´INSERT INTO  persona (nombre, apellido, email) VALUES (%s, %s, %s)´
    _ACTUALIZAR = ´UPDATE persona SET nombre=%s, apellido=%, email=%s WHERE id_persona´
    _ELIMINAR  = ´DELETE FROM persona WHERE id_persona%s´

   # Definimos los métodos de clase
   @classmethod
   def seleccionar(cls):
       whit CursorDelPool() as cursor:
            cursor.execute(cls._SELLECIONAR)
            registros = cursor.fetchall()
            persona = []  #creamos una lista
            for registro in registros:
                persona = Persona(registro[0]), registro[1], registro[2], registro[3])
                personas.append(persona)
            return personas

  @classmethod
  def insertar(cls, persona):
    with CursorDelPool() as cursor:
        valores = (persona.nombre, persona.apellido, persona.email)
        cursor.execute(cls._INSERTAR, valores)
        log.debug(f´Persona Insertar:{persona}´)
        return cursor.rowcount


  @classmethod
  def actualizar(cls, persona):
    with CursorDelPool() as cursor:
        valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
        cursor.execute(cls.ACTUALIZAR, valores)
        log.debug(f´Persona actualizada: {persona}´)
        return cursor.rowcount
  @classmethod
  def eliminar(cls, persona):
    with CursorDelPool() as cursor:
        valores = (persona.id_persona)
        cursor.execute(cls.ELIMINAR, valores)
        log.debug(f´Los objetos eliminados son: {persona}´)
        return cursor.rowcount


if __name__ == ´__main__´
    # Eliminar un registro
    personal = Persona(id_persona=18)
    personas_eliminadas = PersonaDAO.eliminar(personal)
    log.debug(f´Personas eliminadas: {personas eliminadas} ´)

    # Actualizar un registro
    persona1 = Persona(1, ´Juan´, ´Pena´, ´jpena@mail.com´)
    personas_actualizadas = PersonaDAO.actualizar(persona1)
    log.debug(f´Personas actualizadas: {personas_actualizadas}´)

    # Insertar un registro
    persona1 = Persona( nombre=´Mateo´, apellido=´Torres´, email=´tmateo@mail.com)
    persona_insertadas = PersonaDAO.insertar(persona1)
    log.debug(f´Personas insertadas: {personas_insertadas}´)

    # seleccionar objetos
    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)
