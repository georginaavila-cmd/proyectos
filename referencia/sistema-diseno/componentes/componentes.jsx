/* GENERADO AUTOMÁTICAMENTE — no editar a mano.
   Copia sin módulos de components/**.jsx para cargar el sistema en el navegador
   con Babel standalone (sin bundler). Fuente de verdad: components/.
   Regenerar tras cualquier cambio en los componentes. */
window.WK = window.WK || {};

// ── components/core/Icon.jsx ──
(function () {
  /* Set de iconos de Lucide (ISC, lucide.dev) — geometría oficial embebida para que
     los documentos funcionen sin conexión y al exportar a PDF. Trazo de 2px, 24×24. */
  const PATHS = {
    "plane-takeoff":
      '<path d="M2 22h20"/><path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"/>',
    plane:
      '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    "map-pin":
      '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    map:
      '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
    "bed-double":
      '<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/>',
    clock: '<path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/>',
    users:
      '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',
    wallet:
      '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    "calendar-days":
      '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
    "shield-check":
      '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    utensils:
      '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    "car-front":
      '<path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/>',
    luggage:
      '<path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/><path d="M10 20h4"/><circle cx="16" cy="20" r="2"/><circle cx="8" cy="20" r="2"/>',
    camera:
      '<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    download: '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
    "chevron-right": '<path d="m9 18 6-6-6-6"/>',
    star:
      '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
    phone:
      '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
    mail: '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
    globe:
      '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    "file-text":
      '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    "play-circle":
      '<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/><circle cx="12" cy="12" r="10"/>',
    lightbulb:
      '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  };

  const ICONS = {
    viaje: "plane-takeoff",
    vuelo: "plane",
    destino: "map-pin",
    mapa: "map",
    hotel: "bed-double",
    duracion: "clock",
    personas: "users",
    dinero: "wallet",
    calendario: "calendar-days",
    seguro: "shield-check",
    mas: "plus",
    alimentacion: "utensils",
    traslado: "car-front",
    equipaje: "luggage",
    foto: "camera",
    info: "info",
    check: "check",
    excluido: "x",
    descargar: "download",
    siguiente: "chevron-right",
    estrella: "star",
    telefono: "phone",
    correo: "mail",
    web: "globe",
    documento: "file-text",
    video: "play-circle",
    idea: "lightbulb",
  };

  /** Icono de línea de Lucide que hereda currentColor. */
  function Icon({ name = "info", size = 24, strokeColor, strokeWidth = 2, style, title, ...rest }) {
    const key = ICONS[name] || name;
    const inner = PATHS[key];
    if (!inner) return null;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={strokeColor || "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label={title || name}
        style={{ display: "block", flex: "0 0 auto", ...style }}
        dangerouslySetInnerHTML={{ __html: inner }}
        {...rest}
      />
    );
  }

  const ICON_NAMES = Object.keys(ICONS);
  const ICON_PATHS = PATHS;
  Object.assign(window.WK, { Icon, ICON_NAMES, ICON_PATHS });
})();

// ── components/core/Button.jsx ──
(function () {
  const { Icon } = window.WK;
  const SIZES = {
    sm: { padding: "8px 16px", fontSize: "13px", gap: "6px", icon: 16 },
    md: { padding: "12px 24px", fontSize: "14px", gap: "8px", icon: 18 },
    lg: { padding: "16px 32px", fontSize: "16px", gap: "10px", icon: 20 },
  };

  const VARIANTS = {
    primary: {
      background: "var(--wk-gradient-blue)",
      color: "var(--wk-white)",
      border: "1px solid transparent",
      boxShadow: "var(--wk-shadow-1)",
    },
    secondary: {
      background: "transparent",
      color: "var(--wk-teal-700)",
      border: "2px solid var(--wk-teal-600)",
      boxShadow: "none",
    },
    accent: {
      background: "var(--wk-gradient-teal)",
      color: "var(--wk-white)",
      border: "1px solid transparent",
      boxShadow: "var(--wk-shadow-1)",
    },
    ghost: {
      background: "transparent",
      color: "var(--wk-blue-700)",
      border: "1px solid transparent",
      boxShadow: "none",
    },
  };

  function Button({
    children,
    variant = "primary",
    size = "md",
    icon,
    iconAfter,
    fullWidth = false,
    disabled = false,
    style,
    ...rest
  }) {
    const s = SIZES[size] || SIZES.md;
    const v = VARIANTS[variant] || VARIANTS.primary;
    const [hover, setHover] = React.useState(false);
    const [press, setPress] = React.useState(false);

    return (
      <button
        type="button"
        disabled={disabled}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => { setHover(false); setPress(false); }}
        onMouseDown={() => setPress(true)}
        onMouseUp={() => setPress(false)}
        style={{
          display: fullWidth ? "flex" : "inline-flex",
          width: fullWidth ? "100%" : undefined,
          alignItems: "center",
          justifyContent: "center",
          gap: s.gap,
          padding: s.padding,
          fontFamily: "var(--wk-font-display)",
          fontWeight: "var(--wk-weight-bold)",
          fontSize: s.fontSize,
          lineHeight: 1,
          borderRadius: "var(--wk-radius-md)",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.45 : 1,
          transition: "var(--wk-transition-base)",
          transform: press && !disabled ? "translateY(1px)" : "none",
          ...v,
          ...(hover && !disabled
            ? {
                boxShadow: variant === "secondary" ? "var(--wk-shadow-1)" : "var(--wk-shadow-2)",
                background:
                  variant === "secondary"
                    ? "var(--wk-teal-050)"
                    : variant === "ghost"
                    ? "var(--wk-blue-050)"
                    : v.background,
                filter: variant === "primary" || variant === "accent" ? "brightness(1.06)" : "none",
              }
            : null),
          ...style,
        }}
        {...rest}
      >
        {icon ? <Icon name={icon} size={s.icon} /> : null}
        {children}
        {iconAfter ? <Icon name={iconAfter} size={s.icon} /> : null}
      </button>
    );
  }
  Object.assign(window.WK, { Button });
})();

