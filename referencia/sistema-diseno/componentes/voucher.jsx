/* Pantalla: voucher de servicio — la hoja que el viajero presenta en el mostrador. */
(function () {
  const { DocHeader, Card, InfoField, Badge, ChecklistPair, ClausulasLegales, MetodosPago, CuentasBancarias, DocFooter, Icon, SectionTitle } = window.WK;

  const L = window.WKLegal;

  function CodigoSlot({ valor }) {
    return (
      <div style={{ display: "grid", gap: "8px", justifyItems: "center" }}>
        <div
          style={{
            width: "104px",
            height: "104px",
            borderRadius: "var(--wk-radius-md)",
            border: "1px solid var(--wk-border-default)",
            background:
              "repeating-linear-gradient(45deg, var(--wk-gray-100) 0 6px, var(--wk-white) 6px 12px)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "9px",
              letterSpacing: ".04em",
              color: "var(--wk-text-caption)",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            código QR
            <br />
            del voucher
          </span>
        </div>
        <span
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "11px",
            letterSpacing: ".08em",
            color: "var(--wk-text-secondary)",
          }}
        >
          {valor}
        </span>
      </div>
    );
  }

  function Voucher({ logo = "../../assets/logo-wakanda.png" }) {
    return (
      <>
        <DocHeader
          logoSrc={logo}
          title="Voucher de servicio"
          subtitle="Tour Isla Saona · día completo"
          reference="Localizador WKT-88214-SA"
          date="Emitido el 2 de abril de 2026"
        />

        <div style={{ height: "var(--wk-space-lg)" }} />

        {/* Bloque de presentación: lo único que el proveedor necesita leer. */}
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
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--wk-space-lg)",
            breakInside: "avoid",
          }}
        >
          <span
            aria-hidden="true"
            style={{ position: "absolute", top: 0, left: 0, width: "var(--wk-trail-width)", height: "100%", background: "var(--wk-teal-600)" }}
          />
          <div style={{ minWidth: 0 }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--wk-font-display)",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "var(--wk-tracking-eyebrow)",
                textTransform: "uppercase",
                color: "var(--wk-teal-300)",
                marginBottom: "6px",
              }}
            >
              Localizador
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--wk-font-display)",
                fontWeight: 900,
                fontSize: "var(--wk-size-display)",
                lineHeight: 1.1,
                letterSpacing: "var(--wk-tracking-display)",
              }}
            >
              WKT-88214-SA
            </span>
            <p
              style={{
                margin: "10px 0 0",
                fontFamily: "var(--wk-font-body)",
                fontSize: "var(--wk-size-body)",
                color: "rgba(255,255,255,.92)",
                maxWidth: "40ch",
                textWrap: "pretty",
              }}
            >
              Presenta esta hoja, impresa o en el celular, junto con tu documento de identidad.
            </p>
          </div>
          <span style={{ background: "var(--wk-white)", borderRadius: "var(--wk-radius-md)", padding: "10px" }}>
            <CodigoSlot valor="WKT-88214-SA" />
          </span>
        </div>

        <div style={{ height: "var(--wk-space-xl)" }} />

        <SectionTitle icon="info" eyebrow="El servicio" level={3}>Datos del voucher</SectionTitle>
        <div style={{ height: "var(--wk-space-md)" }} />
        <Card>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--wk-space-md)" }}>
            <InfoField icon="personas" label="Titular" value="María Fernanda Ríos" />
            <InfoField icon="personas" label="Pasajeros" value="2 adultos" />
            <InfoField icon="calendario" label="Fecha del servicio" value="14 de mayo de 2026" />
            <InfoField icon="duracion" label="Hora de recogida" value="07:15" underline={false} />
            <InfoField icon="traslado" label="Punto de encuentro" value="Lobby del hotel" underline={false} />
            <InfoField icon="viaje" label="Proveedor" value="Saona Dreams Tours" underline={false} />
          </div>
        </Card>

        <div style={{ height: "var(--wk-space-lg)" }} />

        <Card variant="bordered" tone="accent" style={{ borderLeftColor: "var(--wk-teal-600)" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ color: "var(--wk-teal-700)", display: "inline-flex", flex: "0 0 auto" }}>
              <Icon name="seguro" size={20} />
            </span>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--wk-font-display)",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "var(--wk-tracking-label)",
                  textTransform: "uppercase",
                  color: "var(--wk-text-heading)",
                  marginBottom: "4px",
                }}
              >
                Antes de salir
              </span>
              <p style={{ margin: 0, fontFamily: "var(--wk-font-body)", fontSize: "var(--wk-size-body)", lineHeight: "var(--wk-leading-body)", color: "var(--wk-text-secondary)", textWrap: "pretty" }}>
                Llega 10 minutos antes de la hora de recogida. Lleva traje de baño, protector solar
                y documento de identidad. El servicio no espera pasajeros fuera de horario.
              </p>
            </div>
          </div>
        </Card>

        <div style={{ height: "var(--wk-space-lg)" }} />

        <ChecklistPair
          incluye={[
            { emoji: "🚗", texto: "Traslado de ida y regreso desde el hotel" },
            { emoji: "🛥️", texto: "Navegación en catamarán y lancha rápida" },
            { emoji: "🍽️", texto: "Almuerzo buffet en la isla" },
            { emoji: "🍹", texto: "Bebidas nacionales a bordo" },
          ]}
          noIncluye={[
            { emoji: "❌", texto: "Propinas al personal" },
            { emoji: "❌", texto: "Fotografías profesionales" },
          ]}
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

        <DocFooter
          logoSrc={logo}
          legal="Wakanda Travel · Voucher válido únicamente para la fecha y el servicio indicados. No transferible."
        />
      </>
    );
  }

  window.WKKit = Object.assign(window.WKKit || {}, { Voucher });
})();
