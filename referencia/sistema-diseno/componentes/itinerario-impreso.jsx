/* Pantalla: itinerario impreso del viajero — la versión en papel de la vista web. */
(function () {
  const { HeroBanner, SectionTitle, Card, InfoField, Badge, ItineraryDay, PhotoGallery, ChecklistPair, FactBox, DocFooter, Icon } = window.WK;

  const DIAS = [
    {
      dia: 1,
      titulo: "Llegada a Río de Janeiro",
      descripcion: "Recepción en el aeropuerto Galeão y traslado privado a Copacabana. Tarde libre en la orla.",
      actividades: [{ texto: "Traslado privado", icon: "traslado" }, { texto: "Check-in 15:00", icon: "hotel" }],
      foto: "../../assets/photos/ciudad-rio.png",
    },
    {
      dia: 2,
      titulo: "Río al completo",
      descripcion: "Cristo Redentor por el tren del Corcovado, Escadaria Selarón y Pan de Azúcar al atardecer. Almuerzo incluido en Santa Teresa.",
      actividades: [{ texto: "Guía en español", icon: "personas" }, { texto: "Almuerzo", icon: "alimentacion" }],
      foto: "../../assets/photos/monumentos-mundo.png",
    },
    {
      dia: 3,
      titulo: "Ilha Grande",
      descripcion: "Navegación entre islas con paradas de baño en Lagoa Azul. Regreso al hotel al final de la tarde.",
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

  const CONTACTOS = [
    { icon: "telefono", label: "Asesora de viaje", value: "Laura Gómez · +57 320 000 0000" },
    { icon: "seguro", label: "Asistencia 24/7", value: "+57 601 000 0000" },
    { icon: "destino", label: "Proveedor en destino", value: "Rio Receptivo · +55 21 0000 0000" },
  ];

  function Hotel({ nombre, ciudad, noches, regimen, estrellas, foto }) {
    return (
      <Card padding="0" style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "140px minmax(0,1fr)", breakInside: "avoid" }}>
        <img src={foto} alt="" style={{ width: "100%", height: "100%", minHeight: "118px", objectFit: "cover", display: "block" }} />
        <div style={{ padding: "var(--wk-space-md)", minWidth: 0 }}>
          <div style={{ display: "flex", gap: "5px", color: "var(--wk-teal-700)", marginBottom: "4px" }}>
            {Array.from({ length: estrellas }).map((_, i) => <Icon key={i} name="estrella" size={12} />)}
          </div>
          <h3 style={{ margin: "0 0 2px", fontFamily: "var(--wk-font-display)", fontWeight: 900, fontSize: "var(--wk-size-h3)", color: "var(--wk-text-heading)" }}>
            {nombre}
          </h3>
          <p style={{ margin: "0 0 10px", fontFamily: "var(--wk-font-body)", fontSize: "var(--wk-size-sm)", color: "var(--wk-text-secondary)" }}>
            {ciudad}
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Badge tone="blue" icon="hotel">{noches}</Badge>
            <Badge tone="teal" icon="alimentacion">{regimen}</Badge>
          </div>
        </div>
      </Card>
    );
  }

  function ItinerarioImpreso({ logo = "../../assets/logo-wakanda.png" }) {
    return (
      <>
        <HeroBanner
          foto="../../assets/photos/ciudad-rio.png"
          logoSrc={logo}
          alto="300px"
          eyebrow="Tu viaje · Ref. WKT-2026-0512"
          titulo="Río de Janeiro, 4 días"
          subtitulo="Copacabana, Cristo Redentor e Ilha Grande, con guía en español."
          meta={[
            { texto: "11 – 14 mayo 2026", icon: "calendario" },
            { texto: "2 viajeros", icon: "personas" },
          ]}
        />

        <div style={{ height: "var(--wk-space-xl)" }} />

        <SectionTitle icon="info" eyebrow="Lo esencial" level={3}>Resumen</SectionTitle>
        <div style={{ height: "var(--wk-space-md)" }} />
        <Card>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "var(--wk-space-md)" }}>
            <InfoField icon="destino" label="Destino" value="Río de Janeiro, Brasil" />
            <InfoField icon="duracion" label="Duración" value="4 días, 3 noches" />
            <InfoField icon="vuelo" label="Vuelo de ida" value="11 mayo · 05:00 → 16:35 · escala en Lima" underline={false} />
            <InfoField icon="vuelo" label="Vuelo de regreso" value="14 mayo · 18:20 → 06:05 (+1)" underline={false} />
          </div>
        </Card>

        <div style={{ height: "var(--wk-space-md)" }} />

        <Card variant="bordered" tone="accent" style={{ borderLeftColor: "var(--wk-teal-600)" }}>
          <span
            style={{
              display: "block",
              fontFamily: "var(--wk-font-display)",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "var(--wk-tracking-label)",
              textTransform: "uppercase",
              color: "var(--wk-text-heading)",
              marginBottom: "var(--wk-space-md)",
            }}
          >
            Si algo pasa, llama aquí
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--wk-space-md)" }}>
            {CONTACTOS.map((c) => (
              <InfoField key={c.label} icon={c.icon} label={c.label} value={c.value} underline={false} />
            ))}
          </div>
        </Card>

        <div style={{ height: "var(--wk-space-xl)" }} />

        <SectionTitle icon="mapa" eyebrow="Día a día" level={3}>Tu itinerario</SectionTitle>
        <div style={{ height: "var(--wk-space-lg)" }} />
        {DIAS.map((d) => <ItineraryDay key={d.dia} {...d} />)}

        <div style={{ height: "var(--wk-space-lg)" }} />

        <SectionTitle icon="hotel" eyebrow="Dónde duermes" level={3}>Alojamiento</SectionTitle>
        <div style={{ height: "var(--wk-space-md)" }} />
        <div style={{ display: "grid", gap: "var(--wk-space-md)" }}>
          <Hotel nombre="Windsor California" ciudad="Copacabana, Río de Janeiro" noches="3 noches" regimen="Desayuno" estrellas={4} foto="../../assets/photos/destino-vertical.png" />
          <Hotel nombre="Pousada Naturalia" ciudad="Ilha Grande" noches="Day use" regimen="Almuerzo" estrellas={3} foto="../../assets/photos/playa-sombrilla.png" />
        </div>

        <div style={{ height: "var(--wk-space-xl)" }} />

        <PhotoGallery
          columnas={4}
          fotos={[
            "../../assets/photos/ciudad-rio.png",
            "../../assets/photos/monumentos-mundo.png",
            "../../assets/photos/playa-sombrilla.png",
            "../../assets/photos/cancun-aerea.png",
          ]}
        />

        <div style={{ height: "var(--wk-space-xl)" }} />

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

        <DocFooter logoSrc={logo} legal="Wakanda Travel · Lleva esta hoja contigo durante el viaje. ¿Dudas? Escríbenos en cualquier momento." />
      </>
    );
  }

  window.WKKit = Object.assign(window.WKKit || {}, { ItinerarioImpreso });
})();
