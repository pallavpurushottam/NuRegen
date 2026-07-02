import { SECTIONS } from '@/constants/testIds';

const CARDS = [
    {
        title: 'Remote Sensing & Satellite Monitoring',
        icon: '◐',
        detail:
            'Wall-to-wall monitoring using multi-spectral and radar satellite data to detect land-use change, biomass, and vegetation health.',
    },
    {
        title: 'GHG Measurement & Carbon Accounting',
        icon: '◈',
        detail:
            'Field-calibrated measurement of methane, nitrous oxide and soil organic carbon — anchored to peer-reviewed protocols.',
    },
    {
        title: 'MRV Systems & Digital Platforms',
        icon: '◉',
        detail:
            'End-to-end measurement, reporting and verification tooling with traceable evidence, from farm plot to credit registry.',
    },
    {
        title: 'Agronomic & Soil Science',
        icon: '☘',
        detail:
            'Practice design grounded in soil biology, agronomy and behaviour science — engineered for measurable, durable outcomes.',
    },
];

export default function TechExpertise() {
    return (
        <section
            id="tech"
            data-testid={SECTIONS.tech}
            className="nr-section"
        >
            <div className="nr-container">
                <div className="max-w-3xl">
                    <div className="nr-section-eyebrow-row reveal">
                        <span className="nr-eyebrow">Technology Expertise</span>
                    </div>
                    <h2 className="nr-h2 reveal delay-1" style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
                        The measurement stack behind every{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--nr-leaf)' }}>
                            verifiable ton
                        </em>
                        .
                    </h2>
                </div>

                <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CARDS.map((c, i) => (
                        <div key={c.title} className={`nr-flip reveal delay-${i + 1}`} tabIndex={0}>
                            <div className="flex items-center justify-between">
                                <div className="font-serif-display text-3xl" style={{ color: 'var(--nr-navy)' }} aria-hidden>
                                    {c.icon}
                                </div>
                                <div className="font-mono-label text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--nr-navy)', opacity: 0.55 }}>
                                    T-0{i + 1}
                                </div>
                            </div>
                            <h3
                                className="mt-8 font-serif-display"
                                style={{ color: 'var(--nr-navy)', fontSize: '22px', fontWeight: 500, lineHeight: 1.2 }}
                            >
                                {c.title}
                            </h3>
                            <div className="nr-flip-detail">
                                <p className="nr-body" style={{ fontSize: '14px' }}>{c.detail}</p>
                            </div>
                            <div className="mt-6 font-mono-label text-[10.5px] tracking-[0.22em] uppercase inline-flex items-center gap-2" style={{ color: 'var(--nr-rust)' }}>
                                Hover to expand <span aria-hidden>→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
