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

### Forma de entrar (propuesta revisada)

- **Código por correo:** la persona escribe su correo de Wakanda, recibe un código o enlace y entra. Funciona con cualquier proveedor (hosting `.com.co`, Outlook RD, Google).
- **Botones "Entrar con Google" y "Entrar con Microsoft"** para quienes tienen esas cuentas: entran con un clic.
- **Sesión recordada** por 90 días en cada computador: en el día a día, la intranet abre sin pedir nada.
- Solo entran correos de una **lista autorizada** que administra la intranet; los dominios por sí solos no bastan.

## 2. Herramientas a enlazar

| Herramienta | Qué hace | Dónde vive / enlace | Quién la usa | Cómo se entra |
|---|---|---|---|---|
| OMNIAXIS | **PENDIENTE** | **PENDIENTE** | **PENDIENTE** | **PENDIENTE** |
| Wakanda Documentos | Cotizaciones, confirmaciones, vouchers e itinerarios en PDF | Plugin de Claude (este repositorio) | **PENDIENTE** | Cuenta de Claude |
| KAM360 | **PENDIENTE** | **PENDIENTE** | **PENDIENTE** | **PENDIENTE** |

## 3. Administración

| Dato | Valor |
|---|---|
| Quién administra la intranet | **PENDIENTE** |
| Quién publica comunicados | **PENDIENTE** |
