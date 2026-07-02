import { useEffect, useRef, useState } from 'react';
import { SECTIONS } from '@/constants/testIds';

// Live-ticking Carbon Clock (illustrative — client-side increment).
// Baseline as of scroll-into-view + per-second rate.
const BASE_VALUE = 1_428_917_604;
const PER_SECOND = 407; // approx tCO2e / second illustrative rate

function CarbonClock() {
    const [n, setN] = useState(BASE_VALUE);
    useEffect(() => {
        const start = Date.now();
        const id = setInterval(() => {
            const elapsed = (Date.now() - start) / 1000;
            setN(Math.floor(BASE_VALUE + elapsed * PER_SECOND));
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div id="clock" data-testid={SECTIONS.clock} className="nr-clock reveal delay-2">
            <div className="flex items-center justify-between">
                <span className="nr-eyebrow nr-eyebrow-rust" style={{ color: 'var(--nr-rust-soft)' }}>
                    Carbon Clock
                </span>
                <span
                    className="font-mono-label text-[10px] tracking-[0.28em] uppercase"
                    style={{ color: 'rgba(252,251,247,0.55)' }}
                >
                    Live · tCO₂e
                </span>
            </div>

            <div className="mt-6">
                <div
                    className="nr-clock-number"
                    data-testid={SECTIONS.clockNumber}
                >
                    {n.toLocaleString('en-US')}
                </div>
                <p
                    className="mt-3 text-[13px]"
                    style={{ color: 'rgba(252,251,247,0.65)', fontFamily: 'Inter, sans-serif' }}
                >
                    illustrative tCO₂e from agriculture and land-use emissions
                </p>
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(252,251,247,0.1)' }}>
                <div className="flex items-center justify-between mb-4">
                    <span
                        className="font-mono-label text-[11px] tracking-[0.24em] uppercase"
                        style={{ color: 'rgba(252,251,247,0.75)' }}
                    >
                        The gap — growing every second
                    </span>
                    <span aria-hidden style={{ color: 'var(--nr-leaf)' }}>●</span>
                </div>
                <div className="nr-clock-bar" />
            </div>
        </div>
    );
}

const POINTS = [
    {
        n: '01',
        title: 'Farmer trust and long-term adoption remain fragmented',
        detail:
            'Projects often prioritize enrollment over building trust and supporting lasting behaviour change.',
    },
    {
        n: '02',
        title: 'Scientific evidence is often insufficient for high-integrity credits',
        detail:
            'Many projects rely on modeled estimates rather than real field measurements, reducing buyer confidence.',
    },
    {
        n: '03',
        title: 'Climate outcomes are only valuable when they’re trusted',
        detail:
            'Without transparent, traceable evidence, projects can’t consistently deliver the credits buyers and investors demand.',
    },
];

export default function Problem() {
    return (
        <section
            id="problem"
            data-testid={SECTIONS.problem}
            className="nr-section"
        >
            <div className="nr-container grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-start">
                <div>
                    <div className="nr-section-eyebrow-row reveal">
                        <span className="nr-eyebrow nr-eyebrow-rust">The Problem</span>
                    </div>
                    <h2 className="nr-h2 reveal delay-1" style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}>
                        The carbon market doesn’t have a{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--nr-rust)' }}>
                            measurement problem
                        </em>{' '}
                        — it has a{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--nr-leaf)' }}>
                            trust problem
                        </em>
                        .
                    </h2>
                    <p className="nr-body mt-6 max-w-xl reveal delay-2" style={{ fontSize: '15.5px' }}>
                        High-integrity carbon projects depend on trusted farmer
                        relationships, sustained behaviour change, and credible
                        measurement. When these are managed independently, adoption
                        weakens, verification suffers, and buyer confidence drops.
                    </p>

                    <div className="mt-10 flex flex-col gap-5">
                        {/* Stat callout card (rust-accented) */}
                        <div
                            className="reveal delay-2 rounded-2xl p-6 md:p-7"
                            style={{
                                background:
                                    'linear-gradient(135deg, rgba(196,98,45,0.10) 0%, rgba(31,56,100,0.10) 100%), var(--nr-paper-2)',
                                borderLeft: '4px solid var(--nr-rust)',
                                border: '1px solid rgba(31,56,100,0.10)',
                                borderLeftWidth: 4,
                                borderLeftColor: 'var(--nr-rust)',
                            }}
                            data-testid="problem-stat-card"
                        >
                            <div className="font-mono-label text-[10.5px] tracking-[0.3em] uppercase" style={{ color: 'var(--nr-rust)' }}>
                                Stat
                            </div>
                            <p className="mt-3 font-serif-display" style={{ color: 'var(--nr-navy)', fontSize: '20px', lineHeight: 1.35 }}>
                                ~70% of potential agricultural carbon credits go unclaimed
                                each year due to verification cost and complexity.
                            </p>
                        </div>

                        {POINTS.map((p, i) => (
                            <div key={p.n} className={`nr-subcard p-6 md:p-7 reveal delay-${i + 3}`}>
                                <div className="flex items-start gap-5">
                                    <div className="font-mono-label text-[13px] tracking-[0.18em]" style={{ color: 'var(--nr-leaf)' }}>
                                        {p.n}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-serif-display" style={{ color: 'var(--nr-navy)', fontSize: '18px', fontWeight: 500, lineHeight: 1.3 }}>
                                            {p.title}
                                        </div>
                                        <p className="nr-body mt-2" style={{ fontSize: '14.5px' }}>
                                            {p.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:sticky lg:top-28">
                    <CarbonClock />
                </div>
            </div>
        </section>
    );
}
