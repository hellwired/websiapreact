# Plan de Migración a Producción (VPS)

Este documento detalla los pasos necesarios para desplegar la Landing Page del SIAP (React + Vite) en tu servidor de producción, bajando el código directamente desde el repositorio de GitHub que acabamos de subir.

## Requisitos Previos en el Servidor
- Acceso SSH al VPS de producción.
- **Node.js** (v18+) y **npm** instalados.
- **Git** instalado.
- Un servidor web o proxy inverso instalado (Nginx o Apache) para servir los archivos estáticos.

---

## Fases de la Migración

### Fase 1: Obtención del Código en el VPS
1. **Conectar al VPS:** Acceder mediante SSH con los credenciales administrativos.
   ```bash
   ssh usuario@ip_del_servidor
   ```
2. **Generar/Configurar credenciales de GitHub:** Si el repositorio es privado, asegurar que el VPS tenga una llave SSH agregada a tu cuenta de GitHub (`git@github.com:hellwired/websiapreact.git`).
3. **Clonar el Repositorio:** Navegar a la carpeta destino (ej: `/var/www/siapweb`) y clonar el repo.
   ```bash
   cd /var/www
   git clone git@github.com:hellwired/websiapreact.git siapweb
   ```

### Fase 2: Construcción (Build) de la Aplicación
Dado que es una aplicación React (Single Page Application) creada con Vite, no subimos el código fuente a producción sin procesarlo. Debemos generar los "estáticos" (HTML/CSS/JS minificados).

1. Ingresar a la carpeta clonada.
   ```bash
   cd /var/www/siapweb
   ```
2. Instalar las dependencias estrictas usando el lockfile.
   ```bash
   npm ci
   ```
3. Ejecutar el comando de construcción.
   ```bash
   npm run build
   ```
   > Al finalizar, Vite creará una carpeta llamada `dist/` que contendrá la versión optimizada para producción.

### Fase 3: Configuración del Servidor Web
Los archivos estáticos dentro de la carpeta `dist/` son los que el servidor web (e.g., Nginx o Apache) debe exponer a internet, no la carpeta raíz del proyecto.

#### Ejemplo Nginx
1. Crear o editar el archivo de configuración del virtual host (ej. `/etc/nginx/sites-available/siapweb`).
2. Configurar el bloque server para apuntar el `root` a la carpeta `dist/`.
   ```nginx
   server {
       listen 80;
       server_name siap.misiones.gob.ar; # Reemplazar por el dominio real

       root /var/www/siapweb/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```
   *Nota: La directiva `try_files` es vital para que un proyecto React SPA maneje correctamente las rutas sin devolver error 404.*

3. Habilitar el sitio y reiniciar Nginx.
   ```bash
   ln -s /etc/nginx/sites-available/siapweb /etc/nginx/sites-enabled/
   systemctl restart nginx
   ```

#### Ejemplo Apache (Alternativa)
Si usas Apache, asegúrate de apuntar el `DocumentRoot` a `/var/www/siapweb/dist` y configurar el `.htaccess` (o directiva de bloque) para redirigir todas las peticiones (FallbackResource) al `index.html`.

### Fase 4: Opciones de Actualización Futura (Pipeline/Scripts)
Para agilizar futuras actualizaciones (cuando hagamos nuevos `push` a GitHub), se puede crear un un pequeño script bash (`actualizar.sh`) en el VPS:
```bash
#!/bin/bash
cd /var/www/siapweb
git pull origin main
npm ci
npm run build
# Opcional: reiniciar servidor web si modificas configs 
```

---
> [!NOTE]
> Cuando estés listo en tu servidor VPS y lleguemos a esta etapa, abriremos este mismo archivo y yo te ayudaré a ejecutar los comandos uno a uno o te configuraré directamente el bloque de Nginx/Apache de acuerdo a tu arquitectura.