// ── components/core/Card.jsx ──
(function () {
  const TONES = {
    neutral: { background: "var(--wk-surface-card)", accent: "var(--wk-blue-700)" },
    muted: { background: "var(--wk-gray-100)", accent: "var(--wk-blue-700)" },
    brand: { background: "var(--wk-blue-050)", accent: "var(--wk-blue-700)" },
    accent: { background: "var(--wk-teal-050)", accent: "var(--wk-teal-600)" },
    note: { background: "var(--wk-pink-100)", accent: "var(--wk-pink-400)" },
  };

  const SHADOWS = {
    0: "none",
    1: "var(--wk-shadow-brand-1)",
    2: "var(--wk-shadow-brand-2)",
    3: "var(--wk-shadow-brand-3)",
  };

  /** Contenedor base del sistema: tarjeta elevada o tarjeta con barra lateral. */
  function Card({
    children,
    variant = "elevated",
    tone = "neutral",
    elevation,
    padding = "var(--wk-space-lg)",
    style,
    ...rest
  }) {
    const t = TONES[tone] || TONES.neutral;
    const bordered = variant === "bordered";
    const level = elevation !== undefined ? elevation : bordered ? 0 : 2;

    return (
      <div
        style={{
          background: bordered && tone === "neutral" ? "var(--wk-gray-100)" : t.background,
          border: "1px solid var(--wk-border-default)",
          borderLeft: bordered ? `var(--wk-border-accent-bar) solid ${t.accent}` : undefined,
          borderRadius: bordered ? "var(--wk-radius-sm)" : "var(--wk-radius-lg)",
          boxShadow: SHADOWS[level],
          padding: bordered ? "var(--wk-space-md)" : padding,
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
  Object.assign(window.WK, { Card });
})();

// ── components/core/Badge.jsx ──
(function () {
  const { Icon } = window.WK;
  const TONES = {
    sand: { background: "var(--wk-sand-300)", color: "var(--wk-blue-700)", border: "transparent" },
    blue: { background: "var(--wk-blue-100)", color: "var(--wk-blue-800)", border: "transparent" },
    teal: { background: "var(--wk-teal-100)", color: "var(--wk-teal-800)", border: "transparent" },
    pink: { background: "var(--wk-pink-100)", color: "#a8506a", border: "transparent" },
    solid: { background: "var(--wk-gradient-blue)", color: "var(--wk-white)", border: "transparent" },
    outline: { background: "var(--wk-white)", color: "var(--wk-blue-700)", border: "var(--wk-border-default)" },
    success: { background: "var(--wk-success-bg)", color: "#1c7a45", border: "transparent" },
    warning: { background: "var(--wk-warning-bg)", color: "#8a5708", border: "transparent" },
    danger: { background: "var(--wk-danger-bg)", color: "#a32c1f", border: "transparent" },
  };

  /** Etiqueta píldora para estados, categorías y metadatos cortos. */
  function Badge({ children, tone = "sand", icon, style, ...rest }) {
    const t = TONES[tone] || TONES.sand;
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 12px",
          background: t.background,
          color: t.color,
          border: `1px solid ${t.border}`,
          borderRadius: "var(--wk-radius-pill)",
          fontFamily: "var(--wk-font-display)",
          fontWeight: "var(--wk-weight-bold)",
          fontSize: "11px",
          lineHeight: 1.4,
          letterSpacing: "0.02em",
          whiteSpace: "nowrap",
          ...style,
        }}
        {...rest}
      >
        {icon ? <Icon name={icon} size={13} /> : null}
        {children}
      </span>
    );
  }
  Object.assign(window.WK, { Badge });
})();

// ── components/core/Divider.jsx ──
(function () {
  /** Separador horizontal. `gradient` se desvanece en los bordes. */
  function Divider({ variant = "line", spacing = "var(--wk-space-md)", style, ...rest }) {
    const isGradient = variant === "gradient";
    return (
      <hr
        style={{
          border: 0,
          height: "1px",
          margin: `${spacing} 0`,
          background: isGradient
            ? "linear-gradient(90deg, rgba(217,217,217,0) 0%, var(--wk-gray-300) 20%, var(--wk-gray-300) 80%, rgba(217,217,217,0) 100%)"
            : "var(--wk-border-default)",
          ...style,
        }}
        {...rest}
      />
    );
  }
  Object.assign(window.WK, { Divider });
})();

// ── components/core/InfoField.jsx ──
(function () {
  const { Icon } = window.WK;
  /** Par etiqueta + valor. Unidad mínima de todo bloque de datos. */
  function InfoField({ label, value, icon, underline = true, align = "left", style, ...rest }) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--wk-space-sm)",
          paddingBottom: underline ? "var(--wk-space-sm)" : 0,
          borderBottom: underline ? "1px solid var(--wk-border-default)" : "none",
          alignItems: align === "center" ? "center" : "flex-start",
          textAlign: align,
          minWidth: 0,
          ...style,
        }}
        {...rest}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--wk-font-display)",
            fontWeight: "var(--wk-weight-bold)",
            fontSize: "11px",
            letterSpacing: "var(--wk-tracking-label)",
            textTransform: "uppercase",
            color: "var(--wk-blue-500)",
          }}
        >
          {icon ? <Icon name={icon} size={14} /> : null}
          {label}
        </span>
        <span
          style={{
            fontFamily: "var(--wk-font-body)",
            fontWeight: "var(--wk-weight-medium)",
            fontSize: "var(--wk-size-body)",
            lineHeight: "var(--wk-leading-snug)",
            color: "var(--wk-text-primary)",
            textWrap: "pretty",
          }}
        >
          {value}
        </span>
      </div>
    );
  }
  Object.assign(window.WK, { InfoField });
})();

