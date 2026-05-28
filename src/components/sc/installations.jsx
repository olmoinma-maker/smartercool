import React from "react";
import { Icon } from "./icons";


// ---------- Installations gallery ----------
// Interactive bento-style grid of real customer installations.
// Click any tile to open a fullscreen lightbox with prev/next navigation.

const INSTALLATIONS = [
  { src: "/assets/installations/01-queseria.png",        title: "Quesería artesanal",     place: "Sala de producción · climatización con cooling pad",      tag: "Alimentación",     span: "tile-hero" },
  { src: "/assets/installations/08-extractor-nave.png",  title: "Nave industrial",        place: "Extractor AIRMAX GL — almacén logístico",                 tag: "Extracción",       span: "tile-tall" },
  { src: "/assets/installations/12-establo-hvls.png",    title: "Establo lechero",        place: "HVLS SC-6300 — ganadería de alta producción",             tag: "Ganadería",        span: "tile-tall" },
  { src: "/assets/installations/02-galletas.png",        title: "Línea de empacado",      place: "Box BT 8000 — fábrica de galletas",                       tag: "Manufactura",      span: "tile-wide" },
  { src: "/assets/installations/09-patio-exterior.png",  title: "Patio exterior",         place: "SCMXL 18000 — uso residencial al aire libre",             tag: "Residencial",      span: "tile-sq" },
  { src: "/assets/installations/10-taller-mecanico.png", title: "Taller mecánico",        place: "SCMXL — taller automotriz, confort para operarios",       tag: "Talleres",         span: "tile-sq" },
  { src: "/assets/installations/06-ganaderia.png",       title: "Granja lechera",         place: "Clásico 18000 — establo abierto, bienestar animal",       tag: "Ganadería",        span: "tile-tall" },
  { src: "/assets/installations/05-almacen-bebidas.png", title: "Almacén de bebidas",     place: "Box 18000 — centro logístico de distribución",            tag: "Logística",        span: "tile-tall" },
  { src: "/assets/installations/04-porcina.png",         title: "Granja porcina",         place: "SCMXL — control térmico en zona de cría",                 tag: "Ganadería",        span: "tile-tall" },
  { src: "/assets/installations/14-hospital.png",        title: "Hospital",               place: "HVLS instalado en zona de recepción",                     tag: "Salud",            span: "tile-tall" },
  { src: "/assets/installations/03-alimentos.png",       title: "Procesado de alimentos", place: "Slim — línea de envasado en planta certificada",          tag: "Alimentación",     span: "tile-wide-sm" },
  { src: "/assets/installations/07-taller-ensamble.png", title: "Ensamble de equipos",    place: "Taller propio — montaje de unidades SmarterCool",        tag: "Producción",       span: "tile-wide-sm" },
  { src: "/assets/installations/13-instalacion-hvls.png",title: "Instalación HVLS",       place: "Montaje de SC-5200 en techo de nave",                     tag: "Instalación",      span: "tile-wide-sm" },
  { src: "/assets/installations/11-almacen-iluminado.png",title: "Centro de pruebas",     place: "Box con BT — sala de demo en almacén de cliente",         tag: "Showroom",         span: "tile-full" },
];

function Lightbox({ items, index, onClose, onPrev, onNext }) {
  React.useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index]);

  if (index === null) return null;
  const it = items[index];

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lb-btn lb-close" onClick={(e)=>{e.stopPropagation(); onClose();}} aria-label="Cerrar">
        <Icon.Close size={18}/>
      </button>
      <button className="lb-btn lb-prev" onClick={(e)=>{e.stopPropagation(); onPrev();}} aria-label="Anterior">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button className="lb-btn lb-next" onClick={(e)=>{e.stopPropagation(); onNext();}} aria-label="Siguiente">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div className="lb-counter">[ {(index+1).toString().padStart(2,"0")} / {items.length.toString().padStart(2,"0")} ]</div>
      <div className="lb-stage" onClick={(e)=>e.stopPropagation()}>
        <img src={it.src} alt={it.title}/>
      </div>
    </div>
  );
}

export default function Installations() {
  const [idx, setIdx] = React.useState(null);
  const items = INSTALLATIONS;
  const open = (i) => setIdx(i);
  const close = () => setIdx(null);
  const prev = () => setIdx(i => (i + items.length - 1) % items.length);
  const next = () => setIdx(i => (i + 1) % items.length);

  return (
    <section className="block installations" id="instalaciones">
      <div className="section-head">
        <div>
          <div className="eyebrow">— Instalaciones / En operación</div>
          <h2>Equipos<br/><span className="stroke">en obra</span> real.</h2>
        </div>
        <div className="sub">
          <p style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--teal)", margin:"0 0 16px"}}>Galería de proyectos</p>
          <p style={{margin:0}}>Una selección de instalaciones de clientes donde nuestros enfriadores evaporativos, HVLS y extractores trabajan a diario en industrias, ganaderías, talleres y centros logísticos. Pulsa cualquier imagen para verla a pantalla completa.</p>
        </div>
      </div>

      <div className="inst-meta">
        <span>[ 13 PROYECTOS ACTIVOS ]</span>
        <span>EVAPORATIVOS · HVLS · EXTRACTORES</span>
        <span>2023 — 2026</span>
      </div>

      <div className="inst-grid">
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            className={`inst-tile ${it.span}`}
            onClick={() => open(i)}
            style={{backgroundImage: `url(${it.src})`}}
          >
            <span className="inst-num">[ {(i+1).toString().padStart(2,"0")} ]</span>
            <span className="inst-overlay">
              <span className="inst-title">{it.title}</span>
              <span className="inst-place">{it.place}</span>
              <span className="inst-zoom">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                Abrir
              </span>
            </span>
          </button>
        ))}
      </div>

      <Lightbox items={items} index={idx} onClose={close} onPrev={prev} onNext={next}/>
    </section>
  );
}

window.Installations = Installations;
