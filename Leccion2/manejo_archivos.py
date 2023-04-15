# Declaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding='utf8')  # W = write
    archivo.write('Programamos con diferentes tipos de archivos, ahora en .txt. \n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('Como por ejemplo: acción, ejecución y producción\n')
    archivo.write('Las letras son: \nr read leer \na append anexa \nx excepción crea un archivo \nw write escribe')
    archivo.write('\nt es para texto text \nb para archivos binarios \nw+ lee y escribe \nr+ lee y escribe')
    archivo.write('\nAsistencia realizada')
    archivo.write('\nCon esto terminamos')
except Exception as e:
    print(e)

finally:
    archivo.close()
# archivo.write('Todo quedó perfecto') error después de finally


