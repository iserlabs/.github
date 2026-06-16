// Iser Labs — frame 09: System index / colophon
// Closing frame: how the parts fit, where to get the files, what changed.

function IndexFrame() {
  return (
    <div className="frame" style={{ width: 1440, height: 820, padding: 64 }}>
      <div className="frame-chrome">
        <div className="tl">ISR · §08 · INDEX</div>
        <div className="tr">FILE 09 / 09 · COLOPHON</div>
        <div className="br">09</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: 'var(--rule)', paddingBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--graphite)' }}>§08</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>Index &amp; colophon</h2>
        </div>
        <span className="italic-ed" style={{ fontSize: 22, color: 'var(--graphite)' }}>The parts list.</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 36, marginTop: 28 }}>
        {/* index */}
        <div>
          <div className="kicker" style={{ marginBottom: 12 }}>Contents</div>
          <div style={{ border: 'var(--hair)' }}>
            {[
              ['§00', 'Cover',           '01'],
              ['§01', 'Logo system',     '02'],
              ['§02', 'Color',           '03'],
              ['§03', 'Typography',      '04'],
              ['§04', 'Iconography',     '05'],
              ['§05', 'Components',      '06'],
              ['§06', 'Applications',    '07'],
              ['§07', 'Voice & motion',  '08'],
              ['§08', 'Index & colophon','09'],
            ].map(([s, t, p], i) => (
              <div key={s} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr 80px', padding: '12px 16px',
                borderTop: i === 0 ? 'none' : 'var(--hair)', alignItems: 'baseline',
              }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--graphite)' }}>{s}</span>
                <span style={{ fontSize: 16 }}>{t}</span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--graphite)', textAlign: 'right' }}>P. {p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* colophon */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 8 }}>Colophon</div>
            <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.32, margin: 0, color: 'var(--ink)', textWrap: 'pretty' }}>
              Set in Space Grotesk and JetBrains Mono, with Instrument Serif for the occasional turn of phrase. Printed on the inside of every page.
            </p>
          </div>
          <hr className="hair"/>
          <div>
            <div className="kicker" style={{ marginBottom: 8 }}>Revision history</div>
            <div className="mono" style={{ fontSize: 12, lineHeight: 1.9, color: 'var(--ink)' }}>
              <Row date="2026 · 05 · 11" who="JI" what="Rev. A — first edition."/>
              <Row date="2026 · 05 · 14" who="JI" what="Added spec sticker · §06."/>
              <Row date="2026 · 05 · 22" who="MC" what="Tightened voice rules."/>
            </div>
          </div>
          <hr className="hair"/>
          <div>
            <div className="kicker" style={{ marginBottom: 8 }}>Contact</div>
            <div className="mono" style={{ fontSize: 12, lineHeight: 1.9 }}>
              <div>brand@iserlabs.com</div>
              <div>iserlabs.com/brand</div>
              <div style={{ color: 'var(--graphite)' }}>BROOKLYN · NY · USA</div>
            </div>
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12, paddingTop: 18, borderTop: 'var(--hair)' }}>
            <span className="aperture" style={{ width: 28 }}></span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 16, letterSpacing: '-0.02em' }}>Iser Labs.</span>
            <span className="mono" style={{ fontSize: 10, color: 'var(--graphite)', marginLeft: 'auto', letterSpacing: '0.1em' }}>© MMXXVI</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ date, who, what }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 30px 1fr', gap: 12 }}>
      <span style={{ color: 'var(--graphite)' }}>{date}</span>
      <span style={{ color: 'var(--graphite)' }}>{who}</span>
      <span>{what}</span>
    </div>
  );
}

window.IndexFrame = IndexFrame;