// ── components/core/SectionTitle.jsx ──
(function () {
  const { Icon } = window.WK;
  /** Encabezado de sección: H2 azul con marca turquesa y regla opcional. */
  function SectionTitle({ children, icon, eyebrow, rule = true, level = 2, style, ...rest }) {
    const Tag = `h${level}`;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--wk-space-sm)", ...style }} {...rest}>
        {eyebrow ? (
          <span
            style={{
              fontFamily: "var(--wk-font-display)",
              fontWeight: "var(--wk-weight-bold)",
              fontSize: "11px",
              letterSpacing: "var(--wk-tracking-eyebrow)",
              textTransform: "uppercase",
              color: "var(--wk-teal-700)",
            }}
          >
            {eyebrow}
          </span>
        ) : null}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--wk-space-sm)" }}>
          {icon ? (
            <span style={{ color: "var(--wk-teal-600)", display: "inline-flex" }}>
              <Icon name={icon} size={22} />
            </span>
          ) : null}
          <Tag
            style={{
              margin: 0,
              fontFamily: "var(--wk-font-display)",
              fontWeight: "var(--wk-weight-black)",
              fontSize: level === 2 ? "var(--wk-size-h2)" : "var(--wk-size-h3)",
              lineHeight: "var(--wk-leading-heading)",
              letterSpacing: "var(--wk-tracking-display)",
              color: "var(--wk-text-heading)",
            }}
          >
            {children}
          </Tag>
          {rule ? (
            <span
              aria-hidden="true"
              style={{
                flex: 1,
                height: "1px",
                background:
                  "linear-gradient(90deg, var(--wk-gray-300) 0%, rgba(217,217,217,0) 100%)",
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
  Object.assign(window.WK, { SectionTitle });
})();

// ── components/core/TurquoiseTrail.jsx ──
(function () {
  /**
   * "Turquesa Trail": la franja de 4px que identifica todo documento Wakanda.
   * Va pegada al margen, sin separación, y recorre el alto (o el ancho) completo.
   */
  function TurquoiseTrail({ orientation = "vertical", length = "100%", thickness, style, ...rest }) {
    const t = thickness || "var(--wk-trail-width)";
    const vertical = orientation === "vertical";
    return (
      <span
        aria-hidden="true"
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: vertical ? t : length,
          height: vertical ? length : t,
          background: "var(--wk-teal-600)",
          ...style,
        }}
        {...rest}
      />
    );
  }
  Object.assign(window.WK, { TurquoiseTrail });
})();

// ── components/document/DocHeader.jsx ──
(function () {
  /** Encabezado del documento: logo, título y referencia. */
  function DocHeader({
    title,
    subtitle,
    reference,
    date,
    logoSrc,
    tagline = "Diseñadores de viajes, diseñadores de sueños",
    style,
    ...rest
  }) {
    return (
      <header
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--wk-space-lg)",
          paddingBottom: "var(--wk-space-lg)",
          borderBottom: "1px solid var(--wk-border-default)",
          ...style,
        }}
        {...rest}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "var(--wk-space-md)", minWidth: 0 }}>
          {logoSrc ? (
            <img src={logoSrc} alt="Wakanda Travel" style={{ height: "60px", width: "auto", display: "block" }} />
          ) : (
            <span
              style={{
                fontFamily: "var(--wk-font-display)",
                fontWeight: "var(--wk-weight-black)",
                fontSize: "20px",
                color: "var(--wk-blue-700)",
                letterSpacing: "var(--wk-tracking-display)",
              }}
            >
              Wakanda Travel
            </span>
          )}
          <span
            style={{
              width: "1px",
              alignSelf: "stretch",
              background: "var(--wk-border-default)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--wk-font-body)",
              fontSize: "var(--wk-size-xs)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--wk-text-secondary)",
              maxWidth: "150px",
              lineHeight: "var(--wk-leading-snug)",
            }}
          >
            {tagline}
          </span>
        </div>

        <div style={{ textAlign: "right", minWidth: 0 }}>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--wk-font-display)",
              fontWeight: "var(--wk-weight-black)",
              fontSize: "var(--wk-size-h1)",
              lineHeight: "var(--wk-leading-tight)",
              letterSpacing: "var(--wk-tracking-display)",
              color: "var(--wk-text-heading)",
              textWrap: "balance",
            }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              style={{
                margin: "6px 0 0",
                fontFamily: "var(--wk-font-body)",
                fontSize: "var(--wk-size-body)",
                color: "var(--wk-text-secondary)",
              }}
            >
              {subtitle}
            </p>
          ) : null}
          {reference || date ? (
            <p
              style={{
                margin: "10px 0 0",
                fontFamily: "var(--wk-font-body)",
                fontSize: "var(--wk-size-xs)",
                letterSpacing: "0.04em",
                color: "var(--wk-text-caption)",
              }}
            >
              {[reference, date].filter(Boolean).join("  ·  ")}
            </p>
          ) : null}
        </div>
      </header>
    );
  }
  Object.assign(window.WK, { DocHeader });
})();

