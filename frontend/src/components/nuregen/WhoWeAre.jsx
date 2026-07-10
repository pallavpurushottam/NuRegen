import { useEffect, useState } from 'react';
import { SECTIONS } from '@/constants/testIds';
import { WHO_WE_ARE_SLIDES } from '@/lib/assets';

const HOLD_MS = 3000;

export default function WhoWeAre() {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(
            () => setIdx((i) => (i + 1) % WHO_WE_ARE_SLIDES.length),
            HOLD_MS,
        );
        return () => clearInterval(t);
    }, []);

    return (
        <section
            id="about"
            data-testid={SECTIONS.whoWeAre}
            className="nr-section"
        >
            <div className="nr-container grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="nr-section-eyebrow-row reveal">
                        <span className="nr-eyebrow">Who We Are</span>
                    </div>
                    <blockquote
                        className="nr-h2 reveal delay-1"
                        style={{ fontSize: 'clamp(28px, 3.4vw, 44px)' }}
                    >
                        <span aria-hidden style={{ color: 'var(--nr-rust)' }}>“</span>
                        Climate impact begins where{' '}
                        <em style={{ fontStyle: 'italic' }}>science</em> meets{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--nr-leaf)' }}>
                            communities
                        </em>
                        <span aria-hidden>.”</span>
                    </blockquote>

                    <p className="nr-body mt-8 reveal delay-2" style={{ fontSize: '16px' }}>
                        NuRegen is an end-to-end climate-tech enterprise — from baseline
                        development and project architecture, to farmer aggregation, field
                        implementation, GHG measurement, MRV, verification readiness, and
                        climate reporting.
                    </p>
                    <p className="nr-body mt-5 reveal delay-3" style={{ fontSize: '16px' }}>
                        NuRegen integrates farmers trust, behaviour change, scientific
                        measurement, and transparent verification into{' '}
                        <span style={{ color: 'var(--nr-leaf)', fontWeight: 500 }}>
                            one scalable platform
                        </span>{' '}
                        — transforming climate action into trusted, measurable, and
                        investable carbon outcomes across India.
                    </p>
                </div>

                <div className="relative reveal delay-2">
                    <div
                        className="nr-wwa-crossfade relative rounded-3xl overflow-hidden"
                        style={{
                            aspectRatio: '3 / 4',
                            border: '1px solid rgba(11, 61, 46, 0.16)',
                            boxShadow: '0 40px 80px -50px rgba(11, 61, 46, 0.4)',
                        }}
                        aria-label="Rotating field imagery"
                    >
                        {WHO_WE_ARE_SLIDES.map((src, i) => (
                            <img
                                key={src + i}
                                src={src}
                                alt=""
                                className={`nr-wwa-slide ${i === idx ? 'is-active' : ''}`}
                                aria-hidden={i !== idx}
                                data-testid={`whoweare-slide-${i}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
