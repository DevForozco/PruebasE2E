# PruebasE2E
Artefactos de pruenas E2E para funcionalidades de Ghost

## Integrantes del equipo
| Integrante          | Correo              |
| ------------------- | ------------------- |
| Ricardo Vivas       | j.vivast@uniandes.edu.co |
| Fabián Orozco       | f.orozcob@uniandes.edu.co |
| Nicolás Rey         | n.reyd@uniandes.edu.co |

## Versiones necesarias
| Ghost          | Descripción              |
| ------------------- | ------------------- |
| V3.41.1       |  Usado para para probar y generar evidencias en carpeta /ref-3.x  |
| V5.1.1       |  Usado para para probar y generar evidencias en carpeta /test-5.x  |__

## Estandares de nombramiento
Las imagenes generadas por el Resemble.js tendran la siguiente estructura
- num-funcionalidad-accion-version.png

**Donde**

> num: numero del pantallazo dentro de la funcionalidad <br>
> funconalidad: page | post | tag | staf <br>
> accion: crear | eliminar | editar | listar <br>
> version: V1 | V2 -> Corresponden a las versiones ghost 3.x o 5.x <br>

- En caso de ser V1 los screenshots se almacenaran en la ruta screenshots/ref-3.X
- En caso de ser V2 los screenshots se almacenaran en la ruta screenshots/test-5.x
- La libraria tomara los screenshots V1 y V2 para compararlos y asi generar una tercera imagen en la carpeta screenshots/diff

**Ejemplo**
> 1-post-create-v1.png <br>
> 1-post-create-v2.png <br>
> 1-post-create-diff.png <br>
 
 ## Generación del reporte
