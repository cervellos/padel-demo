# Base de Datos - VLF Sports

Este directorio contiene la configuración de base de datos para el proyecto VLF Sports usando Docker Compose.

## Configuración

### Servicios incluidos:
- **PostgreSQL 15**: Base de datos principal
- **pgAdmin 4**: Interfaz web para gestión de base de datos  
- **Redis**: Cache y sesiones (opcional)

## Inicio rápido

### 1. Iniciar los servicios
```bash
# Desde el directorio vlf-sports/
docker compose up -d
```

### 2. Verificar que los servicios están ejecutándose
```bash
docker compose ps
```

### 3. Acceder a los servicios

#### Base de datos PostgreSQL
- **Host**: localhost
- **Puerto**: 5432
- **Base de datos**: vlf_sports_dev
- **Usuario**: vlf_user
- **Contraseña**: vlf_password

#### pgAdmin (Gestión visual)
- **URL**: http://localhost:5050
- **Email**: admin@vlfsports.com
- **Contraseña**: admin123

#### Redis (Cache)
- **Host**: localhost
- **Puerto**: 6379

## Comandos útiles

### Gestión de contenedores
```bash
# Iniciar servicios
docker compose up -d

# Parar servicios
docker compose down

# Ver logs
docker compose logs postgres
docker compose logs pgadmin

# Reiniciar servicios
docker compose restart

# Eliminar volúmenes (CUIDADO: borra todos los datos)
docker compose down -v
```

### Conexión a la base de datos
```bash
# Conectar directamente al contenedor PostgreSQL
docker exec -it vlf-sports-db psql -U vlf_user -d vlf_sports_dev

# Hacer backup de la base de datos
docker exec vlf-sports-db pg_dump -U vlf_user vlf_sports_dev > backup.sql

# Restaurar backup
docker exec -i vlf-sports-db psql -U vlf_user -d vlf_sports_dev < backup.sql
```

## Configuración en Next.js

### Variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Base de datos PostgreSQL
DATABASE_URL="postgresql://vlf_user:vlf_password@localhost:5432/vlf_sports_dev"
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vlf_sports_dev
DB_USER=vlf_user
DB_PASSWORD=vlf_password

# Redis
REDIS_URL="redis://localhost:6379"

# Next.js
NEXTAUTH_SECRET="tu-secreto-super-seguro-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

### Instalar dependencias de base de datos
```bash
npm install pg @types/pg
# o para Prisma ORM
npm install prisma @prisma/client
```

## Estructura de base de datos

La base de datos se inicializa automáticamente con:

- **users**: Usuarios de la aplicación
- **clubs**: Clubes de pádel
- **tournaments**: Torneos
- **player_rankings**: Rankings individuales
- **pairs**: Parejas de jugadores
- **pair_rankings**: Rankings de parejas
- **matches**: Partidos jugados

### Datos de ejemplo
Se incluyen datos de ejemplo para development:
- 5 usuarios de prueba
- 3 clubes
- 2 torneos

## Troubleshooting

### Puerto 5432 ya en uso
Si tienes PostgreSQL instalado localmente:
```bash
# Cambiar puerto en docker-compose.yml
ports:
  - "5433:5432"  # Usar puerto 5433 en lugar de 5432
```

### Problemas de permisos
```bash
# Dar permisos a la carpeta de inicialización
chmod -R 755 database/init/
```

### Reiniciar completamente
```bash
# Parar y eliminar todo (contenedores, volúmenes, red)
docker compose down -v --remove-orphans

# Limpiar imágenes Docker
docker system prune -f

# Volver a iniciar
docker compose up -d
``` 