// Iser Labs — frame 08: Voice & tone + motion principles
// How the brand sounds, and how it moves.

function VoiceMotionFrame() {
  return (
    <div className="frame" style={{ width: 1440, height: 900, padding: 64 }}>
      <div className="frame-chrome">
        <div className="tl">ISR · §07 · VOICE &amp; MOTION</div>
        <div className="tr">FILE 08 / 09 · OPERATING POSTURE</div>
        <div className="br">08</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: 'var(--rule)', paddingBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--graphite)' }}>§07</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>Voice &amp; motion</h2>
        </div>
        <span className="italic-ed" style={{ fontSize: 22, color: 'var(--graphite)' }}>How it sounds. How it moves.</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 32, marginTop: 28 }}>
        {/* Voice */}
        <div>
          <div className="kicker" style={{ marginBottom: 12 }}>Voice · five postures</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <VoiceRow yes="Precise" no="Vague" example="“ISR-014 ships May 11.”" anti="“Soonish, probably.”"/>
            <VoiceRow yes="Plain"   no="Performative" example="“It's a markdown editor.”" anti="“Reimagine your stack.”"/>
            <VoiceRow yes="Warm"    no="Corporate" example="“We made this for ourselves first.”" anti="“Our mission statement is…”"/>
            <VoiceRow yes="Curious" no="Certain" example="“We don't know yet — let's try it.”" anti="“Best-in-class, guaranteed.”"/>
            <VoiceRow yes="Specific" no="Inflated" example="“6 KB, zero deps, runs offline.”" anti="“Lightweight, blazing-fast.”"/>
          </div>
        </div>

        {/* Motion */}
        <div>
          <div className="kicker" style={{ marginBottom: 12 }}>Motion · four principles</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <MotionCard
              n="01"
              name="Brief"
              desc="120–220ms for state. Anything longer needs a reason. We don't dance."
            />
            <MotionCard
              n="02"
              name="Linear-ish"
              desc="cubic-bezier(.2,.7,.3,1). No springs, no bounces. Instrument needles, not party balloons."
            />
            <MotionCard
              n="03"
              name="Mechanical"
              desc="Translate, scale, opacity. No blur, no glow, no parallax."
            />
            <MotionCard
              n="04"
              name="Honest"
              desc="Loading states show real progress, not the spinning wheel of nothing happening."
            />
          </div>

          {/* Sample timeline */}
          <div style={{ marginTop: 16, border: 'var(--hair)', padding: 14 }}>
            <div className="kicker" style={{ marginBottom: 10 }}>Easing · reference</div>
            <EasingTrack/>
          </div>
        </div>
      </div>

      {/* Bottom: do / don't */}
      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <DoDont positive entries={[
          'Sign work. Use serials.',
          'Show your math.',
          'Pick one accent and use it sparingly.',
          'Leave whitespace alone.',
          'Write like a person who has read a book.',
        ]}/>
        <DoDont entries={[
          'Add gradients, glows, or fake textures.',
          'Use emoji as decoration.',
          'Stack five icons in a row.',
          'Reach for a second accent color.',
          "Open a sentence with \u201cIn today\u2019s fast-paced\u2026\u201d",
        ]}/>
      </div>
    </div>
  );
}

function VoiceRow({ yes, no, example, anti }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', gap: 18, alignItems: 'center', borderBottom: 'var(--hair)', paddingBottom: 12 }}>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, letterSpacing: '-0.01em' }}>{yes}</div>
        <div className="mono" style={{ fontSize: 10, color: 'var(--graphite)', letterSpacing: '0.08em' }}>NOT {no.toUpperCase()}</div>
      </div>
      <div style={{ fontSize: 13, color: 'var(--ink)', display: 'flex', gap: 8, alignItems: 'baseline' }}>
        <span style={{ width: 8, height: 8, background: 'var(--signal)', flex: '0 0 auto', marginTop: 4 }}/>
        <span>{example}</span>
      </div>
      <div style={{ fontSize: 13, color: 'var(--graphite)', display: 'flex', gap: 8, alignItems: 'baseline', textDecoration: 'line-through', textDecorationColor: 'var(--pulse)' }}>
        <span style={{ width: 8, height: 8, border: '1px solid var(--graphite)', flex: '0 0 auto', marginTop: 4 }}/>
        <span>{anti}</span>
      </div>
    </div>
  );
}

function MotionCard({ n, name, desc }) {
  return (
    <div style={{ border: 'var(--hair)', padding: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span className="mono" style={{ fontSize: 10, color: 'var(--graphite)', letterSpacing: '0.1em' }}>{n}</span>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18 }}>{name}</div>
      <div style={{ fontSize: 12, color: 'var(--graphite)', lineHeight: 1.5, textWrap: 'pretty' }}>{desc}</div>
    </div>
  );
}

function EasingTrack() {
  return (
    <svg viewBox="0 0 320 70" width="100%" style={{ display: 'block' }}>
      <line x1="0" y1="65" x2="320" y2="65" stroke="var(--graphite)" strokeWidth="0.5"/>
      <path d="M 0 60 C 70 60, 100 12, 320 8" fill="none" stroke="var(--ink)" strokeWidth="1.5"/>
      {[0, 80, 160, 240, 320].map(x => (
        <g key={x}>
          <line x1={x} y1="62" x2={x} y2="68" stroke="var(--graphite)" strokeWidth="0.5"/>
          <text x={x} y="78" fontFamily="var(--font-mono)" fontSize="7" fill="var(--graphite)" textAnchor="middle">{(x / 320 * 200).toFixed(0)}ms</text>
        </g>
      ))}
      <text x="320" y="6" fontFamily="var(--font-mono)" fontSize="7" fill="var(--graphite)" textAnchor="end">cubic-bezier(.2,.7,.3,1)</text>
    </svg>
  );
}

function DoDont({ positive, entries }) {
  return (
    <div style={{ border: 'var(--rule)', padding: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <span style={{
          width: 22, height: 22, display: 'grid', placeItems: 'center',
          background: positive ? 'var(--signal)' : 'var(--paper)',
          border: '1px solid var(--ink)', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700,
          color: 'var(--ink)',
        }}>{positive ? '✓' : '×'}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18 }}>
          {positive ? 'Do' : "Don't"}
        </span>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {entries.map(e => (
          <li key={e} style={{ fontSize: 13, color: 'var(--ink)', display: 'flex', gap: 10, alignItems: 'baseline', borderTop: 'var(--hair)', paddingTop: 8 }}>
            <span className="mono" style={{ fontSize: 10, color: 'var(--graphite)' }}>—</span>
            <span style={{ textDecoration: positive ? 'none' : 'line-through', textDecorationColor: 'var(--pulse)' }}>{e}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

window.VoiceMotionFrame = VoiceMotionFrame;
