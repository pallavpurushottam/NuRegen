import { HERO } from '@/constants/testIds';

export default function Hero() {
    const go = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="top" data-testid={HERO.root} className="nr-hero">
            {/* Living, warm/earthy gradient background — soil base with drifting rust/navy/leaf blobs */}
            <div className="nr-hero-canvas" aria-hidden>
                <span className="nr-hero-blob b1" />
                <span className="nr-hero-blob b2" />
                <span className="nr-hero-blob b3" />
                <span className="nr-hero-blob b4" />
                <span className="nr-hero-blob b5" />
            </div>
            <div className="nr-hero-vignette" aria-hidden />
            <div className="nr-hero-grain" aria-hidden />

            <div className="nr-container relative z-10 px-4 sm:px-6 py-24">
                <div className="max-w-3xl">
                    <span
                        className="inline-flex items-center gap-3 nr-hero-pill px-4 py-2 rounded-full font-mono-label text-[11px] tracking-[0.22em] uppercase reveal in"
                        style={{ fontWeight: 600 }}
                    >
                        Science-Based
                        <span className="sep">/</span>
                        Execution-Driven
                        <span className="sep">/</span>
                        Locally Innovated
                    </span>

                    <h1
                        className="nr-h1 mt-7 reveal delay-1 in"
                        style={{
                            color: '#FCFBF7',
                            fontFamily: "'Instrument Serif', 'Fraunces', Georgia, serif",
                            fontWeight: 400,
                            fontSize: 'clamp(42px, 6.6vw, 82px)',
                            lineHeight: 1.04,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Bridging Global{' '}
                        <em style={{ fontStyle: 'italic', color: '#F4A97A', fontWeight: 400 }}>
                            Carbon Markets
                        </em>{' '}
                        with Local{' '}
                        <em style={{ fontStyle: 'italic', color: '#B8D8A0', fontWeight: 400 }}>
                            Climate Solutions
                        </em>
                        <span style={{ color: '#F4A97A' }}>.</span>
                    </h1>

                    <p
                        className="mt-7 max-w-2xl reveal delay-2 in"
                        style={{
                            color: 'rgba(252, 251, 247, 0.9)',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '17px',
                            lineHeight: 1.65,
                        }}
                    >
                        NuRegen develops and implements science-based carbon projects
                        through regenerative agriculture, nature-based solutions, and
                        advanced MRV — delivering measurable climate impact, resilient
                        ecosystems, and better livelihoods.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4 reveal delay-3 in">
                        <button
                            data-testid={HERO.watchBtn}
                            className="nr-btn-rust"
                            onClick={() => go('mission')}
                        >
                            Watch Our Mission
                            <span aria-hidden>→</span>
                        </button>
                    </div>
                </div>

                <div
                    className="absolute bottom-10 right-6 hidden md:flex items-center gap-3 font-mono-label text-[11px] tracking-[0.24em] uppercase"
                    style={{ color: 'rgba(252,251,247,0.75)' }}
                >
                    <span
                        className="w-6 h-px"
                        style={{ background: 'rgba(252,251,247,0.6)' }}
                    />
                    Scroll
                </div>
            </div>
        </section>
    );
}
