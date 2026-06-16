// Iser Labs — frame 03: Color system
// Primary, neutrals, signal. Each swatch carries HEX + OKLCH + role.

function ColorFrame() {
  const primary = [
    { name: 'Ink',      hex: '#0F0E0C', oklch: 'oklch(15% .005 70)',  role: 'Primary text, surfaces, marks',  on: 'var(--paper)' },
    { name: 'Paper',    hex: '#F2EDE3', oklch: 'oklch(94% .013 80)',  role: 'Canvas, default background',     on: 'var(--ink)' },
    { name: 'Signal',   hex: '#F26418', oklch: 'oklch(67% .180 45)',  role: 'Sodium flare — single, deliberate', on: 'var(--ink)' },
  ];
  const neutrals = [
    { name: 'Bone',     hex: '#E4DDCB', role: 'Secondary surface', on: 'var(--ink)' },
    { name: 'Mist',     hex: '#CFC8B7', role: 'Hover / fill',      on: 'var(--ink)' },
    { name: 'Stone',    hex: '#A39B89', role: 'Mid neutral, rules',on: 'var(--ink)' },
    { name: 'Shadow',   hex: '#6B655A', role: 'Tertiary text',     on: 'var(--paper)' },
    { name: 'Graphite', hex: '#3A3631', role: 'Secondary text',    on: 'var(--paper)' },
  ];
  const support = [
    { name: 'Signal Deep', hex: '#B83F00', role: 'Pressed states' },
    { name: 'Pulse',       hex: '#C8553D', role: 'Errors, urgency' },
    { name: 'Moss',        hex: '#5C6F4A', role: 'Success — used rarely' },
  ];

  return (
    <div className="frame" style={{ width: 1440, height: 1000, padding: 64 }}>
      <div className="frame-chrome">
        <div className="tl">ISR · §02 · COLOR</div>
        <div className="tr">FILE 03 / 09 · COLOR SYSTEM</div>
        <div className="br">03</div>
      </div>

      <SectionHeader n="§02" title="Color" sub="Paper and ink, lit by sodium amber." />

      {/* Primary trio — large blocks */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 28 }}>
        {primary.map(c => (
          <BigSwatch key={c.name} {...c} />
        ))}
      </div>

      {/* Ratio bar — how the palette should be distributed */}
      <div style={{ marginTop: 28 }}>
        <div className="kicker" style={{ marginBottom: 10 }}>Distribution · target ratio</div>
        <div style={{ display: 'flex', height: 28, border: 'var(--hair)' }}>
          <Bar bg="var(--paper)" pct={60} label="Paper · 60" labelColor="var(--ink)" />
          <Bar bg="var(--ink)"   pct={28} label="Ink · 28"   labelColor="var(--paper)" />
          <Bar bg="var(--bone)"  pct={8}  label="Neutral · 8" labelColor="var(--ink)" />
          <Bar bg="var(--signal)" pct={4} label="Signal · 4" labelColor="var(--ink)" />
        </div>
      </div>

      {/* Neutrals ramp */}
      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <div>
          <div className="kicker" style={{ marginBottom: 10 }}>Neutral ramp · paper → ink</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', border: 'var(--hair)' }}>
            {neutrals.map(n => (
              <NeutralCell key={n.name} {...n} />
            ))}
          </div>
        </div>
        <div>
          <div className="kicker" style={{ marginBottom: 10 }}>Support · use sparingly</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: 'var(--hair)' }}>
            {support.map(s => (
              <SupportCell key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>

      {/* Pairing examples */}
      <div style={{ marginTop: 28 }}>
        <div className="kicker" style={{ marginBottom: 10 }}>Approved pairings</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          <Pairing bg="var(--paper)" fg="var(--ink)"    name="Paper / Ink"    note="Default" />
          <Pairing bg="var(--ink)"   fg="var(--paper)"  name="Ink / Paper"    note="Inverse" />
          <Pairing bg="var(--signal)" fg="var(--ink)"   name="Signal / Ink"   note="Headline" />
          <Pairing bg="var(--ink)"   fg="var(--signal)" name="Ink / Signal"   note="Emphasis" />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ n, title, sub }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: 'var(--rule)', paddingBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
        <span className="mono" style={{ fontSize: 12, color: 'var(--graphite)' }}>{n}</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>{title}</h2>
      </div>
      <span className="italic-ed" style={{ fontSize: 22, color: 'var(--graphite)' }}>{sub}</span>
    </div>
  );
}

function BigSwatch({ name, hex, oklch, role, on }) {
  return (
    <div style={{ background: hex, color: on, padding: 22, height: 260, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: name === 'Paper' ? 'var(--hair)' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>{name === 'Signal' ? '03 · Signal' : name === 'Ink' ? '01 · Ink' : '02 · Paper'}</span>
        <span className="mono" style={{ fontSize: 11, letterSpacing: '0.05em', opacity: 0.7 }}>{hex}</span>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 38, letterSpacing: '-0.02em' }}>{name}</div>
        <div style={{ fontSize: 13, opacity: 0.78, marginTop: 4, maxWidth: '90%' }}>{role}</div>
        <div className="mono" style={{ fontSize: 10, marginTop: 8, opacity: 0.55 }}>{oklch}</div>
      </div>
    </div>
  );
}

function Bar({ bg, pct, label, labelColor }) {
  return (
    <div style={{ flex: pct, background: bg, display: 'flex', alignItems: 'center', padding: '0 12px', borderRight: 'var(--hair)' }}>
      <span className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: labelColor, textTransform: 'uppercase' }}>{label}</span>
    </div>
  );
}

function NeutralCell({ name, hex, role, on }) {
  return (
    <div style={{ background: hex, color: on, padding: 14, height: 130, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: 'var(--hair)' }}>
      <span className="mono" style={{ fontSize: 10, letterSpacing: '0.05em' }}>{hex}</span>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18 }}>{name}</div>
        <div style={{ fontSize: 11, opacity: 0.75 }}>{role}</div>
      </div>
    </div>
  );
}

function SupportCell({ name, hex, role }) {
  return (
    <div style={{ padding: 14, height: 130, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: 'var(--hair)', position: 'relative' }}>
      <span style={{ display: 'inline-block', width: 22, height: 22, background: hex, border: '1px solid var(--ink)' }}></span>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 16 }}>{name}</div>
        <div className="mono" style={{ fontSize: 10, color: 'var(--graphite)' }}>{hex}</div>
        <div style={{ fontSize: 11, color: 'var(--graphite)', marginTop: 2 }}>{role}</div>
      </div>
    </div>
  );
}

function Pairing({ bg, fg, name, note }) {
  return (
    <div style={{ background: bg, color: fg, height: 130, padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: bg === 'var(--paper)' ? 'var(--hair)' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>{note}</span>
        <span className="mono" style={{ fontSize: 10, opacity: 0.7 }}>Aa</span>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>Studio brief</div>
        <div style={{ fontSize: 11, opacity: 0.75, marginTop: 2 }}>{name}</div>
      </div>
    </div>
  );
}

window.ColorFrame = ColorFrame;
