import React from "react";
import { Link } from "@tanstack/react-router";

export default function LegalLayout({ title, updated, children }) {
  return (
    <div style={{ background: "var(--navy, #0b1220)", color: "var(--white, #fff)", minHeight: "100vh", fontFamily: "var(--font-sans, system-ui)" }}>
      <header style={{ padding: "24px 6vw", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none", fontWeight: 700, letterSpacing: "0.1em" }}>← SMARTERCOOL</Link>
        <span style={{ fontSize: 12, opacity: 0.6, fontFamily: "var(--font-mono, monospace)" }}>LEGAL</span>
      </header>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "60px 6vw 80px" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1, marginBottom: 12 }}>{title}</h1>
        {updated && <p style={{ opacity: 0.6, fontSize: 13, marginBottom: 40, fontFamily: "var(--font-mono, monospace)" }}>Última actualización: {updated}</p>}
        <div style={{ fontSize: 15, lineHeight: 1.75, opacity: 0.92 }} className="legal-content">
          {children}
        </div>
        <div style={{ marginTop: 60, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: 16, flexWrap: "wrap", fontSize: 13 }}>
          <Link to="/aviso-legal" style={{ color: "inherit", opacity: 0.7 }}>Aviso Legal</Link>
          <Link to="/politica-privacidad" style={{ color: "inherit", opacity: 0.7 }}>Privacidad</Link>
          <Link to="/politica-cookies" style={{ color: "inherit", opacity: 0.7 }}>Cookies</Link>
          <Link to="/terminos-condiciones" style={{ color: "inherit", opacity: 0.7 }}>Términos</Link>
        </div>
      </main>
      <style>{`
        .legal-content h2 { font-size: 1.4rem; margin: 36px 0 12px; }
        .legal-content h3 { font-size: 1.1rem; margin: 24px 0 8px; }
        .legal-content p { margin: 0 0 14px; }
        .legal-content ul { margin: 0 0 14px; padding-left: 22px; }
        .legal-content li { margin-bottom: 6px; }
        .legal-content a { color: var(--sky, #7dd3fc); }
        .legal-content strong { color: #fff; }
      `}</style>
    </div>
  );
}
