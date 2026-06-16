// Iser Labs — frame 07: Applications
// How the system meets the world: business card, social, web hero, deck cover,
// letterhead, t-shirt label.

function ApplicationsFrame() {
  return (
    <div className="frame" style={{ width: 1440, height: 1100, padding: 64 }}>
      <div className="frame-chrome">
        <div className="tl">ISR · §06 · APPLICATIONS</div>
        <div className="tr">FILE 07 / 09 · IN THE WILD</div>
        <div className="br">07</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: 'var(--rule)', paddingBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--graphite)' }}>§06</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>Applications</h2>
        </div>
        <span className="italic-ed" style={{ fontSize: 22, color: 'var(--graphite)' }}>The kit, put to work.</span>
      </div>

      {/* Row 1: business card recto+verso, social square, web hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.25fr', gap: 18, marginTop: 28 }}>
        {/* Business card pair */}
        <Mock label="Business card — recto" aspect="1.75 / 1">
          <BusinessCardFront/>
        </Mock>
        <Mock label="Business card — verso" aspect="1.75 / 1">
          <BusinessCardBack/>
        </Mock>
        <Mock label="Social — 1080 sq" aspect="1 / 1">
          <SocialSquare/>
        </Mock>
      </div>

      {/* Row 2: web hero (wide), letterhead, sticker */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 18, marginTop: 18 }}>
        <Mock label="Site hero — iserlabs.com" aspect="2 / 1">
          <WebHero/>
        </Mock>
        <Mock label="Letterhead — A4" aspect="0.85 / 1">
          <Letterhead/>
        </Mock>
      </div>

      {/* Row 3: deck cover + tote/sticker strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 18, marginTop: 18 }}>
        <Mock label="Deck cover — 16:9" aspect="1.78 / 1">
          <DeckCover/>
        </Mock>
        <Mock label="Stickers & seal" aspect="1.6 / 1">
          <StickerStrip/>
        </Mock>
      </div>
    </div>
  );
}

function Mock({ label, aspect, children }) {
  return (
    <div>
      <div style={{ aspectRatio: aspect, position: 'relative', border: 'var(--hair)', overflow: 'hidden' }}>
        {children}
      </div>
      <div className="mono" style={{ fontSize: 10, color: 'var(--graphite)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 8 }}>{label}</div>
    </div>
  );
}

// — Business card —
function BusinessCardFront() {
  return (
    <div style={{ background: 'var(--paper)', padding: 22, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="aperture" style={{ width: 28 }}></span>
        <span className="mono" style={{ fontSize: 9, color: 'var(--graphite)', letterSpacing: '0.12em' }}>EST · MMXXV</span>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, letterSpacing: '-0.025em', lineHeight: 1 }}>
          Iser Labs<span style={{ color: 'var(--signal)' }}>.</span>
        </div>
        <div className="mono" style={{ fontSize: 9, color: 'var(--graphite)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 6 }}>
          A research studio
        </div>
      </div>
    </div>
  );
}

function BusinessCardBack() {
  return (
    <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 22, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div className="mono" style={{ fontSize: 9, color: 'var(--stone)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 6 }}>Principal</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, letterSpacing: '-0.015em' }}>Jules Iser</div>
      </div>
      <div className="mono" style={{ fontSize: 11, lineHeight: 1.7 }}>
        <div>jules@iserlabs.com</div>
        <div>iserlabs.com</div>
        <div style={{ color: 'var(--stone)' }}>BROOKLYN · NY · 11211</div>
      </div>
    </div>
  );
}

// — Social square —
function SocialSquare() {
  return (
    <div style={{ background: 'var(--paper)', padding: 24, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="aperture" style={{ width: 28 }}></span>
        <span className="mono" style={{ fontSize: 9, color: 'var(--graphite)', letterSpacing: '0.12em' }}>ISR-014 · A</span>
      </div>
      <div>
        <div className="mono" style={{ fontSize: 10, color: 'var(--graphite)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>Now shipping</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 38, letterSpacing: '-0.025em', lineHeight: 0.98, textWrap: 'pretty' }}>
          Field<br/>Notebook<span style={{ color: 'var(--signal)' }}>.</span>
        </div>
        <div className="italic-ed" style={{ fontSize: 16, marginTop: 10, color: 'var(--graphite)', maxWidth: '95%' }}>
          A markdown editor for the long now.
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: 'var(--hair)', paddingTop: 10 }}>
        <span className="mono" style={{ fontSize: 9, color: 'var(--graphite)', letterSpacing: '0.1em' }}>ISERLABS.COM/014</span>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--signal)' }}/>
      </div>
    </div>
  );
}

// — Web hero —
function WebHero() {
  return (
    <div className="grid-bg" style={{ background: 'var(--paper)', height: '100%', padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span className="aperture" style={{ width: 18 }}></span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14, letterSpacing: '-0.02em' }}>Iser Labs</span>
        </span>
        <span style={{ display: 'flex', gap: 14, fontSize: 11 }}>
          <span>Specimens</span><span>Notebook</span><span>Studio</span><span>Contact</span>
        </span>
      </div>
      {/* body */}
      <div style={{ maxWidth: '78%' }}>
        <div className="mono" style={{ fontSize: 10, color: 'var(--graphite)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>Index · 014 specimens</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 56, letterSpacing: '-0.035em', lineHeight: 0.95, textWrap: 'balance' }}>
          We build small<br/>
          <span className="italic-ed" style={{ fontStyle: 'italic', fontWeight: 400 }}>computational</span> instruments<span style={{ color: 'var(--signal)' }}>.</span>
        </div>
      </div>
      {/* footer strip */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: 'var(--rule)', paddingTop: 10 }}>
        <span className="mono" style={{ fontSize: 10, color: 'var(--graphite)' }}>EST. 2025 · BROOKLYN</span>
        <span style={{ fontSize: 11, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--signal)' }}/>
          ISR-014 just shipped
        </span>
      </div>
    </div>
  );
}

