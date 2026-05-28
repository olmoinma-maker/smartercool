import React from "react";
import { Icon } from "./icons";

// AIR MAPS — architectural top-down plans for each application context.
// Each is a unique tiny SVG drawing showing the space layout + product placement + airflow lines.
// Visual language: thin strokes, dashed airflow, small circles for HVLS, squares for coolers, half-circles for extractors.

const Plan = {};

// helpers
const Stroke = ({ color }) => null; // unused, kept for symmetry

// ---------- 01 INDUSTRIAS — factory floor with HVLS array + conveyor lines
Plan.Industrias = ({ c = "currentColor", a = "#C8D9E6" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    {/* outer building */}
    <rect x="14" y="22" width="292" height="156" rx="2" opacity="0.65"/>
    {/* sawtooth roof hint */}
    <path d="M14 22 L40 8 L66 22 L92 8 L118 22 L144 8 L170 22 L196 8 L222 22 L248 8 L274 22 L300 8" opacity="0.35"/>
    {/* conveyor lines */}
    <rect x="36" y="58" width="248" height="14" opacity="0.4"/>
    <rect x="36" y="92" width="248" height="14" opacity="0.4"/>
    <rect x="36" y="126" width="190" height="14" opacity="0.4"/>
    {/* small machines */}
    <rect x="38" y="146" width="22" height="22" opacity="0.6"/>
    <rect x="68" y="146" width="22" height="22" opacity="0.6"/>
    <rect x="98" y="146" width="22" height="22" opacity="0.6"/>
    <rect x="252" y="146" width="32" height="22" opacity="0.6"/>
    {/* HVLS fans (3) */}
    {[80, 160, 240].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="40" r="18" fill={a} fillOpacity="0.15" stroke={a} strokeWidth="1"/>
        <circle cx={x} cy="40" r="2" fill={a}/>
        <g stroke={a} strokeWidth="0.9">
          <line x1={x-15} y1="40" x2={x+15} y2="40"/>
          <line x1={x} y1="25" x2={x} y2="55"/>
          <line x1={x-11} y1="29" x2={x+11} y2="51"/>
          <line x1={x-11} y1="51" x2={x+11} y2="29"/>
        </g>
      </g>
    ))}
    {/* airflow lines */}
    <path className="airline" d="M30 40 Q 60 70 90 60 T 160 70 T 230 60 T 300 50" stroke={a} strokeWidth="1" opacity="0.8" fill="none"/>
    <path className="airline" d="M30 110 Q 80 140 160 130 T 300 120" stroke={a} strokeWidth="1" opacity="0.8" fill="none"/>
    {/* compass / scale */}
    <g opacity="0.5">
      <line x1="14" y1="190" x2="74" y2="190"/>
      <text x="78" y="193" fontFamily="monospace" fontSize="7" fill={c}>0 — 80 m</text>
    </g>
  </svg>
);

// ---------- 02 ALMACENES — rack rows with HVLS overhead + forklift path
Plan.Almacenes = ({ c = "currentColor", a = "#2F4156" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="14" width="292" height="172" rx="2"/>
    {/* aisle/rack pattern */}
    {[0,1,2,3,4,5].map(i => (
      <g key={i}>
        <rect x={30 + i*44} y="40" width="14" height="120" opacity="0.5"/>
        {/* shelves divisions */}
        {[0,1,2,3].map(j => (
          <line key={j} x1={30 + i*44} y1={50 + j*30} x2={44 + i*44} y2={50 + j*30} opacity="0.4"/>
        ))}
      </g>
    ))}
    {/* HVLS fans (2 large) */}
    {[100, 220].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="100" r="22" fill={a} fillOpacity="0.18" stroke={a} strokeWidth="1"/>
        <g stroke={a} strokeWidth="0.9" opacity="0.9">
          {[0,1,2,3,4].map(b => {
            const ang = (b * 360/5) * Math.PI/180;
            return <line key={b} x1={x} y1="100" x2={x + Math.cos(ang)*20} y2={100 + Math.sin(ang)*20}/>;
          })}
        </g>
        <circle cx={x} cy="100" r="3" fill={a}/>
      </g>
    ))}
    {/* loading dock */}
    <rect x="14" y="170" width="40" height="16" fill={c} fillOpacity="0.08"/>
    <rect x="266" y="170" width="40" height="16" fill={c} fillOpacity="0.08"/>
    {/* airflow */}
    <path className="airline" d="M40 24 Q 90 60 100 100" stroke={a} strokeWidth="1" opacity="0.7"/>
    <path className="airline" d="M280 24 Q 240 60 220 100" stroke={a} strokeWidth="1" opacity="0.7"/>
    <path className="airline" d="M100 100 Q 160 130 220 100" stroke={a} strokeWidth="1" opacity="0.7"/>
  </svg>
);

