import psycopg2 as  bd # Esto es para poder conectarnos a Postgre

conexion = bd.connect(user= "postgres", password= "admin", host="127.0.0.1", port= "5432", database= "test_bd")
try:
   conexion.autocommit = False
   cursor = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
   valores = ("Maria", "Esparza", "mesparza@gmail.com")
   cursor.execute(sentencia, valores)
   print("Termina la transaccion")
except Exception as e:
    print(f"Ocurrio un error: {e}")
finally:
    conexion.close()
