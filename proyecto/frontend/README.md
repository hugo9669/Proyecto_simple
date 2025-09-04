# Proyecto Tareas

## Backend
- Ruta: `backend/`
- Ejecutar:
  1. `cd backend`
  2. `npm install`
  3. `node server.js`
- Endpoints:
  - GET `/api/tareas`
  - POST `/api/tareas` body `{ titulo }`
  - PUT `/api/tareas/:id`
  - DELETE `/api/tareas/:id`

## Frontend
- Ruta: `frontend/`
- Ejecutar:
  1. `cd frontend`
  2. `npm install`
  3. `npm run dev`

## Base de datos MySQL (local, sin Docker)
Archivos SQL:
- `backend/db/esquema.sql`
- `backend/db/datos.sql`

Pasos (opcional, aún no conectado por backend):
1. Instala MySQL 8 (o compatible)
2. En MySQL, crea base y usuario (opcional):
```sql
CREATE DATABASE IF NOT EXISTS tareas_db;
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'app_password';
GRANT ALL PRIVILEGES ON tareas_db.* TO 'app_user'@'localhost';
FLUSH PRIVILEGES;
```
3. Importa esquema y datos (PowerShell en la raíz del proyecto):
```powershell
mysql -uroot -p tareas_db < "backend\db\esquema.sql"
mysql -uroot -p tareas_db < "backend\db\datos.sql"
```

Nota: El backend actual usa almacenamiento en memoria; la base queda lista para futura integración.
