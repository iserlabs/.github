// Iser Labs — frame 02: Logo system
// Monogram, primary wordmark, horizontal lockup, stacked lockup, monochrome
// inversions, clear space, and minimum sizing.

function LogoFrame() {
  return (
    <div className="frame" style={{ width: 1440, height: 1000, padding: 64 }}>
      <div className="frame-chrome">
        <div className="tl">ISR · §01 · IDENTITY</div>
        <div className="tr">FILE 02 / 09 · LOGO SYSTEM</div>
        <div className="br">02</div>
      </div>

      <Header n="§01" title="Logo system" sub="A monogram, a wordmark, and the lockups that bind them." />

      {/* Hero row: huge monogram + primary lockup */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 56, alignItems: 'center', marginTop: 28 }}>
        <div style={{
          border: 'var(--hair)', aspectRatio: '1', display: 'grid', placeItems: 'center', position: 'relative',
        }}>
          <span className="aperture" style={{ width: 168 }}></span>
          <CornerTicks/>
          <Caption pos={{ left: 12, bottom: 8 }}>Monogram · ISR-01</Caption>
        </div>

        <div style={{
          border: 'var(--hair)', padding: '54px 48px', position: 'relative', aspectRatio: '1.9 / 1',
          display: 'grid', placeItems: 'center',
        }}>
          <Wordmark size={96} />
          <CornerTicks/>
          <Caption pos={{ left: 12, bottom: 8 }}>Primary wordmark — horizontal lockup</Caption>
        </div>
      </div>

      {/* Variants row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 28 }}>
        <Tile label="Stacked lockup">
          <StackedLockup size={64} color="var(--ink)" />
        </Tile>
        <Tile label="Reverse — ink" bg="var(--ink)" labelColor="var(--paper)">
          <Wordmark size={42} color="var(--paper)" />
        </Tile>
        <Tile label="Signal accent" bg="var(--signal)">
          <Wordmark size={42} color="var(--ink)" />
        </Tile>
        <Tile label="Mono — single weight">
          <span className="mono" style={{ fontSize: 28, letterSpacing: '0.02em' }}>iser/labs</span>
        </Tile>
      </div>

      {/* Construction + clear-space + minimums row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 20, marginTop: 24 }}>
        <Tile label="Clear space — 1 × monogram on all sides">
          <ClearSpaceDiagram />
        </Tile>
        <Tile label="Minimum sizes — print / screen">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'flex-start', padding: '8px 4px' }}>
            <MinSize size={36} note="36px — UI nav" />
            <MinSize size={20} note="20px — favicon floor" />
            <MinSize size={14} note="14px — absolute min" />
          </div>
        </Tile>
        <Tile label="Misuse — never">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, width: '100%', padding: 6 }}>
            <Misuse note="Stretch"><Wordmark size={22} transform="scaleX(1.45)" /></Misuse>
            <Misuse note="Rotate"><Wordmark size={22} transform="rotate(-12deg)" /></Misuse>
            <Misuse note="Outline"><Wordmark size={22} outline /></Misuse>
            <Misuse note="Off-palette"><Wordmark size={22} color="#5a9bff" /></Misuse>
          </div>
        </Tile>
      </div>
    </div>
  );
}

function Header({ n, title, sub }) {
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

function Wordmark({ size = 48, color = 'var(--ink)', transform, outline }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.34, color, transform, transformOrigin: 'center' }}>
      <span className="aperture" style={{ width: size * 0.92, color }}></span>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: size,
        letterSpacing: '-0.03em', lineHeight: 1,
        WebkitTextStroke: outline ? `1px ${color}` : undefined,
        color: outline ? 'transparent' : color,
      }}>
        Iser Labs<span style={{ color: outline ? color : 'var(--signal)' }}>.</span>
      </span>
    </span>
  );
}

function StackedLockup({ size = 64, color = 'var(--ink)' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.22, color }}>
      <span className="aperture" style={{ width: size * 1.05, color }}></span>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: size * 0.52,
        letterSpacing: '-0.025em', lineHeight: 1, color, textAlign: 'center',
      }}>Iser Labs<span style={{ color: 'var(--signal)' }}>.</span></span>
    </div>
  );
}

function CornerTicks() {
  const s = { position: 'absolute', width: 10, height: 10, borderColor: 'var(--ink)', borderStyle: 'solid', borderWidth: 0 };
  return (
    <>
      <span style={{ ...s, top: 8, left: 8, borderTopWidth: 1, borderLeftWidth: 1 }}></span>
      <span style={{ ...s, top: 8, right: 8, borderTopWidth: 1, borderRightWidth: 1 }}></span>
      <span style={{ ...s, bottom: 8, left: 8, borderBottomWidth: 1, borderLeftWidth: 1 }}></span>
      <span style={{ ...s, bottom: 8, right: 8, borderBottomWidth: 1, borderRightWidth: 1 }}></span>
    </>
  );
}

function Caption({ pos, children }) {
  return (
    <span className="mono" style={{ position: 'absolute', ...pos, fontSize: 10, color: 'var(--graphite)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
      {children}
    </span>
  );
}

function Tile({ label, bg = 'var(--paper)', labelColor = 'var(--graphite)', children }) {
  return (
    <div style={{
      border: 'var(--hair)', background: bg, position: 'relative',
      aspectRatio: '1.6 / 1', display: 'grid', placeItems: 'center', overflow: 'hidden',
    }}>
      {children}
      <span className="mono" style={{
        position: 'absolute', left: 12, bottom: 8, fontSize: 10,
        color: labelColor, letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>{label}</span>
    </div>
  );
}

function ClearSpaceDiagram() {
  // wordmark with 4 dashed lines showing 1× monogram clearance
  const unit = 28;
  return (
    <div style={{ position: 'relative', padding: unit, border: `1px dashed ${'color-mix(in oklab, var(--ink) 35%, transparent)'}` }}>
      <Wordmark size={36} />
      {/* x labels */}
      <span className="mono" style={{ position: 'absolute', top: -8, left: '50%', transform: 'translate(-50%,-100%)', fontSize: 10, color: 'var(--graphite)' }}>1×</span>
      <span className="mono" style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translate(-50%,100%)', fontSize: 10, color: 'var(--graphite)' }}>1×</span>
      <span className="mono" style={{ position: 'absolute', left: -8, top: '50%', transform: 'translate(-100%,-50%)', fontSize: 10, color: 'var(--graphite)' }}>1×</span>
      <span className="mono" style={{ position: 'absolute', right: -8, top: '50%', transform: 'translate(100%,-50%)', fontSize: 10, color: 'var(--graphite)' }}>1×</span>
    </div>
  );
}

function MinSize({ size, note }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Wordmark size={size * 0.5} />
      <span className="mono" style={{ fontSize: 11, color: 'var(--graphite)' }}>{note}</span>
    </div>
  );
}

function Misuse({ children, note }) {
  return (
    <div style={{
      border: 'var(--hair)', padding: 10, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 6, position: 'relative', minHeight: 56,
    }}>
      <div style={{ position: 'relative' }}>
        {children}
        <span style={{ position: 'absolute', inset: '-4px -8px', borderTop: '1px solid var(--pulse)', transform: 'rotate(-14deg)', top: '50%' }}></span>
      </div>
      <span className="mono" style={{ fontSize: 9, color: 'var(--pulse)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{note}</span>
    </div>
  );
}

window.LogoFrame = LogoFrame;
