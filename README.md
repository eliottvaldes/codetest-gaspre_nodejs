# Repositorio que contiene los ejercicios de una prueba técnica para el peusto de Backend Mid JS developer

## Uso 
### Se require instalar las dependencias de nodejs para poder correr el proyecto. usa el siguiente comando:
``` npm install ```
```
### Para correr el proyecto usa el siguiente comando:
``` node app.js ```
```


## Ejercicios resueltos
### Ejercicio 1.2
#### Enunciado
Escribe un programa que tome como parámetro un número entero y regrese una lista (array) con
todos los factores primos del número pasado como argumento.
#### Solución
La solucion se encuentra en la ruta: /logicTest/primeFactors.js
y se puede ejecutar con el siguiente comando:
``` node logicTest/primeFactors.js ```

### Parte 2
#### Enunciado
Examen de Habilidades Técnicas
Realizar un Endpoint para obtener los sig puntos de tu estación y de los competidores cercanos
Método de solicitud: GET
Parámetro: Id de la estación
Output:
● Nombre
● Distancia
● Precio por producto
● Marca
● Diferencia de Precio de tu estación vs precio de tus competidores

#### Solución
El endpoint va a correr en el puerto 5000 (por defecto), y tiene los siguientes endpoints:
- /api/information/:id (GET): Obtiene la información de la estación con el id especificado y regresa la información de la estación y de sus competidores.

Ejemplo de uso:
``` http://localhost:5000/api/information/1 ```

