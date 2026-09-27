# Análisis del plugin de referencia `caminos-documentos` v2.5.3

Fuente: `https://github.com/directoroperaciones-bot/CLAUDE`, carpeta `original/`. Es **solo referencia**: todo lo que diga Caminos se reemplaza por Wakanda Travel.

## Qué es

Hay 5 skills: cotización, confirmación, voucher, itinerario e itinerario corto. Todas funcionan como un puente de 3 pasos:

1. Claude convierte lo que manda el asesor (texto, reservas del GDS, capturas, Word) en `datos.json`.
2. Un motor en Python (`generar.py` + `motor/comun.py` + `motor/flujo.py`) llena la plantilla HTML oficial, quita los bloques vacíos y reparte el contenido entre hojas.
3. El motor produce el PDF con wkhtmltopdf.

En la app web del manual, el paso 3 lo hace el navegador (html2canvas + jsPDF) y el reparto de hojas lo hace la función `fluir`.

## Qué se conserva para Wakanda (la lógica)

| Pieza | Cómo funciona en Caminos |
|---|---|
| Nunca inventar | Cifras, fechas, hoteles y condiciones salen solo del asesor. Un campo opcional vacío se omite, nunca se llena con "pendiente". |
| Fechas | Se capturan como `AAAA-MM-DD`; el motor escribe la fecha en español y calcula el día de la semana. |
| Lectura del GDS | En `AV 8520 Y 14NOV 6 BOGCTG HK2 0610 0746`, el número suelto después de la fecha es el día de la semana y se ignora. |
| Aéreo | Una tarjeta por tiquete: tiquete y récord una sola vez; trayectos con ruta "BOG — CDG" y horas en formato 24 h con "+1". El récord es obligatorio si hay vuelos. |
| Hoteles y traslados | Una línea por servicio, con su número de confirmación. |
| Información adicional | Texto legal fijo; la generación se bloquea si no coincide con la copia oficial. |
| Omisión | Una sección sin datos se borra entera, y la numeración se calcula al final. |
| Datos del asesor | Nombre, correo y teléfono, obligatorios en la cotización y la confirmación. |
| Plantilla vacía | Si el asesor pide el documento sin datos, se le entrega una plantilla para copiar y llenar. |
| Fotos | Portada con degradado de protección, hoteles y días. Banco de fotos con claves `destino:<slug>` y `hotel:<slug>--<ciudad>`. |
| Número de hojas | Es una meta, no un límite: la tabla se parte y repite su encabezado. |

## Qué cambia para Wakanda (la identidad)

| Caminos | Wakanda Travel |
|---|---|
| Coral `#F25061`, Poppins, estrella | Azul `#3b6ca7` y turquesa `#00a8a8`; Lato para títulos y Jost para texto; franja "Turquesa Trail" |
| "Para ir más lejos" | "Diseñadores de viajes, diseñadores de sueños" |
| Política de Agencia Caminos y Ley 679/1336 | `legal.js`: "Para tener en cuenta", documentación, términos, cuentas y métodos de pago. **PENDIENTE:** ¿se incluye la leyenda de la Ley 679 de 2001 y la Ley 1336 de 2009? |
| Códigos `CA2900`, `CAM-2026-2900`, `CAM-VCH-2900-01` | La muestra usa `WKT-2026-0512`. **PENDIENTE:** formatos oficiales |
| Asesor con correo @agenciacaminos.com.co | **PENDIENTE:** dominio de correo de las asesoras |
| Turismo religioso (acompañamiento, parroquia) | **PENDIENTE:** especialidad; como mayorista, quizá sin acompañamiento espiritual |

## Diferencias de contenido en las muestras de Wakanda

Las muestras de Wakanda (`referencia/sistema-diseno/componentes/`) no son iguales a las de Caminos:

- **Cotización:** hay dos versiones, una simple (hotel, fechas, duración, viajeros, vuelos, régimen y fotos del resort) y una con itinerario día a día. Muestran un precio "Desde" o "Precio por persona".
- **Confirmación:** es de un servicio (un tour) y **nunca muestra precio**. Incluye recomendaciones e información adicional.
- **Voucher:** incluye titular, pasajeros, fecha, hora de recogida, punto de encuentro, proveedor, cuentas bancarias, métodos de pago y cláusulas legales.
- **Itinerario impreso:** resumen, día a día y alojamiento.

Por decidir con la agencia: ¿se sigue la estructura de campos de Caminos (anexo C del manual) o la de las muestras de Wakanda? Por ejemplo, la confirmación de Caminos lleva pagos y la de Wakanda no muestra precio.
