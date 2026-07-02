import { SECTIONS } from '@/constants/testIds';

const CARDS = [
    {
        title: 'Nature-Based Climate & Carbon',
        icon: '🌱',
        detail:
            'Regenerative agriculture, agroforestry, rice methane reduction, and sustainable land stewardship.',
    },
    {
        title: 'Scientific Carbon Measurement',
        icon: '◎',
        detail:
            'Direct field measurement of greenhouse gases, soil carbon, and biomass for high-integrity carbon quantification at scale.',
    },
    {
        title: 'Ecosystem Restoration',
        icon: '❦',
        detail:
            'Biodiversity conservation, water stewardship, and resilient land management.',
    },
    {
        title: 'Community-Centred Action',
        icon: '◍',
        detail:
            'Farmer aggregation, training, and shared benefits for regenerative agriculture.',
    },
];

export default function OurSolution() {
    return (
        <section
            id="solution"
            data-testid={SECTIONS.solution}
            className="nr-section"
        >
            <div className="nr-container">
                <div className="max-w-3xl">
                    <div className="nr-section-eyebrow-row reveal">
                        <span className="nr-eyebrow">Our Solution</span>
                    </div>
                    <h2 className="nr-h2 reveal delay-1" style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}>
                        Transforming agricultural landscapes into{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--nr-leaf)' }}>
                            verified climate assets
                        </em>
                        .
                    </h2>
                </div>

                <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CARDS.map((c, i) => (
                        <div
                            key={c.title}
                            className={`nr-flip reveal delay-${i + 1}`}
                            tabIndex={0}
                            role="button"
                            aria-expanded="false"
                            onClick={(e) => e.currentTarget.classList.toggle('open')}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    e.currentTarget.classList.toggle('open');
                                }
                            }}
                        >
                            <div className="flex items-center justify-between">
                                <div
                                    className="font-serif-display text-3xl"
                                    style={{ color: 'var(--nr-leaf)' }}
                                    aria-hidden
                                >
                                    {c.icon}
                                </div>
                                <div className="font-mono-label text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--nr-navy)', opacity: 0.55 }}>
                                    0{i + 1}
                                </div>
                            </div>
                            <h3
                                className="mt-8 font-serif-display"
                                style={{ color: 'var(--nr-navy)', fontSize: '20px', fontWeight: 600, lineHeight: 1.25 }}
                            >
                                {c.title}
                            </h3>
                            <div className="nr-flip-detail">
                                <p className="nr-body" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>{c.detail}</p>
                            </div>
                            <span className="nr-flip-arrow" aria-hidden>+</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