// ── components/document/DocFooter.jsx ──
(function () {
  const { Icon } = window.WK;
  /** Pie de página azul con logo y datos de contacto. Nunca queda solo en una hoja. */
  function DocFooter({
    logoSrc,
    telefono = "3102868105 · 3001978871",
    correo = "info@wakandatravel.com.co",
    web = "www.wakandatravel.com.co",
    legal = "Wakanda Travel S.A.S · NIT 901516423-6 · RNT 101438 · Cra 74b #49 - 60, Bogotá — Colombia · @wakanda.travel",
    style,
    ...rest
  }) {
    const item = {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--wk-font-body)",
      fontSize: "var(--wk-size-sm)",
      color: "var(--wk-white)",
    };
    return (
      <footer
        style={{
          background: "var(--wk-gradient-blue)",
          color: "var(--wk-white)",
          borderRadius: "var(--wk-radius-lg)",
          padding: "var(--wk-space-lg)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--wk-space-md)",
          breakInside: "avoid",
          ...style,
        }}
        {...rest}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "var(--wk-space-md)" }}>
          {logoSrc ? (
            <span
              style={{
                background: "var(--wk-white)",
                borderRadius: "var(--wk-radius-md)",
                padding: "6px",
                display: "inline-flex",
              }}
            >
              <img src={logoSrc} alt="Wakanda Travel" style={{ height: "48px", display: "block" }} />
            </span>
          ) : (
            <span
              style={{
                fontFamily: "var(--wk-font-display)",
                fontWeight: "var(--wk-weight-black)",
                fontSize: "18px",
              }}
            >
              Wakanda Travel
            </span>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={item}><Icon name="telefono" size={15} />{telefono}</span>
            <span style={item}><Icon name="correo" size={15} />{correo}</span>
            <span style={item}><Icon name="web" size={15} />{web}</span>
          </div>
        </div>
        <p
          style={{
            margin: 0,
            maxWidth: "300px",
            fontFamily: "var(--wk-font-body)",
            fontSize: "var(--wk-size-xs)",
            lineHeight: "var(--wk-leading-snug)",
            color: "rgba(255,255,255,0.88)",
            textAlign: "right",
            textWrap: "pretty",
          }}
        >
          {legal}
        </p>
      </footer>
    );
  }
  Object.assign(window.WK, { DocFooter });
})();