// — Letterhead —
function Letterhead() {
  return (
    <div style={{ background: 'var(--paper)', height: '100%', padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: 'var(--rule)', paddingBottom: 10 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span className="aperture" style={{ width: 14 }}></span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 11, letterSpacing: '-0.015em' }}>Iser Labs</span>
        </span>
        <span className="mono" style={{ fontSize: 7, color: 'var(--graphite)', letterSpacing: '0.1em' }}>05.11.2026</span>
      </div>
      <div style={{ fontSize: 7, lineHeight: 1.6, color: 'var(--graphite)' }}>
        <div>Dr. M. Cavell</div>
        <div>Cavell &amp; Co.</div>
        <div>114 Bedford Ave · Brooklyn</div>
      </div>
      <div style={{ fontSize: 8, lineHeight: 1.55, color: 'var(--ink)' }}>
        <p style={{ margin: '6px 0' }}>Dear Maya —</p>
        <p style={{ margin: '6px 0' }}>Enclosed: the revised proposal for specimen ISR-014. We have shortened the scope to the two flows we discussed, and pushed delivery to August.</p>
        <p style={{ margin: '6px 0' }}>The full notebook is at iserlabs.com/n/014.</p>
        <p style={{ margin: '6px 0' }}>Warmly,</p>
        <p style={{ margin: '6px 0', fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 12 }}>Jules</p>
      </div>
      <div style={{ marginTop: 'auto', borderTop: 'var(--hair)', paddingTop: 6, display: 'flex', justifyContent: 'space-between' }}>
        <span className="mono" style={{ fontSize: 6, color: 'var(--graphite)', letterSpacing: '0.12em' }}>ISERLABS.COM</span>
        <span className="mono" style={{ fontSize: 6, color: 'var(--graphite)' }}>PG 01 / 02</span>
      </div>
    </div>
  );
}

// — Deck cover —
function DeckCover() {
  return (
    <div style={{ background: 'var(--ink)', color: 'var(--paper)', height: '100%', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--paper)' }}>
          <span className="aperture" style={{ width: 18, color: 'var(--paper)' }}></span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14, letterSpacing: '-0.02em' }}>Iser Labs</span>
        </span>
        <span className="mono" style={{ fontSize: 10, color: 'var(--stone)', letterSpacing: '0.12em' }}>DECK · 2026.05</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 24 }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color: 'var(--signal)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>Seed deck · v.A</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 60, letterSpacing: '-0.035em', lineHeight: 0.95 }}>
            The case for<br/><span className="italic-ed" style={{ fontStyle: 'italic', fontWeight: 400 }}>computational</span> craft.
          </div>
        </div>
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }} className="mono">
          <span style={{ fontSize: 9, color: 'var(--stone)', letterSpacing: '0.2em' }}>FOR ANGEL ROUND · CONFIDENTIAL</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--graphite)', paddingTop: 12 }}>
        <span className="mono" style={{ fontSize: 10, color: 'var(--stone)' }}>01 / 24</span>
        <span className="mono" style={{ fontSize: 10, color: 'var(--stone)' }}>ISERLABS.COM</span>
      </div>
    </div>
  );
}

// — Sticker strip —
function StickerStrip() {
  return (
    <div style={{ background: 'var(--bone)', height: '100%', padding: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, placeItems: 'center' }}>
      {/* round seal */}
      <div style={{ width: '78%', aspectRatio: 1, borderRadius: '50%', background: 'var(--paper)', border: '1.5px solid var(--ink)', position: 'relative', display: 'grid', placeItems: 'center' }}>
        <CircleText radius={68} text="ISER LABS · BROOKLYN · MMXXV · ISER LABS · BROOKLYN · MMXXV ·"/>
        <span className="aperture" style={{ width: '38%' }}></span>
      </div>
      {/* rectangular sticker */}
      <div style={{ width: '88%', aspectRatio: '1.6 / 1', background: 'var(--signal)', border: '1px solid var(--ink)', padding: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="mono" style={{ fontSize: 9, letterSpacing: '0.12em' }}>NO. 014</span>
          <span className="mono" style={{ fontSize: 9, letterSpacing: '0.12em' }}>REV. A</span>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', lineHeight: 1 }}>
          Handle with<br/>care.
        </div>
        <div className="mono" style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase' }}>ISER · LABS</div>
      </div>
    </div>
  );
}

function CircleText({ radius, text }) {
  // place chars around a circle inside the parent
  return (
    <svg viewBox="-100 -100 200 200" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <path id="circle-text-path" d={`M 0,0 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}/>
      </defs>
      <text style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', fill: 'var(--ink)' }}>
        <textPath href="#circle-text-path">{text}</textPath>
      </text>
    </svg>
  );
}

window.ApplicationsFrame = ApplicationsFrame;
