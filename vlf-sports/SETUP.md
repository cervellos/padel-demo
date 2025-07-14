# Configuración Docker Compose - VLF Sports

## ✅ ¡Configuración completada!

Tu entorno de desarrollo con Docker Compose está listo para usar. Se han configurado los siguientes servicios:

### 🐘 PostgreSQL Database
- **Host**: `localhost`
- **Puerto**: `5432`
- **Base de datos**: `vlf_sports_dev`
- **Usuario**: `vlf_user`
- **Contraseña**: `vlf_password`
- **URL de conexión**: `postgresql://vlf_user:vlf_password@localhost:5432/vlf_sports_dev`

### 🔧 pgAdmin (Gestión visual)
- **URL**: http://localhost:5050
- **Email**: `admin@vlfsports.com`
- **Contraseña**: `admin123`

### 🚀 Redis Cache
- **Host**: `localhost`
- **Puerto**: `6379`
- **URL**: `redis://localhost:6379`

## 🎯 Comandos rápidos

### Usando npm scripts:
```bash
npm run db:start      # Iniciar servicios
npm run db:stop       # Parar servicios
npm run db:status     # Ver estado
npm run db:logs       # Ver logs de PostgreSQL
npm run db:connect    # Conectar a PostgreSQL
npm run db:backup     # Crear backup
npm run db:reset      # Resetear base de datos
```

### Usando el script directamente:
```bash
./scripts/db.sh start
./scripts/db.sh status
./scripts/db.sh connect
```

## 📊 Estructura de base de datos

Las siguientes tablas están disponibles con datos de ejemplo:

- **users** - Usuarios de la aplicación (5 usuarios de prueba)
- **clubs** - Clubes de pádel (3 clubes de ejemplo)
- **tournaments** - Torneos (2 torneos de prueba)
- **player_rankings** - Rankings individuales
- **pairs** - Parejas de jugadores
- **pair_rankings** - Rankings de parejas
- **matches** - Partidos jugados

## 🔗 Conectar desde Next.js

### 1. Crear archivo de variables de entorno

Crea `.env.local` en la raíz del proyecto:

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
NODE_ENV=development
```

### 2. Instalar dependencias

Para PostgreSQL:
```bash
npm install pg @types/pg
```

Para Prisma ORM (recomendado):
```bash
npm install prisma @prisma/client
npx prisma init
```

### 3. Configurar Prisma (opcional)

Si usas Prisma, actualiza `prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## 🧪 Datos de prueba

### Usuarios disponibles:
- **Carlos Mendoza** (carlos@email.com) - Avanzado
- **Ana García** (ana@email.com) - Intermedio
- **Miguel Torres** (miguel@email.com) - Profesional
- **Laura Vega** (laura@email.com) - Avanzado
- **David Ruiz** (david@email.com) - Intermedio

### Clubes disponibles:
- **Club Deportivo Racket** (Madrid) - ⭐4.5
- **Pádel Center Valencia** (Valencia) - ⭐4.2
- **Sports Club Barcelona** (Barcelona) - ⭐4.7

## 🛠️ Próximos pasos

1. **Crea el archivo `.env.local`** con las variables de entorno
2. **Instala las dependencias** de base de datos que necesites
3. **Conecta tu aplicación Next.js** a PostgreSQL
4. **Usa pgAdmin** para explorar y gestionar los datos visualmente
5. **Desarrolla tu aplicación** con datos realistas desde el primer día

## 📝 Notas importantes

- Los datos se mantienen en volúmenes Docker, por lo que persisten entre reinicios
- Para resetear completamente: `npm run db:reset`
- Para hacer backups regulares: `npm run db:backup`
- pgAdmin está configurado en modo desktop (no requiere configuración de servidor)

¡Tu entorno de desarrollo está listo! 🎉 