/* Pantalla: cotización simple de una página. */
(function () {
  const { DocHeader, PriceBlock, SectionTitle, Card, InfoField, ChecklistPair, PhotoGallery, FactBox, MediaLinks, DocFooter } = window.WK;

  function CotizacionSimple({ logo = "../../assets/logo-wakanda.png" }) {
    return (
      <>
        <DocHeader
          logoSrc={logo}
          title="Cotización: Punta Cana"
          subtitle="7 días · 6 noches · todo incluido"
          reference="Ref. WKT-2026-0418"
          date="18 de abril de 2026"
        />

        <div style={{ height: "var(--wk-space-lg)" }} />

        <PriceBlock
          label="Desde"
          valor="COP 4.850.000"
          unidad="por persona en acomodación doble"
          nota="Valor sujeto a disponibilidad aérea y hotelera al momento de reservar."
          badges={[
            { texto: "6 noches", icon: "duracion" },
            { texto: "2 adultos", icon: "personas" },
          ]}
        />

        <div style={{ height: "var(--wk-space-xl)" }} />

        <SectionTitle icon="info" eyebrow="Lo esencial">Detalles</SectionTitle>
        <div style={{ height: "var(--wk-space-md)" }} />
        <Card>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--wk-space-md)" }}>
            <InfoField icon="hotel" label="Hotel" value="Hard Rock Hotel & Casino Punta Cana" />
            <InfoField icon="calendario" label="Fechas" value="11 al 17 de mayo de 2026" />
            <InfoField icon="duracion" label="Duración" value="7 días, 6 noches" />
            <InfoField icon="personas" label="Viajeros" value="2 adultos" underline={false} />
            <InfoField icon="vuelo" label="Vuelos" value="Bogotá – Punta Cana, directo" underline={false} />
            <InfoField icon="alimentacion" label="Régimen" value="Todo incluido" underline={false} />
          </div>
        </Card>

        <div style={{ height: "var(--wk-space-xl)" }} />

        <SectionTitle icon="foto" eyebrow="El resort">Fotos</SectionTitle>
        <div style={{ height: "var(--wk-space-md)" }} />
        <PhotoGallery
          columnas={3}
          fotos={[
            { src: "../../assets/photos/cancun-aerea.png", pie: "Zona hotelera" },
            { src: "../../assets/photos/playa-sombrilla.png", pie: "Playa privada" },
            { src: "../../assets/photos/ciudad-rio.png", pie: "Excursión opcional" },
          ]}
        />

        <div style={{ height: "var(--wk-space-xl)" }} />

        <ChecklistPair
          incluye={[
            { emoji: "✈️", texto: "Tiquetes aéreos ida y regreso, ruta Bogotá – Punta Cana" },
            { emoji: "🏨", texto: "6 noches en habitación Deluxe Sky Terrace" },
            { emoji: "🍽️", texto: "Régimen todo incluido: alimentación y bebidas" },
            { emoji: "🚖", texto: "Traslados privados aeropuerto – hotel – aeropuerto" },
            { emoji: "🩺", texto: "Asistencia médica internacional" },
          ]}
          noIncluye={[
            { emoji: "❌", texto: "Gastos no descritos en el plan" },
            { emoji: "❌", texto: "Propinas y gastos personales" },
            { emoji: "❌", texto: "Tours opcionales" },
          ]}
        />

        <div style={{ height: "var(--wk-space-lg)" }} />

        <MediaLinks
          enlaces={[
            { emoji: "🎥", texto: "Ver video del resort", url: "#" },
            { emoji: "📄", texto: "Ficha completa del hotel", url: "#" },
          ]}
        />

        <div style={{ height: "var(--wk-space-lg)" }} />

        <FactBox texto="Bávaro y Punta Cana suman más de 50 kilómetros de playa continua de arena blanca: es una de las franjas costeras más largas del Caribe." />

        <div style={{ height: "var(--wk-space-lg)" }} />

        <DocFooter logoSrc={logo} />
      </>
    );
  }

  window.WKKit = Object.assign(window.WKKit || {}, { CotizacionSimple });

})();
