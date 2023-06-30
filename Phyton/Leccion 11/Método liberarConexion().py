 @classmethod
 def liberarConenxion(cls, conexion):
     cls.obtenerPool().putconn(conexion)
     log.debug(f´Regresamos la conexión del pool: {conexion}´)
     