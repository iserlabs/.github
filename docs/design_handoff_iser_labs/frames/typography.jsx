// Iser Labs — frame 04: Typography
// Three families: Space Grotesk (display), JetBrains Mono (technical),
// Instrument Serif italic (editorial flourish). Plus the type scale.

function TypeFrame() {
  const scale = [
    ['Display',  96, 500, '-0.045em', 'var(--font-display)',   'Iser Labs builds.' ],
    ['H1',       64, 500, '-0.03em',  'var(--font-display)',   'A research studio.' ],
    ['H2',       40, 500, '-0.02em',  'var(--font-display)',   'Computational tools.' ],
    ['H3',       28, 500, '-0.015em', 'var(--font-display)',   'For software & systems.' ],
    ['Body L',   20, 400, '-0.005em', 'var(--font-display)',   'We design and build small, careful instruments.' ],
    ['Body',     16, 400, '0',        'var(--font-display)',   'Each instrument is documented, versioned, and signed.' ],
    ['Caption',  13, 500, '0',        'var(--font-display)',   'Specimen ISR-014 · revision A · May 2026' ],
    ['Mono',     13, 400, '0.02em',   'var(--font-mono)',      'iser/labs · build 2026.05.A · sha 4f12e' ],
  ];

  return (
    <div className="frame" style={{ width: 1440, height: 1180, padding: 64 }}>
      <div className="frame-chrome">
        <div className="tl">ISR · §03 · TYPE</div>
        <div className="tr">FILE 04 / 09 · TYPOGRAPHY</div>
        <div className="br">04</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: 'var(--rule)', paddingBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--graphite)' }}>§03</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>Typography</h2>
        </div>
        <span className="italic-ed" style={{ fontSize: 22, color: 'var(--graphite)' }}>Grotesque, mono, and an editorial italic.</span>
      </div>

      {/* Three families — large specimen cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 28 }}>
        <FamilyCard
          n="01"
          family="Space Grotesk"
          role="Display & UI"
          note="Used for headlines, wordmark, and product chrome. Medium (500) and Semibold (600) carry weight; Regular (400) sits in long-form."
          sample="Aa"
          fontFamily="var(--font-display)"
          weights={['Light 300','Regular 400','Medium 500','Semibold 600','Bold 700']}
        />
        <FamilyCard
          n="02"
          family="JetBrains Mono"
          role="Technical & meta"
          note="Serial numbers, code, tabular data, footnotes, kickers. Sets the lab-notebook tone. Use sparingly in 10–13px."
          sample="0/I"
          fontFamily="var(--font-mono)"
          weights={['Regular 400','Medium 500','Bold 700']}
        />
        <FamilyCard
          n="03"
          family="Instrument Serif"
          role="Editorial flourish"
          note="Italic only. For pull-quotes, taglines, and the rare emotional accent. Never for UI labels or long-form body."
          sample={<i>Aa</i>}
          fontFamily="var(--font-editorial)"
          italic
          weights={['Regular italic']}
        />
      </div>

      {/* Type scale */}
      <div style={{ marginTop: 30 }}>
        <div className="kicker" style={{ marginBottom: 10 }}>Type scale · 1.250 perfect fourth · rounded</div>
        <div style={{ border: 'var(--hair)' }}>
          {scale.map(([name, size, weight, ls, family, sample], i) => (
            <div key={name} style={{
              display: 'grid', gridTemplateColumns: '92px 88px 1fr', gap: 24, alignItems: 'baseline',
              padding: '14px 18px', borderTop: i === 0 ? 'none' : 'var(--hair)',
            }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--graphite)' }}>{name}</span>
              <span className="mono" style={{ fontSize: 11, color: 'var(--graphite)' }}>{size}px · {weight}</span>
              <span style={{
                fontFamily: family, fontWeight: weight, fontSize: size, letterSpacing: ls,
                lineHeight: 1.05, color: 'var(--ink)',
              }}>{sample}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FamilyCard({ n, family, role, note, sample, fontFamily, italic, weights }) {
  return (
    <div style={{ border: 'var(--hair)', padding: 22, height: 360, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--graphite)', letterSpacing: '0.08em' }}>{n} · {role}</span>
        <span className="mono" style={{ fontSize: 10, color: 'var(--graphite)' }}>{weights.length} cuts</span>
      </div>
      <div style={{
        fontFamily, fontStyle: italic ? 'italic' : 'normal',
        fontWeight: 500, fontSize: 140, lineHeight: 1, letterSpacing: '-0.04em',
        color: 'var(--ink)', alignSelf: 'flex-start',
      }}>
        {sample}
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, letterSpacing: '-0.02em' }}>{family}</div>
        <p style={{ fontSize: 13, color: 'var(--graphite)', margin: '4px 0 10px', textWrap: 'pretty', lineHeight: 1.42 }}>{note}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {weights.map(w => (
            <span key={w} className="mono" style={{ fontSize: 10, padding: '3px 7px', border: 'var(--hair)', color: 'var(--graphite)' }}>{w}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

window.TypeFrame = TypeFrame;
