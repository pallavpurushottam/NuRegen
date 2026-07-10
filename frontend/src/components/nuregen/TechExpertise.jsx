import { SECTIONS } from '@/constants/testIds';
import { Handshake, FlaskConical, Database, Sprout } from 'lucide-react';

const CARDS = [
    {
        title: 'Farmer Trust & Field Implementation',
        icon: Handshake,
        detail:
            'Deep on-the-ground partnerships with smallholder communities — sustained trust, training, and behaviour change that makes projects stick.',
    },
    {
        title: 'GHG Measurement & Carbon Accounting',
        icon: FlaskConical,
        detail:
            'Field-calibrated measurement of methane, nitrous oxide and soil organic carbon — anchored to peer-reviewed protocols.',
    },
    {
    title: 'MRV Systems & Digital Platforms',
    icon: Database,
    detail:
        'Field measurements, remote sensing, and digital MRV pipelines that generate verifiable evidence.',
},
    {
        title: 'Customised Agronomy',
        icon: Sprout,
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
                    <h2 className="nr-h2 reveal delay-1" style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}>
                        The measurement stack behind every{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--nr-leaf)' }}>
                            verifiable ton
                        </em>
                        .
                    </h2>
                </div>
                <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CARDS.map((c, i) => {
                        const Icon = c.icon;
                        return (
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
                                    <div style={{ color: 'var(--nr-navy)' }} aria-hidden>
                                        <Icon size={30} strokeWidth={1.5} />
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
                                <div className="nr-flip-detail">
                                    <p className="nr-body" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>{c.detail}</p>
                                </div>
                                <span className="nr-flip-arrow" aria-hidden>+</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
