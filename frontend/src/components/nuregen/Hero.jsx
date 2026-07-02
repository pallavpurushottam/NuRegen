import { HERO } from '@/constants/testIds';
import { PHOTOS } from '@/lib/assets';

export default function Hero() {
    const go = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section
            id="top"
            data-testid={HERO.root}
            className="nr-hero nr-hero-noise"
        >
            <div
                className="nr-hero-media"
                style={{ backgroundImage: `url(${PHOTOS.heroBg})` }}
                aria-hidden
            />
            <div className="nr-hero-overlay" aria-hidden />

            <div className="nr-container relative z-10 px-4 sm:px-6 py-24">
                <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-3 nr-hero-pill px-4 py-2 rounded-full font-mono-label text-[11px] tracking-[0.22em] uppercase text-[color:var(--nr-paper)]/90 reveal in">
                        Science-Based
                        <span className="opacity-40">/</span>
                        Execution-Driven
                        <span className="opacity-40">/</span>
                        Locally Innovated
                    </span>

                    <h1
                        className="nr-h1 mt-7 reveal delay-1 in"
                        style={{
                            color: 'var(--nr-paper)',
                            fontSize: 'clamp(40px, 6.4vw, 78px)',
                        }}
                    >
                        Bridging Global{' '}
                        <em style={{ fontStyle: 'italic', color: '#E9CBAF' }}>
                            Carbon Markets
                        </em>{' '}
                        with Local{' '}
                        <em style={{ fontStyle: 'italic', color: '#B8D8A0' }}>
                            Climate Solutions
                        </em>
                        .
                    </h1>

                    <p
                        className="mt-7 max-w-2xl reveal delay-2 in"
                        style={{
                            color: 'rgba(252, 251, 247, 0.86)',
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
                            className="nr-btn-outline-paper"
                            onClick={() => go('mission')}
                        >
                            Watch Our Mission
                            <span aria-hidden>→</span>
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-10 right-6 hidden md:flex items-center gap-3 font-mono-label text-[11px] tracking-[0.24em] uppercase" style={{ color: 'rgba(252,251,247,0.7)' }}>
                    <span className="w-6 h-px" style={{ background: 'rgba(252,251,247,0.55)' }} />
                    Scroll
                </div>
            </div>
        </section>
    );
}