// ── components/document/PriceBlock.jsx ──
(function () {
  const { Badge } = window.WK;
  /** Bloque de precio: el dato que el cliente busca primero. */
  function PriceBlock({ label = "Desde", valor, unidad, nota, badges = [], style, ...rest }) {
    return (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--wk-gradient-blue)",
          color: "var(--wk-white)",
          borderRadius: "var(--wk-radius-lg)",
          boxShadow: "var(--wk-shadow-brand-3)",
          padding: "var(--wk-space-lg)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "var(--wk-space-md)",
          breakInside: "avoid",
          ...style,
        }}
        {...rest}
      >
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "var(--wk-trail-width)",
            height: "100%",
            background: "var(--wk-teal-600)",
          }}
        />
        <div style={{ minWidth: 0 }}>
          <span
            style={{
              display: "block",
              fontFamily: "var(--wk-font-display)",
              fontWeight: "var(--wk-weight-bold)",
              fontSize: "11px",
              letterSpacing: "var(--wk-tracking-eyebrow)",
              textTransform: "uppercase",
              color: "var(--wk-teal-300)",
              marginBottom: "6px",
            }}
          >
            {label}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "10px",
              flexWrap: "wrap",
              fontFamily: "var(--wk-font-display)",
              fontWeight: "var(--wk-weight-black)",
              fontSize: "var(--wk-size-display)",
              lineHeight: "var(--wk-leading-tight)",
              letterSpacing: "var(--wk-tracking-display)",
            }}
          >
            {valor}
            {unidad ? (
              <span
                style={{
                  fontFamily: "var(--wk-font-body)",
                  fontWeight: "var(--wk-weight-medium)",
                  fontSize: "var(--wk-size-body)",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {unidad}
              </span>
            ) : null}
          </span>
          {nota ? (
            <p
              style={{
                margin: "10px 0 0",
                fontFamily: "var(--wk-font-body)",
                fontStyle: "italic",
                fontSize: "var(--wk-size-sm)",
                lineHeight: "var(--wk-leading-snug)",
                color: "rgba(255,255,255,0.88)",
                maxWidth: "46ch",
                textWrap: "pretty",
              }}
            >
              {nota}
            </p>
          ) : null}
        </div>
        {badges.length ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--wk-space-sm)" }}>
            {badges.map((b, i) => (
              <Badge key={i} tone="teal" icon={b.icon}>
                {b.texto || b}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
  Object.assign(window.WK, { PriceBlock });
})();

// ── components/document/ChecklistPair.jsx ──
(function () {
  function Column({ titulo, items, tone }) {
    const isExcl = tone === "excluye";
    return (
      <div style={{ flex: "1 1 220px", minWidth: 0 }}>
        <h3
          style={{
            margin: "0 0 var(--wk-space-md)",
            fontFamily: "var(--wk-font-display)",
            fontWeight: "var(--wk-weight-black)",
            fontSize: "var(--wk-size-h3)",
            letterSpacing: "var(--wk-tracking-display)",
            color: isExcl ? "var(--wk-gray-600)" : "var(--wk-text-heading)",
          }}
        >
          {titulo}
        </h3>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "10px" }}>
          {items.map((it, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontFamily: "var(--wk-font-body)",
                fontSize: "var(--wk-size-body)",
                lineHeight: "var(--wk-leading-snug)",
                color: isExcl ? "var(--wk-text-secondary)" : "var(--wk-text-primary)",
                textWrap: "pretty",
              }}
            >
              <span aria-hidden="true" style={{ fontSize: "15px", lineHeight: 1.3, flex: "0 0 auto" }}>
                {it.emoji || (isExcl ? "❌" : "✅")}
              </span>
              <span>{it.texto || it}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  /** Caja INCLUYE / NO INCLUYE. Con ambas listas se reparte en dos columnas. */
  function ChecklistPair({
    incluye = [],
    noIncluye = [],
    tituloIncluye = "Incluye",
    tituloNoIncluye = "No incluye",
    style,
    ...rest
  }) {
    const doble = incluye.length > 0 && noIncluye.length > 0;
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--wk-space-lg)",
          background: "var(--wk-gray-100)",
          border: "1px solid var(--wk-border-default)",
          borderLeft: "var(--wk-border-accent-bar) solid var(--wk-blue-700)",
          borderRadius: "var(--wk-radius-sm)",
          padding: "var(--wk-space-md)",
          breakInside: "avoid",
          ...style,
        }}
        {...rest}
      >
        {incluye.length ? <Column titulo={tituloIncluye} items={incluye} tone="incluye" /> : null}
        {doble ? (
          <span aria-hidden="true" style={{ width: "1px", background: "var(--wk-border-default)", alignSelf: "stretch" }} />
        ) : null}
        {noIncluye.length ? <Column titulo={tituloNoIncluye} items={noIncluye} tone="excluye" /> : null}
      </div>
    );
  }
  Object.assign(window.WK, { ChecklistPair });
})();

// ── components/document/ItineraryDay.jsx ──
(function () {
  const { Badge } = window.WK;
  /** Un día del itinerario, en línea de tiempo vertical. */
  function ItineraryDay({
    dia,
    titulo,
    descripcion,
    actividades = [],
    foto,
    ultimo = false,
    style,
    ...rest
  }) {
    return (
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "56px minmax(0, 1fr)",
          gap: "var(--wk-space-md)",
          breakInside: "avoid",
          ...style,
        }}
        {...rest}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "var(--wk-radius-pill)",
              background: "var(--wk-gradient-blue)",
              color: "var(--wk-white)",
              display: "grid",
              placeItems: "center",
              boxShadow: "var(--wk-shadow-brand-2)",
              fontFamily: "var(--wk-font-display)",
              fontWeight: "var(--wk-weight-black)",
              fontSize: "20px",
              lineHeight: 1,
              flex: "0 0 auto",
            }}
          >
            {dia}
          </span>
          {!ultimo ? (
            <span aria-hidden="true" style={{ flex: 1, width: "2px", background: "var(--wk-blue-200)", minHeight: "24px" }} />
          ) : null}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: foto ? "minmax(0, 1fr) 190px" : "minmax(0, 1fr)",
            gap: "var(--wk-space-md)",
            background: "var(--wk-surface-card)",
            border: "1px solid var(--wk-border-light)",
            borderRadius: "var(--wk-radius-lg)",
            boxShadow: "var(--wk-shadow-brand-1)",
            padding: "var(--wk-space-md)",
            marginBottom: ultimo ? 0 : "var(--wk-space-md)",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <h3
              style={{
                margin: "0 0 6px",
                fontFamily: "var(--wk-font-display)",
                fontWeight: "var(--wk-weight-black)",
                fontSize: "var(--wk-size-h3)",
                lineHeight: "var(--wk-leading-heading)",
                color: "var(--wk-text-heading)",
                textWrap: "pretty",
              }}
            >
              {titulo}
            </h3>
            {descripcion ? (
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--wk-font-body)",
                  fontSize: "var(--wk-size-body)",
                  lineHeight: "var(--wk-leading-body)",
                  color: "var(--wk-text-secondary)",
                  textWrap: "pretty",
                }}
              >
                {descripcion}
              </p>
            ) : null}
            {actividades.length ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--wk-space-sm)", marginTop: "var(--wk-space-md)" }}>
                {actividades.map((a, i) => (
                  <Badge key={i} tone="blue" icon={a.icon}>
                    {a.texto || a}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
          {foto ? (
            <img
              src={foto}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                minHeight: "120px",
                objectFit: "cover",
                borderRadius: "var(--wk-radius-md)",
                border: "1px solid var(--wk-border-default)",
                display: "block",
              }}
            />
          ) : null}
        </div>
      </article>
    );
  }
  Object.assign(window.WK, { ItineraryDay });
})();

