from logger_base import log
from conexion import Conexion


class CursorDelPool:
    def __int__(self):
        self._conexion = None
        self._cursor = None

    def __enter__(self):
       log.deburg(´Ínicio del método with y __enter__´)
       self._conexion = Conexion.obtenerConexion()
       self._cursor = self._conexion.cursor()
       return self._cursor