// Iser Labs — frame 05: Iconography & graphic language
// Single-stroke 1.5px geometric icons + the brand's graphic vocabulary
// (ticks, rules, serials, aperture, gauge).

function IconFrame() {
  const icons = [
    ['Aperture',  <Aperture/>],
    ['Specimen',  <Specimen/>],
    ['Gauge',     <Gauge/>],
    ['Beaker',    <Beaker/>],
    ['Caliper',   <Caliper/>],
    ['Notebook',  <Notebook/>],
    ['Signal',    <SignalIcon/>],
    ['Vector',    <Vector/>],
    ['Stack',     <Stack/>],
    ['Crosshair', <Crosshair/>],
    ['Tag',       <Tag/>],
    ['Archive',   <Archive/>],
  ];
  return (
    <div className="frame" style={{ width: 1440, height: 820, padding: 64 }}>
      <div className="frame-chrome">
        <div className="tl">ISR · §04 · ICONS</div>
        <div className="tr">FILE 05 / 09 · ICONOGRAPHY</div>
        <div className="br">05</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: 'var(--rule)', paddingBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--graphite)' }}>§04</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>Iconography</h2>
        </div>
        <span className="italic-ed" style={{ fontSize: 22, color: 'var(--graphite)' }}>One stroke. One grid. Drawn like instruments.</span>
      </div>

      {/* Construction rules + icon grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 28, marginTop: 28 }}>
        <div style={{ border: 'var(--hair)', padding: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="kicker">Construction</div>
          <ConstructionDiagram/>
          <ul style={{ fontSize: 12, color: 'var(--graphite)', lineHeight: 1.55, margin: 0, paddingLeft: 14 }}>
            <li>24 × 24 grid, 2px margin</li>
            <li>1.5px stroke · round caps</li>
            <li>Optical center, not geometric</li>
            <li>No fills · no gradients</li>
            <li>Right angles &amp; multiples of 45°</li>
          </ul>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', border: 'var(--hair)' }}>
          {icons.map(([name, svg], i) => (
            <div key={name} style={{
              aspectRatio: '1 / 1', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 8,
              borderRight: (i % 6 === 5) ? 'none' : 'var(--hair)',
              borderBottom: i < 6 ? 'var(--hair)' : 'none',
              padding: 10,
            }}>
              <div style={{ width: 48, height: 48, color: 'var(--ink)' }}>{svg}</div>
              <span className="mono" style={{ fontSize: 10, color: 'var(--graphite)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Graphic language strip */}
      <div style={{ marginTop: 28 }}>
        <div className="kicker" style={{ marginBottom: 10 }}>Graphic language · marks of the studio</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          <GLTile label="Serial"><span className="mono" style={{ fontSize: 18 }}>ISR-014/A</span></GLTile>
          <GLTile label="Hair rule"><div style={{ width: '70%', borderTop: 'var(--rule)' }}></div></GLTile>
          <GLTile label="Tick row">
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 28 }}>
              {[14,22,10,28,18,26,12,20,30,16].map((h,i)=><span key={i} style={{ width: 2, height: h, background: 'var(--ink)' }}/>)}
            </div>
          </GLTile>
          <GLTile label="Spec block">
            <div style={{ display: 'flex', gap: 16 }}>
              <SpecPair k="LOT" v="A · 26" />
              <SpecPair k="REV" v="3" />
            </div>
          </GLTile>
          <GLTile label="Signal dot"><span style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--signal)', display: 'inline-block', boxShadow: '0 0 0 4px color-mix(in oklab, var(--signal) 30%, transparent)' }}></span></GLTile>
        </div>
      </div>
    </div>
  );
}

