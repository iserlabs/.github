// Iser Labs — frame 01: Cover / brand essence
// A single, confident statement. Aperture monogram + wordmark, tagline,
// faint construction grid, and serial chrome.

function CoverFrame() {
  return (
    <div className="frame grid-bg" style={{ width: 1440, height: 900, padding: 64, color: 'var(--ink)' }}>
      <div className="frame-chrome">
        <div className="tl">ISR · BRAND · MMXXVI</div>
        <div className="tr">FILE 01 / 09 · COVER</div>
        <div className="bl">N 40°44′ · W 73°59′</div>
        <div className="br">REV. A — MAY 2026</div>
      </div>

      {/* Composition: large monogram top-left, wordmark below; the manifesto
          floats lower-right inside the construction grid. */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr auto', height: '100%', gap: 24 }}>
        <div style={{ gridColumn: '1 / 2', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 36 }}>
          <span className="aperture" style={{ width: 132, color: 'var(--ink)' }}></span>
          <div>
            <div className="kicker" style={{ marginBottom: 12 }}>The brand book of</div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 132, fontWeight: 500,
              letterSpacing: '-0.045em', lineHeight: 0.92,
              margin: 0,
            }}>
              Iser<br/>Labs<span style={{ color: 'var(--signal)' }}>.</span>
            </h1>
          </div>
        </div>

        <div style={{ gridColumn: '2 / 3', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', paddingTop: 80 }}>
          <div style={{ maxWidth: 460 }}>
            <div className="kicker" style={{ marginBottom: 14 }}>Manifesto · §00</div>
            <p style={{
              fontFamily: 'var(--font-editorial)', fontStyle: 'italic',
              fontSize: 30, lineHeight: 1.28, margin: 0, color: 'var(--ink)',
              textWrap: 'pretty',
            }}>
              A small, independent research studio for computational tools — software, interfaces, and the systems that hold them together.
            </p>
            <hr className="hair" style={{ margin: '22px 0 14px' }}/>
            <div className="mono" style={{ fontSize: 12, color: 'var(--graphite)', display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              <span>EST. 2025</span>
              <span>·</span>
              <span>BROOKLYN · NY</span>
              <span>·</span>
              <span>ISERLABS.COM</span>
            </div>
          </div>
        </div>

        {/* Bottom spec strip — full width. */}
        <div style={{ gridColumn: '1 / 3', borderTop: 'var(--rule)', paddingTop: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            ['§01', 'Logo & lockup'],
            ['§02', 'Color system'],
            ['§03', 'Typography'],
            ['§04', 'Applications'],
          ].map(([n, t]) => (
            <div key={n} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--graphite)' }}>{n}</span>
              <span style={{ fontSize: 16, letterSpacing: '-0.01em' }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.CoverFrame = CoverFrame;
