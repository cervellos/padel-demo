#!/bin/bash

# Script para gestionar la base de datos con Docker Compose

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # Sin color

# Función para mostrar ayuda
show_help() {
    echo "Uso: ./scripts/db.sh [comando]"
    echo ""
    echo "Comandos disponibles:"
    echo "  start         Iniciar servicios de base de datos"
    echo "  stop          Parar servicios de base de datos"
    echo "  restart       Reiniciar servicios"
    echo "  status        Ver estado de los servicios"
    echo "  logs          Ver logs de PostgreSQL"
    echo "  logs-pgadmin  Ver logs de pgAdmin"
    echo "  connect       Conectar a PostgreSQL via psql"
    echo "  backup        Crear backup de la base de datos"
    echo "  restore       Restaurar backup (requiere archivo backup.sql)"
    echo "  reset         Resetear completamente la base de datos"
    echo "  clean         Limpiar contenedores y volúmenes"
    echo "  help          Mostrar esta ayuda"
}

# Función para verificar si Docker está ejecutándose
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        echo -e "${RED}Error: Docker no está ejecutándose${NC}"
        exit 1
    fi
}

# Función para verificar si docker compose existe
check_compose() {
    if ! docker compose version &> /dev/null; then
        echo -e "${RED}Error: docker compose no está disponible${NC}"
        exit 1
    fi
}

# Inicializar servicios
start_services() {
    echo -e "${GREEN}Iniciando servicios de base de datos...${NC}"
    docker compose up -d
    echo -e "${GREEN}Servicios iniciados exitosamente${NC}"
    echo ""
    echo "Acceso a servicios:"
    echo "  PostgreSQL: localhost:5432"
    echo "  pgAdmin: http://localhost:5050"
    echo "  Redis: localhost:6379"
}

# Parar servicios
stop_services() {
    echo -e "${YELLOW}Parando servicios de base de datos...${NC}"
    docker compose down
    echo -e "${GREEN}Servicios parados${NC}"
}

# Reiniciar servicios
restart_services() {
    echo -e "${YELLOW}Reiniciando servicios...${NC}"
    docker compose restart
    echo -e "${GREEN}Servicios reiniciados${NC}"
}

# Ver estado
show_status() {
    echo -e "${GREEN}Estado de los servicios:${NC}"
    docker compose ps
}

# Ver logs de PostgreSQL
show_logs() {
    echo -e "${GREEN}Logs de PostgreSQL:${NC}"
    docker compose logs -f postgres
}

# Ver logs de pgAdmin
show_pgadmin_logs() {
    echo -e "${GREEN}Logs de pgAdmin:${NC}"
    docker compose logs -f pgadmin
}

# Conectar a PostgreSQL
connect_db() {
    echo -e "${GREEN}Conectando a PostgreSQL...${NC}"
    docker exec -it vlf-sports-db psql -U vlf_user -d vlf_sports_dev
}

# Crear backup
create_backup() {
    echo -e "${GREEN}Creando backup de la base de datos...${NC}"
    BACKUP_FILE="backup_$(date +%Y%m%d_%H%M%S).sql"
    docker exec vlf-sports-db pg_dump -U vlf_user vlf_sports_dev > "$BACKUP_FILE"
    echo -e "${GREEN}Backup creado: $BACKUP_FILE${NC}"
}

# Restaurar backup
restore_backup() {
    if [ ! -f "backup.sql" ]; then
        echo -e "${RED}Error: No se encontró el archivo backup.sql${NC}"
        exit 1
    fi
    
    echo -e "${YELLOW}Restaurando backup...${NC}"
    docker exec -i vlf-sports-db psql -U vlf_user -d vlf_sports_dev < backup.sql
    echo -e "${GREEN}Backup restaurado exitosamente${NC}"
}

# Resetear base de datos
reset_database() {
    echo -e "${RED}CUIDADO: Esto eliminará todos los datos de la base de datos${NC}"
    read -p "¿Estás seguro? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}Reseteando base de datos...${NC}"
        docker compose down -v
        docker compose up -d
        echo -e "${GREEN}Base de datos reseteada${NC}"
    else
        echo "Operación cancelada"
    fi
}

# Limpiar todo
clean_all() {
    echo -e "${RED}CUIDADO: Esto eliminará todos los contenedores, volúmenes y redes${NC}"
    read -p "¿Estás seguro? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}Limpiando todo...${NC}"
        docker compose down -v --remove-orphans
        docker system prune -f
        echo -e "${GREEN}Limpieza completada${NC}"
    else
        echo "Operación cancelada"
    fi
}

# Verificar prerrequisitos
check_docker
check_compose

# Procesar comando
case "${1:-help}" in
    start)
        start_services
        ;;
    stop)
        stop_services
        ;;
    restart)
        restart_services
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs
        ;;
    logs-pgadmin)
        show_pgadmin_logs
        ;;
    connect)
        connect_db
        ;;
    backup)
        create_backup
        ;;
    restore)
        restore_backup
        ;;
    reset)
        reset_database
        ;;
    clean)
        clean_all
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo -e "${RED}Comando desconocido: $1${NC}"
        echo ""
        show_help
        exit 1
        ;;
esac 