import { useEffect, useRef, useState } from 'react';
import { SECTIONS } from '@/constants/testIds';

const STEPS = [
    { n: '01', title: 'Assessment & Baseline', detail: 'Landscape and farm-level diagnostics to define credible baselines.' },
    { n: '02', title: 'Project Design & Carbon Architecture', detail: 'Methodology selection, additionality analysis, and eligibility mapping.' },
    { n: '03', title: 'Field Implementation', detail: 'Farmer aggregation, agronomic training, and practice roll-out on the ground.' },
    { n: '04', title: 'Monitoring & MRV', detail: 'Field measurement, remote sensing, and digital MRV pipelines feeding verifiable evidence.' },
    { n: '05', title: 'Verification & Climate Intelligence', detail: 'Third-party audit readiness, uncertainty analysis, and impact intelligence.' },
    { n: '06', title: 'Climate-Smart Products & Traceability', detail: 'Traceable credits and climate-smart supply chain products for buyers and investors.' },
];

export default function OurProcess() {
    const ref = useRef(null);
    const [drawn, setDrawn] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && (setDrawn(true), io.disconnect())),
            { threshold: 0.15 },
        );
        io.observe(ref.current);
        return () => io.disconnect();
    }, []);

    return (
        <section
            id="process"
            data-testid={SECTIONS.process}
            className="nr-section"
            ref={ref}
        >
            <div className="nr-container">
                <div className="max-w-3xl">
                    <div className="nr-section-eyebrow-row reveal">
                        <span className="nr-eyebrow">Our Process</span>
                    </div>
                    <h2 className="nr-h2 reveal delay-1" style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}>
                        From baseline to verified{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--nr-leaf)' }}>climate outcomes</em>.
                    </h2>
                </div>

                <div className="mt-14 relative">
                    {/* Animated connecting line (desktop) */}
                    <div className="hidden lg:block absolute left-0 right-0 top-[54px] px-3">
                        <div
                            style={{
                                height: 2,
                                width: drawn ? '100%' : '0%',
                                background:
                                    'linear-gradient(90deg, var(--nr-navy) 0%, var(--nr-leaf) 100%)',
                                transition: 'width 1800ms cubic-bezier(0.2,0.7,0.2,1)',
                                borderRadius: 2,
                            }}
                        />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 relative">
                        {STEPS.map((s, i) => (
                            <div key={s.n} className={`nr-step reveal delay-${(i % 5) + 1}`} tabIndex={0}>
                                <div
                                    className="mx-auto lg:mx-0 w-9 h-9 rounded-full flex items-center justify-center font-mono-label text-[11px] mb-4"
                                    style={{
                                        background: 'var(--nr-paper)',
                                        color: 'var(--nr-navy)',
                                        border: '1px solid rgba(31,56,100,0.2)',
                                        fontWeight: 600,
                                    }}
                                >
                                    {s.n}
                                </div>
                                <div
                                    className="font-serif-display"
                                    style={{ color: 'var(--nr-navy)', fontSize: '15.5px', fontWeight: 500, lineHeight: 1.3 }}
                                >
                                    {s.title}
                                </div>
                                <p className="nr-body mt-3" style={{ fontSize: '13px', lineHeight: 1.55 }}>
                                    {s.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