// ---------- 03 BODEGAS — small space with extractor + crate stacks
Plan.Bodegas = ({ c = "currentColor", a = "#C8D9E6" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="20" y="20" width="280" height="160" rx="2"/>
    {/* crates */}
    {[40, 90, 140].map((x, i) => (
      <g key={i}>
        <rect x={x} y="46" width="36" height="36" opacity="0.45"/>
        <rect x={x+4} y="50" width="28" height="28" opacity="0.35"/>
      </g>
    ))}
    {/* pallets */}
    <rect x="200" y="46" width="80" height="50" opacity="0.4"/>
    <path d="M200 60 L280 60 M200 78 L280 78" opacity="0.3"/>
    <rect x="40" y="120" width="240" height="40" opacity="0.35"/>
    {/* extractor on wall */}
    <g>
      <rect x="148" y="14" width="24" height="14" fill={a} fillOpacity="0.5" stroke={a}/>
      <line x1="154" y1="14" x2="154" y2="28" stroke={a}/>
      <line x1="160" y1="14" x2="160" y2="28" stroke={a}/>
      <line x1="166" y1="14" x2="166" y2="28" stroke={a}/>
    </g>
    {/* extractor air pulling */}
    <path className="airline" d="M160 100 Q 160 60 160 30" stroke={a} strokeWidth="1.1" opacity="0.85"/>
    <path className="airline" d="M120 110 Q 140 70 160 30" stroke={a} strokeWidth="0.9" opacity="0.7"/>
    <path className="airline" d="M200 110 Q 180 70 160 30" stroke={a} strokeWidth="0.9" opacity="0.7"/>
    {/* door */}
    <path d="M156 180 L196 180 L196 188 L156 188 Z" fill={c} fillOpacity="0.08"/>
  </svg>
);

// ---------- 04 TALLERES — work stations + extractor walls
Plan.Talleres = ({ c = "currentColor", a = "#C8D9E6" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="20" width="292" height="160" rx="2"/>
    {/* work benches */}
    <rect x="28" y="40" width="100" height="22" opacity="0.5"/>
    <rect x="28" y="76" width="100" height="22" opacity="0.5"/>
    <rect x="28" y="112" width="100" height="22" opacity="0.5"/>
    <rect x="28" y="148" width="100" height="22" opacity="0.5"/>
    {/* tool wall */}
    <line x1="20" y1="35" x2="136" y2="35" opacity="0.4"/>
    {/* car lift / station */}
    <rect x="170" y="48" width="120" height="52" rx="1" opacity="0.4"/>
    <line x1="170" y1="74" x2="290" y2="74" opacity="0.3"/>
    <text x="230" y="78" fontFamily="monospace" fontSize="7" textAnchor="middle" fill={c} opacity="0.6">LIFT 01</text>
    <rect x="170" y="118" width="120" height="52" rx="1" opacity="0.4"/>
    <line x1="170" y1="144" x2="290" y2="144" opacity="0.3"/>
    <text x="230" y="148" fontFamily="monospace" fontSize="7" textAnchor="middle" fill={c} opacity="0.6">LIFT 02</text>
    {/* extractors on side walls */}
    {[60, 100, 140].map((y, i) => (
      <g key={i}>
        <rect x="6" y={y-4} width="10" height="10" fill={a} fillOpacity="0.4" stroke={a}/>
      </g>
    ))}
    {/* HVLS overhead */}
    <circle cx="225" cy="35" r="14" fill={a} fillOpacity="0.18" stroke={a} strokeWidth="1"/>
    {[0,1,2,3,4].map(b => {
      const ang = (b * 360/5) * Math.PI/180;
      return <line key={b} x1="225" y1="35" x2={225 + Math.cos(ang)*12} y2={35 + Math.sin(ang)*12} stroke={a} strokeWidth="0.9"/>;
    })}
    {/* airflow */}
    <path className="airline" d="M225 60 Q 180 90 145 100 T 30 100" stroke={a} strokeWidth="1" opacity="0.7"/>
    <path className="airline" d="M225 80 Q 190 130 150 140 T 30 60" stroke={a} strokeWidth="1" opacity="0.7"/>
  </svg>
);

// ---------- 05 GIMNASIOS — equipment layout + central HVLS
Plan.Gimnasios = ({ c = "currentColor", a = "#2F4156" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="14" width="292" height="172" rx="2"/>
    {/* mats / zones */}
    <rect x="26" y="26" width="68" height="46" opacity="0.4" strokeDasharray="3 3"/>
    <rect x="226" y="26" width="68" height="46" opacity="0.4" strokeDasharray="3 3"/>
    <rect x="26" y="128" width="68" height="46" opacity="0.4" strokeDasharray="3 3"/>
    <rect x="226" y="128" width="68" height="46" opacity="0.4" strokeDasharray="3 3"/>
    {/* treadmills row */}
    {[0,1,2,3].map(i => (
      <rect key={i} x={36 + i*16} y="86" width="10" height="28" opacity="0.55"/>
    ))}
    {/* weights row */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <circle cx={246 + i*14} cy="100" r="4" opacity="0.6"/>
      </g>
    ))}
    {/* central HVLS */}
    <circle cx="160" cy="100" r="38" fill={a} fillOpacity="0.18" stroke={a}/>
    {[0,1,2,3,4,5].map(b => {
      const ang = (b * 60) * Math.PI/180;
      return <line key={b} x1="160" y1="100" x2={160 + Math.cos(ang)*34} y2={100 + Math.sin(ang)*34} stroke={a} strokeWidth="1"/>;
    })}
    <circle cx="160" cy="100" r="5" fill={a}/>
    {/* concentric air rings */}
    <circle cx="160" cy="100" r="60" stroke={a} strokeWidth="0.7" opacity="0.4" strokeDasharray="2 5" fill="none"/>
    <circle cx="160" cy="100" r="80" stroke={a} strokeWidth="0.7" opacity="0.3" strokeDasharray="2 5" fill="none"/>
  </svg>
);

// ---------- 06 HOTELES — corridor + rooms + lobby cooler
Plan.Hoteles = ({ c = "currentColor", a = "#C8D9E6" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="14" width="292" height="172" rx="2"/>
    {/* corridor */}
    <line x1="14" y1="100" x2="306" y2="100" opacity="0.5"/>
    <line x1="14" y1="120" x2="306" y2="120" opacity="0.5"/>
    {/* top rooms */}
    {[0,1,2,3,4,5,6,7].map(i => (
      <g key={i}>
        <line x1={50 + i*32} y1="14" x2={50 + i*32} y2="100" opacity="0.5"/>
        <text x={66 + i*32} y="60" fontFamily="monospace" fontSize="7" textAnchor="middle" fill={c} opacity="0.5">{(101+i).toString()}</text>
      </g>
    ))}
    {/* bottom rooms */}
    {[0,1,2,3,4,5,6,7].map(i => (
      <g key={i}>
        <line x1={50 + i*32} y1="120" x2={50 + i*32} y2="186" opacity="0.5"/>
        <text x={66 + i*32} y="156" fontFamily="monospace" fontSize="7" textAnchor="middle" fill={c} opacity="0.5">{(201+i).toString()}</text>
      </g>
    ))}
    {/* lobby (left) */}
    <rect x="14" y="100" width="36" height="20" fill={a} fillOpacity="0.15"/>
    <rect x="22" y="106" width="20" height="8" fill={a} fillOpacity="0.5"/>
    <text x="32" y="92" fontFamily="monospace" fontSize="6" textAnchor="middle" fill={c} opacity="0.55">LOBBY</text>
    {/* small coolers along corridor */}
    {[3,5].map((i, idx) => (
      <g key={idx}>
        <rect x={62 + i*32} y="106" width="12" height="8" fill={a} fillOpacity="0.6" stroke={a}/>
      </g>
    ))}
    {/* airflow */}
    <path className="airline" d="M40 110 H 280" stroke={a} strokeWidth="1" opacity="0.6"/>
  </svg>
);

// ---------- 07 RESTAURANTES — kitchen + dining + extractor over stove
Plan.Restaurantes = ({ c = "currentColor", a = "#C8D9E6" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="14" width="292" height="172" rx="2"/>
    {/* divider */}
    <line x1="120" y1="14" x2="120" y2="186" opacity="0.5"/>
    {/* kitchen (left) */}
    <text x="26" y="28" fontFamily="monospace" fontSize="7" fill={c} opacity="0.5">COCINA</text>
    <rect x="26" y="40" width="80" height="30" opacity="0.5"/>
    <text x="66" y="59" fontFamily="monospace" fontSize="7" textAnchor="middle" fill={c} opacity="0.55">STOVE</text>
    <rect x="26" y="82" width="80" height="14" opacity="0.4"/>
    <rect x="26" y="106" width="36" height="36" opacity="0.4"/>
    <rect x="70" y="106" width="36" height="36" opacity="0.4"/>
    <rect x="26" y="152" width="80" height="24" opacity="0.4"/>
    {/* extractor over stove */}
    <rect x="26" y="32" width="80" height="6" fill={a} fillOpacity="0.6" stroke={a} strokeWidth="0.8"/>
    {[0,1,2,3,4,5,6,7].map(i => (
      <line key={i} x1={28 + i*10} y1="32" x2={28 + i*10} y2="38" stroke={a} strokeWidth="0.7"/>
    ))}
    {/* extraction airflow */}
    {[35, 55, 75, 95].map((x, i) => (
      <path key={i} className="airline" d={`M${x+11} 55 Q ${x+11} 45 ${x+11} 36`} stroke={a} strokeWidth="1" opacity="0.85"/>
    ))}
    {/* dining (right) */}
    <text x="130" y="28" fontFamily="monospace" fontSize="7" fill={c} opacity="0.5">SALA</text>
    {[0,1,2].map(r => (
      [0,1,2].map(c2 => (
        <g key={`${r}-${c2}`}>
          <circle cx={150 + c2*52} cy={60 + r*42} r="10" opacity="0.5"/>
          <line x1={150 + c2*52 - 14} y1={60 + r*42} x2={150 + c2*52 + 14} y2={60 + r*42} opacity="0.35"/>
          <line x1={150 + c2*52} y1={60 + r*42 - 14} x2={150 + c2*52} y2={60 + r*42 + 14} opacity="0.35"/>
        </g>
      ))
    ))}
    {/* HVLS in dining */}
    <circle cx="226" cy="100" r="14" fill={a} fillOpacity="0.15" stroke={a}/>
    {[0,1,2,3,4].map(b => {
      const ang = (b * 72) * Math.PI/180;
      return <line key={b} x1="226" y1="100" x2={226 + Math.cos(ang)*12} y2={100 + Math.sin(ang)*12} stroke={a} strokeWidth="0.8"/>;
    })}
  </svg>
);

// ---------- 08 NAVES — giant industrial nave with HVLS array
Plan.Naves = ({ c = "currentColor", a = "#C8D9E6" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="20" width="292" height="160" rx="2"/>
    {/* trusses */}
    {[60, 110, 160, 210, 260].map((x, i) => (
      <line key={i} x1={x} y1="20" x2={x} y2="180" opacity="0.18"/>
    ))}
    {/* HVLS array 6 */}
    {[
      [80, 70], [160, 70], [240, 70],
      [80, 130], [160, 130], [240, 130]
    ].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="22" fill={a} fillOpacity="0.15" stroke={a}/>
        {[0,1,2,3,4,5].map(b => {
          const ang = (b * 60) * Math.PI/180;
          return <line key={b} x1={x} y1={y} x2={x + Math.cos(ang)*20} y2={y + Math.sin(ang)*20} stroke={a} strokeWidth="0.9"/>;
        })}
        <circle cx={x} cy={y} r="2.5" fill={a}/>
      </g>
    ))}
    {/* extractor side */}
    <rect x="6" y="92" width="10" height="20" fill={a} fillOpacity="0.5" stroke={a}/>
    <rect x="304" y="92" width="10" height="20" fill={a} fillOpacity="0.5" stroke={a}/>
    {/* scale */}
    <g opacity="0.5">
      <line x1="14" y1="190" x2="74" y2="190"/>
      <text x="78" y="193" fontFamily="monospace" fontSize="7" fill={c}>0 — 60 m</text>
    </g>
  </svg>
);

// ---------- 09 COMERCIOS — retail space with display + portable cooler
Plan.Comercios = ({ c = "currentColor", a = "#2F4156" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="14" width="292" height="172" rx="2"/>
    {/* shopfront */}
    <line x1="14" y1="170" x2="306" y2="170" opacity="0.5"/>
    <line x1="120" y1="170" x2="200" y2="170" stroke={c} strokeWidth="0" opacity="0"/>
    <rect x="120" y="166" width="80" height="8" fill={c} fillOpacity="0.08"/>
    <text x="160" y="183" fontFamily="monospace" fontSize="7" textAnchor="middle" fill={c} opacity="0.6">ENTRADA</text>
    {/* display racks U-shape */}
    <rect x="30" y="32" width="14" height="120" opacity="0.5"/>
    <rect x="276" y="32" width="14" height="120" opacity="0.5"/>
    <rect x="30" y="32" width="260" height="14" opacity="0.5"/>
    {/* central displays */}
    <rect x="100" y="80" width="40" height="30" opacity="0.45"/>
    <rect x="180" y="80" width="40" height="30" opacity="0.45"/>
    {/* counter */}
    <rect x="80" y="130" width="160" height="18" opacity="0.4"/>
    {/* portable cooler */}
    <g>
      <rect x="60" y="64" width="16" height="20" fill={a} fillOpacity="0.5" stroke={a}/>
      <line x1="60" y1="70" x2="76" y2="70" stroke={a}/>
      <line x1="60" y1="74" x2="76" y2="74" stroke={a}/>
    </g>
    <g>
      <rect x="244" y="100" width="16" height="20" fill={a} fillOpacity="0.5" stroke={a}/>
      <line x1="244" y1="106" x2="260" y2="106" stroke={a}/>
      <line x1="244" y1="110" x2="260" y2="110" stroke={a}/>
    </g>
    {/* airflow */}
    <path className="airline" d="M76 76 Q 130 100 160 110" stroke={a} strokeWidth="1" opacity="0.7"/>
    <path className="airline" d="M244 110 Q 200 100 160 110" stroke={a} strokeWidth="1" opacity="0.7"/>
  </svg>
);

// ---------- 10 DISTRIBUCIÓN — large distribution center with docks
Plan.Distribucion = ({ c = "currentColor", a = "#C8D9E6" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="30" width="292" height="140" rx="2"/>
    {/* docks bottom */}
    {[0,1,2,3,4,5,6,7].map(i => (
      <rect key={i} x={28 + i*34} y="170" width="22" height="14" fill={c} fillOpacity="0.1"/>
    ))}
    {/* truck silhouettes */}
    {[0,2,5].map((i, idx) => (
      <g key={idx} opacity="0.5">
        <rect x={28 + i*34} y="188" width="22" height="10" fill={c} fillOpacity="0.18"/>
        <rect x={30 + i*34} y="190" width="14" height="6" fill="none"/>
      </g>
    ))}
    {/* pallet rows */}
    {[0,1,2,3].map(r => (
      <g key={r}>
        {[0,1,2,3,4,5,6,7].map(co => (
          <rect key={co} x={28 + co*34} y={45 + r*28} width="22" height="14" opacity="0.4"/>
        ))}
      </g>
    ))}
    {/* HVLS overhead */}
    {[80, 240].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="100" r="18" fill={a} fillOpacity="0.16" stroke={a}/>
        {[0,1,2,3,4].map(b => {
          const ang = (b * 72) * Math.PI/180;
          return <line key={b} x1={x} y1="100" x2={x + Math.cos(ang)*16} y2={100 + Math.sin(ang)*16} stroke={a} strokeWidth="0.9"/>;
        })}
        <circle cx={x} cy="100" r="2" fill={a}/>
      </g>
    ))}
    {/* airflow */}
    <path className="airline" d="M80 118 Q 160 140 240 118" stroke={a} strokeWidth="1" opacity="0.7"/>
  </svg>
);

// ---------- 11 ESCUELAS — classrooms grid
Plan.Escuelas = ({ c = "currentColor", a = "#2F4156" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="14" width="292" height="172" rx="2"/>
    {/* horizontal corridor */}
    <rect x="14" y="92" width="292" height="20" fill={c} fillOpacity="0.05"/>
    {/* upper classrooms (4) */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <line x1={88 + i*54} y1="14" x2={88 + i*54} y2="92" opacity="0.5"/>
        {/* desks */}
        {[0,1,2].map(r => (
          <g key={r}>
            {[0,1,2,3].map(co => (
              <rect key={co} x={42 + i*54 + co*10} y={26 + r*18} width="6" height="6" opacity="0.4"/>
            ))}
          </g>
        ))}
        {/* HVLS small */}
        <circle cx={61 + i*54} cy="78" r="6" fill={a} fillOpacity="0.5" stroke={a} strokeWidth="0.8"/>
      </g>
    ))}
    {/* lower classrooms */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <line x1={88 + i*54} y1="112" x2={88 + i*54} y2="186" opacity="0.5"/>
        {/* desks */}
        {[0,1,2].map(r => (
          <g key={r}>
            {[0,1,2,3].map(co => (
              <rect key={co} x={42 + i*54 + co*10} y={124 + r*16} width="6" height="6" opacity="0.4"/>
            ))}
          </g>
        ))}
        <circle cx={61 + i*54} cy="172" r="6" fill={a} fillOpacity="0.5" stroke={a} strokeWidth="0.8"/>
      </g>
    ))}
    {/* corridor flow */}
    <path className="airline" d="M22 102 H 298" stroke={a} strokeWidth="1.2" opacity="0.75"/>
  </svg>
);

