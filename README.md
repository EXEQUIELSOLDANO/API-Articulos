API de ARTICULOS Desafio técnico FLEXXUS

Esta es una API generada para gestionar artículos,consiste de operaciones CRUD(Crear,Leer,Actualizar,Eliminar).La cual también incluye medidas de seguridad para proteger las rutas y validación.

REQUISITOS
 - Node.js
 - npm v6 o superior

DEPENDENCIAS
 - Express
 - SQLite
 - Sequelize  
 - Bcrypt
 - Jsonwebtoken
 - Dotenv
 - Nodemon
  
HERRAMIENTA DE PRUEBA
 - POSTMAN

INSTALACIÓN
 - Clonar el repositorio
   - git clone https://github.com/EXEQUIELSOLDANO/API-Articulos
    
 - Instalar dependencias
   - npm install
    
 - Configurar la bbdd. SQLite y la clave secreta del archivo config/config.js

 - Iniciar el servidor:
   - node index.js 
   - npm run dev (solo en entorno de prueba con Nodemon)
   - El servidor deberia estar corriendo en el puerto "http://localhost:3001/articulos"

ENDPOINTS

Autenticación
   - Para poder hacer operaciones del CRUD debemos ir a la pestaña Headers y colocar la clave (password) : valor
  Headers requeridos:
   - 'password' = 'la clave secreta definida en el archivo config/config.js'.
  
Crear Artículo
 - POST /articulos/auth
   - Body:
    - {
          "nombre":"Articulo de prueba",
          "marca":"Marca de prueba"
    - } 
   - Respuesta Exitosa:
      {
       "id";1,
       "nombre":"Articulo de prueba",
       "marca":"Marca de prueba",
       "fechaModificacion":null,
       "estadoActivo":true
      } 

Obtener Artículos
- GET /articulos/auth
  - Respuesta Exitosa:
      {
       "id";1,
       "nombre":"Articulo de prueba",
       "marca":"Marca de prueba",
       "fechaModificacion":null,
       "estadoActivo":true
      } 

Actualizar Artículo
- PUT /articulos/auth/:id
   - Body:
      {
        "nombre":"Articulo actualizado",
        "marca":"Marca actualizada",
        "estadoActivo":true
      } 
   - Respuesta Exitosa:
      {
        "id";1,
        "nombre":"Articulo actualizado",
        "marca":"Marca actualizada",
        "fechaModificacion":"2024-08-08T00:00:00.00Z",
        "estadoActivo":true
      }

Eliminar (Desactivar) Artículo:
 En este caso en luga de eliminar directamente el artículo se cambia el estado de activación de true a false o viceversa 
 - DELETE /articulos/auth/:id
   {
    "id":1,
    "nombre":"Articulo actualizado",
    "marca":"Marca actualizada",
    "fechaModificacion":"2024-08-08T00:00:00.00Z",
    "estadoActivo":false
   }

Estructura del proyecto

src
 |- config
       |--config.js
       |--db.js
       |--database.sqlite
 |- controllers
       |--articulosController.js
 |- middleware
       |--auth.js
 |- models
       |--articulos.js
 |- routes
       |--articulosRoutes.js
 |--index.js
 |--package.json
 |--README.md
 |--.env
 |--.gitignore
 |--database.sqlite

 Autor 
  Exequiel Soldano


