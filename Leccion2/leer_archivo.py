
archivo = open('prueba.txt', 'r', encoding='utf8') # las letras son: r read, a append, x excepción, w write
# print(archivo.read())
# print(archivo.read(12))
# print(archivo.read(15)) # Continúa desde línea anterior
# print(archivo.readline())
# print(archivo.readline())

# vamos a iterar el archivo, cada una de la líneas
#  for linea in archivo:
    # print(linea)

# print(archivo.readlines()[1])  # accedemos al archivo como lista

# Anexamos información, copiamos otro
archivo2 = open('copia.txt', 'w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close() # Cerramos el primer archivo
archivo2.close()

print('Se ha terminado el proceso de leer y copiar archivos')




