# PruebasE2E
Artefactos de pruenas E2E para funcionalidades de Ghost

## Integrantes del equipo
| Integrante          | Correo              |
| ------------------- | ------------------- |
| Ricardo Vivas       | j.vivast@uniandes.edu.co |
| Fabián Orozco       | f.orozcob@uniandes.edu.co |
| Nicolás Rey         | n.reyd@uniandes.edu.co |
| Anderson Aguiar     | j.aguiar@uniandes.edu.co |

# Versiones necesarias
Ghost V3.41.1

# Configuraciones necesarias para ejecutar las pruebas con Kraken
* Para ejecutar las pruebas con kraken, es necesario ajustar la url por la cual está corriendo Ghost, el usuario y la contraseña del usuario creado para iniciar sesión. Esto debe realizarse en cada uno de los 20 archivos con extensión .feature así como se evidencia a continuación.

<img width="731" alt="Captura de Pantalla 2023-05-07 a la(s) 8 34 34 p m" src="https://user-images.githubusercontent.com/124003160/236715536-8a01183e-3326-4519-a536-6f5a7b9c9c79.png">

De la misma manera, para ejecutar las pruebas con Playwrigth, es necesario configurar la url por la cual está corriendo Ghost, el usuario y la contraseña del usuario creado para iniciar sesión. Esto debe realizarse en cada uno de los 20 archivos con extensión .js que se encuentran en la carpeta **./OtherTools/playwright** así como se evidencia a continuación.

<img width="919" alt="Captura de Pantalla 2023-05-07 a la(s) 8 41 02 p m" src="https://user-images.githubusercontent.com/124003160/236715798-21d14495-d4b0-4214-83f1-38b23210e1ea.png">


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