// ── components/document/PhotoGallery.jsx ──
(function () {
  /** Galería de fotos de venta. Máximo 4 por fila, recorte 3:2. */
  function PhotoGallery({ fotos = [], columnas = 4, ratio = "3 / 2", style, ...rest }) {
    if (!fotos.length) return null;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(columnas, fotos.length)}, minmax(0, 1fr))`,
          gap: "12px",
          breakInside: "avoid",
          ...style,
        }}
        {...rest}
      >
        {fotos.map((f, i) => {
          const src = typeof f === "string" ? f : f.src;
          const pie = typeof f === "string" ? null : f.pie;
          return (
            <figure key={i} style={{ margin: 0, minWidth: 0 }}>
              <span
                style={{
                  display: "block",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "var(--wk-radius-md)",
                  border: "1px solid var(--wk-border-default)",
                  boxShadow: "var(--wk-shadow-photo)",
                }}
              >
                <img
                  src={src}
                  alt={pie || ""}
                  style={{ display: "block", width: "100%", aspectRatio: ratio, objectFit: "cover" }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(31,63,99,0) 60%, rgba(31,63,99,0.18) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </span>
              {pie ? (
                <figcaption
                  style={{
                    marginTop: "6px",
                    fontFamily: "var(--wk-font-body)",
                    fontSize: "var(--wk-size-xs)",
                    color: "var(--wk-text-caption)",
                    textWrap: "pretty",
                  }}
                >
                  {pie}
                </figcaption>
              ) : null}
            </figure>
          );
        })}
      </div>
    );
  }
  Object.assign(window.WK, { PhotoGallery });
})();

// ── components/document/FactBox.jsx ──
(function () {
  const { Icon } = window.WK;
  /** Caja de cierre "Dato curioso" / "Dato WOW". */
  function FactBox({ emoji = "💡", titulo = "Dato curioso", texto, style, ...rest }) {
    if (!texto) return null;
    return (
      <aside
        style={{
          background: "var(--wk-pink-100)",
          border: "1px solid var(--wk-border-light)",
          borderLeft: "var(--wk-border-accent-bar) solid var(--wk-pink-300)",
          borderRadius: "var(--wk-radius-lg)",
          padding: "var(--wk-space-md)",
          display: "flex",
          gap: "var(--wk-space-md)",
          alignItems: "flex-start",
          breakInside: "avoid",
          ...style,
        }}
        {...rest}
      >
        <span aria-hidden="true" style={{ fontSize: "22px", lineHeight: 1.2, flex: "0 0 auto" }}>
          {emoji}
        </span>
        <div style={{ minWidth: 0 }}>
          <h4
            style={{
              margin: "0 0 4px",
              fontFamily: "var(--wk-font-display)",
              fontWeight: "var(--wk-weight-bold)",
              fontSize: "var(--wk-size-sm)",
              letterSpacing: "var(--wk-tracking-label)",
              textTransform: "uppercase",
              color: "var(--wk-text-heading)",
            }}
          >
            {titulo}
          </h4>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--wk-font-body)",
              fontSize: "var(--wk-size-body)",
              lineHeight: "var(--wk-leading-body)",
              color: "var(--wk-text-secondary)",
              textWrap: "pretty",
            }}
          >
            {texto}
          </p>
        </div>
      </aside>
    );
  }

  /** Fila de enlaces a video o documento en Drive. */
  function MediaLinks({ enlaces = [], style, ...rest }) {
    if (!enlaces.length) return null;
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--wk-space-sm)", ...style }} {...rest}>
        {enlaces.map((e, i) => (
          <a
            key={i}
            href={e.url}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              background: "var(--wk-white)",
              border: "1px solid var(--wk-border-default)",
              borderRadius: "var(--wk-radius-pill)",
              boxShadow: "var(--wk-shadow-1)",
              fontFamily: "var(--wk-font-body)",
              fontWeight: "var(--wk-weight-medium)",
              fontSize: "var(--wk-size-sm)",
              color: "var(--wk-text-link)",
              textDecoration: "none",
            }}
          >
            <span aria-hidden="true">{e.emoji || "📄"}</span>
            {e.texto}
            <span style={{ color: "var(--wk-teal-600)", display: "inline-flex" }}>
              <Icon name="siguiente" size={14} />
            </span>
          </a>
        ))}
      </div>
    );
  }
  Object.assign(window.WK, { FactBox, MediaLinks });
})();

// ── components/document/HeroBanner.jsx ──
(function () {
  const { Badge } = window.WK;
  /** Portada a sangre con foto: la apertura moderna de un itinerario o cotización. */
  function HeroBanner({
    foto,
    eyebrow,
    titulo,
    subtitulo,
    meta = [],
    logoSrc,
    alto = "320px",
    style,
    ...rest
  }) {
    return (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "var(--wk-radius-lg)",
          minHeight: alto,
          display: "flex",
          alignItems: "flex-end",
          background: "var(--wk-blue-900)",
          breakInside: "avoid",
          ...style,
        }}
        {...rest}
      >
        {foto ? (
          <img
            src={foto}
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : null}
        <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "var(--wk-scrim-photo)" }} />
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "70%",
            background: "linear-gradient(180deg, rgba(31,63,99,0) 0%, rgba(31,63,99,0.72) 60%, rgba(31,63,99,0.88) 100%)",
          }}
        />
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "var(--wk-trail-width)",
            height: "100%",
            background: "var(--wk-teal-600)",
            zIndex: 2,
          }}
        />
        {logoSrc ? (
          <img
            src={logoSrc}
            alt="Wakanda Travel"
            style={{
              position: "absolute",
              top: "var(--wk-space-md)",
              right: "var(--wk-space-md)",
              height: "56px",
              background: "var(--wk-white)",
              borderRadius: "var(--wk-radius-md)",
              padding: "4px",
              zIndex: 2,
            }}
          />
        ) : null}
        <div style={{ position: "relative", zIndex: 2, padding: "var(--wk-space-lg)", color: "var(--wk-white)", minWidth: 0 }}>
          {eyebrow ? (
            <span
              style={{
                display: "block",
                fontFamily: "var(--wk-font-display)",
                fontWeight: "var(--wk-weight-bold)",
                fontSize: "11px",
                letterSpacing: "var(--wk-tracking-eyebrow)",
                textTransform: "uppercase",
                color: "var(--wk-white)",
                marginBottom: "8px",
              }}
            >
              {eyebrow}
            </span>
          ) : null}
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--wk-font-display)",
              fontWeight: "var(--wk-weight-black)",
              fontSize: "var(--wk-size-display)",
              lineHeight: "var(--wk-leading-tight)",
              letterSpacing: "var(--wk-tracking-display)",
              textWrap: "balance",
            }}
          >
            {titulo}
          </h1>
          {subtitulo ? (
            <p
              style={{
                margin: "8px 0 0",
                fontFamily: "var(--wk-font-body)",
                fontSize: "var(--wk-size-lead)",
                lineHeight: "var(--wk-leading-snug)",
                color: "rgba(255,255,255,0.92)",
                maxWidth: "52ch",
                textWrap: "pretty",
              }}
            >
              {subtitulo}
            </p>
          ) : null}
          {meta.length ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--wk-space-sm)", marginTop: "var(--wk-space-md)" }}>
              {meta.map((m, i) => (
                <Badge key={i} tone="solid" icon={m.icon}>
                  {m.texto || m}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
  Object.assign(window.WK, { HeroBanner });
})();

// ── components/document/LegalSections.jsx ──
(function () {
  /* Cláusulas fijas de la confirmación: cuentas bancarias, para tener en cuenta,
     términos y condiciones, y recomendaciones de documentación.
     El TEXTO es legal y fijo — vive en generar_confirmacion.js y se pasa tal cual.
     Este componente solo le da forma; nunca reescribe ni resume el contenido. */

  function Bloque({ titulo, children, compacto = false, style }) {
    return (
      <section style={{ breakInside: "avoid", display: "grid", gap: compacto ? "5px" : "8px", ...style }}>
        <h4
          style={{
            margin: 0,
            fontFamily: "var(--wk-font-display)",
            fontWeight: "var(--wk-weight-bold)",
            fontSize: compacto ? "10px" : "12px",
            letterSpacing: "var(--wk-tracking-label)",
            textTransform: "uppercase",
            color: "var(--wk-text-heading)",
          }}
        >
          {titulo}
        </h4>
        <div
          style={{
            fontFamily: "var(--wk-font-body)",
            fontSize: compacto ? "9.5px" : "var(--wk-size-sm)",
            lineHeight: compacto ? 1.5 : "var(--wk-leading-body)",
            color: "var(--wk-text-secondary)",
            textAlign: compacto ? "justify" : "left",
            hyphens: compacto ? "auto" : "manual",
            textWrap: compacto ? "wrap" : "pretty",
          }}
        >
          {children}
        </div>
      </section>
    );
  }

  function Parrafos({ texto, compacto }) {
    const partes = Array.isArray(texto) ? texto : String(texto || "").split("\n").filter(Boolean);
    return (
      <div style={{ display: "grid", gap: compacto ? "4px" : "6px" }}>
        {partes.map((p, i) => (
          <p
            key={i}
            style={{ margin: 0, orphans: 2, widows: 2, breakInside: compacto ? "avoid" : "auto" }}
          >
            {p}
          </p>
        ))}
      </div>
    );
  }

  /** Cuentas bancarias: rejilla de fichas, una por banco. */
  function CuentasBancarias({ titulo = "Cuentas bancarias", cuentas = [], titular, style, ...rest }) {
    if (!cuentas.length) return null;
    return (
      <div
        style={{
          background: "var(--wk-blue-050)",
          border: "1px solid var(--wk-blue-200)",
          borderLeft: "var(--wk-border-accent-bar) solid var(--wk-blue-700)",
          borderRadius: "var(--wk-radius-sm)",
          padding: "var(--wk-space-md)",
          breakInside: "avoid",
          ...style,
        }}
        {...rest}
      >
        <Bloque titulo={titulo}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "var(--wk-space-md)" }}>
            {cuentas.map((c, i) => (
              <div key={i} style={{ minWidth: 0 }}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--wk-font-display)",
                    fontWeight: "var(--wk-weight-bold)",
                    fontSize: "var(--wk-size-sm)",
                    color: "var(--wk-blue-800)",
                    marginBottom: "2px",
                  }}
                >
                  {c.banco}
                </span>
                <span style={{ display: "block", fontVariantNumeric: "tabular-nums" }}>{c.numero}</span>
                {c.tipo ? <span style={{ display: "block", color: "var(--wk-text-caption)" }}>{c.tipo}</span> : null}
                {c.titular ? <span style={{ display: "block", color: "var(--wk-text-caption)" }}>{c.titular}</span> : null}
              </div>
            ))}
          </div>
          {titular ? (
            <p style={{ margin: "var(--wk-space-md) 0 0", color: "var(--wk-text-caption)" }}>{titular}</p>
          ) : null}
        </Bloque>
      </div>
    );
  }

  /** Las tres cláusulas en letra pequeña, a dos columnas simétricas.
   *  El texto es legal y va verbatim; lo único que se ajusta es la densidad. */
  function ClausulasLegales({
    paraTenerEnCuenta,
    terminos,
    documentacion,
    tituloCuenta = "Para tener en cuenta",
    tituloTerminos = "Términos y condiciones",
    tituloDocumentacion = "Recomendaciones de documentación",
    compacto = true,
    style,
    ...rest
  }) {
    const bloques = [
      [tituloCuenta, paraTenerEnCuenta],
      [tituloTerminos, terminos],
      [tituloDocumentacion, documentacion],
    ].filter(([, t]) => t && (Array.isArray(t) ? t.length : String(t).trim()));

    if (!bloques.length) return null;

    return (
      <div
        style={{
          background: "var(--wk-gray-100)",
          border: "1px solid var(--wk-border-default)",
          borderRadius: "var(--wk-radius-sm)",
          padding: "var(--wk-space-md)",
          ...(compacto
            ? { columnCount: 2, columnGap: "28px", columnRule: "1px solid var(--wk-border-default)" }
            : { display: "grid", gap: "var(--wk-space-md)" }),
          ...style,
        }}
        {...rest}
      >
        {bloques.map(([titulo, texto], i) => (
          <React.Fragment key={titulo}>
            {!compacto && i > 0 ? (
              <hr style={{ border: 0, height: "1px", background: "var(--wk-border-default)", margin: 0 }} />
            ) : null}
            <Bloque
              titulo={titulo}
              compacto={compacto}
              style={compacto ? { marginBottom: "12px", breakInside: "auto" } : null}
            >
              <Parrafos texto={texto} compacto={compacto} />
            </Bloque>
          </React.Fragment>
        ))}
      </div>
    );
  }

  /** Métodos de pago aceptados + avisos fijos. */
  function MetodosPago({ titulo = "Métodos de pago", metodos = [], avisoTarjeta, avisoAceptacion, style, ...rest }) {
    if (!metodos.length && !avisoTarjeta && !avisoAceptacion) return null;
    return (
      <div
        style={{
          background: "var(--wk-white)",
          border: "1px solid var(--wk-border-default)",
          borderRadius: "var(--wk-radius-sm)",
          padding: "var(--wk-space-md)",
          breakInside: "avoid",
          ...style,
        }}
        {...rest}
      >
        <Bloque titulo={titulo} compacto>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: avisoTarjeta || avisoAceptacion ? "10px" : 0 }}>
            {metodos.map((m, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "4px 11px",
                  background: "var(--wk-gray-100)",
                  border: "1px solid var(--wk-border-light)",
                  borderRadius: "var(--wk-radius-pill)",
                  fontFamily: "var(--wk-font-body)",
                  fontWeight: "var(--wk-weight-medium)",
                  fontSize: "11px",
                  color: "var(--wk-text-primary)",
                }}
              >
                <span aria-hidden="true">{m.emoji}</span>
                {m.texto}
              </span>
            ))}
          </div>
          {avisoTarjeta ? (
            <p style={{ margin: "0 0 6px", color: "var(--wk-blue-800)", fontWeight: "var(--wk-weight-medium)" }}>{avisoTarjeta}</p>
          ) : null}
          {avisoAceptacion ? <p style={{ margin: 0 }}>{avisoAceptacion}</p> : null}
        </Bloque>
      </div>
    );
  }
  Object.assign(window.WK, { CuentasBancarias, ClausulasLegales, MetodosPago });
})();
