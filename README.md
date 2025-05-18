# Pokémon Backend - Node.js + Express + MongoDB + JWT

Este proyecto implementa un backend básico para una aplicación de Pokédex. Permite:

- Registrar usuarios
- Iniciar sesión con autenticación JWT
- Guardar Pokémon favoritos por usuario
- Consultar los Pokémon favoritos del usuario autenticado

---

## Requisitos

- Node.js v18+ recomendado
- MongoDB Atlas (o local)
- Postman o cualquier herramienta para pruebas de API (opcional)

---

## Instalación

1. Clona el repositorio o copia los archivos en tu proyecto local:

```bash
git clone https://github.com/abbarco/pokemon-backend.git
cd pokemon-backend
```

2.- Instala las dependencias:

```bash
npm install
```
3.- Crea un archivo .env en la raíz con el siguiente contenido:

```bash
.env

PORT=3000
MONGO_URI=mongodb://localhost:27017/pokemonApp  # o tu URI de MongoDB Atlas
JWT_SECRET=clave-super-secreta
```
Estructura del proyecto
```markdown
/controllers
  - authController.js
  - favoriteController.js
/models
  - userModel.js
  - favoriteModel.js
/routes
  - authRoutes.js
  - favoriteRoutes.js
/middleware
  - authMiddleware.js
server.js
.env
```