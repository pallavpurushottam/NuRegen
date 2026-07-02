import { useEffect, useRef, useState } from 'react';
import { SECTIONS } from '@/constants/testIds';

const STATS = [
    {
        target: 30,
        suffix: '%',
        label:
            'of global greenhouse gas emissions originate from agriculture, forestry and land use.',
    },
    {
        target: 2,
        suffix: 'B+',
        label:
            'hectares of degraded land globally present opportunities for restoration through nature-based solutions.',
    },
    {
        target: null,
        display: 'Millions',
        label:
            'of smallholder farmers remain excluded from emerging carbon markets due to technical, financial, and implementation barriers.',
    },
];

function useCountUp(target, active, duration = 1600) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!active || target == null) return;
        let raf;
        const start = performance.now();
        const step = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(target * eased));
            if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [active, target, duration]);
    return val;
}

function StatItem({ stat, active }) {
    const value = useCountUp(stat.target, active);
    return (
        <div className="reveal">
            <div className="nr-stat-num">
                {stat.display ?? value}
                {stat.suffix && <span style={{ color: 'var(--nr-leaf)' }}>{stat.suffix}</span>}
            </div>
            <p className="nr-body mt-4 max-w-md" style={{ fontSize: '15px' }}>
                {stat.label}
            </p>
        </div>
    );
}

export default function DidYouKnow() {
    const ref = useRef(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setActive(true);
                        io.disconnect();
                    }
                });
            },
            { threshold: 0.25 },
        );
        io.observe(ref.current);
        return () => io.disconnect();
    }, []);

    const goToNews = () => {
        const el = document.getElementById('news');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section
            ref={ref}
            data-testid={SECTIONS.didYouKnow}
            className="nr-section"
            style={{ paddingTop: 60, paddingBottom: 60 }}
        >
            <div className="nr-container">
                <div className="nr-section-eyebrow-row reveal">
                    <span className="nr-eyebrow nr-eyebrow-rust">Ground Truth</span>
                </div>
                <button
                    type="button"
                    onClick={goToNews}
                    className="nr-h2 reveal delay-1 group inline-flex items-center gap-3 text-left"
                    style={{ fontSize: 'clamp(24px, 2.8vw, 34px)' }}
                    data-testid="did-you-know-heading"
                >
                    Did You Know?
                    <span
                        aria-hidden
                        className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition"
                        style={{ color: 'var(--nr-rust)' }}
                    >
                        ↗
                    </span>
                </button>

                <div className="mt-14 grid md:grid-cols-3 gap-10">
                    {STATS.map((s, i) => (
                        <StatItem key={i} stat={s} active={active} />
                    ))}
                </div>
            </div>
        </section>
    );
}