function GLTile({ label, children }) {
  return (
    <div style={{ border: 'var(--hair)', aspectRatio: '1.7 / 1', display: 'grid', placeItems: 'center', position: 'relative' }}>
      {children}
      <span className="mono" style={{ position: 'absolute', left: 10, bottom: 6, fontSize: 9, color: 'var(--graphite)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
    </div>
  );
}

function SpecPair({ k, v }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span className="mono" style={{ fontSize: 9, color: 'var(--graphite)', letterSpacing: '0.1em' }}>{k}</span>
      <span className="mono" style={{ fontSize: 14 }}>{v}</span>
    </div>
  );
}

function ConstructionDiagram() {
  return (
    <svg viewBox="0 0 120 120" width="100%" style={{ display: 'block' }}>
      <defs>
        <pattern id="g4" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0 L0 0 0 10" fill="none" stroke="rgba(15,14,12,0.15)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#g4)"/>
      <rect x="10" y="10" width="100" height="100" fill="none" stroke="rgba(15,14,12,0.3)" strokeDasharray="2 2"/>
      <circle cx="60" cy="60" r="42" fill="none" stroke="var(--ink)" strokeWidth="2"/>
      <line x1="60" y1="22" x2="60" y2="98" stroke="var(--ink)" strokeWidth="2"/>
      <line x1="38" y1="60" x2="46" y2="60" stroke="var(--ink)" strokeWidth="2"/>
      <line x1="74" y1="60" x2="82" y2="60" stroke="var(--ink)" strokeWidth="2"/>
    </svg>
  );
}

// ---- Icons (each 24x24 viewBox, drawn with 1.5 stroke, round caps) ----
const ic = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
function Svg({ children }) { return <svg viewBox="0 0 24 24" width="100%" height="100%">{children}</svg>; }

function Aperture() { return <Svg><circle cx="12" cy="12" r="8.5" {...ic}/><line x1="12" y1="5.5" x2="12" y2="18.5" {...ic}/><line x1="6.5" y1="12" x2="9" y2="12" {...ic}/><line x1="15" y1="12" x2="17.5" y2="12" {...ic}/></Svg>; }
function Specimen() { return <Svg><rect x="4" y="3.5" width="16" height="17" {...ic}/><line x1="4" y1="8" x2="20" y2="8" {...ic}/><circle cx="12" cy="14" r="3" {...ic}/></Svg>; }
function Gauge() { return <Svg><path d="M4 16 A8 8 0 0 1 20 16" {...ic}/><line x1="12" y1="16" x2="16" y2="9" {...ic}/><circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none"/></Svg>; }
function Beaker() { return <Svg><path d="M9 3.5 L9 10 L5 18 A2 2 0 0 0 7 21 L17 21 A2 2 0 0 0 19 18 L15 10 L15 3.5" {...ic}/><line x1="8" y1="3.5" x2="16" y2="3.5" {...ic}/><line x1="7" y1="14" x2="17" y2="14" {...ic}/></Svg>; }
function Caliper() { return <Svg><rect x="3" y="9" width="18" height="3" {...ic}/><line x1="7" y1="12" x2="7" y2="15" {...ic}/><line x1="12" y1="12" x2="12" y2="15" {...ic}/><line x1="17" y1="12" x2="17" y2="15" {...ic}/><line x1="3" y1="6" x2="7" y2="6" {...ic}/></Svg>; }
function Notebook() { return <Svg><rect x="5" y="3.5" width="14" height="17" {...ic}/><line x1="5" y1="8" x2="19" y2="8" {...ic}/><line x1="8" y1="3.5" x2="8" y2="20.5" {...ic}/><line x1="11" y1="13" x2="16" y2="13" {...ic}/><line x1="11" y1="16" x2="16" y2="16" {...ic}/></Svg>; }
function SignalIcon() { return <Svg><path d="M4 16 L9 11 L13 15 L20 7" {...ic}/><circle cx="20" cy="7" r="1.5" fill="currentColor" stroke="none"/></Svg>; }
function Vector() { return <Svg><circle cx="6" cy="6" r="2" {...ic}/><circle cx="18" cy="18" r="2" {...ic}/><line x1="8" y1="8" x2="16" y2="16" {...ic}/></Svg>; }
function Stack() { return <Svg><rect x="4" y="4" width="16" height="4" {...ic}/><rect x="4" y="10" width="16" height="4" {...ic}/><rect x="4" y="16" width="16" height="4" {...ic}/></Svg>; }
function Crosshair() { return <Svg><circle cx="12" cy="12" r="6" {...ic}/><line x1="12" y1="2" x2="12" y2="6" {...ic}/><line x1="12" y1="18" x2="12" y2="22" {...ic}/><line x1="2" y1="12" x2="6" y2="12" {...ic}/><line x1="18" y1="12" x2="22" y2="12" {...ic}/></Svg>; }
function Tag() { return <Svg><path d="M4 4 L12 4 L20 12 L12 20 L4 12 Z" {...ic}/><circle cx="8" cy="8" r="1.2" {...ic}/></Svg>; }
function Archive() { return <Svg><rect x="3.5" y="5" width="17" height="4" {...ic}/><rect x="5" y="9" width="14" height="11" {...ic}/><line x1="10" y1="13" x2="14" y2="13" {...ic}/></Svg>; }

window.IconFrame = IconFrame;
