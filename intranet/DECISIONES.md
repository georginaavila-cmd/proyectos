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
- **Usuario y contraseña.** El usuario es el correo corporativo de cada persona (`@wakandatravel.com.co` o `.com.do`), solo como identificador; la intranet no envía correos para entrar.
- La administradora crea cada cuenta con una contraseña temporal; la persona la cambia en su primer ingreso.
- Si alguien olvida la contraseña, la administradora la restablece desde el panel.
- La sesión queda recordada en el computador.
- Se descartó el código por correo: exigía configurar el DNS del hosting.

### Marcación solo desde la oficina

Objetivo: que nadie marque desde el celular, la casa o un computador que no es el suyo.

1. **IP de la oficina:** la marcación solo se acepta si llega desde la IP pública registrada de cada sede. Bloquea marcar desde casa o con datos móviles.
2. **Computador autorizado:** la primera vez, cada computador queda registrado y la administradora lo aprueba; cada persona solo marca desde su computador asignado. Esto cubre el caso que la IP sola no cubre: un celular conectado al Wi-Fi de la oficina sale por la misma IP.
3. Cada intento rechazado queda registrado (quién, desde dónde, a qué hora).
4. Ver intranet, comunicados y herramientas sí se permite desde cualquier lugar; la restricción aplica **solo a marcar asistencia**. **PENDIENTE** confirmar.

| Dato | Valor |
|---|---|
| ¿La oficina de Bogotá tiene IP fija? | **PENDIENTE** (si es dinámica, la administradora la actualiza desde el panel con un botón estando en la oficina) |
| IP de la sede RD | **PENDIENTE** |

### Roles

| Rol | Puede |
|---|---|
| Dueña (Georgina) | Todo: usuarios, herramientas, configuración, reportes |
| Gerente | Malla, turnos y asistencia de las dos sedes; publicar comunicados; aprobar correcciones |
| Directora de Operaciones Colombia | Malla, turnos y asistencia de la sede Bogotá; publicar comunicados; aprobar correcciones |
| Directora de Operaciones RD | Malla, turnos y asistencia de la sede Santo Domingo; publicar comunicados; aprobar correcciones |
| Colaborador | Marcar asistencia, ver la malla, leer comunicados, abrir sus herramientas |

## 2. Herramientas a enlazar

| Herramienta | Qué hace | Dónde vive / enlace | Cómo se entra |
|---|---|---|---|
| OMNIAXIS | Herramienta de operaciones | AppSheet: https://www.appsheet.com/start/66a528eb-aa3d-4979-ab72-52c53f755fd8?platform=desktop | Cuenta de Google `@wakanda.travel` compartida, con la sesión abierta en Chrome |
| Wakanda Documentos | Cotizaciones, confirmaciones, vouchers e itinerarios en PDF | https://claude.ai/artifact/1PK4MfNXHBSgoozg83oksE | Cuenta de Claude compartida; el equipo solo usa el gestor de documentos |
| KAM 360 | Visitas, prospectos y solicitudes a Operaciones del equipo comercial | https://georginaavila-cmd.github.io/kam360/ | Abierto; cada KAM elige su nombre al entrar |

Más adelante: que KAM 360 reciba de la intranet quién es la persona y se salte la pantalla "¿Quién está trabajando hoy?".

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
| Horario por sede | Se cargan turnos de ejemplo. La primera tarea de cada directora es ajustarlos en la intranet (cada sede tiene sus propios turnos) |
| ¿Hay personas en teletrabajo o en campo? | **PENDIENTE** |
| ¿RD también marca asistencia? | **PENDIENTE** |

### Malla de horarios

- Cada líder publica la malla semanal de su equipo (turno por persona y por día). La malla es **pública**: todo el equipo la ve; solo el líder de cada área y gerencia la editan.
- Turnos definidos una vez (por ejemplo: Mañana, Tarde, Sábado, Descanso, Vacaciones), cada uno con hora de entrada, almuerzo y salida.
- La asistencia se mide contra la malla vigente ese día. Si el líder cambia un turno, los reportes se recalculan solos.
- Cada cambio queda en un historial: quién lo hizo, cuándo, valor anterior y nuevo.

