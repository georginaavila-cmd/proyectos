# Intranet Wakanda · versión real

La página vive en GitHub Pages y los datos en Supabase. Las decisiones del proyecto están en `../DECISIONES.md` y el prototipo en `../prototipo/`.

## Qué hay aquí

| Ruta | Qué es |
|---|---|
| `supabase/migrations/001_esquema.sql` | Tablas, funciones y reglas de seguridad (quién ve y cambia qué) |
| `supabase/migrations/002_archivos.sql` | Carpetas privadas para imágenes de comunicados y soportes de solicitudes |
| `supabase/migrations/003_datos_iniciales.sql` | Sedes, áreas, turnos de ejemplo, herramientas y configuración |
| `supabase/functions/crear-usuario/` | Crea cuentas, restablece contraseñas y desactiva personas (solo administración) |
| `supabase/pruebas/` | Pruebas de permisos que se corren en un PostgreSQL local |

## Reglas que garantiza la base de datos

Están en la base de datos, no solo en la página, así que nadie puede saltárselas:

- Las marcas solo se crean con la función `marcar()`. La hora la pone el servidor, se respeta el orden (entrada → almuerzo → regreso → salida) y no se puede marcar dos veces lo mismo. Cuando se active `validar_ip`, solo se acepta la IP de la oficina.
- Cada persona ve sus marcas; la gerencia y cada directora ven las de su sede.
- La malla y los turnos son públicos; solo los edita quien lidera la sede. Cada cambio queda en `malla_historial`.
- Los comunicados solo los ven sus destinatarios, y solo un destinatario puede confirmar la lectura.
- Las solicitudes solo se crean si la gerencia activó el módulo. Las ven la persona, la gerencia y quienes estén en `revisores`, según la sede y el tipo. Nadie aprueba las suyas.
- Las imágenes y los soportes son privados y siguen los mismos permisos que su comunicado o su solicitud.

## Puesta en marcha (una sola vez)

1. **Crear el proyecto.** En supabase.com, entra con `georgina.avila@wakanda.travel` y crea un proyecto llamado `intranet-wakanda`, región **Americas**. En Security: deja marcado "Enable Data API", **desmarca** "Automatically expose new tables" y **marca** "Enable automatic RLS". Guarda la contraseña de la base de datos en un lugar seguro.
2. **Cargar la base de datos.** En **SQL Editor**, pega y ejecuta, en orden, `001_esquema.sql`, `002_archivos.sql` y `003_datos_iniciales.sql`.
3. **Desactivar el registro abierto.** En **Authentication → Sign In / Providers**, apaga "Allow new users to sign up". Así solo la administración crea cuentas.
4. **Crear la función de cuentas.** En **Edge Functions → Deploy a new function → Via Editor**, crea `crear-usuario` y pega el contenido de `supabase/functions/crear-usuario/index.ts`.
5. **Crear la cuenta de la dueña.** En **Authentication → Users → Add user**, crea `georgina.avila@wakanda.travel` con una contraseña y marca "Auto Confirm User". Luego, en SQL Editor:

   ```sql
   insert into perfiles (id, nombre, correo, sede_id, area_id, rol, es_admin)
   select id, 'Georgina Ávila', email, 1, 1, 'gerente', true
   from auth.users where email = 'georgina.avila@wakanda.travel';
   ```

6. **Conectar la página.** En **Project Settings → API**, copia el **Project URL** y la llave **anon public**. Esas dos se pueden compartir: van dentro de la página. **Nunca compartas la llave `service_role`** ni la contraseña de la base de datos.

## Probar los permisos en local

Con PostgreSQL 16:

```bash
createdb prueba
psql -d prueba -f supabase/pruebas/00_simular_supabase.sql
for f in supabase/migrations/*.sql; do psql -d prueba -f "$f"; done
psql -d prueba -f supabase/pruebas/01_permisos.sql
psql -d prueba -f supabase/pruebas/02_aprobaciones.sql
```

Cada prueba indica el resultado esperado justo antes de ejecutarse.
