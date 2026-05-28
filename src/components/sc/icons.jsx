import React from "react";

// Iconography + product visual placeholders (SVG)

export const Icon = {
  ArrowUR: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 L17 7" /><path d="M8 7 H17 V16" />
    </svg>
  ),
  ArrowR: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12 H19" /><path d="M13 6 L19 12 L13 18" />
    </svg>
  ),
  Plus: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 5 V19" /><path d="M5 12 H19" />
    </svg>
  ),
  Close: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M6 6 L18 18" /><path d="M18 6 L6 18" />
    </svg>
  ),
  Search: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="11" cy="11" r="6" /><path d="M20 20 L16 16" />
    </svg>
  ),
  Whatsapp: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.93.55 3.78 1.59 5.41L2 22l4.84-1.27a9.86 9.86 0 0 0 5.19 1.46h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.13-2.9-7-1.87-1.88-4.36-2.92-7.01-2.92Zm0 18.27h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.05.8.81-2.97-.19-.31a8.18 8.18 0 0 1-1.25-4.37c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4a8.15 8.15 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.21 8.2Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.24-.74-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.18-.47-.31Z"/>
    </svg>
  ),
  Cooler: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7 H15 M9 11 H15 M9 15 H15" />
    </svg>
  ),
  Fan: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10c0-3-1-7-3-7-1.7 0-3 1.3-3 3 0 2 3 4 6 4Z" />
      <path d="M14 12c3 0 7-1 7-3 0-1.7-1.3-3-3-3-2 0-4 3-4 6Z" />
      <path d="M12 14c0 3 1 7 3 7 1.7 0 3-1.3 3-3 0-2-3-4-6-4Z" />
      <path d="M10 12c-3 0-7 1-7 3 0 1.7 1.3 3 3 3 2 0 4-3 4-6Z" />
    </svg>
  ),
  Wind: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M3 8 H15 a3 3 0 1 0 -3 -3" />
      <path d="M3 13 H19 a2 2 0 1 1 -2 2" />
      <path d="M3 18 H10" />
    </svg>
  ),
  Pad: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M4 9 H20 M4 14 H20 M9 4 V20 M14 4 V20" />
    </svg>
  ),
  Bolt: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M13 2 L4 14 H11 L9 22 L20 10 H13 Z" />
    </svg>
  ),
  Shield: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M12 3 L4 6 V12 C4 17 8 21 12 22 C16 21 20 17 20 12 V6 Z" />
    </svg>
  ),
  Gauge: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 16 a8 8 0 1 1 16 0" /><path d="M12 16 L16 9" />
    </svg>
  ),
  Drop: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 C8 8 5 11 5 15 a7 7 0 0 0 14 0 c0-4-3-7-7-12Z" />
    </svg>
  ),
  Remote: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="3" width="10" height="18" rx="2" /><circle cx="12" cy="8" r="1.5" /><path d="M10 13 H14 M10 16 H14" />
    </svg>
  ),
  Timer: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="13" r="8" /><path d="M12 13 V9" /><path d="M9 3 H15" />
    </svg>
  ),
  Bluetooth: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M8 7 L16 17 L12 21 V3 L16 7 L8 17" />
    </svg>
  ),
  Building: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21 H21" /><rect x="5" y="7" width="6" height="14" /><rect x="13" y="3" width="6" height="18" /><path d="M7 11 H9 M7 15 H9 M15 7 H17 M15 11 H17 M15 15 H17" />
    </svg>
  ),
  Warehouse: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M3 11 L12 5 L21 11 V21 H3 Z" /><path d="M8 14 H16 V21 H8 Z" /><path d="M8 17 H16" />
    </svg>
  ),
  Gym: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M3 9 V15" /><path d="M21 9 V15" /><path d="M6 7 V17" /><path d="M18 7 V17" /><path d="M6 12 H18" />
    </svg>
  ),
  Hotel: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M3 21 V8 H21 V21" /><path d="M3 14 H21" /><path d="M7 11 H9 M11 11 H13 M15 11 H17 M7 17 H9 M11 17 H13 M15 17 H17" /><path d="M3 8 L12 3 L21 8" />
    </svg>
  ),
  Factory: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M3 21 V11 L9 14 V11 L15 14 V8 L21 5 V21 Z" /><path d="M7 17 H9 M13 17 H15 M17 17 H19" />
    </svg>
  ),
  Shop: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M3 8 L5 4 H19 L21 8 V10 a3 3 0 0 1 -6 0 a3 3 0 0 1 -6 0 a3 3 0 0 1 -6 0 Z" /><path d="M5 10 V21 H19 V10" />
    </svg>
  ),
  Restaurant: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M6 3 V11 a2 2 0 0 0 4 0 V3" /><path d="M8 11 V21" /><path d="M16 21 V14 H14 V9 a3 3 0 0 1 4 -3 V21" />
    </svg>
  ),
  Hospital: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 8 V16" /><path d="M8 12 H16" />
    </svg>
  ),
  School: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M12 3 L2 8 L12 13 L22 8 Z" /><path d="M6 10 V15 c0 1.7 3 3 6 3 s6-1.3 6-3 V10" />
    </svg>
  ),
  Truck: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M3 17 V7 H14 V17" /><path d="M14 11 H18 L21 14 V17 H14" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" />
    </svg>
  ),
  Tool: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M14 6 a4 4 0 0 1 4 4 a4 4 0 0 1 -4 4 L6 22 L2 18 L10 10 a4 4 0 0 1 4 -4" />
    </svg>
  ),
  Office: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" /><path d="M9 3 V21 M15 3 V21 M3 9 H21 M3 15 H21" />
    </svg>
  ),
  Download: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 V15" /><path d="M7 11 L12 16 L17 11" /><path d="M4 20 H20" />
    </svg>
  ),
  Star: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L14.5 9 L22 9.5 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9.5 L9.5 9 Z" />
    </svg>
  ),
};