Para el ejercicio de realizar las pruebas de regresión visual VRT se han configurado con [Resemble.js](https://github.com/rsmbl/Resemble.js/blob/master/README.md)
- Una vez abieta la solución vamos a ejecutar el comando para instalar las diferentes dependencias `npm i`
- Una vez instaladas las dependencias desde la carpeta raiz ejecutaremos el siguiente comando `node resemblejs/index.js`
- Este comando se encargara de generar el reporte ejecutando los siguientes pasos

```sh
[X] Data prepared
[X] Compared images
[X] Report generated
```

Donde, como resultado obtendremos un [reporte html ](https://github.com/DevForozco/PruebasE2E/blob/main/comparativeReport/screenshots/reporteRegresionVisualGHOST.html)

En la siguiente tabla, se representa un resultado de ejemplo, que representa una de las ejecuciones de la regresipon visual, donde se evidencia las diferencias que existen entre las imagenes a comprar

|      (index)      | isSameDimensions |   dimensionDifference   | rawMisMatchPercentage | misMatchPercentage | diffBounds | analysisTime |
|-------------------|------------------|-------------------------|-----------------------|--------------------|------------|--------------|
| 1-change-language |       true       | { width: 0, height: 0 } |   3.777142396907217   |       '3.78'       |  [Object]  |     158      |
|   1-create-post   |       true       | { width: 0, height: 0 } |  3.6142157348665083   |       '3.61'       |  [Object]  |     259      |
|   6-create-tag    |       true       | { width: 0, height: 0 } |   2.58752147766323    |       '2.59'       |  [Object]  |     162      |
|   7-create-post   |       true       | { width: 0, height: 0 } |   3.923473433782712   |       '3.92'       |  [Object]  |     201      |
|   7-create-tag    |       true       | { width: 0, height: 0 } |  2.3205541237113403   |       '2.32'       |  [Object]  |     154      |

___

# Configuraciones necesarias para ejecutar las pruebas con Kraken

* Tener instalada la versión 12.22.1 de Node js para ejecutar las pruebas de **features/kraken-features-3.x** o tener la versión de node 16.13.0 o superior para ejecutar las pruebas de **features/kraken-features-5.x**
* Ejecutar el comando **npm install** en la raiz del proyecto para descargar las dependencias necesarias
* En el archivo **main.feature** es necesario pegar el código del escenario que se desea ejecutar, cada uno de estos escenarios están en la carpeta **features/kraken-features-3.x**

* Para ejecutar las pruebas con kraken, es necesario ajustar el puerto por el cual está corriendo Ghost en cada una de las urls, el usuario y la contraseña del usuario creado para iniciar sesión. Esto debe realizarse en el archivo **properties.json** así como se evidencia a continuación.

![image](https://github.com/DevForozco/PruebasE2E/assets/124003160/7eeb0d93-275d-4deb-84a8-9bdbd2890987)

* Luego de realizar la configuración mencionada anteriormente, se debe ejecutar el siguiente comando para correr la prueba **npx kraken-node run**

# Descripción de la configuración de los data pool para los escenarios de pruebas

* (i) pool de datos a-priori: Para esta estrategia se realizó la creación de un json con el set de datos necesarios, el cual se encuentra cargado en el código fuente de la aplicación y se importa en el archivo de steps.js 

![image](https://github.com/DevForozco/PruebasE2E/assets/124003160/2998131d-9fa6-42bd-9fe8-86f782025bae)

* (ii) pool de datos (pseudo) aleatorio dinámico y (iii) escenario aleatorio: Para esta estrategia, realizamos la configuración de un mock api utilizando la herramienta **https://www.mockaroo.com/** el mock api puede consultarse a tráves de la siguiente fuente "curl -H "X-API-Key: 380bc950" https://my.api.mockaroo.com/data_pool.json"

Cada vez que se ejecuta un paso, se realiza la petición al mock api y se obtiene el dato en tiempo real, la configuración necesaria en el código se realizó de la siguiente manera:
* Se crea el cliente para invocar el api, esto se realiza en el archivo **client.js**

![image](https://github.com/DevForozco/PruebasE2E/assets/124003160/6e72256b-34f5-4575-9f0e-058ad5d9bd89)

Luego se crea en el archivo **step.js** una promesa para invocar al servicio y obtener la respuesta
![image](https://github.com/DevForozco/PruebasE2E/assets/124003160/80eb1cf3-ca4c-4ded-a64b-11e6c7c951b4)

Luego esta función se usa en cada uno de los steps que sean necesarios así como se muestra a continuación
![image](https://github.com/DevForozco/PruebasE2E/assets/124003160/8af0cc4c-9611-4ecb-ab1c-119cb5fbd319)


# Configuraciones necesarias para ejecutar las pruebas con Playwright

* Ingresar a la carpeta **./OtherTools/playwright** y ejecutar npm install para descargar las dependencias necesarias
* Ejecutar node "nombre del archivo".js

Para ejecutar las pruebas con Playwrigth, es necesario configurar la url por la cual está corriendo Ghost, el usuario y la contraseña del usuario creado para iniciar sesión. Esto debe realizarse en el archivo **utils/utils.js**.

- urlBase: Validar el puerto de ejecución

```json
exports.nodes = {
    urlBase: 'http://localhost:3002/ghost/#/',
    ...
}
```

- Asignar valores de inicio de sesion

```json
exports.user = {
    mail: 'j.aguiar@uniandes.edu.co',
    password: 'pruebas123+-'
}
```

## Funcionalidades:
 Funcionalidad |
------------------- |
Posts |
Páginas    |
Tags      |
Staffs/usuarios       |
Metadatos    |
Navegación |

## Escenarios de prueba
| Functionality       | Scenario "Feature"  |
| ------------------- | ------------------- |
| Posts          | Publicacion de post |
| Posts       | Edicion de post     |
| Posts      | Inactivar post      |
| Posts         | Listar posts        |
| Posts        | Agendar post        |
| Páginas         | Crear draft         |
| Páginas        | Creacion de página  |
| Páginas        | Edición de página   |
| Páginas     | Inactivar página    |
| Páginas      | Listar páginas      |
| Tags          | Crear Tag           |
| Tags         | Crear internal Tag          |
| Tags      | Eliminar Tag        |
| Tags     | Visualizar Tag      |
| Staffs/usuarios     | Editar nombre de un staff    |
| Staffs/usuarios      | Editar email / generar error     |
| Metadatos  | Editar descripción del sitio |
| Metadatos  | Editar título del sitio |
| Metadatos  | Editar lenguaje de publicación |
| Navegación  | Editar item de navegación |
| Navegación  | Eliminar item de navegación  |

**Nota:** la otra herramienta utilizada fur Playwright. El código fuente de estas pruebas está en el directorio **OtherTools/playwright**
