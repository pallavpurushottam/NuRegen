import { SECTIONS } from '@/constants/testIds';
import { PHOTOS } from '@/lib/assets';

export default function WhoWeAre() {
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
                        style={{ fontSize: 'clamp(32px, 4.2vw, 52px)' }}
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
                        NuRegen integrates farmer trust, behaviour change, scientific
                        measurement, and transparent verification into{' '}
                        <span style={{ color: 'var(--nr-leaf)', fontWeight: 500 }}>
                            one scalable platform
                        </span>{' '}
                        — transforming climate action into trusted, measurable, and
                        investable carbon outcomes.
                    </p>

                    <div className="mt-9 inline-flex items-center gap-3 px-4 py-2.5 rounded-full reveal delay-4"
                         style={{ background: 'var(--nr-paper-2)', border: '1px solid rgba(31,56,100,0.14)' }}>
                        <span aria-hidden style={{ color: 'var(--nr-leaf)' }}>◉</span>
                        <span className="font-mono-label text-[11px] tracking-[0.22em] uppercase" style={{ color: 'var(--nr-navy)' }}>
                            Based in Bhubaneswar, India
                        </span>
                    </div>
                </div>

                <div className="relative reveal delay-2">
                    <div
                        className="relative rounded-3xl overflow-hidden"
                        style={{
                            aspectRatio: '3 / 4',
                            border: '1px solid rgba(31,56,100,0.14)',
                            boxShadow: '0 40px 80px -50px rgba(31,56,100,0.4)',
                        }}
                    >
                        <img
                            src={PHOTOS.whoWeAre}
                            alt="Regenerative field partner in Odisha"
                            className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(180deg, transparent 55%, rgba(15,27,46,0.75) 100%)',
                            }}
                            aria-hidden
                        />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="font-mono-label text-[10.5px] tracking-[0.28em] uppercase" style={{ color: 'rgba(252,251,247,0.75)' }}>
                                Field · Odisha
                            </div>
                            <div className="mt-2 font-serif-display" style={{ color: 'var(--nr-paper)', fontSize: '22px', fontWeight: 400 }}>
                                Where science meets soil.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