// ---------- 12 HOSPITALES — corridors + rooms with extractors
Plan.Hospitales = ({ c = "currentColor", a = "#C8D9E6" }) => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="14" width="292" height="172" rx="2"/>
    {/* T corridor */}
    <rect x="14" y="92" width="292" height="20" fill={c} fillOpacity="0.05"/>
    <rect x="148" y="14" width="20" height="172" fill={c} fillOpacity="0.05"/>
    {/* corridor lines */}
    <line x1="14" y1="92" x2="306" y2="92" opacity="0.4"/>
    <line x1="14" y1="112" x2="306" y2="112" opacity="0.4"/>
    <line x1="148" y1="14" x2="148" y2="186" opacity="0.4"/>
    <line x1="168" y1="14" x2="168" y2="186" opacity="0.4"/>
    {/* upper left rooms */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <line x1={28 + i*30} y1="14" x2={28 + i*30} y2="92" opacity="0.4"/>
        <rect x={32 + i*30} y="28" width="20" height="48" opacity="0.3"/>
      </g>
    ))}
    {/* upper right rooms */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <line x1={184 + i*30} y1="14" x2={184 + i*30} y2="92" opacity="0.4"/>
        <rect x={188 + i*30} y="28" width="20" height="48" opacity="0.3"/>
      </g>
    ))}
    {/* lower rooms */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <line x1={28 + i*30} y1="112" x2={28 + i*30} y2="186" opacity="0.4"/>
        <line x1={184 + i*30} y1="112" x2={184 + i*30} y2="186" opacity="0.4"/>
      </g>
    ))}
    {/* + signs (medical) */}
    {[60, 220].map((x, i) => (
      <g key={i} stroke={a} strokeWidth="1.4">
        <line x1={x-4} y1="52" x2={x+4} y2="52"/>
        <line x1={x} y1="48" x2={x} y2="56"/>
      </g>
    ))}
    {/* extractors */}
    <rect x="6" y="148" width="10" height="14" fill={a} fillOpacity="0.5" stroke={a}/>
    <rect x="304" y="148" width="10" height="14" fill={a} fillOpacity="0.5" stroke={a}/>
    {/* airflow */}
    <path className="airline" d="M20 102 H 298" stroke={a} strokeWidth="1" opacity="0.7"/>
    <path className="airline" d="M158 22 V 178" stroke={a} strokeWidth="1" opacity="0.7"/>
  </svg>
);

window.Plan = Plan;
