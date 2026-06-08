import React from "react";
import { Icon, ProductArt } from "./icons";
import { PRODUCTS, CATEGORIES } from "./data";
import Installations from "./installations";
import ProductDetail from "./product-detail";
import { setupReveal } from "./reveal.js";

export const WA_URL = "https://wa.me/526863360107";
export const IG_URL = "https://www.instagram.com/smartercoolmx?igsh=M3Jnbmp4bnEyeHcx";
export const FB_URL = "https://www.facebook.com/share/18mikDUBE4/";
export const TT_URL = "https://www.tiktok.com/@smartercool2?_r=1&_t=ZS-96xk1sQLE1Z";


function Header({ onCTA, active, onNav }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const link = (id, label) =>
  <a href={`#${id}`} className={active === id ? "active" : ""} onClick={(e) => {e.preventDefault();onNav(id);}}>{label}</a>;
  const mobileLink = (id, label) =>
  <a href={`#${id}`} className={"nav-mobile-link" + (active === id ? " active" : "")} onClick={(e) => {e.preventDefault();setMobileOpen(false);onNav(id);}}>{label}</a>;

  return (
    <>
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src="/assets/brand/logo.png" alt="SMARTERCOOL" className="logo-img" style={{ height: "70px", width: "140px" }} />
        </div>
        <nav className="nav">
          {link("home", "Inicio")}
          {link("productos", "Productos")}
          {link("aplicaciones", "Aplicaciones")}
          {link("instalaciones", "Instalaciones")}
          {link("ventajas", "Ventajas")}
          {link("contacto", "Contacto")}
        </nav>
        <div className="actions">
          <a className="btn btn-ghost desktop-only" style={{ padding: "10px 14px" }} href={WA_URL} target="_blank" rel="noopener noreferrer">
            <Icon.Whatsapp size={14} /> WhatsApp
          </a>
          <a className="btn btn-primary" href={WA_URL} target="_blank" rel="noopener noreferrer">
            Cotizar <span className="arrow"><Icon.ArrowUR size={12} /></span>
          </a>
          <button className="nav-hamburger" aria-label="Menú" onClick={() => setMobileOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
    <div className={"nav-mobile" + (mobileOpen ? " open" : "")}>
      <button className="nav-mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
      <nav>
        {mobileLink("home", "Inicio")}
        {mobileLink("productos", "Productos")}
        {mobileLink("aplicaciones", "Aplicaciones")}
        {mobileLink("instalaciones", "Instalaciones")}
        {mobileLink("ventajas", "Ventajas")}
        {mobileLink("contacto", "Contacto")}
      </nav>
      <a className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 24 }} href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
        Cotizar <span className="arrow"><Icon.ArrowUR size={12} /></span>
      </a>
    </div>
    </>);

}

function Hero({ onCTA }) {
  return (
    <section className="hero" id="home">
      <div className="hero-meta">
        <div className="l">[ HOMEPAGE / SMARTERCOOL ]</div>
        <div className="c label" style={{ color: "var(--teal)" }}>CATÁLOGO 2026 — V.01</div>
        <div className="r l">[ CLIMA INDUSTRIAL · DESKTOP 1920 ]</div>
      </div>
      <div className="hero-stage">
        <video className="hero-bg" src="/assets/VHERO.mp4" autoPlay muted loop playsInline />
        <div className="hero-content">
          <div className="hero-left">
            <div>
              <span className="hero-tag"><span className="dot"></span>Soluciones de climatización inteligente</span>
              <h1>
                Aire que<br />
                <span className="stroke">trabaja</span> <span className="accent">por ti.</span>
              </h1>
              <p className="hero-sub">
                Equipos evaporativos, ventiladores HVLS, extractores industriales y componentes diseñados para elevar el confort, optimizar el flujo de aire y multiplicar la eficiencia en espacios comerciales e industriales exigentes.
              </p>
              <div className="hero-ctas">
                <button className="btn btn-glass" style={{ background: "var(--sky)", color: "var(--navy)", border: "none" }}>
                  Ver catálogo <span className="arrow" style={{ background: "var(--navy)", color: "var(--sky)" }}><Icon.ArrowR size={12} /></span>
                </button>
                <a className="btn btn-glass" href={WA_URL} target="_blank" rel="noopener noreferrer">
                  Solicitar cotización <Icon.ArrowUR size={14} />
                </a>
              </div>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center", marginTop: 22, color: "rgba(255,255,255,0.7)", fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              <span>● en stock</span>
              <span style={{ opacity: 0.5 }}>—</span>
              <span>despacho a todo el país</span>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card" style={{ marginRight: 0, marginLeft: "auto" }}>
              <div className="k">FLUJO DE AIRE MÁXIMO ·<br />18.000 M³/H</div>
              <div className="v">HVLS SC-7300</div>
              <div className="d">Ø 7.3 m · ≤ 60 dB. Cobertura efectiva sobre 900 m².</div>
            </div>
            <div className="hero-card" style={{ marginRight: 0, marginLeft: "auto" }}>
              <div className="k">Modelos disponibles</div>
              <div className="v" style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                14<span style={{ fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.7 }}>referencias activas</span>
              </div>
              <div className="d">Evaporativos, HVLS, extractores y componentes técnicos.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics ribbon */}
      <div className="hero-metrics">
        <div className="m">
          <div className="lbl">+ Modelos</div>
          <div className="num">14</div>
          <div className="desc">Soluciones cubriendo enfriamiento, ventilación y componentes.</div>
        </div>
        <div className="m">
          <div className="lbl">Cobertura máx.</div>
          <div className="num">900<span style={{ fontSize: 18, opacity: 0.7 }}>m²</span></div>
          <div className="desc">Un solo equipo HVLS para una nave industrial completa.</div>
        </div>
        <div className="m">
          <div className="lbl">Flujo de aire máximo extractor</div>
          <div className="num">44k<span style={{ fontSize: 18, opacity: 0.7 }}>m³/h</span></div>
          <div className="desc">Extracción industrial AIRMAX GL 50″, 24/7.</div>
        </div>
        <div className="m">
          <div className="lbl">Asesoría</div>
          <div className="num">1:1</div>
          <div className="desc">Selección y dimensionamiento técnico personalizado.</div>
        </div>
      </div>
    </section>);

}

