/* Pantalla: confirmación de reserva ya pagada. Nunca muestra precio. */
(function () {
  const { DocHeader, SectionTitle, Card, InfoField, Badge, ChecklistPair, PhotoGallery, FactBox, DocFooter, CuentasBancarias, ClausulasLegales, MetodosPago } = window.WK;
  const L = window.WKLegal;

  function ConfirmacionReserva({ logo = "../../assets/logo-wakanda.png" }) {
    return (
      <>
        <DocHeader
          logoSrc={logo}
          title="Confirmación de reserva"
          subtitle="Tour Ciudad Colonial · Santo Domingo"
          reference="Reserva WKT-88214"
          date="Confirmada el 2 de abril de 2026"
        />

        <div style={{ height: "var(--wk-space-lg)" }} />

        <Card variant="bordered" tone="accent" style={{ borderLeftColor: "var(--wk-teal-600)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "var(--wk-space-md)" }}>
            <div>
              <span style={{ display: "block", fontFamily: "var(--wk-font-display)", fontWeight: 700, fontSize: "11px", letterSpacing: "var(--wk-tracking-eyebrow)", textTransform: "uppercase", color: "var(--wk-teal-700)", marginBottom: "6px" }}>
                Número de reserva
              </span>
              <span style={{ fontFamily: "var(--wk-font-display)", fontWeight: 900, fontSize: "32px", lineHeight: 1.1, letterSpacing: "var(--wk-tracking-display)", color: "var(--wk-blue-800)" }}>
                WKT-88214
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
              <Badge tone="success" icon="check">Pago confirmado</Badge>
              <span style={{ fontFamily: "var(--wk-font-body)", fontSize: "var(--wk-size-sm)", color: "var(--wk-text-secondary)" }}>
                Titular: María Fernanda Ríos
              </span>
            </div>
          </div>
        </Card>

        <div style={{ height: "var(--wk-space-xl)" }} />

        <SectionTitle icon="info" eyebrow="Tu servicio">Detalles del tour</SectionTitle>
        <div style={{ height: "var(--wk-space-md)" }} />
        <Card>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--wk-space-md)" }}>
            <InfoField icon="destino" label="Destino" value="Santo Domingo, República Dominicana" />
            <InfoField icon="calendario" label="Fecha" value="14 de mayo de 2026" />
            <InfoField icon="duracion" label="Duración" value="4 horas" />
            <InfoField icon="personas" label="Pasajeros" value="2 adultos" underline={false} />
            <InfoField icon="traslado" label="Punto de encuentro" value="Lobby del hotel, 08:30" underline={false} />
            <InfoField icon="viaje" label="Idioma del guía" value="Español" underline={false} />
          </div>
        </Card>

        <div style={{ height: "var(--wk-space-xl)" }} />

        <PhotoGallery
          columnas={2}
          fotos={[
            { src: "../../assets/photos/monumentos-mundo.png", pie: "Zona colonial" },
            { src: "../../assets/photos/destino-vertical.png", pie: "Recorrido a pie" },
          ]}
        />

        <div style={{ height: "var(--wk-space-xl)" }} />

        <ChecklistPair
          incluye={[
            { emoji: "🚖", texto: "Recogida y regreso al hotel" },
            { emoji: "👤", texto: "Guía certificado en español" },
            { emoji: "🎟️", texto: "Entradas a la Catedral Primada y al Alcázar de Colón" },
            { emoji: "💧", texto: "Hidratación durante el recorrido" },
          ]}
        />

        <div style={{ height: "var(--wk-space-lg)" }} />

        <SectionTitle level={3} icon="seguro" rule={false}>Recomendaciones</SectionTitle>
        <div style={{ height: "var(--wk-space-sm)" }} />
        <Card variant="bordered" tone="muted">
          <p style={{ margin: 0, fontFamily: "var(--wk-font-body)", fontSize: "var(--wk-size-body)", lineHeight: "var(--wk-leading-body)", color: "var(--wk-text-secondary)", textWrap: "pretty" }}>
            Lleva calzado cómodo, protector solar y documento de identidad. El recorrido es a pie sobre calles empedradas.
            Si necesitas cancelar, avísanos con 24 horas de anticipación.
          </p>
        </Card>

        <div style={{ height: "var(--wk-space-lg)" }} />

        <FactBox
          emoji="💡"
          texto="La Catedral Primada de América, en esta misma zona colonial, fue la primera catedral construida en el continente: se terminó en 1540."
        />

        <div style={{ height: "var(--wk-space-xl)" }} />
        <SectionTitle icon="dinero" eyebrow="Condiciones" level={3}>Información adicional</SectionTitle>
        <div style={{ height: "var(--wk-space-md)" }} />
        <CuentasBancarias cuentas={L.cuentas} titular={L.titularCuentas} />
        <div style={{ height: "var(--wk-space-sm)" }} />
        <MetodosPago
          metodos={L.metodosPago}
          avisoTarjeta={L.avisoTarjeta}
          avisoAceptacion={L.avisoAceptacion}
        />
        <div style={{ height: "var(--wk-space-sm)" }} />
        <ClausulasLegales
          paraTenerEnCuenta={L.paraTenerEnCuenta}
          terminos={L.terminos}
          documentacion={L.documentacion}
        />

        <div style={{ height: "var(--wk-space-lg)" }} />

        <DocFooter logoSrc={logo} legal="Wakanda Travel · Servicio confirmado y pagado. Conserva este documento durante tu viaje." />
      </>
    );
  }

  window.WKKit = Object.assign(window.WKKit || {}, { ConfirmacionReserva });

})();
