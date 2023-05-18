import psycopg2 as  bd # Esto es para poder conectarnos a Postgre

conexion = bd.connect(user= "postgres", password= "admin", host="127.0.0.1", port= "5432", database= "test_bd")
try:
   conexion.autocommit = False # esto directmente no deberia estar, inicia la transaccion
   cursor = conexion.cursor()
   sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
   valores = ("Maria", "Esparza", "mesparza@gmail.com")
   cursor.execute(sentencia, valores)

   sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
   valores = ("Juan", "Juarez", "jcjuarez@gmail.com", 1)
   conexion.commit()  #Hacemos el commit manualmente
   print("Termina la transaccion")
except Exception as e:
    conexion.rollback()
    print(f"Ocurrio un error, se hizo un rollback: {e}")
finally:
    conexion.close()