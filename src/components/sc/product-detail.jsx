import React from "react";
import { Icon, ProductArt } from "./icons";
import { PRODUCTS } from "./data";
import { WA_URL } from "./app";


export default function ProductDetail({ product, onClose, onOpen }) {
  const [thumb, setThumb] = React.useState(0);
  const [lightbox, setLightbox] = React.useState(null);
  React.useEffect(() => {
    if (!product) return;
    const onKey = (e) => {if (e.key === "Escape") onClose();};
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product]);

  if (!product) return null;

  const Art = ProductArt[product.art] || ProductArt.Cooler;
  const images = product.images || [];
  const hasImages = images.length > 0;
  const safeThumb = Math.min(thumb, Math.max(0, images.length - 1));
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  const relSeed = [0, 1, 2];

  return (
    <div className={`product-overlay ${product ? "open" : ""}`}>
      <div className="product-bg">
        <div className="stars" />
      </div>

      <div className="product-wrap">
        {/* topbar */}
        <div className="po-topbar">
          <div className="crumbs">
            <span style={{ opacity: 0.6 }}>SMARTERCOOL</span>
            <span style={{ margin: "0 10px", opacity: 0.4 }}>/</span>
            <span style={{ opacity: 0.6 }}>{product.series}</span>
            <span style={{ margin: "0 10px", opacity: 0.4 }}>/</span>
            <b>{product.name}</b>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button className="po-close" onClick={onClose}>
              <Icon.Close size={14} /> Cerrar
            </button>
          </div>
        </div>

        {/* main */}
        <div className="po-main">
          {/* LEFT — product info */}
          <div className="glass po-left">
            <div className="breadcrumb">{product.series} · Cat. {product.category.toUpperCase()}</div>
            <div className="num">{(PRODUCTS.findIndex((p) => p.id === product.id) + 1).toString().padStart(2, "0")}</div>
            <div className="nm-sub">{product.tagline}</div>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>

            <div className="po-thumbs" style={hasImages ? { gridTemplateColumns: `repeat(${{ 2: 2, 3: 3, 4: 4, 5: 5, 6: 3, 7: 4, 8: 4, 9: 3 }[images.length] || 4}, 1fr)` } : null}>
              {hasImages ?
              images.map((src, i) => {
                const isFicha = i === images.length - 1 && typeof src === "string" && src.includes("/ficha.");
                const zoomable = isFicha;
                return (
                <div
                  key={i}
                  className={`po-thumb ${safeThumb === i ? "active" : ""} ${zoomable ? "zoomable" : ""}`}
                  onClick={() => { setThumb(i); if (zoomable) setLightbox(src); }}
                  title={zoomable ? "Click para ampliar" : undefined}
                >
                    <div style={{ position: "absolute", inset: 0, padding: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={src} alt={`${product.name} ${i + 1}`} style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain" }} />
                    </div>
                    {zoomable && (
                      <>
                        <span className="zoom-badge">Ficha técnica</span>
                        <span className="zoom-ico" aria-hidden="true">
                          <Icon.Plus size={12} />
                        </span>
                      </>
                    )}
                  </div>
                );
              }) :



              [0, 1, 2].map((i) =>
              <div key={i} className={`po-thumb ${thumb === i ? "active" : ""}`} onClick={() => setThumb(i)}>
                    <div style={{ position: "absolute", inset: 0, padding: 8, display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${0.9 + i * 0.05}) rotate(${i * 6 - 6}deg)` }}>
                      <Art tone="dark" blades={product.blades} />
                    </div>
                  </div>
              )
              }
            </div>

            <div className="po-left-lower">
              <div style={{ marginTop: 22 }}>
                <div className="breadcrumb" style={{ marginBottom: 10 }}>Caracteristicas clave</div>
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

              <div className="po-cta">
                <a className="btn btn-primary" href={WA_URL} target="_blank" rel="noopener noreferrer">
                  Solicitar cotización
                  <span className="arrow"><Icon.ArrowUR size={12} /></span>
                </a>
                <a className="btn-icon" title="WhatsApp" href={WA_URL} target="_blank" rel="noopener noreferrer"><Icon.Whatsapp size={16} /></a>
              </div>
            </div>
          </div>

          {/* CENTER — stage */}
          <div className="po-stage">
            <div className="glow" />
            {/* floaters */}
            <div className="floater float-1"><span className="dot" /> {product.keySpecs[0].k} · <b>{product.keySpecs[0].v} {product.keySpecs[0].u}</b></div>
            <div className="floater float-2"><span className="dot" /> {product.keySpecs[1].k} · <b>{product.keySpecs[1].v} {product.keySpecs[1].u}</b></div>
            <div className="floater float-3"><span className="dot" /> Categoría · <b>{product.series}</b></div>
            <div className="floater float-4"><span className="dot" /> Modelo · <b>{product.name}</b></div>

            <div className="product-art" style={{
              transition: "transform .8s ease, opacity .4s ease",
              transform: hasImages ? "none" : `rotate(${thumb * 8 - 8}deg) scale(${thumb === 1 ? 1.05 : 1})`,
              ...(hasImages ? { width: "92%", maxWidth: 640, height: 520, display: "flex", alignItems: "center", justifyContent: "center" } : {})
            }}>
              {hasImages ? (() => {
                const stageZoomable = safeThumb === images.length - 1 && typeof images[safeThumb] === "string" && images[safeThumb].includes("/ficha.");
                return (
                  <img
                    key={safeThumb}
                    src={images[safeThumb]}
                    alt={product.name}
                    onClick={stageZoomable ? () => setLightbox(images[safeThumb]) : undefined}
                    style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain", filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.45))", cursor: stageZoomable ? "zoom-in" : "default" }}
                  />
                );
              })() :

              <Art tone="dark" blades={product.blades} />
              }

            </div>

            <div className="corner-meta">[ SHOWCASE / {product.id.toUpperCase()} / 2026 ]</div>
            <div className="price-bar">
              <span className="label">Cotización</span>
              <span className="v">A medida</span>
              <span style={{
                width: 34, height: 34, borderRadius: 999,
                background: "var(--sky)", color: "var(--navy)",
                display: "inline-flex", alignItems: "center", justifyContent: "center"
              }}><Icon.ArrowUR size={14} /></span>
            </div>
          </div>

          {/* RIGHT — specs + features */}
          <div className="po-right">
            <div className="glass specs-block">
              <div className="h">Especificaciones técnicas</div>
              <div className="specs-list">
                {product.specs.map(([k, v], i) =>
                <div className="row" key={i}>
                    <span className="k">{k}</span>
                    <span className="v">{v}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="glass">
              <div className="h" style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 14 }}>Aplicaciones recomendadas</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Industrias", "Almacenes", "Bodegas", "Talleres", "Gimnasios", "Naves"].map((a, i) =>
                <span key={i} style={{
                  padding: "8px 12px", borderRadius: 999,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  fontSize: 12, color: "rgba(255,255,255,0.85)"
                }}>{a}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* mobile gallery — hidden on desktop, shown at ≤1023px */}
        <div className="po-gallery-mobile">
          <div className="po-gallery-scroll">
            {hasImages ?
              images.map((src, i) => {
                const isFicha = i === images.length - 1 && typeof src === "string" && src.includes("/ficha.");
                return (
                  <div
                    key={i}
                    className={`po-gallery-mobile-thumb${safeThumb === i ? " active" : ""}`}
                    onClick={() => setThumb(i)}
                    title={isFicha ? "Ficha técnica" : undefined}
                  >
                    <img src={src} alt={`${product.name} ${i + 1}`} />
                    {isFicha && <span className="po-gallery-ficha-badge">Ficha</span>}
                  </div>
                );
              }) :
              [0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`po-gallery-mobile-thumb${thumb === i ? " active" : ""}`}
                  onClick={() => setThumb(i)}
                  style={{ padding: 6 }}
                >
                  <Art tone="dark" blades={product.blades} />
                </div>
              ))
            }
          </div>
        </div>

        {/* mobile-only: características clave + CTA */}
        <div className="po-features-mobile glass">
          <div className="breadcrumb" style={{ marginBottom: 10 }}>Caracteristicas clave</div>
          <div className="po-features">
            {product.features.slice(0, 4).map((f, i) => {
              const I = Icon[f.i] || Icon.Bolt;
              return (
                <div className="po-feat" key={i}>
                  <div className="ico"><I size={14} /></div>
                  <div>{f.t}</div>
                </div>
              );
            })}
          </div>
          <div className="po-cta">
            <button className="btn btn-primary">
              Solicitar cotización <span className="arrow"><Icon.ArrowUR size={12} /></span>
            </button>
            <button className="btn-icon" title="WhatsApp"><Icon.Whatsapp size={16} /></button>
          </div>
        </div>

        {/* mobile-only: especificaciones técnicas */}
        <div className="po-specs-mobile glass specs-block">
          <div className="h">Especificaciones técnicas</div>
          <div className="specs-list">
            {product.specs.map(([k, v], i) =>
              <div className="row" key={i}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            )}
          </div>
        </div>

        {/* bottom: related */}
        <div className="po-bottom">
          <div className="glass">
            <div className="po-related-title">Productos relacionados</div>
            <div className="po-related">
              {(related.length ? related : PRODUCTS.slice(0, 3).filter((p) => p.id !== product.id).slice(0, 3)).map((p, i) => {
                const A = ProductArt[p.art] || ProductArt.Cooler;
                return (
                  <div className="po-rel" key={p.id} onClick={() => onOpen(p)}>
                    <div className="pv">
                      <div style={{ position: "absolute", inset: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {p.images && p.images[0] ?
                        <img src={p.images[0]} alt={p.name} style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain" }} /> :

                        <A tone="dark" blades={p.blades} />
                        }
                      </div>
                    </div>
                    <div className="pb">
                      <div className="nm">{p.name}</div>
                      <div className="ds">{p.series}</div>
                    </div>
                  </div>);

              })}
            </div>
          </div>
          <div className="glass dark" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div className="po-related-title">¿Necesitas asesoría técnica?</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 0.95, textTransform: "uppercase", color: "var(--white)", letterSpacing: "0.01em", marginTop: 8 }}>
                Te ayudamos a elegir <span style={{ WebkitTextStroke: "1.2px var(--white)", color: "transparent", fontStyle: "italic" }}>el equipo correcto</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
              <button className="btn" style={{ background: "var(--sky)", color: "var(--navy)" }}>
                <Icon.Whatsapp size={14} /> Hablar por WhatsApp
              </button>
              <button className="btn btn-glass">
                Solicitar cotización <span className="arrow"><Icon.ArrowUR size={12} /></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="image-lightbox" onClick={() => setLightbox(null)}>
          <button className="image-lightbox-close" onClick={(e) => { e.stopPropagation(); setLightbox(null); }} aria-label="Cerrar">
            <Icon.Close size={16} />
          </button>
          <img src={lightbox} alt="Vista ampliada" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>);


}

window.ProductDetail = ProductDetail;