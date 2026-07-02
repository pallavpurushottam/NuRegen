import { SECTIONS } from '@/constants/testIds';

const CARDS = [
    {
        title: 'Farmer Trust & Field Implementation',
        icon: '◐',
        detail:
            'Deep on-the-ground partnerships with smallholder communities — sustained trust, training, and behaviour change that makes projects stick.',
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
                        <div key={c.title} className={`nr-flip nr-flip-static reveal delay-${i + 1}`} tabIndex={0}>
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
                                style={{ color: 'var(--nr-navy)', fontSize: '20px', fontWeight: 600, lineHeight: 1.25 }}
                            >
                                {c.title}
                            </h3>
                            <p className="nr-body mt-3" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
                                {c.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