function Marquee() {
  const items = ["Climatización industrial", "★", "HVLS", "★", "Evaporativos", "★", "Extractores", "★", "Cooling pad", "★", "SMARTERCOOL"];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((t, i) =>
        t === "★" ?
        <span key={i} className="star">✻</span> :
        <span key={i}>{t}</span>
        )}
      </div>
    </div>);

}

function About() {
  return (
    <section className="block about">
      <div className="section-head">
        <div>
          <div className="eyebrow">— Sobre la marca</div>
          <h2>El aire,<br /><span className="stroke">reinventado</span><br />para grandes espacios.</h2>
        </div>
        <div className="sub">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--teal)", margin: "0 0 16px" }}>(01) Propuesta de valor</p>
          <p style={{ margin: 0 }}>SMARTERCOOL comercializa equipos especializados de enfriamiento, ventilación y circulación de aire para grandes espacios comerciales e industriales. Una selección de equipo que combina rendimiento, eficiencia energética y confiabilidad operativa</p>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>Trabajamos con <span className="em">enfriadores evaporativos</span> de alto flujo de aire, <span className="em">ventiladores HVLS</span> que mueven enormes volúmenes de aire a baja velocidad, <span className="em">extractores industriales</span> para circulación efectiva, y componentes técnicos como cooling pads / celdek para optimizar la eficiencia evaporativa.</p>
          <p style={{ marginTop: 24 }}>Una propuesta integral, pensada para residencias, industrias, almacenes, gimnasios, talleres, hoteles y todo espacio donde el confort térmico se traduce en productividad.</p>
        </div>
        <div className="about-side">
          <div className="about-img" style={{ aspectRatio: "16/10" }}>
            <img src="/assets/sobre-la-marca.png" alt="Espacio industrial" />
          </div>
          <div className="about-pills">
            <span className="pill"><span className="d" />Alto rendimiento</span>
            <span className="pill"><span className="d" />Ahorro energético</span>
            <span className="pill"><span className="d" />Grandes áreas</span>
            <span className="pill"><span className="d" />Equipos duraderos</span>
            <span className="pill"><span className="d" />Industrial y comercial</span>
            <span className="pill"><span className="d" />Asesoría técnica</span>
          </div>
        </div>
      </div>
    </section>);

}

