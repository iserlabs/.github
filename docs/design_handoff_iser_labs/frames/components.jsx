// Iser Labs — frame 06: UI components
// Buttons, inputs, badges, cards, navigation. Built from the tokens above
// so anything stamped out the door reads as Iser Labs.

function ComponentsFrame() {
  return (
    <div className="frame" style={{ width: 1440, height: 1100, padding: 64 }}>
      <div className="frame-chrome">
        <div className="tl">ISR · §05 · COMPONENTS</div>
        <div className="tr">FILE 06 / 09 · UI KIT</div>
        <div className="br">06</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: 'var(--rule)', paddingBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--graphite)' }}>§05</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>Components</h2>
        </div>
        <span className="italic-ed" style={{ fontSize: 22, color: 'var(--graphite)' }}>Built like the instruments they are.</span>
      </div>

      {/* Buttons */}
      <CompSection title="Buttons" n="06.1">
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <Btn variant="primary">Begin experiment</Btn>
          <Btn variant="secondary">View specimens</Btn>
          <Btn variant="ghost">Read more →</Btn>
          <Btn variant="signal">Subscribe</Btn>
          <Btn variant="primary" small>Save</Btn>
          <Btn variant="primary" disabled>Disabled</Btn>
        </div>
      </CompSection>

      {/* Inputs */}
      <CompSection title="Inputs & forms" n="06.2">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
          <Field label="Name" value="Jules Iser" />
          <Field label="Email" value="hello@iserlabs.com" />
          <Field label="Project" placeholder="ISR-014 · prototype" />
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <Check label="Send me notebook entries" checked />
          <Check label="Public profile" />
          <Toggle label="Lab mode" on />
          <Toggle label="High contrast" />
        </div>
      </CompSection>

      {/* Badges + tags */}
      <CompSection title="Badges & tags" n="06.3">
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge>In progress</Badge>
          <Badge tone="signal">Live</Badge>
          <Badge tone="ink">Archived</Badge>
          <Badge tone="outline">Draft</Badge>
          <Badge tone="pulse">Halted</Badge>
          <Tag>research</Tag>
          <Tag>tooling</Tag>
          <Tag>open-source</Tag>
        </div>
      </CompSection>

      {/* Cards */}
      <CompSection title="Cards" n="06.4">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <SpecimenCard
            n="ISR-014"
            title="Field Notebook"
            desc="A markdown editor for the long now. Versioned, signed, and built to outlive its server."
            tag="Live"
            tone="signal"
          />
          <SpecimenCard
            n="ISR-011"
            title="Sodium Charts"
            desc="A tiny charting primitive for tabular notebooks. 6 KB, zero dependencies, plottable in print."
            tag="In progress"
          />
          <SpecimenCard
            n="ISR-006"
            title="Aperture Type"
            desc="A monospace family designed for instrument readouts. Open sourced under SIL OFL."
            tag="Archived"
            tone="ink"
          />
        </div>
      </CompSection>

      {/* Nav + table */}
      <CompSection title="Navigation & data" n="06.5">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 18, alignItems: 'flex-start' }}>
          <Nav/>
          <DataTable/>
        </div>
      </CompSection>
    </div>
  );
}

function CompSection({ title, n, children }) {
  return (
    <div style={{ marginTop: 22 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--graphite)' }}>{n}</span>
        <span style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-0.005em' }}>{title}</span>
        <span style={{ flex: 1, borderTop: 'var(--hair)', alignSelf: 'center', height: 1 }}/>
      </div>
      {children}
    </div>
  );
}

function Btn({ children, variant = 'primary', small, disabled }) {
  const base = {
    fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: small ? 13 : 14,
    letterSpacing: '-0.005em', padding: small ? '7px 12px' : '11px 18px',
    border: '1px solid var(--ink)', cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1, lineHeight: 1, display: 'inline-flex', alignItems: 'center', gap: 8,
    borderRadius: 0,
  };
  const styles = {
    primary:   { ...base, background: 'var(--ink)',    color: 'var(--paper)' },
    secondary: { ...base, background: 'var(--paper)',  color: 'var(--ink)' },
    ghost:     { ...base, background: 'transparent',   color: 'var(--ink)', border: 'none', padding: small ? '7px 6px' : '11px 8px' },
    signal:    { ...base, background: 'var(--signal)', color: 'var(--ink)', border: '1px solid var(--ink)' },
  };
  return <button style={styles[variant]}>{children}</button>;
}

function Field({ label, value, placeholder }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--graphite)' }}>{label}</span>
      <span style={{
        borderBottom: 'var(--rule)', paddingBottom: 6, fontSize: 16, color: value ? 'var(--ink)' : 'var(--stone)',
      }}>{value || placeholder}</span>
    </label>
  );
}

function Check({ label, checked }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
      <span style={{
        width: 16, height: 16, border: '1px solid var(--ink)', background: checked ? 'var(--ink)' : 'transparent',
        display: 'grid', placeItems: 'center', color: 'var(--paper)', fontSize: 11, lineHeight: 1,
      }}>{checked ? '✓' : ''}</span>
      {label}
    </span>
  );
}

