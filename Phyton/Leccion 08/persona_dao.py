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
