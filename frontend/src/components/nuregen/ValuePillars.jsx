import { SECTIONS } from '@/constants/testIds';
import { Microscope, ShieldCheck, TrendingUp, Users, Leaf, Workflow } from 'lucide-react';

const PILLARS = [
    { title: 'Science-Backed', icon: Microscope, detail: 'Peer-reviewed methods and field-calibrated measurement, not modeled shortcuts.' },
    { title: 'High-Integrity', icon: ShieldCheck, detail: 'Additionality, durability and permanence engineered into every credit.' },
    { title: 'Scalable Impact', icon: TrendingUp, detail: 'Landscape-level architecture designed for millions of hectares — not pilots.' },
    { title: 'Community Driven', icon: Users, detail: 'Farmers as partners with shared upside — the only way adoption sticks.' },
    { title: 'Nature Positive', icon: Leaf, detail: 'Soil, water and biodiversity gains that outlast the credit itself.', accent: 'leaf' },
    { title: 'End-to-End Execution', icon: Workflow, detail: 'Baseline to registry — one accountable operating partner.' },
];

export default function ValuePillars() {
    return (
        <section id="pillars" data-testid={SECTIONS.pillars} className="nr-section">
            <div className="nr-container">
                <div className="max-w-3xl">
                    <div className="nr-section-eyebrow-row reveal">
                        <span className="nr-eyebrow">Value Pillars</span>
                    </div>
                   <h2 className="nr-h2 reveal delay-1" style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}>
    Six principles behind every{' '}
    <em style={{ fontStyle: 'italic', color: 'var(--nr-leaf)' }}>hectare</em>.
</h2>
                </div>
                <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PILLARS.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <div
                                key={p.title}
                                className={`nr-flip reveal delay-${(i % 5) + 1}`}
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
                                style={p.accent === 'leaf' ? { borderColor: 'rgba(92,166,50,0.35)' } : undefined}
                            >
                                <div className="flex items-center justify-between">
                                    <div
                                        style={{ color: p.accent === 'leaf' ? 'var(--nr-leaf)' : 'var(--nr-navy)' }}
                                        aria-hidden
                                    >
                                        <Icon size={30} strokeWidth={1.5} />
                                    </div>
                                    <div className="font-mono-label text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--nr-navy)', opacity: 0.55 }}>
                                        P-0{i + 1}
                                    </div>
                                </div>
                                <h3
                                    className="mt-8 font-serif-display"
                                    style={{ color: 'var(--nr-navy)', fontSize: '20px', fontWeight: 600, lineHeight: 1.25 }}
                                >
                                    {p.title}
                                </h3>
                                <div className="nr-flip-detail">
                                    <p className="nr-body" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>{p.detail}</p>
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