function Toggle({ label, on }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
      <span style={{
        width: 36, height: 18, border: '1px solid var(--ink)', background: on ? 'var(--signal)' : 'transparent',
        position: 'relative', display: 'inline-block',
      }}>
        <span style={{
          position: 'absolute', top: 1, left: on ? 19 : 1, width: 14, height: 14,
          background: 'var(--ink)', transition: 'left .12s',
        }}/>
      </span>
      {label}
    </span>
  );
}

function Badge({ children, tone = 'default' }) {
  const map = {
    default: { bg: 'var(--bone)',   fg: 'var(--ink)',    border: '1px solid var(--ink)' },
    signal:  { bg: 'var(--signal)', fg: 'var(--ink)',    border: '1px solid var(--ink)' },
    ink:     { bg: 'var(--ink)',    fg: 'var(--paper)',  border: '1px solid var(--ink)' },
    outline: { bg: 'transparent',   fg: 'var(--ink)',    border: '1px dashed var(--ink)' },
    pulse:   { bg: 'transparent',   fg: 'var(--pulse)',  border: '1px solid var(--pulse)' },
  }[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 8px',
      fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
      background: map.bg, color: map.fg, border: map.border, lineHeight: 1.4,
    }}>
      {tone === 'signal' && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ink)' }}/>}
      {children}
    </span>
  );
}

function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '3px 8px',
      fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--graphite)',
      borderBottom: 'var(--hair)',
    }}>
      #{children}
    </span>
  );
}

function SpecimenCard({ n, title, desc, tag, tone = 'default' }) {
  return (
    <div style={{ border: 'var(--rule)', padding: 18, background: 'var(--paper)', display: 'flex', flexDirection: 'column', gap: 12, height: 220 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--graphite)', letterSpacing: '0.1em' }}>{n}</span>
        <Badge tone={tone}>{tag}</Badge>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, letterSpacing: '-0.015em', lineHeight: 1.1 }}>{title}</div>
      <p style={{ fontSize: 13, color: 'var(--graphite)', margin: 0, lineHeight: 1.5, textWrap: 'pretty', flex: 1 }}>{desc}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: 'var(--hair)', paddingTop: 10 }}>
        <span className="mono" style={{ fontSize: 10, color: 'var(--graphite)' }}>REV. A · 2026</span>
        <span style={{ fontSize: 12 }}>Open →</span>
      </div>
    </div>
  );
}

function Nav() {
  const items = ['Index', 'Specimens', 'Notebook', 'Studio', 'Contact'];
  return (
    <div style={{ border: 'var(--rule)', background: 'var(--paper)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: 'var(--hair)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span className="aperture" style={{ width: 22 }}></span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 16, letterSpacing: '-0.02em' }}>Iser Labs</span>
        </span>
        <span className="mono" style={{ fontSize: 11, color: 'var(--graphite)' }}>· · ·</span>
      </div>
      <nav style={{ display: 'flex', gap: 4, padding: '8px 10px', flexWrap: 'wrap' }}>
        {items.map((it, i) => (
          <span key={it} style={{
            padding: '7px 12px', fontSize: 13, fontWeight: i === 0 ? 500 : 400,
            background: i === 0 ? 'var(--ink)' : 'transparent', color: i === 0 ? 'var(--paper)' : 'var(--ink)',
          }}>{it}</span>
        ))}
      </nav>
    </div>
  );
}

function DataTable() {
  const rows = [
    ['ISR-014', 'Field Notebook',   'Live',        '2026 · 05'],
    ['ISR-013', 'Aperture Type',    'Live',        '2026 · 04'],
    ['ISR-012', 'Lattice',          'In progress', '2026 · 03'],
    ['ISR-011', 'Sodium Charts',    'In progress', '2026 · 02'],
    ['ISR-010', 'Tare',             'Archived',    '2025 · 12'],
  ];
  return (
    <div style={{ border: 'var(--rule)', background: 'var(--paper)' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '90px 1fr 110px 100px', padding: '10px 14px',
        borderBottom: 'var(--rule)', fontFamily: 'var(--font-mono)', fontSize: 10,
        letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--graphite)',
      }}>
        <span>Lot</span><span>Specimen</span><span>Status</span><span>Issued</span>
      </div>
      {rows.map(([lot, name, status, date], i) => (
        <div key={lot} style={{
          display: 'grid', gridTemplateColumns: '90px 1fr 110px 100px', padding: '12px 14px',
          alignItems: 'center', borderBottom: i === rows.length - 1 ? 'none' : 'var(--hair)', fontSize: 13,
        }}>
          <span className="mono" style={{ fontSize: 12 }}>{lot}</span>
          <span>{name}</span>
          <span><Badge tone={status === 'Live' ? 'signal' : status === 'Archived' ? 'ink' : 'default'}>{status}</Badge></span>
          <span className="mono" style={{ fontSize: 11, color: 'var(--graphite)' }}>{date}</span>
        </div>
      ))}
    </div>
  );
}

window.ComponentsFrame = ComponentsFrame;