### Orden de construcción

La validación por IP y computador autorizado **se deja para el final**. Todo se construye y se prueba sin ella; antes de salir en vivo se registra la IP de cada sede, se activa y se prueba desde la oficina.

### Informes para gerencia

- Pestaña **Informes**: la gerente ve las dos sedes y cada directora de operaciones ve solo su sede.
- Filtros por **mes** (últimos 6), sede y área. Exportar a Excel.
- Indicadores: puntualidad del equipo, llegadas tarde y minutos de retraso, almuerzos largos, salidas antes de hora, jornadas sin marcar y horas extra.
- Gráfica de llegadas tarde por día; al pasar el cursor muestra quién llegó tarde y cuántos minutos.
- Ranking "¿Quién llegó más tarde?" por minutos acumulados; al tocar un nombre se ven sus días con novedad.
- Tabla por persona, que se puede ordenar por cualquier indicador.

### Solicitudes: vacaciones, permisos e incapacidades

- **Módulo opcional:** la gerente lo activa o lo apaga desde Solicitudes. Apagado, el equipo no ve la opción; lo aprobado se conserva.
- El funcionario elige el tipo (vacaciones, permiso o incapacidad), las fechas, horas opcionales en un permiso parcial, un motivo y, si quiere, un soporte (foto o PDF). **El soporte no es obligatorio.**
- Aprueban o rechazan, con comentario opcional: la directora de operaciones de la sede del funcionario o la gerente. Las solicitudes de las directoras las aprueba la gerente. Nadie aprueba las suyas.
- Lo aprobado por días completos aparece en la asistencia del día y en los informes como **Vacaciones**, **Ausencia con permiso** o **Incapacidad**, y no cuenta como falta ni como llegada tarde. Si es hoy, el pase de jornada de la persona lo indica.
- Los soportes se guardan junto a las imágenes de comunicados (Drive de la cuenta dueña, carpeta Intranet / Solicitudes) y solo los ven la persona, su aprobadora y la gerente.
- **PENDIENTE:** si los permisos por horas deben descontarse de la jornada en los informes.

## 4. Comunicación interna

- Gerencia publica comunicados para todos, por área, por sede o para personas concretas.
- Opción "requiere confirmación de lectura" y reporte de quién leyó y quién no.
- Aviso por correo al publicar.
- **Imágenes:** quien publica adjunta una o varias imágenes. Se guardan en la carpeta **Intranet / Comunicados** del Drive de `georgina.avila@wakanda.travel`. En la intranet se ven en miniatura; al tocarlas se abren en grande, con "Abrir en Drive".
- Como el equipo entra con correos `.com.co` (no Google), las imágenes se muestran **dentro de la intranet** (solo para quien inició sesión), sin compartir la carpeta con enlace público.
- **Buscador:** en la barra superior busca comunicados, personas y herramientas (sin importar tildes). En Comunicados hay un buscador propio que resalta las coincidencias.

## 5. Diseño

Se usa el sistema de diseño de `referencia/sistema-diseno/` (tokens, Lato/Jost, Turquesa Trail) y el mismo lenguaje visual de KAM 360 y Wakanda Documentos: solo tema claro, barra blanca con logo y filete turquesa, titulares azul noche con una palabra en turquesa, tarjetas blancas con ícono en cuadro turquesa suave, pie con eslogan y RNT.

Logo: `referencia/sistema-diseno/logo-wakanda.png` (500 px), tomado de Wakanda Documentos. **PENDIENTE:** versión en SVG y versión en blanco.

## 6. Administración

| Dato | Valor |
|---|---|
| Quién administra la intranet | **PENDIENTE** |
| Quién publica comunicados | **PENDIENTE** |
