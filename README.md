# test
Este repositorio consta de dos directorios, backend y frontend, llamados `api` y `frontend` respectivamente.

## Instalación
1. Ubica este repositorio donde lo desees instalar.
2. Ingresa al directorio `./api` y ejecuta `npm install`.
3. Ingresa al directorio `./frontend` y ejecuta `npm install`.

## Configuración de entorno
### Backend
Dentro del directorio `./api` encontrarás un archivo `.env` con los siguientes parámetros:

```
PORT=3000
```
- La variable `PORT` corresponde al puerto donde se va estar ejecutando el servidor, si no se agrega, este tomará por defecto el valor de `3001`.


### Frontend
Dentro del directorio `./frontend` encontrarás un archivo `.env` con los siguientes parámetros:

```
REACT_APP_URL_API=http://localhost:3001
PORT=4000
```
- La variable `REACT_APP_URL_API` corresponde a la URL donde se está ejecutando el servidor. Si no se agrega, este tomará el valor por defecto de `http://localhost:3001`.

- La variable `PORT` corresponde al puerto donde se va estar ejecutando el cliente, si no se agrega, este tomará por defecto el valor de `3000`.

## Despliegue
De forma paralela ejecutar `npm start` en el directorio `./api` y en el directorio `./frontend`. Siendo más específico, abre dos terminales, ubícate en cada uno de estos directorios y ejecuta el comando.

## A tener en cuenta
Ya se encuentran todos los archivos necesarios para la correcta ejecución, incluidos `valores.txt` que contiene la información del primer punto y `people.json` que es donde se almacena la información del API (segundo punto).