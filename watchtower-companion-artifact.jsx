
export default function WatchtowerCompanion() {
  const styles = {
    root: {
      background: '#07090c',
      color: '#c8d8e8',
      fontFamily: '"Courier New", Courier, monospace',
      minHeight: '100vh',
      lineHeight: 1.7,
      position: 'relative',
    },
    ambient: {
      position: 'fixed', top: '-300px', left: '50%', transform: 'translateX(-50%)',
      width: '900px', height: '500px',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(0,232,122,0.04) 0%, rgba(33,150,243,0.03) 40%, transparent 70%)',
      pointerEvents: 'none', zIndex: 0,
    },
    header: {
      borderBottom: '1px solid #1a2433',
      padding: '28px 32px 24px',
      position: 'relative', zIndex: 1,
    },
    headerTop: {
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      marginBottom: '20px', gap: '16px', flexWrap: 'wrap',
    },
    docLabel: {
      fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase',
      color: '#00e87a', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px',
    },
    docLabelLine: { display: 'block', width: '20px', height: '1px', background: '#00e87a' },
    h1: {
      fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 4vw, 36px)',
      fontWeight: 700, color: '#fff', lineHeight: 1.15,
    },
    h1span: { color: '#00e87a' },
    docType: {
      fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
      color: '#5a7080', padding: '6px 12px', border: '1px solid #243040',
      alignSelf: 'flex-start', whiteSpace: 'nowrap', flexShrink: 0,
    },
    headerMeta: {
      fontSize: '9px', color: '#3d5468', letterSpacing: '0.15em',
      display: 'flex', gap: '20px', flexWrap: 'wrap',
      paddingTop: '16px', borderTop: '1px solid #1a2433',
    },
    headerMetaB: { color: '#5a7080', fontWeight: 'normal' },
    main: { maxWidth: '820px', margin: '0 auto', padding: '48px 32px 80px', position: 'relative', zIndex: 1 },
    section: { marginBottom: '52px' },
    sectionLabel: {
      fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase',
      color: '#3d5468', marginBottom: '14px',
      display: 'flex', alignItems: 'center', gap: '14px',
    },
    sectionLabelLine: { flex: 1, height: '1px', background: '#1a2433' },
    h2: {
      fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: 700,
      color: '#fff', marginBottom: '16px',
    },
    p: { fontSize: '11px', color: '#c8d8e8', lineHeight: 1.85, marginBottom: '14px' },
    pull: (color, bg) => ({
      borderLeft: `3px solid ${color}`, padding: '14px 20px', margin: '24px 0',
      background: bg, fontSize: '11px', color, lineHeight: 1.8, fontStyle: 'italic',
    }),
    channelList: { display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0' },
    channelItem: {
      display: 'flex', alignItems: 'flex-start', gap: '14px',
      background: '#0b0f14', border: '1px solid #1a2433', padding: '14px 16px',
    },
    dot: (color) => ({ width: '8px', height: '8px', borderRadius: '50%', background: color, flexShrink: 0, marginTop: '4px' }),
    chName: { fontFamily: 'Georgia, serif', fontSize: '12px', fontWeight: 700, color: '#fff', marginBottom: '4px' },
    chDesc: { fontSize: '10px', color: '#5a7080', lineHeight: 1.65 },
    roleGrid: {
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      border: '1px solid #1a2433', background: '#1a2433', gap: '1px', margin: '20px 0',
    },
    roleCell: { background: '#0b0f14', padding: '18px' },
    roleIcon: { fontSize: '18px', marginBottom: '8px', display: 'block' },
    roleName: { fontFamily: 'Georgia, serif', fontSize: '13px', color: '#fff', marginBottom: '4px', fontWeight: 700 },
    roleTag: (color) => ({ fontSize: '8px', letterSpacing: '0.18em', textTransform: 'uppercase', color, marginBottom: '10px', display: 'block' }),
    roleDesc: { fontSize: '10px', color: '#5a7080', lineHeight: 1.65 },
    fieldGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', margin: '20px 0' },
    fieldItem: { background: '#0b0f14', border: '1px solid #1a2433', padding: '14px 16px' },
    fieldNum: { fontSize: '8px', letterSpacing: '0.2em', color: '#3d5468', marginBottom: '6px' },
    fieldName: { fontFamily: 'Georgia, serif', fontSize: '12px', fontWeight: 700, color: '#fff', marginBottom: '6px' },
    fieldDesc: { fontSize: '10px', color: '#5a7080', lineHeight: 1.65 },
    protocolBlock: { border: '1px solid rgba(224,64,251,0.2)', background: 'rgba(224,64,251,0.03)', padding: '18px', margin: '20px 0' },
    protocolLabel: { fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e040fb', marginBottom: '14px' },
    protocolRule: { display: 'flex', gap: '14px', fontSize: '10px', color: '#c8d8e8', lineHeight: 1.7, marginBottom: '10px' },
    pn: { color: '#e040fb', flexShrink: 0, fontWeight: 700 },
    warningBlock: { border: '1px solid rgba(255,61,87,0.2)', background: 'rgba(255,61,87,0.03)', padding: '20px', margin: '20px 0', display: 'flex', gap: '16px', alignItems: 'flex-start' },
    wt: { fontFamily: 'Georgia, serif', fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '10px' },
    wd: { fontSize: '10px', color: '#5a7080', lineHeight: 1.8 },
    closer: { borderTop: '1px solid #1a2433', paddingTop: '28px', marginTop: '44px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' },
    closerSig: { fontSize: '9px', color: '#3d5468', textAlign: 'right', letterSpacing: '0.1em' },
    footer: { borderTop: '1px solid #1a2433', padding: '14px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '9px', color: '#3d5468', letterSpacing: '0.1em', position: 'relative', zIndex: 1 },
  };

  const SL = ({ n, label }) => (
    <div style={styles.sectionLabel}>
      {n} &mdash; {label}
      <span style={styles.sectionLabelLine}></span>
    </div>
  );

  return (
    <div style={styles.root}>
      <div style={styles.ambient}></div>

      <header style={styles.header}>
        <div style={styles.headerTop}>
          <div>
            <div style={styles.docLabel}>
              <span style={styles.docLabelLine}></span>
              Field Notes &middot; Companion Document
            </div>
            <h1 style={styles.h1}>The <span style={styles.h1span}>Watchtower</span><br />&mdash; What This Is</h1>
          </div>
          <div style={styles.docType}>READER BRIEFING &middot; v2.1</div>
        </div>
        <div style={styles.headerMeta}>
          <div>CLASSIFICATION <b style={styles.headerMetaB}>Shareable Framework</b></div>
          <div>CHANNELS <b style={styles.headerMetaB}>5 Active + Fortean</b></div>
          <div>WORKFLOW <b style={styles.headerMetaB}>ChatGPT &rarr; Human &rarr; Claude</b></div>
          <div>PURPOSE <b style={styles.headerMetaB}>Structural Pattern Detection</b></div>
        </div>
      </header>

      <main style={styles.main}>

        {/* 01 */}
        <div style={styles.section}>
          <SL n="01" label="Overview" />
          <h2 style={styles.h2}>A lens, not an oracle.</h2>
          <p style={styles.p}>The Watchtower is a <strong style={{color:'#fff'}}>personal signal intelligence dashboard</strong> &mdash; a single HTML file that functions as a living document for tracking structural shifts across five domains sitting at the edge of what is currently changing fastest in the world.</p>
          <p style={styles.p}>Most news aggregators optimize for volume and recency. The Watchtower optimizes for something different: <strong style={{color:'#fff'}}>significance over frequency</strong>. Long stretches of quiet are expected and appropriate. The goal is to surface slow-moving structural changes that matter &mdash; the kind that only become obvious in retrospect.</p>
          <div style={styles.pull('#00e87a', 'rgba(0,232,122,0.04)')}>
            "The signal isn't the headline. The signal is the pattern that the headline is one data point of."
          </div>
          <p style={styles.p}>This document explains what you are looking at, how it works, and the thinking behind it. The dashboard is the artifact. This is the field notes that go with it.</p>
        </div>

        {/* 02 */}
        <div style={styles.section}>
          <SL n="02" label="The Five Channels" />
          <h2 style={styles.h2}>What we're watching.</h2>
          <p style={styles.p}>Each channel tracks a domain where significant structural transition appears to be underway &mdash; not just news cycles, but changes to the underlying architecture of how things work.</p>
          <div style={styles.channelList}>
            {[
              { color: '#f5a623', name: 'AI Governance + Biosecurity', desc: 'Tracking the shift from broad policy principles into embedded technical constraints — traceability, constrained autonomy, and reproducibility becoming engineering requirements, not aspirations.' },
              { color: '#00e87a', name: 'AI-Native Biotech', desc: 'Watching the move from isolated AI-assisted discoveries to continuous AI-driven development platforms. The platform is becoming the product. Repeatability and scalability are now the differentiators.' },
              { color: '#00d4ff', name: 'Emerging Tech Convergence', desc: 'Tracking the tight coupling of AI + biotech + automation stacks. Closed-loop systems — design, test, optimize — with minimal human intervention becoming a design goal rather than a risk.' },
              { color: '#00e87a', name: 'Psychedelic Research', desc: 'The field is splitting structurally — regulated clinical therapeutics on one track, engineered non-hallucinogenic neuroactive compounds on another. Two increasingly distinct industries, not one field.' },
              { color: '#2196f3', name: 'Neuro + Mental Health Tech', desc: 'Three parallel treatment modality tracks: neuroplastogens, brain-interface therapies, and glymphatic/sleep-based systems. Watching for the moment the psychedelic divergence feeds directly into this channel.' },
            ].map((ch, i) => (
              <div key={i} style={styles.channelItem}>
                <div style={styles.dot(ch.color)}></div>
                <div>
                  <div style={styles.chName}>{ch.name}</div>
                  <div style={styles.chDesc}>{ch.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={styles.p}>A sixth parallel channel &mdash; <strong style={{color:'#e040fb'}}>Fortean Anomalies</strong> &mdash; runs on entirely different rules. See Section 05.</p>
        </div>

        {/* 03 */}
        <div style={styles.section}>
          <SL n="03" label="How It Works" />
          <h2 style={styles.h2}>Three roles. One pipeline.</h2>
          <p style={styles.p}>The system runs on a deliberate three-way workflow. Each role is distinct and not substitutable by the others:</p>
          <div style={styles.roleGrid}>
            <div style={styles.roleCell}>
              <span style={styles.roleIcon}>⚙️</span>
              <div style={styles.roleName}>ChatGPT</div>
              <span style={styles.roleTag('#00d4ff')}>Signal Generation</span>
              <div style={styles.roleDesc}>Runs pattern detection scans across domains. Formats output into a structured log with six fields. Generates the raw signal data that enters the pipeline.</div>
            </div>
            <div style={{...styles.roleCell, borderLeft:'1px solid #1a2433', borderRight:'1px solid #1a2433'}}>
              <span style={styles.roleIcon}>🧭</span>
              <div style={styles.roleName}>Human Curator</div>
              <span style={styles.roleTag('#00e87a')}>Judgment Layer</span>
              <div style={styles.roleDesc}>The irreplaceable component. Decides what clears the bar, what gets logged, what gets elevated to a watch item, what gets discarded. No AI substitutes for this.</div>
            </div>
            <div style={styles.roleCell}>
              <span style={styles.roleIcon}>📡</span>
              <div style={styles.roleName}>Claude</div>
              <span style={styles.roleTag('#b06cff')}>Visualization</span>
              <div style={styles.roleDesc}>Translates curated signals into the dashboard interface. Builds iteratively — new signals come in, cards update, delta badges shift, patterns deepen.</div>
            </div>
          </div>
          <p style={styles.p}>The signal log uses <strong style={{color:'#fff'}}>six fields</strong>: Timestamp, Event, Category, Signal Strength, Time Window Tag, and Notes. The Time Window Tag classifies signals as Immediate, Same-day, Multi-day, or Persistent — enabling behavioral pattern detection over time rather than isolated snapshots.</p>
        </div>

        {/* 04 */}
        <div style={styles.section}>
          <SL n="04" label="Reading the Dashboard" />
          <h2 style={styles.h2}>What the interface is telling you.</h2>
          <p style={styles.p}>Each domain card contains four layers of information:</p>
          <div style={styles.fieldGrid}>
            {[
              { n: 'LAYER 01', name: 'Signal Meter', desc: 'The bar graph in the top-right of each card. Visual shorthand for current activity level — Low, Medium, Med-High, or High.' },
              { n: 'LAYER 02', name: 'Delta Badge', desc: 'The small colored tag below the card header. Shows directional change from the last update: accelerating, stable, new signal, diverging, or watch item active.' },
              { n: 'LAYER 03', name: 'Pattern Statement', desc: 'The italic block. One sentence capturing the structural read on the domain — the interpretive frame for everything below it.' },
              { n: 'LAYER 04', name: 'Signal Bullets', desc: 'Specific observations supporting the pattern statement. Curated — not every signal that came in, only the ones that cleared the bar.' },
            ].map((f, i) => (
              <div key={i} style={styles.fieldItem}>
                <div style={styles.fieldNum}>{f.n}</div>
                <div style={styles.fieldName}>{f.name}</div>
                <div style={styles.fieldDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
          <p style={styles.p}>The <strong style={{color:'#fff'}}>Synthesis panel</strong> pulls cross-domain threads into first, second, and third-order structural patterns. The <strong style={{color:'#fff'}}>Trigger panel</strong> defines three escalation conditions — if all three fire, it signals full convergence into a single regulated system layer. The <strong style={{color:'#fff'}}>Phase Bar</strong> marks the overall arc: currently Phase 03 — Structural Transition.</p>
        </div>

        {/* 05 */}
        <div style={styles.section}>
          <SL n="05" label="The Fortean Channel" />
          <h2 style={styles.h2}>Pattern, not truth.</h2>
          <p style={styles.p}>The Fortean Anomaly Monitor is architecturally separate from the other five channels. It runs on a different color language (magenta/purple), a different layout, and a different epistemological standard.</p>
          <div style={styles.pull('#e040fb', 'rgba(224,64,251,0.04)')}>
            "Keep the data — especially the data that doesn't fit." — Charles Fort
          </div>
          <p style={styles.p}>Charles Fort spent his life cataloging phenomena that mainstream science rejected or ignored — not because he believed all of it, but because he believed the act of <em style={{color:'#5a7080'}}>noticing what gets discarded</em> was itself important. The Fortean channel follows that philosophy. It tracks the pattern. It does not make truth claims.</p>
          <div style={styles.protocolBlock}>
            <div style={styles.protocolLabel}>Channel Protocol</div>
            {[
              ['01', 'Track recurrence and similarity — not truth claims. The question is not "did this happen?" but "why is this type of report appearing again?"'],
              ['02', 'Single-source, self-reported claims do not clear the multi-witness bar for dashboard logging. They may be tracked as watch items pending falsification, but are not presented as confirmed signals.'],
              ['03', 'Time-bound falsifiable claims are logged as watch items with hard expiry dates. After resolution they are scored: Falsified / Partially Met / Unresolved / Unfalsifiable by Design.'],
              ['04', 'Flag when Fortean topics enter mainstream discourse. Narrative drift — the movement of fringe categories into institutional language — is itself a trackable signal.'],
            ].map(([n, text], i) => (
              <div key={i} style={{...styles.protocolRule, marginBottom: i < 3 ? '10px' : 0}}>
                <div style={styles.pn}>{n}</div>
                <div>{text}</div>
              </div>
            ))}
          </div>
          <p style={styles.p}>The discipline here is important. The channel exists because anomalous data has historically preceded paradigm shifts. But without rigorous sourcing and falsification standards, it collapses into noise. The protocol is what keeps it useful.</p>
        </div>

        {/* 06 */}
        <div style={styles.section}>
          <SL n="06" label="The Standing Caution" />
          <h2 style={styles.h2}>The palantir problem.</h2>
          <div style={styles.warningBlock}>
            <div style={{fontSize:'20px', flexShrink:0, marginTop:'2px'}}>🔮</div>
            <div>
              <div style={styles.wt}>True things in misleading contexts.</div>
              <div style={styles.wd}>
                In Tolkien's mythology, the palantiri were seeing-stones — each capable of showing true things happening far away. The problem was not that they lied. The problem was that they showed true things in misleading contexts, selectively, in ways that could be weaponized. Sauron didn't falsify what Denethor saw. He just controlled the framing.
                <br /><br />
                Any signal intelligence system has this vulnerability. The signals can be real. The pattern can be genuine. And the interpretation can still be badly wrong — because framing, selection bias, and confirmation loops are not visible in the data itself.
                <br /><br />
                This is the standing caution for the Watchtower. It is a lens. It is not an oracle. The human judgment layer is not a feature — it is the system's primary defense against the palantir problem.
              </div>
            </div>
          </div>
        </div>

        {/* 07 */}
        <div style={styles.section}>
          <SL n="07" label="How to Use This" />
          <h2 style={styles.h2}>A framework, not a conclusion.</h2>
          <p style={styles.p}>The Watchtower is shared as a <strong style={{color:'#fff'}}>lens and a template</strong> — not as a set of conclusions to agree or disagree with. The specific domains tracked reflect one curator's judgment about where structural transitions are underway. Your domains might be different. Your falsification standards for the Fortean channel might be stricter or more permissive. The architecture is the point, not the content.</p>
          <div style={styles.pull('#f5a623', 'rgba(245,166,35,0.04)')}>
            "The system is optimized for significance over frequency. Long periods of quiet are expected and appropriate. The goal is meaningful signals — not volume."
          </div>
          <p style={styles.p}>What the system offers at its best: a structured way to notice things that are changing slowly enough to be invisible in daily news consumption, but fast enough that they will be obviously significant in retrospect. The dashboard makes the patterns visible. What you do with them is yours.</p>
          <p style={styles.p}>The HTML file is self-contained. It requires no server, no login, no dependencies beyond a browser. Open it, read it, adapt the architecture for your own domains if you want to. The system is designed to be rebuilt.</p>
          <div style={styles.closer}>
            <div>
              <p style={{...styles.p, marginBottom:0, color:'#5a7080'}}>Questions, observations, or anomalous data worth discussing:<br />bring them. The curation layer welcomes input.</p>
            </div>
            <div style={styles.closerSig}>
              <strong style={{color:'#00e87a', display:'block', fontSize:'11px', marginBottom:'4px'}}>— THE WATCHTOWER</strong>
              Signal Intelligence &middot; v2.1<br />
              Cross-Domain Scan &middot; Structural Transition Phase
            </div>
          </div>
        </div>

      </main>

      <footer style={styles.footer}>
        <div>WATCHTOWER COMPANION DOC &middot; FIELD NOTES</div>
        <div>FOR USE WITH watchtower-v2.1.html</div>
        <div id="clock">{new Date().toLocaleString('en-US', {weekday:'short',month:'short',day:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'})}</div>
      </footer>
    </div>
  );
}
