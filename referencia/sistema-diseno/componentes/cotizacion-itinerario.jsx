/* Pantalla: cotización de paquete con itinerario día a día. */
(function () {
  const { HeroBanner, PriceBlock, SectionTitle, Card, InfoField, ItineraryDay, ChecklistPair, FactBox, DocFooter } = window.WK;

  const DIAS = [
    {
      dia: 1,
      titulo: "Llegada a Río de Janeiro",
      descripcion:
        "Recepción en el aeropuerto internacional Galeão y traslado privado al hotel en Copacabana. Tarde libre para caminar la orla y reconocer el barrio.",
      actividades: [{ texto: "Traslado privado", icon: "traslado" }, { texto: "Check-in 15:00", icon: "hotel" }],
      foto: "../../assets/photos/ciudad-rio.png",
    },
    {
      dia: 2,
      titulo: "Río al completo",
      descripcion:
        "Cristo Redentor por el tren del Corcovado, Escadaria Selarón y Pan de Azúcar al atardecer. Almuerzo incluido en Santa Teresa.",
      actividades: [{ texto: "Guía en español", icon: "personas" }, { texto: "Almuerzo", icon: "alimentacion" }],
      foto: "../../assets/photos/monumentos-mundo.png",
    },
    {
      dia: 3,
      titulo: "Ilha Grande",
      descripcion:
        "Navegación entre islas con paradas para baño en Lagoa Azul. Regreso al hotel al final de la tarde.",
      actividades: [{ texto: "Día completo", icon: "duracion" }],
      foto: "../../assets/photos/playa-sombrilla.png",
    },
    {
      dia: 4,
      titulo: "Día libre y regreso",
      descripcion: "Mañana libre en Copacabana y traslado al aeropuerto según el horario del vuelo.",
      actividades: [{ texto: "Traslado de salida", icon: "traslado" }],
      ultimo: true,
    },
  ];

  function CotizacionItinerario({ logo = "../../assets/logo-wakanda.png" }) {
    return (
      <>
        <HeroBanner
          foto="../../assets/photos/ciudad-rio.png"
          logoSrc={logo}
          eyebrow="Cotización · Ref. WKT-2026-0512"
          titulo="Río de Janeiro, 4 días"
          subtitulo="Copacabana, Cristo Redentor e Ilha Grande, con guía en español."
          meta={[{ texto: "4 días", icon: "duracion" }, { texto: "2 adultos", icon: "personas" }, { texto: "Mayo 2026", icon: "calendario" }]}
        />

        <div style={{ height: "var(--wk-space-lg)" }} />

        <PriceBlock
          label="Precio por persona"
          valor="COP 6.290.000"
          unidad="acomodación doble"
          nota="Tarifa vigente hasta el 30 de abril de 2026."
        />

        <div style={{ height: "var(--wk-space-xl)" }} />

        <SectionTitle icon="info" eyebrow="Lo esencial">Detalles</SectionTitle>
        <div style={{ height: "var(--wk-space-md)" }} />
        <Card variant="bordered" tone="brand">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--wk-space-md)" }}>
            <InfoField icon="hotel" label="Hotel" value="Windsor California · Copacabana" underline={false} />
            <InfoField icon="calendario" label="Fechas" value="11 al 14 de mayo de 2026" underline={false} />
            <InfoField icon="vuelo" label="Vuelos" value="Bogotá – Río, escala en Lima" underline={false} />
          </div>
        </Card>

        <div style={{ height: "var(--wk-space-xl)" }} />

        <SectionTitle icon="mapa" eyebrow="Día a día">Itinerario</SectionTitle>
        <div style={{ height: "var(--wk-space-lg)" }} />
        {DIAS.map((d) => (
          <ItineraryDay key={d.dia} {...d} />
        ))}

        <div style={{ height: "var(--wk-space-lg)" }} />

        <ChecklistPair
          incluye={[
            { emoji: "✈️", texto: "Tiquetes aéreos con una escala" },
            { emoji: "🏨", texto: "3 noches con desayuno" },
            { emoji: "🎒", texto: "Excursiones descritas en el itinerario" },
            { emoji: "🚖", texto: "Traslados de llegada y salida" },
          ]}
          noIncluye={[
            { emoji: "❌", texto: "Almuerzos y cenas no descritos" },
            { emoji: "❌", texto: "Propinas y gastos personales" },
          ]}
        />

        <div style={{ height: "var(--wk-space-lg)" }} />

        <FactBox texto="El Cristo Redentor recibe varios cientos de rayos cada año; por eso lo restauran al terminar cada temporada de lluvias." />

        <div style={{ height: "var(--wk-space-lg)" }} />

        <DocFooter logoSrc={logo} />
      </>
    );
  }

  window.WKKit = Object.assign(window.WKKit || {}, { CotizacionItinerario });

})();
