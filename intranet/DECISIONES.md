# Intranet Wakanda — decisiones y datos

Registro de lo que se va definiendo con la agencia. Lo marcado **PENDIENTE** falta confirmarlo.

## 1. Equipo y acceso

| Dato | Valor | Estado |
|---|---|---|
| Dominio oficial | `wakandatravel.com.co` (correo en hosting privado, ni Google ni Microsoft) | Confirmado |
| Dominio de trabajo | `wakanda.travel`, cuentas de Google compradas para usar AppSheet | Confirmado |
| Personas al inicio | 11 a 30 | Confirmado |
| Áreas | Dirección / Gerencia · Comercial / KAM · Operaciones / Reservas · Administración / Finanzas | Confirmado |
| ¿Todos tienen cuenta `@wakanda.travel`? | **PENDIENTE** | |
| Sistema de los computadores | **PENDIENTE** (Windows, Mac, ¿unidos a un dominio?) | |
| Navegador | **PENDIENTE** | |

### Entrada sin usuario ni contraseña

Pedido: que la intranet se abra con solo iniciar sesión en el computador.

- Para que la intranet sepa quién es la persona solo por entrar al computador, los equipos tendrían que estar en un directorio central (Active Directory o Microsoft Entra ID). Eso es infraestructura de TI que hoy no tienen y no se justifica para 11 a 30 personas.
- **Propuesta:** usar las cuentas de Google `@wakanda.travel` que ya se pagan por AppSheet. Cada computador queda con Chrome abierto en esa cuenta y la intranet como página de inicio. La persona entra a Google una sola vez; después, al abrir el computador, la intranet carga sin pedir contraseña. Es la misma cuenta que ya abre AppSheet.
- Ventaja: si alguien sale de la empresa, se desactiva su cuenta de Google y pierde el acceso a la intranet y a AppSheet al mismo tiempo.

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
