import { HERO } from '@/constants/testIds';
import { PHOTOS, HERO_VIDEO_URL } from '@/lib/assets';

export default function Hero() {
    const go = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section
            id="hero-root"
            data-testid={HERO.root}
            className="nr-hero"
            style={{ '--nr-hero-photo-url': `url(${PHOTOS.riceDetail})` }}
        >
            {/* 1a. Base layer — video if provided, otherwise the poster photo */}
            {HERO_VIDEO_URL ? (
                <video
                    className="nr-hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={PHOTOS.riceDetail}
                    aria-hidden="true"
                    data-testid="hero-video"
                >
                    <source src={HERO_VIDEO_URL} type="video/mp4" />
                </video>
            ) : (
                <div className="nr-hero-photo" aria-hidden />
            )}
            {/* 2. Live animated multi-color gradient overlay */}
            <div className="nr-hero-gradient" aria-hidden />
            {/* 3. Legibility vignette */}
            <div className="nr-hero-vignette" aria-hidden />
            {/* 4. Grain */}
            <div className="nr-hero-grain" aria-hidden />

            <div className="nr-container relative px-4 sm:px-6 py-24" style={{ zIndex: 10 }}>
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
                            color: '#F7F4EF',
                            fontFamily: "'Instrument Serif', 'Fraunces', Georgia, serif",
                            fontWeight: 400,
                            fontSize: 'clamp(42px, 6.6vw, 82px)',
                            lineHeight: 1.04,
                            letterSpacing: '-0.02em',
                            textShadow: '0 2px 24px rgba(8, 41, 31, 0.5)',
                        }}
                    >
                        Bridging Global Carbon Markets with Local Climate Solutions.
                    </h1>

                    <p
                        className="mt-7 max-w-2xl reveal delay-2 in"
                        style={{
                            color: 'rgba(247, 244, 239, 0.94)',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '17px',
                            lineHeight: 1.65,
                            textShadow: '0 1px 12px rgba(8, 41, 31, 0.45)',
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
                            onClick={() => go('pillars')}
                        >
                            Value Pillars of NuRegen
                            <span aria-hidden>→</span>
                        </button>
                    </div>
                </div>

                <div
                    className="absolute bottom-10 right-6 hidden md:flex items-center gap-3 font-mono-label text-[11px] tracking-[0.24em] uppercase"
                    style={{ color: 'rgba(247, 244, 239, 0.8)' }}
                >
                    <span className="w-6 h-px" style={{ background: 'rgba(247, 244, 239, 0.65)' }} />
                    Scroll
                </div>
            </div>
        </section>
    );
}