function CategoriesSection({ onCategory }) {
  return (
    <section className="block cats" id="productos">
      <div className="section-head">
        <div>
          <div className="eyebrow">— Catálogo / Categorías</div>
          <h2>Cuatro <span className="stroke">familias.</span><br />Una promesa de aire.</h2>
        </div>
        <div className="sub">
          Cada categoría está pensada para una necesidad distinta. Combínalas y obtén un sistema climático completo: enfriamiento focalizado, circulación masiva, extracción y eficiencia evaporativa.
        </div>
      </div>

      <div className="cats-grid">
        {CATEGORIES.map((c, i) => {
          const Art = ProductArt[c.art];
          return (
            <div className="cat" key={c.id}>
              <div className="cover">
                {c.image ?
                <img src={c.image} alt={c.name} style={c.id === "pad" ? { position: "absolute", inset: "10%", width: "80%", height: "80%", objectFit: "contain" } : { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /> :

                <Art tone="dark" />
                }
              </div>
              <div className="idx">[ 0{i + 1} ]</div>
              <div className="idx-r">{c.sub}</div>
              <div className="meta cat-label">
                <span className="name">{c.name}</span>
              </div>
            </div>);

        })}
      </div>
    </section>);

}

function CatalogSection({ onOpen, filter, setFilter }) {
  const filtered = filter === "all" ? PRODUCTS.filter((p) => p.category !== "hvls") : PRODUCTS.filter((p) => p.category === filter);
  // We exclude hvls in "all" — it gets its own dedicated section below

  // assign visual sizes
  const sized = filtered.map((p, i) => {
    let size = "default";
    if (filter === "all") {
      if (i === 0) size = "feature";else
      if (i === 3) size = "large";
    } else {
      if (i === 0 && filtered.length > 1) size = "large";
    }
    return { ...p, size };
  });

  return (
    <section id="catalogo" className="block catalog">
      <div className="section-head">
        <div>
          <div className="eyebrow">— Catálogo destacado</div>
          <h2>Modelos <span className="stroke">2026.</span></h2>
        </div>
        <div className="sub">
          <p style={{ margin: "0 0 14px" }}>Selecciona una categoría o explora todo el catálogo. Cada ficha abre una vista inmersiva con especificaciones completas.</p>
          <p className="label" style={{ color: "var(--teal)" }}>
            Mostrando · <b style={{ color: "var(--navy)" }}>{sized.length}</b> productos
          </p>
        </div>
      </div>

      <div className="catalog-tabs">
        <button className={`tab ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
          Todos <span className="count">{PRODUCTS.filter((p) => p.category !== "hvls").length}</span>
        </button>
        <button className={`tab ${filter === "evap" ? "active" : ""}`} onClick={() => setFilter("evap")}>
          Evaporativos <span className="count">{PRODUCTS.filter((p) => p.category === "evap").length}</span>
        </button>
        <button className={`tab ${filter === "hvls" ? "active" : ""}`} onClick={() => setFilter("hvls")}>
          HVLS <span className="count">{PRODUCTS.filter((p) => p.category === "hvls").length}</span>
        </button>
        <button className={`tab ${filter === "ext" ? "active" : ""}`} onClick={() => setFilter("ext")}>
          Extractores <span className="count">{PRODUCTS.filter((p) => p.category === "ext").length}</span>
        </button>
        <button className={`tab ${filter === "pad" ? "active" : ""}`} onClick={() => setFilter("pad")}>
          Cooling pad <span className="count">{PRODUCTS.filter((p) => p.category === "pad").length}</span>
        </button>
      </div>

      <div className="catalog-grid">
        {sized.map((p, i) => {
          const Art = ProductArt[p.art];
          const num = (i + 1).toString().padStart(2, "0");
          const isFeature = p.size === "feature";
          const isLarge = p.size === "large";
          const visClass = isFeature ? "product-visual dark" : i % 3 === 0 ? "product-visual dark" : "product-visual";
          return (
            <div
              key={p.id}
              className={`product-card ${isFeature ? "feature" : ""} ${isLarge ? "large" : ""}`}
              onClick={() => onOpen(p)}>
              
              <div className={visClass}>
                <span className={`product-tag ${visClass.includes("dark") ? "dark" : ""}`}>
                  {p.series}
                </span>
                <span className={`product-id ${visClass.includes("dark") ? "light" : ""}`}>[ {num} / {p.id.toUpperCase()} ]</span>
                <div style={{ position: "absolute", inset: p.images && p.images[0] ? "5% 8%" : "12% 18%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {p.images && p.images[0] ?
                  <img src={p.images[0]} alt={p.name} style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain", filter: visClass.includes("dark") ? "drop-shadow(0 18px 24px rgba(0,0,0,0.45))" : "drop-shadow(0 12px 18px rgba(47,65,86,0.18))" }} /> :

                  <Art tone={visClass.includes("dark") ? "dark" : "light"} blades={p.blades} />
                  }
                </div>
              </div>
              <div className="product-body">
                <div className="product-name">{p.name}</div>
                <div className="product-desc">{p.tagline}</div>
                <div className="product-specs">
                  {p.keySpecs.map((s, j) =>
                  <div className="spec" key={j}>
                      <span className="k">{s.k}</span>
                      <span className="v">{s.v}<span style={{ fontFamily: "var(--font-mono)", fontSize: 11, marginLeft: 4, opacity: 0.6 }}>{s.u}</span></span>
                    </div>
                  )}
                </div>
              </div>
              <span className="open"><Icon.ArrowUR size={14} /></span>
            </div>);

        })}
      </div>
    </section>);

}

function CeldekBanner({ onOpen }) {
  const celdekProduct = PRODUCTS.find((p) => p.id === "celdek");
  return (
    <section className="block celdek-banner" id="celdek">
      <div className="celdek-inner">
        <div className="celdek-left">
          <div className="eyebrow" style={{ color: "var(--navy-deep)" }}>— Repuestos / Cooling Pad</div>
          <h2>
            Celdek disponible<br />
            <span className="stroke-light">para los equipos</span><br />
            <span className="accent">más comerciales.</span>
          </h2>
          <p className="celdek-lead">
            Contamos con cooling pad Celdek para la mayoría de los equipos evaporativos comerciales del mercado.
            Repuestos de calidad que restauran el rendimiento original de tu equipo y extienden su vida útil.
          </p>
          <div className="celdek-actions">
            <button className="btn" style={{ background: "var(--navy)", color: "var(--white)" }} onClick={() => { if (celdekProduct) onOpen(celdekProduct); }}>
              Ver producto <span className="arrow" style={{ background: "var(--sky)", color: "var(--navy)" }}><Icon.ArrowUR size={12} /></span>
            </button>
            <button className="btn btn-ghost" style={{ borderColor: "rgba(47,65,86,0.25)" }} onClick={() => { const el = document.getElementById("catalogo"); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" }); } }}>
              Explorar catálogo <Icon.ArrowR size={12} />
            </button>
          </div>
        </div>
        <div className="celdek-right">
          <div className="celdek-visual">
            {celdekProduct && celdekProduct.images && celdekProduct.images[0] ? (
              <img src={celdekProduct.images[0]} alt="Cooling Pad Celdek" />
            ) : (
              <ProductArt.Pad tone="light" />
            )}
          </div>
          <div className="celdek-badges">
            <span className="celdek-badge"><span className="d" />Compatibilidad amplia</span>
            <span className="celdek-badge"><span className="d" />Entrega inmediata</span>
            <span className="celdek-badge"><span className="d" />Calidad Celdek original</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnionSection() {
  const cards = [
    { i: "Wind", t: "Aire más fresco", d: "Refuerza la percepción de un ambiente más limpio y agradable." },
    { i: "Drop", t: "Confort ambiental", d: "Complementa la climatización en espacios interiores de uso continuo." },
    { i: "Bolt", t: "Tecnología de ionización", d: "Libera iones negativos como apoyo al flujo de aire del equipo." },
    { i: "Shield", t: "Modelos compatibles", d: "Disponible en modelos seleccionados. Confirmar compatibilidad en la ficha de cada equipo." },
  ];
  return (
    <section className="block anion-section" id="anion">
      <div className="anion-bg">
        <div className="anion-particles" />
      </div>
      <div className="anion-wrap">
        <div className="anion-head">
          <div className="eyebrow" style={{ color: "var(--navy)" }}>— Tecnología ANION</div>
          <h2 className="anion-title">
            Función ANION: <span className="stroke-light">ionización</span> para una sensación de aire más fresco
          </h2>
          <p className="anion-lead">
            Algunos modelos SmarterCool incorporan función ANION, una tecnología de ionización que libera iones negativos en el ambiente y complementa la experiencia de climatización, ayudando a generar una sensación de aire más fresco, limpio y confortable en espacios interiores.
          </p>
          <p className="anion-sub">
            Los iones negativos están presentes de forma natural en entornos como cascadas, bosques y espacios con aire en movimiento. En los equipos compatibles, esta función acompaña el flujo de aire del sistema evaporativo para reforzar la sensación de frescura ambiental y bienestar.
          </p>
        </div>

        <div className="anion-grid">
          {cards.map((c, i) => {
            const I = Icon[c.i] || Icon.Wind;
            return (
              <div className="anion-card" key={i}>
                <div className="anion-ico"><I size={16} /></div>
                <div className="anion-num">0{i + 1}</div>
                <div className="anion-card-title">{c.t}</div>
                <div className="anion-card-desc">{c.d}</div>
              </div>
            );
          })}
        </div>

        <div className="anion-note">
          <span className="anion-dot" />
          La función ANION está disponible según modelo. Consulta la ficha técnica de cada equipo para confirmar compatibilidad.
        </div>
      </div>
    </section>
  );
}

function HvlsSection({ onOpen }) {
  const hvls = PRODUCTS.filter((p) => p.category === "hvls");
  return (
    <section className="block hvls" id="hvls">
      <div className="section-head">
        <div>
          <div className="eyebrow">— HVLS / High Volume Low Speed</div>
          <h2>Gigantes que<br /><span className="stroke">mueven</span> el aire.</h2>
        </div>
        <div className="sub">
          Con nuestros equipos HVLS movemos grandes volúmenes de aire a baja velocidad de aspas. Una solución eficaz y ahorradora en consumo eléctrico para una amplia variedad de espacios.
        </div>
      </div>

      <div className="hvls-grid">
        <div className="hvls-hero">
          <div className="bg" />
          <div className="hvls-fan">
            <ProductArt.Fan tone="dark" blades={6} />
          </div>
          <div className="label-tl">[ HVLS / FIELD UNIT ]</div>
          <div className="label-br">
            <span>flujo de aire máximo</span>
            10 800
          </div>
        </div>

        <div className="hvls-table">
          <div className="hvls-row head">
            <div>Modelo</div><div>Diámetro</div><div>Flujo de aire máximo</div><div>Cobertura</div><div></div>
          </div>
          {hvls.map((p) =>
          <div className="hvls-row" key={p.id} onClick={() => onOpen(p)}>
              <div className="nm">{p.name}</div>
              <div className="vl">Ø {p.specs[0][1]}</div>
              <div className="vl">{p.specs[6][1]}</div>
              <div className="vl">{p.specs[9][1]}</div>
              <div><span className="arr"><Icon.ArrowUR size={12} /></span></div>
            </div>
          )}
        </div>
      </div>

      <div className="hvls-cards" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginTop: 56 }}>
        {[
        { k: "01", t: "Grandes volúmenes", d: "Mueve cientos de m³/min con bajo consumo eléctrico." },
        { k: "02", t: "Verano e invierno", d: "Circula aire frío en verano y nivela calor en invierno." },
        { k: "03", t: "Bajo ruido", d: "≤ 60 dB. Perfecto para oficinas, gimnasios y comercios." },
        { k: "04", t: "Distribución uniforme", d: "Movimiento de aire constante sobre toda el área." }].
        map((b) =>
        <div key={b.k} style={{
          padding: 24,
          borderRadius: 18,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--sky)" }}>{b.k}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 26, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 1, marginTop: 14 }}>{b.t}</div>
            <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.55, marginTop: 10 }}>{b.d}</div>
          </div>
        )}
      </div>
    </section>);

}

function ProductShowcaseFeature({ product, onOpen }) {
  // An inline preview of the immersive product detail style, embedded in the page
  if (!product) return null;
  const Art = ProductArt[product.art];
  return (
    <section className="block" style={{ background: "linear-gradient(180deg, var(--navy) 0%, var(--teal) 100%)", color: "var(--white)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.2, backgroundImage: "url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2000&q=80)", backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.6) blur(2px)" }} />
      <div style={{ position: "relative" }}>
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--sky)" }}>— Showcase / Producto destacado</div>
            <h2 style={{ color: "var(--white)" }}>Una vista <span className="stroke" style={{ WebkitTextStroke: "1.4px var(--white)" }}>inmersiva.</span></h2>
          </div>
          <div className="sub" style={{ color: "rgba(255,255,255,0.7)" }}>
            Cada producto abre una experiencia tipo showcase: paneles flotantes, vista atmosférica y fichas técnicas premium. Haz clic en cualquier producto del catálogo para vivirla.
          </div>
        </div>

        <div className="showcase-grid" style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr 320px",
          gap: 22
        }}>
          {/* LEFT */}
          <div className="glass">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>SC / EVAPORATIVO</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 96, lineHeight: 1, color: "var(--white)", margin: "-8px 0 4px" }}>01</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 14 }}>{product.tagline}</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 1, textTransform: "uppercase", letterSpacing: "0.01em", margin: 0 }}>{product.name}</h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.78)", margin: "14px 0 0", lineHeight: 1.55 }}>{product.desc}</p>
            <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
              <button onClick={() => onOpen(product)} className="btn" style={{ background: "var(--white)", color: "var(--navy)", flex: 1, justifyContent: "center" }}>
                Abrir ficha completa
                <span className="arrow"><Icon.ArrowUR size={12} /></span>
              </button>
              <a className="btn-icon" title="WhatsApp" href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ width: 48, height: 48, borderRadius: 999, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--white)" }}>
                <Icon.Whatsapp size={16} />
              </a>
            </div>
          </div>

          {/* CENTER */}
          <div className="po-stage" style={{ minHeight: 540, cursor: "pointer", padding: 0 }} onClick={() => onOpen(product)}>
            <div className="glow" />
            <div className="floater float-1"><span className="dot" /> Flujo de aire máximo · <b>18.000 m³/h</b></div>
            <div className="floater float-2"><span className="dot" /> Cobertura · <b>200 m²</b></div>
            <div className="floater float-3"><span className="dot" /> Control · <b>Digital + remoto</b></div>
            <div className="floater float-4"><span className="dot" /> Modos · <b>3 vel. + swing</b></div>
            <img src="/assets/showcase/vista-inmersiva.png" alt="Vista inmersiva" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
            <div className="corner-meta" style={{ zIndex: 2 }}>[ SHOWCASE / {product.id.toUpperCase()} / 2026 ]</div>
            <div className="price-bar">
              <span className="label">Acción</span>
              <span className="v">Abrir ficha</span>
              <span style={{ width: 34, height: 34, borderRadius: 999, background: "var(--sky)", color: "var(--navy)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <Icon.ArrowUR size={14} />
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="po-right">
            <div className="glass">
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 14 }}>Highlights</div>
              <div className="po-features">
                {product.features.slice(0, 4).map((f, i) => {
                  const I = Icon[f.i] || Icon.Bolt;
                  return (
                    <div className="po-feat" key={i}>
                      <div className="ico"><I size={14} /></div>
                      <div>{f.t}</div>
                    </div>);

                })}
              </div>
            </div>
            <div className="glass dark" style={{ padding: 20 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 12 }}>Vista de catálogo</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, lineHeight: 0.95, textTransform: "uppercase", color: "var(--white)" }}>
                Pulsa para entrar al <span style={{ WebkitTextStroke: "1.2px var(--white)", color: "transparent", fontStyle: "italic" }}>showcase.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Applications() {
  // Scroll-stacking cards — each application context is a card that pins as you scroll,
  // and the next one rises over it. Photos come from real customer installations.
  const apps = [
    { ix: "01", title: "Industrias",     place: "Naves de manufactura y producción",   desc: "Líneas de empacado, salas blancas y procesos con personal en pie de planta. El aire en movimiento sostiene el confort sin contaminar el producto.",  tag: "Manufactura",   img: "/assets/installations/02-galletas.png",        bg: "#1f2c3a", rot: -2 },
    { ix: "02", title: "Almacenes",      place: "Centros de almacenaje a gran escala", desc: "Rack alto, montacargas en movimiento y techo metálico que acumula calor. HVLS desestratifica y los evaporativos enfrían los puntos críticos.",   tag: "Logística",     img: "/assets/installations/01-queseria.png",        bg: "#2F4156", rot:  2 },
    { ix: "03", title: "Bodegas",        place: "Almacenes cubiertos y depósitos",     desc: "Extracción permanente y desestratificación constante para mantener la temperatura uniforme bajo techo, incluso en las horas más calurosas.",          tag: "Almacenaje",    img: "/assets/sectors/bodegas.png",     bg: "#567C8D", rot: -2 },
    { ix: "04", title: "Talleres",       place: "Lifts, bahías y zonas de servicio",   desc: "Calor por motores, chispas de soldadura y vapores. La combinación enfriador + extracción mantiene a los técnicos cómodos y enfocados.",              tag: "Servicio",      img: "/assets/installations/11-almacen-iluminado.png", bg: "#1f2c3a", rot:  2 },
    { ix: "05", title: "Gimnasios",      place: "Salas de máquinas y zonas funcionales", desc: "Alta carga térmica humana en horas pico. Los HVLS generan brisa amplia y silenciosa que mejora la experiencia sin enfriar de más.",              tag: "Fitness",       img: "/assets/sectors/gimnasios.png",   bg: "#2F4156", rot: -2 },
    { ix: "06", title: "Hoteles",        place: "Lobbies, terrazas y corredores",      desc: "Confort silencioso para zonas comunes y eventos. Configuraciones discretas que se integran a la arquitectura sin alterar la experiencia del huésped.", tag: "Hospitalidad",  img: "/assets/sectors/hoteles.png",     bg: "#567C8D", rot:  2 },
    { ix: "07", title: "Restaurantes",   place: "Cocina, sala y áreas de servicio",    desc: "Extracción puntual en cocina y flujo descendente en sala. Cliente cómodo, equipo de cocina trabajando a temperatura controlada.",                    tag: "Hostelería",    img: "/assets/sectors/restaurantes.png", bg: "#1f2c3a", rot: -2 },
    { ix: "08", title: "Naves",          place: "Plantas de gran formato",             desc: "Volúmenes de 5.000 a 20.000 m². Aquí los extractores trabajan en pared mientras los HVLS cubren la zona productiva con flujo descendente.",             tag: "Gran formato",  img: "/assets/installations/08-extractor-nave.png",  bg: "#2F4156", rot:  2 },
    { ix: "09", title: "Comercios",      place: "Retail, showrooms y supermercados",   desc: "Climatización puntual donde se concentra el público. Equipos portátiles que se reubican según temporada y franja horaria sin obra.",                    tag: "Supermercado",    img: "/assets/sectors/comercios.png",   bg: "#C8D9E6", rot: -2 },
    { ix: "10", title: "Distribución",   place: "Hubs logísticos y crossdocking",      desc: "Operaciones 24/7 con flujo constante de personal y carga. HVLS de gran diámetro mantienen la temperatura percibida estable en toda la operación.",   tag: "Logística",     img: "/assets/installations/05-almacen-bebidas.png", bg: "#1f2c3a", rot:  2 },
    { ix: "11", title: "Escuelas",       place: "Aulas, polideportivos y comedores",   desc: "Renovación de aire por hora y confort acústico. Equipos silenciosos pensados para entornos educativos exigentes.",                                       tag: "Educación",     img: "/assets/sectors/escuelas.png",    bg: "#2F4156", rot: -2 },
    { ix: "12", title: "Hospitales",     place: "Corredores, salas y zonas técnicas",  desc: "Sistemas híbridos evap + extracción para zonas no críticas. Confort para personal y visitantes con consumo eléctrico controlado.",                     tag: "Salud",         img: "/assets/sectors/hospitales.png",  bg: "#567C8D", rot:  2 }];



  return (
    <section className="block apps-stack" id="aplicaciones">
      <div className="section-head">
        <div>
          <div className="eyebrow">— Aplicaciones</div>
          <h2>Donde el <span className="stroke">aire</span><br />cambia el trabajo.</h2>
        </div>
        <div className="sub">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--teal)", margin: "0 0 16px" }}>(12) Sectores donde operamos</p>
          <p style={{ margin: 0 }}>Cada espacio tiene una arquitectura del aire distinta. Recorre los doce contextos donde nuestros equipos cambian el día a día — desplaza para verlos en orden.</p>
        </div>
      </div>

      <div className="apps-stack-wrap">
        <div className="apps-stack-col">
          {apps.map((a, i) =>
          <figure className="apps-figure" key={i}>
              <article
              className="apps-stack-card"
              style={{ '--rot': `${a.rot}deg`, '--cardBg': a.bg }}>

                <div
                className="apps-stack-bg"
                style={{ backgroundImage: `url(${a.img})` }} />

                <div className="apps-stack-shade" />
                <div className="apps-stack-head">
                  <span className="ix">[ {a.ix} / 0{apps.length} ]</span>
                  <span className="chip">{a.tag}</span>
                </div>
                <div className="apps-stack-body">
                  <div className="place">{a.place}</div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <div className="apps-stack-foot">
                    <span className="go">
                      <Icon.ArrowUR size={14} />
                    </span>
                  </div>
                </div>
              </article>
            </figure>)}

        </div>

        <aside className="apps-stack-side">
          <div className="apps-side-inner">
            <div className="apps-side-label">— Panorama</div>
            <div className="apps-side-title">
              Aire que <span className="stroke">trabaja</span><br />
              en cada sector.
            </div>
            <p>Los equipos de SmarterCool están dimensionados para resolver el aire en doce contextos distintos. Cada caso real, cada modelo, una configuración específica.</p>
            <div className="apps-side-stats">
              <div>
                <b>{apps.length}</b>
                <span>sectores cubiertos</span>
              </div>
              <div>
                <b>14</b>
                <span>modelos compatibles</span>
              </div>
            </div>
            <div className="apps-side-cta">
              <span className="dot" />
              Desliza para recorrer ↓
            </div>
          </div>
        </aside>
      </div>
    </section>);

}

function Advantages() {
  return (
    <section className="block adv" id="ventajas">
      <div className="section-head">
        <div>
          <div className="eyebrow">— Por qué SMARTERCOOL</div>
          <h2>Ventajas que se <span className="stroke">sienten</span>.</h2>
        </div>
        <div className="sub">
          Equipos pensados para entornos donde el aire es una variable crítica. Confiabilidad, eficiencia y rendimiento en una misma propuesta.
        </div>
      </div>

      <div className="adv-grid">
        <div className="adv-card s1">
          <div className="n">— 01 / Performance</div>
          <h3>Alto rendimiento<br />en grandes áreas</h3>
          <p>Flujo de aire máximo de hasta 44.000 m³/h y coberturas efectivas de hasta 900 m² con un solo equipo.</p>
          <div className="big">A+</div>
        </div>
        <div className="adv-card s2">
          <div className="n">— 02 / Eficiencia</div>
          <h3>Eficiencia<br />energética real</h3>
          <p>HVLS mueve volúmenes enormes con potencias desde 0.4 kW. Evaporativos con consumos comparables a un electrodoméstico estándar.</p>
          <div className="big" style={{ color: "var(--teal)" }}>kWh</div>
        </div>
        <div className="adv-card s3" style={{ background: "var(--beige-warm)" }}>
          <div className="n">— 03 / Catálogo</div>
          <h3>Catálogo<br />especializado</h3>
          <p>14 referencias activas, 4 categorías. Sin productos genéricos: cada modelo cumple un propósito específico.</p>
        </div>
        <div className="adv-card s4">
          <div className="n">— 04 / Tecnología</div>
          <h3>Tecnología<br />y control</h3>
          <p>Controles digitales, Bluetooth, temporizador, swing, modo Anion. Operación intuitiva y eficiente.</p>
        </div>
        <div className="adv-card s5">
          <div className="n">— 05 / Asesoría</div>
          <h3>Asesoría<br />comercial 1:1</h3>
          <p>Acompañamos cada proyecto con dimensionamiento técnico, selección y soporte post-venta.</p>
        </div>
      </div>
    </section>);

}

function CTA() {
  return (
    <section className="cta" style={{ padding: "40px var(--gutter)" }}>
      <div className="cta-inner">
        <div>
          <div className="eyebrow" style={{ color: "var(--sky)" }}>— Cotización</div>
          <h2>
            ¿Buscas la <span className="stroke">solución</span><br />ideal para tu espacio?
          </h2>
          <p style={{ maxWidth: 540, opacity: 0.85, lineHeight: 1.55, marginTop: 18, fontSize: 15 }}>
            Te ayudamos a elegir el equipo correcto. Cuéntanos sobre tu espacio y diseñamos una propuesta a medida con dimensionamiento técnico y soporte comercial directo.
          </p>
        </div>
        <div className="cta-actions">
          <a className="btn" href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ background: "var(--white)", color: "var(--navy)", justifyContent: "space-between", padding: "18px 22px" }}>
            Cotizar ahora <span className="arrow" style={{ background: "var(--navy)", color: "var(--white)" }}><Icon.ArrowUR size={12} /></span>
          </a>
          <a className="btn btn-glass" href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ justifyContent: "space-between", padding: "18px 22px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon.Whatsapp size={14} /> Hablar por WhatsApp</span>
            <span className="arrow"><Icon.ArrowUR size={12} /></span>
          </a>
          <button className="btn btn-glass" onClick={() => { const el = document.getElementById("catalogo"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" }); }} style={{ justifyContent: "space-between", padding: "18px 22px" }}>
            Ver catálogo completo <span className="arrow"><Icon.ArrowR size={12} /></span>
          </button>
        </div>
      </div>
    </section>);

}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
  { q: "¿Qué equipo necesito para mi espacio?", a: "Depende del área en m², la altura del techo, el uso (industrial / comercial) y la temperatura ambiente. Nuestro equipo realiza un dimensionamiento técnico personalizado: solo necesitamos algunos datos básicos del espacio para recomendarte la configuración óptima." },
  { q: "¿Cuál es la diferencia entre un enfriador evaporativo y un ventilador HVLS?", a: "El enfriador evaporativo reduce la temperatura del aire mediante evaporación de agua (ideal para zonas secas y áreas medianas). El HVLS mueve grandes volúmenes de aire a baja velocidad, generando confort térmico en grandes áreas mediante circulación. En muchos proyectos se combinan." },
  { q: "¿Pueden asesorarme antes de comprar?", a: "Sí, la asesoría es parte del servicio. Te acompañamos desde la primera consulta: revisamos tu espacio, definimos requerimientos y entregamos una propuesta técnica con opciones recomendadas y comparativas." },
  { q: "¿Los equipos son para uso industrial o comercial?", a: "Ambos. Nuestro catálogo está diseñado para responder a contextos comerciales (gimnasios, hoteles, restaurantes, comercios) e industriales (naves, bodegas, talleres, plantas)." },
  { q: "¿Puedo solicitar cotización personalizada?", a: "Por supuesto. Toda cotización es a medida: tipo de equipo, cantidad, instalación y soporte. Escríbenos por WhatsApp o utiliza el formulario y respondemos en menos de 24 horas hábiles." }];

  return (
    <section className="block faq">
      <div className="faq-grid">
        <div>
          <div className="eyebrow">— FAQ</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 5vw, 88px)", lineHeight: 0.98, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--navy)", margin: "12px 0 0" }}>
            Lo que<br />preguntan,<br /><span className="stroke">resuelto</span>.
          </h2>
          <p style={{ marginTop: 24, color: "var(--teal)", fontSize: 15, lineHeight: 1.55, maxWidth: 380 }}>
            ¿Otra duda? Escríbenos directamente, respondemos en menos de 24 h hábiles.
          </p>
          <a className="btn btn-ghost" href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16 }}>
            <Icon.Whatsapp size={14} /> Escribir por WhatsApp
          </a>
        </div>
        <div className="faq-list">
          {items.map((it, i) =>
          <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span style={{ display: "flex", gap: 18, alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--teal)" }}>0{i + 1}</span>
                  {it.q}
                </span>
                <span className="ico"><Icon.Plus size={14} /></span>
              </button>
              <div className="faq-a">{it.a}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="ttl">SMARTERCOOL —<br />AIRE QUE <span style={{ WebkitTextStroke: "1.4px var(--white)", color: "transparent", fontStyle: "italic" }}>TRABAJA.</span></div>
          <p>Soluciones de climatización y ventilación industrial para grandes espacios. Asesoría técnica, selección exclusiva, soporte directo.</p>
          <div className="socials">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" title="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg></a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" title="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22V12h3l1-4h-4V6c0-1.2.4-2 2-2h2V.5C16.6.2 15.3 0 14 0c-2.8 0-5 1.8-5 5v3H6v4h3v10h4Z" /></svg></a>
            <a href={TT_URL} target="_blank" rel="noopener noreferrer" title="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 2v3.2c1.2 1.4 2.7 2.3 4.5 2.5V11c-1.6-.1-3.1-.6-4.5-1.5v6.6c0 4-3.2 7.2-7.2 7.2S1.6 20.1 1.6 16.1s3.2-7.2 7.2-7.2v3.6c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6V2H16Z" /></svg></a>
            <a href="#" title="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4zm0 6h4v10H4zm6 0h4v2c.6-1.2 2-2.4 4-2.4 4 0 4 2.6 4 5.4v5h-4v-4.6c0-1.4-.4-2.6-1.8-2.6S14 15.6 14 17v5h-4z" /></svg></a>
          </div>
        </div>
        <div>
          <h4>Navegación</h4>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#aplicaciones">Aplicaciones</a></li>
            <li><a href="#ventajas">Ventajas</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4>Catálogo</h4>
          <ul>
            <li><a href="#">Enfriadores evaporativos</a></li>
            <li><a href="#">Ventiladores HVLS</a></li>
            <li><a href="#">Extractores industriales</a></li>
            <li><a href="#">Cooling pad / Celdek</a></li>
            <li><a href="#">Descargar ficha global</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li><br /></li>
            <li>WhatsApp: +526863360107</li>
            <li>[Correo: ventas@smartercool.com</li>
            <li>[ Dirección ]</li>
            <li>[ Horario ]</li>
          </ul>
          <button className="btn" style={{ marginTop: 18, background: "var(--sky)", color: "var(--navy)", padding: "12px 18px" }}>
            Solicitar cotización <span className="arrow" style={{ background: "var(--navy)", color: "var(--sky)" }}><Icon.ArrowUR size={12} /></span>
          </button>
        </div>
      </div>
      <div className="footer-bar">
        <span>© 2026 SMARTERCOOL — Climatización inteligente</span>
        <span>V.01 · CATÁLOGO · 2026</span>
        <span>DISEÑO Y DESARROLLO WEB POR <a href="https://zkmarketing.es" target="_blank" rel="noopener noreferrer" style={{color:"inherit", textDecoration:"underline", textUnderlineOffset:"3px"}}>ZK MARKETING</a></span>
      </div>
    </footer>);

}

function Preloader({ onDone }) {
  const [progress, setProgress] = React.useState(0);
  const [displayPct, setDisplayPct] = React.useState(0);
  const [exiting, setExiting] = React.useState(false);

  React.useEffect(() => {
    if (displayPct < progress) {
      const t = setTimeout(() => setDisplayPct(p => Math.min(p + 1, progress)), 18);
      return () => clearTimeout(t);
    }
  }, [displayPct, progress]);

  React.useEffect(() => {
    const imgs = [
      '/assets/brand/logo.png',
      '/assets/sobre-la-marca.png',
      '/assets/gigantes-que-mueven-el-aire.png',
      ...CATEGORIES.map(c => c.image).filter(Boolean),
      ...PRODUCTS.filter(p => p.images?.[0]).map(p => p.images[0]),
    ];
    const total = imgs.length + 1;
    let loaded = 0;
    const t0 = Date.now();
    const MIN = 1800;
    const finish = () => {
      const wait = Math.max(0, MIN - (Date.now() - t0));
      setTimeout(() => { setExiting(true); setTimeout(onDone, 700); }, wait);
    };
    const tick = () => { loaded++; setProgress(Math.round(loaded / total * 100)); if (loaded >= total) finish(); };
    imgs.forEach(src => { const img = new Image(); img.onload = img.onerror = tick; img.src = src; });
    const vid = document.createElement('video'); vid.muted = true; vid.preload = 'auto';
    vid.oncanplaythrough = vid.onerror = tick; vid.src = '/assets/VHERO.mp4'; vid.load();
    const fb = setTimeout(() => { setExiting(true); setTimeout(onDone, 700); }, 12000);
    return () => clearTimeout(fb);
  }, []);


  const R = 52, C = +(2 * Math.PI * R).toFixed(3);
  const dash = +(C - C * displayPct / 100).toFixed(3);

  return (
    <div className={`sc-preloader${exiting ? ' sc-preloader--out' : ''}`}>
      <div className="sc-preloader-glow" />
      <div className="sc-preloader-content">
        <img src="/assets/brand/logo.png" className="sc-preloader-logo" alt="SMARTERCOOL" />
        <div className="sc-preloader-ring">
          <svg viewBox="0 0 128 128" width="128" height="128" aria-hidden="true">
            <defs>
              <linearGradient id="sc-pg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#567C8D" />
                <stop offset="100%" stopColor="#C8D9E6" />
              </linearGradient>
            </defs>
            <circle cx="64" cy="64" r={R} fill="none" stroke="rgba(200,217,230,0.08)" strokeWidth="2" />
            {[...Array(36)].map((_, i) => {
              const a = (i * 10 - 90) * (Math.PI / 180);
              return <line key={i} x1={64 + (R - 6) * Math.cos(a)} y1={64 + (R - 6) * Math.sin(a)} x2={64 + (R + 1) * Math.cos(a)} y2={64 + (R + 1) * Math.sin(a)} stroke="rgba(200,217,230,0.1)" strokeWidth="1" />;
            })}
            <circle cx="64" cy="64" r={R} fill="none" stroke="url(#sc-pg)" strokeWidth="2.5"
              strokeLinecap="round" strokeDasharray={C} strokeDashoffset={dash}
              transform="rotate(-90 64 64)" style={{ transition: 'stroke-dashoffset .3s ease' }} />
          </svg>
          <span className="sc-preloader-pct">{displayPct}</span>
        </div>
        <p className="sc-preloader-label">Cargando experiencia</p>
      </div>
      <div className="sc-preloader-bar"><div className="sc-preloader-fill" style={{ width: `${displayPct}%` }} /></div>
      <div className="sc-preloader-foot">[ SMARTERCOOL · SISTEMA · 2026 ]</div>
    </div>
  );
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = React.useState(false);
  const [openProduct, setOpenProduct] = React.useState(null);
  const [catalogFilter, setCatalogFilter] = React.useState("all");
  const [active, setActive] = React.useState("home");

  React.useEffect(() => { setupReveal(); }, []);


  const onOpen = (p) => setOpenProduct(p);
  const onClose = () => setOpenProduct(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };
  const onCTA = () => scrollTo("contacto");
  const onNav = (id) => {setActive(id);scrollTo(id);};

  const onCategory = (id) => {
    if (id === "hvls") {
      scrollTo("hvls");
    } else {
      setCatalogFilter(id);
      scrollTo("productos");
    }
  };

  // Scroll spy
  React.useEffect(() => {
    const ids = ["home", "productos", "aplicaciones", "ventajas", "contacto"];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = "home";
      for (const el of elements) {
        if (el.offsetTop <= y) current = el.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const featuredProduct = PRODUCTS.find((p) => p.id === "scmxl-18000");

  return (
    <>
      {!preloaderDone && <Preloader onDone={() => setPreloaderDone(true)} />}
      <Header onCTA={onCTA} active={active} onNav={onNav} />
      <Hero onCTA={onCTA} />
      <About />
      <Marquee />
      <CategoriesSection onCategory={onCategory} />
      <CatalogSection onOpen={onOpen} filter={catalogFilter} setFilter={setCatalogFilter} />
      <CeldekBanner onOpen={onOpen} />
      <AnionSection />
      <ProductShowcaseFeature product={featuredProduct} onOpen={onOpen} />
      <HvlsSection onOpen={onOpen} />
      <Installations />
      <Applications />
      <Advantages />
      <CTA />
      <FAQ />
      <Footer />
      <ProductDetail product={openProduct} onClose={onClose} onOpen={onOpen} />
    </>);

}

