#!/bin/bash

# Este script compila la versión de producción de React y la sube al servidor Apache
# y también reinicia el servidor de desarrollo en segundo plano si es necesario.

echo "================================================="
echo "   Iniciando Despliegue de websiapreact         "
echo "================================================="

# Directorios
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APACHE_DIR="/var/www/html/React/websiapreact"

cd "$PROJECT_DIR" || exit

echo "1. Deteniendo servidor local en segundo plano (puerto 5173)..."
# Busca procesos escuchando en el puerto 5173 y los finaliza
kill $(lsof -t -i:5173 2>/dev/null) 2>/dev/null

echo "2. Compilando aplicación para producción (Apache)..."
# Compilamos el proyecto usando Vite
npm run build || exit 1

echo "3. Copiando archivos a Apache (/var/www/html/React/websiapreact)..."
sudo mkdir -p "$APACHE_DIR"
sudo rm -rf "${APACHE_DIR:?}/"*
sudo cp -r dist/* "$APACHE_DIR/" || { echo "ERROR: fallo al copiar a Apache"; exit 1; }
restorecon -R "$APACHE_DIR/"

echo "4. Iniciando servidor de desarrollo local en segundo plano..."
# (Opcional) si aún quieres usar la versión de desarrollo con 'npm run dev -- --host'
export CI=true
nohup npm run dev -- --host > nohup.out 2>&1 &

echo "================================================="
echo "   Despliegue finalizado exitosamente!          "
echo "   Apache URL: http://192.168.124.41/React/websiapreact/"
echo "================================================="
