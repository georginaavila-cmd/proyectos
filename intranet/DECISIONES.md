# Intranet Wakanda — decisiones y datos

Registro de lo que se va definiendo con la agencia. Lo marcado **PENDIENTE** falta confirmarlo.

## 1. Equipo y acceso

| Dato | Valor | Estado |
|---|---|---|
| Dominio oficial | `wakandatravel.com.co` (correo en hosting privado, ni Google ni Microsoft) | Confirmado |
| Dominio de trabajo | `wakanda.travel`, cuentas de Google compradas para usar AppSheet | Confirmado |
| Personas al inicio | 11 a 30 | Confirmado |
| Áreas | Dirección / Gerencia · Comercial / KAM · Operaciones / Reservas · Administración / Finanzas | Confirmado |
| Sedes | Colombia (`.com.co`), República Dominicana (`.com.do`), ¿Estados Unidos? (`wakandatravelusa.com`) | **PENDIENTE** confirmar |
| Sistema de los computadores | **PENDIENTE** (Windows, Mac) | |

### Inventario de correos (entregado por Georgina Ávila)

**Colombia — `wakandatravel.com.co` (hosting privado), 27 cuentas**

| Tipo | Cuentas |
|---|---|
| Personales | adriana.avila · georgina.avila · david.rmaz |
| Comercial | comercial · comercial1 · comercial3 · comercial4 · comercial6 · comercial7 · comercialmayorista · comercialmayorista1 · comercialmayorista2 · nacionalmayorista |
| Operaciones | diroperaciones · operacionesrd · reservas · visas · servicioalcliente |
| Administración | administracion · administracion1 · facturacion · contabilidad |
| Otras | community · community1 · tecnologia · info |
| Por revisar | `comercial2@wakandatravel.com` (sin `.co`: ¿error de escritura?) |

**República Dominicana — `wakandatravel.com.do` (Outlook), 7 cuentas**

info · coordinacion · comercial · lissette.paulino · daniela.diaz · jesus.portoreal · pedro.colon

**Google Workspace — `wakanda.travel`, 6 cuentas**

georgina.avila · operaciones · contabilidad · comercialmin · emisiones · marketing

**Otras**

| Cuenta | Nota |
|---|---|
| info@wakandatravelusa.com | ¿Sede o marca en EE. UU.? |
| wakandatravel@hotmail.com | Cuenta pública; no se usaría para entrar a la intranet |
| wakandatravel2021@gmail.com | Google con 5 TB; probablemente almacenamiento. No se usaría para entrar |

### Hallazgos

1. Solo 6 cuentas están en Google Workspace. La mayoría del equipo usa el hosting de `.com.co` y la sede RD usa Outlook, así que entrar solo con Google dejaría a casi todos por fuera.
2. Muchas cuentas son de cargo (comercial1, reservas…), no de persona. La intranet necesita saber qué persona está detrás de cada una para confirmar lecturas y asignar permisos.
3. Hay al menos dos países, así que la intranet debe manejar **sede** además de **área**.

### Forma de entrar (decidida con Georgina Ávila)

- **Cuenta dueña:** `georgina.avila@wakanda.travel`. Es dueña de la infraestructura (Drive, bases de datos, servicios de la intranet). **No se comparte ni se usa para entrar** como colaborador.
- **Cada persona entra con su propio correo corporativo** `@wakandatravel.com.co` (y `@wakandatravel.com.do` para RD). No depende de Google.
- **Código por correo:** escribe su correo, le llega un código de 6 dígitos y entra. La sesión queda recordada en ese computador (90 días).
- **App en el escritorio:** la intranet se instala como aplicación (ícono propio, ventana sin barra del navegador) y puede abrirse sola al encender el computador.
- Solo entran correos de la **lista autorizada**.
- Requisito técnico: para que los códigos lleguen sin caer en spam se envían desde `intranet@wakandatravel.com.co`, lo que exige agregar registros DNS (SPF y DKIM) en el hosting. **PENDIENTE:** quién administra el hosting y el DNS.

### Roles

| Rol | Puede |
|---|---|
| Dueña (Georgina) | Todo: usuarios, herramientas, configuración, reportes |
| Gerencia | Publicar comunicados, ver asistencia de todos, aprobar correcciones |
| Jefe de área | Ver la asistencia de su equipo, aprobar sus correcciones |
| Colaborador | Marcar asistencia, leer comunicados, abrir sus herramientas |

## 2. Herramientas a enlazar

| Herramienta | Qué hace | Dónde vive / enlace | Quién la usa | Cómo se entra |
|---|---|---|---|---|
| OMNIAXIS | **PENDIENTE** | **PENDIENTE** | **PENDIENTE** | **PENDIENTE** |
| Wakanda Documentos | Cotizaciones, confirmaciones, vouchers e itinerarios en PDF | Plugin de Claude (este repositorio) | **PENDIENTE** | Cuenta de Claude |
| KAM360 | **PENDIENTE** | **PENDIENTE** | **PENDIENTE** | **PENDIENTE** |

## 3. Control de asistencia

Marcaciones del día: **entrada · salida a almuerzo · regreso de almuerzo · salida**.

- Botón grande en el inicio que muestra la siguiente marcación que toca y la hora en vivo.
- Hora tomada del servidor, no del computador, para que no se pueda adelantar el reloj.
- Nadie edita sus marcas: si olvidó marcar, pide una corrección con motivo y la aprueba su jefe o gerencia. Todo queda registrado.
- Reportes por persona, área, sede y rango de fechas, exportables a Excel para nómina: llegadas tarde, almuerzos largos, horas trabajadas, horas extra.
- Aviso de privacidad y autorización de tratamiento de datos (Ley 1581 de 2012) al primer ingreso.
- Validar con asesoría laboral las reglas de jornada vigentes (Ley 2101 de 2021 y reforma laboral Ley 2466 de 2025) y las de RD.

| Dato | Valor |
|---|---|
| Horario por sede (días, entrada, salida, tiempo de almuerzo) | **PENDIENTE** |
| ¿Hay personas en teletrabajo o en campo? | **PENDIENTE** |
| ¿Marcar solo desde la red de la oficina? | **PENDIENTE** |
| ¿RD también marca asistencia? | **PENDIENTE** |

## 4. Comunicación interna

- Gerencia publica comunicados para todos, por área, por sede o para personas concretas.
- Opción "requiere confirmación de lectura" y reporte de quién leyó y quién no.
- Aviso por correo al publicar.

## 5. Diseño

Se usa el sistema de diseño de `referencia/sistema-diseno/` (tokens, Lato/Jost, Turquesa Trail). **PENDIENTE:** el logo en SVG o PNG (a color y en blanco), que no venía en el sistema.

## 6. Administración

| Dato | Valor |
|---|---|
| Quién administra la intranet | **PENDIENTE** |
| Quién publica comunicados | **PENDIENTE** |
