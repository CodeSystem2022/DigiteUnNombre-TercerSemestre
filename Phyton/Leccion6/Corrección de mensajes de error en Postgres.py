import psycopg2 # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user= "postgres", password= "admin", host="127.0.0.1", port= "5432", database= "test_bd")
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "SELECT * FROM persona WHERE id_person = %s"_# Placeholder
            id_persona = input("Digite un numero para el id_persona: ")
            cursor.execute(sentencia, (id_persona,))_# De est manera ejecutamos la sentencia
            registros = cursor.fetchone()_# Recuperamos todos los registros que seran una lista
            print(registros)
except Exception as e:
    print(f"Ocurrio un error: {e}")
finally:
    conexion.close()

# https://www.psycopg.org/docs/usage.html