// ----- Product visual placeholders (SVG renders) -----
export const ProductArt = {
  // Portable evaporative cooler — tall body, vents, control panel
  Cooler: ({ tone = "light" }) => {
    const stroke = tone === "dark" ? "#C8D9E6" : "#2F4156";
    const fill = tone === "dark" ? "rgba(200,217,230,0.08)" : "rgba(47,65,86,0.04)";
    const accent = tone === "dark" ? "#C8D9E6" : "#567C8D";
    return (
      <svg viewBox="0 0 280 360" width="100%" height="100%">
        <defs>
          <linearGradient id="cool-body" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor={tone === "dark" ? "#3a536b" : "#ffffff"} />
            <stop offset="1" stopColor={tone === "dark" ? "#1f2c3a" : "#e4ecf3"} />
          </linearGradient>
        </defs>
        {/* shadow */}
        <ellipse cx="140" cy="340" rx="100" ry="8" fill="rgba(0,0,0,0.08)" />
        {/* main body */}
        <rect x="55" y="40" width="170" height="285" rx="14" fill="url(#cool-body)" stroke={stroke} strokeWidth="1.5"/>
        {/* top vent grille */}
        <rect x="68" y="58" width="144" height="38" rx="6" fill={fill} stroke={stroke} strokeWidth="0.8"/>
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <line key={i} x1={75+i*16} x2={75+i*16} y1="64" y2="90" stroke={stroke} strokeWidth="1" opacity="0.5"/>
        ))}
        {/* front grille (large) */}
        <rect x="68" y="108" width="144" height="160" rx="8" fill={fill} stroke={stroke} strokeWidth="0.8"/>
        {[...Array(14)].map((_, i) => (
          <line key={i} x1="74" x2="206" y1={120 + i*10} y2={120 + i*10} stroke={stroke} strokeWidth="0.8" opacity="0.45"/>
        ))}
        {/* control panel */}
        <rect x="70" y="280" width="140" height="34" rx="6" fill={tone==="dark"?"#1a2330":"#2F4156"} />
        <circle cx="86" cy="297" r="5" fill={accent}/>
        <circle cx="106" cy="297" r="3.5" fill="rgba(200,217,230,0.5)"/>
        <rect x="120" y="292" width="60" height="10" rx="2" fill="rgba(200,217,230,0.2)"/>
        <text x="150" y="300" fontFamily="monospace" fontSize="8" fill="#C8D9E6" textAnchor="middle" letterSpacing="2">SC-LCD</text>
        <circle cx="196" cy="297" r="4" fill="rgba(200,217,230,0.4)"/>
        {/* base / wheels */}
        <rect x="62" y="316" width="156" height="10" rx="3" fill={tone === "dark" ? "#1a2330" : "#1f2c3a"}/>
        <circle cx="78" cy="332" r="9" fill={stroke}/>
        <circle cx="202" cy="332" r="9" fill={stroke}/>
        <circle cx="78" cy="332" r="3" fill={tone==="dark"?"#3a536b":"#e4ecf3"}/>
        <circle cx="202" cy="332" r="3" fill={tone==="dark"?"#3a536b":"#e4ecf3"}/>
        {/* handle */}
        <path d="M85 36 Q140 12 195 36" stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* logo */}
        <text x="140" y="248" fontFamily="Antonio,sans-serif" fontSize="11" fill={accent} textAnchor="middle" letterSpacing="3">SMARTERCOOL</text>
      </svg>
    );
  },

  CoolerBox: ({ tone="light"}) => {
    const stroke = tone === "dark" ? "#C8D9E6" : "#2F4156";
    const accent = tone === "dark" ? "#C8D9E6" : "#567C8D";
    return (
      <svg viewBox="0 0 320 280" width="100%" height="100%">
        <ellipse cx="160" cy="260" rx="120" ry="6" fill="rgba(0,0,0,0.08)" />
        {/* box body */}
        <rect x="40" y="40" width="240" height="200" rx="10" fill={tone==="dark"?"rgba(58,83,107,0.7)":"#ffffff"} stroke={stroke} strokeWidth="1.5"/>
        {/* front grille */}
        <rect x="55" y="55" width="210" height="150" rx="6" fill="none" stroke={stroke} strokeWidth="0.8" opacity="0.6"/>
        {[...Array(12)].map((_, i) => (
          <line key={i} x1="62" x2="258" y1={68 + i*12} y2={68 + i*12} stroke={stroke} strokeWidth="0.8" opacity="0.4"/>
        ))}
        {/* control */}
        <rect x="58" y="212" width="204" height="22" rx="4" fill={tone==="dark"?"#1a2330":"#2F4156"}/>
        <circle cx="78" cy="223" r="4" fill={accent}/>
        <rect x="100" y="219" width="50" height="8" rx="2" fill="rgba(200,217,230,0.3)"/>
        <circle cx="250" cy="223" r="3.5" fill={accent}/>
        <text x="180" y="226" fontFamily="Antonio,sans-serif" fontSize="9" fill="#C8D9E6" textAnchor="middle" letterSpacing="2">BOX SERIES</text>
      </svg>
    );
  },

  // Large HVLS Industrial fan — top view with blades
  Fan: ({ tone = "light", blades = 5 }) => {
    const stroke = tone === "dark" ? "#C8D9E6" : "#2F4156";
    const accent = tone === "dark" ? "#C8D9E6" : "#567C8D";
    const bladeFill = tone === "dark" ? "rgba(200,217,230,0.12)" : "rgba(86,124,141,0.12)";
    const angles = Array.from({length: blades}, (_, i) => (360/blades) * i);
    return (
      <svg viewBox="0 0 320 320" width="100%" height="100%">
        <defs>
          <radialGradient id="hub" cx="0.5" cy="0.5">
            <stop offset="0" stopColor={tone === "dark" ? "#3a536b" : "#ffffff"} />
            <stop offset="1" stopColor={tone === "dark" ? "#1f2c3a" : "#2F4156"} />
          </radialGradient>
        </defs>
        <g style={{ transformOrigin: "160px 160px" }}>
          {angles.map((a, i) => (
            <g key={i} transform={`rotate(${a} 160 160)`}>
              <path
                d="M160 160 L150 30 Q160 18 170 30 L160 160 Z"
                fill={bladeFill}
                stroke={stroke}
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </g>
          ))}
        </g>
        {/* hub */}
        <circle cx="160" cy="160" r="42" fill="url(#hub)" stroke={stroke} strokeWidth="1.5"/>
        <circle cx="160" cy="160" r="28" fill="none" stroke={stroke} strokeWidth="0.8" opacity="0.5"/>
        <circle cx="160" cy="160" r="6" fill={accent}/>
        {[0,1,2,3,4,5].map(i => (
          <circle key={i} cx={160 + Math.cos(i*Math.PI/3)*34} cy={160 + Math.sin(i*Math.PI/3)*34} r="2" fill={stroke}/>
        ))}
      </svg>
    );
  },

  // Industrial extractor (square wall fan)
  Extractor: ({ tone = "dark" }) => {
    const stroke = tone === "dark" ? "#C8D9E6" : "#2F4156";
    const accent = tone === "dark" ? "#C8D9E6" : "#567C8D";
    return (
      <svg viewBox="0 0 320 320" width="100%" height="100%">
        {/* frame */}
        <rect x="20" y="20" width="280" height="280" rx="6" fill="none" stroke={stroke} strokeWidth="2"/>
        <rect x="36" y="36" width="248" height="248" rx="4" fill="none" stroke={stroke} strokeWidth="1.2" opacity="0.6"/>
        {/* corner bolts */}
        {[[40,40],[280,40],[40,280],[280,280]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="none" stroke={stroke} strokeWidth="1"/>
        ))}
        {/* center ring */}
        <circle cx="160" cy="160" r="100" fill="none" stroke={stroke} strokeWidth="1.5"/>
        {/* blades */}
        {[0,1,2,3].map(i => (
          <g key={i} transform={`rotate(${i*90} 160 160)`}>
            <path d="M160 160 Q170 110 220 80 Q150 110 160 160 Z" fill="rgba(86,124,141,0.18)" stroke={stroke} strokeWidth="1"/>
          </g>
        ))}
        {/* hub */}
        <circle cx="160" cy="160" r="22" fill={tone==="dark"?"#1a2330":"#2F4156"} stroke={stroke} strokeWidth="1"/>
        <circle cx="160" cy="160" r="4" fill={accent}/>
        {/* protection bars */}
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
          <line key={i}
            x1={160 + Math.cos(i*Math.PI/6)*30}
            y1={160 + Math.sin(i*Math.PI/6)*30}
            x2={160 + Math.cos(i*Math.PI/6)*100}
            y2={160 + Math.sin(i*Math.PI/6)*100}
            stroke={stroke} strokeWidth="0.8" opacity="0.5"
          />
        ))}
        {/* label */}
        <text x="160" y="295" fontFamily="Antonio,sans-serif" fontSize="11" fill={accent} textAnchor="middle" letterSpacing="3">AIRMAX GL 50&quot;</text>
      </svg>
    );
  },

  // Cooling pad
  Pad: ({ tone = "light" }) => {
    const stroke = tone === "dark" ? "#C8D9E6" : "#2F4156";
    const accent = tone === "dark" ? "#C8D9E6" : "#567C8D";
    return (
      <svg viewBox="0 0 320 280" width="100%" height="100%">
        <defs>
          <pattern id="hexpad" width="22" height="20" patternUnits="userSpaceOnUse" patternTransform="skewX(-30)">
            <rect width="22" height="20" fill="rgba(86,124,141,0.06)"/>
            <path d="M0 0 H22 M0 10 H22 M0 20 H22" stroke={stroke} strokeWidth="0.6" opacity="0.6"/>
          </pattern>
        </defs>
        {/* outer frame */}
        <rect x="40" y="30" width="240" height="220" rx="6" fill="rgba(86,124,141,0.08)" stroke={stroke} strokeWidth="1.5"/>
        {/* pad interior with honeycomb */}
        <rect x="52" y="42" width="216" height="196" rx="2" fill="url(#hexpad)" stroke={stroke} strokeWidth="0.8"/>
        {/* corrugated lines */}
        {[...Array(18)].map((_, i) => (
          <line key={i} x1={52 + i*12} x2={52 + i*12 + 12} y1="42" y2="238" stroke={stroke} strokeWidth="0.5" opacity="0.4"/>
        ))}
        {/* edge highlight */}
        <rect x="52" y="42" width="216" height="6" fill={accent} opacity="0.3"/>
        <rect x="52" y="232" width="216" height="6" fill={accent} opacity="0.3"/>
        <text x="160" y="266" fontFamily="Antonio,sans-serif" fontSize="11" fill={accent} textAnchor="middle" letterSpacing="3">CELDEK ®</text>
      </svg>
    );
  },
};

// expose
