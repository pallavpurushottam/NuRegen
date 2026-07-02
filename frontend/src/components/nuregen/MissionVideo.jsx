import { SECTIONS } from '@/constants/testIds';
import { PHOTOS } from '@/lib/assets';

export default function MissionVideo() {
    return (
        <section
            id="mission"
            data-testid={SECTIONS.mission}
            className="nr-section"
        >
            <div className="nr-container">
                <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
                    <div>
                        <div className="nr-section-eyebrow-row reveal">
                            <span className="nr-eyebrow">Mission Video</span>
                        </div>
                        <h2 className="nr-h2 reveal delay-1" style={{ fontSize: 'clamp(22px, 2.6vw, 32px)' }}>
                            Inside a NuRegen{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--nr-leaf)' }}>partner field</em>.
                        </h2>
                    </div>
                    <div className="font-mono-label text-[11px] tracking-[0.24em] uppercase reveal delay-2" style={{ color: 'var(--nr-navy)', opacity: 0.6 }}>
                        02:14 · Odisha, India
                    </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden reveal delay-2" style={{ aspectRatio: '16 / 9', border: '1px solid rgba(31,56,100,0.16)', boxShadow: '0 40px 80px -50px rgba(31,56,100,0.4)' }}>
                    <img
                        src={PHOTOS.missionBg}
                        alt="Regenerative agriculture field"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(180deg, rgba(15,27,46,0.28) 0%, rgba(15,27,46,0.55) 100%)',
                        }}
                        aria-hidden
                    />
                    <button
                        type="button"
                        className="absolute inset-0 flex items-center justify-center group"
                        data-testid="mission-play-btn"
                        aria-label="Play mission video"
                    >
                        <span
                            className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{
                                background: 'rgba(252,251,247,0.15)',
                                border: '1.5px solid rgba(252,251,247,0.6)',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            <span
                                className="font-serif-display"
                                style={{ color: 'var(--nr-paper)', fontSize: '22px', marginLeft: 4 }}
                                aria-hidden
                            >
                                ▶
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
