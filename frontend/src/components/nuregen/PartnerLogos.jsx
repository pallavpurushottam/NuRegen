import { SECTIONS } from '@/constants/testIds';
import { PARTNERS } from '@/lib/assets';

export default function PartnerLogos() {
    // 2× the list so translateX(-50%) creates a seamless loop.
    const items = [...PARTNERS, ...PARTNERS];
    return (
        <section
            id="partners"
            data-testid={SECTIONS.partners}
            className="nr-section"
            style={{ paddingTop: 40, paddingBottom: 60 }}
        >
            <div className="nr-container">
                <div className="text-center reveal">
                    <span className="nr-eyebrow">Partners & Collaborators</span>
                    <p
                        className="mt-3 nr-body max-w-xl mx-auto"
                        style={{ fontSize: '14.5px' }}
                    >
                        Building the science, tooling and supply-chain stack for
                        high-integrity carbon.
                    </p>
                </div>

                <div className="mt-12 nr-marquee reveal delay-1" aria-label="Partner logos">
                    <div className="nr-marquee-track">
                        {items.map((p, i) => (
                            <div
                                key={i}
                                className={`nr-partner-chip nr-partner-chip-${p.chip}`}
                                title={p.name}
                            >
                                <img
                                    src={p.src}
                                    alt={p.name}
                                    className="nr-partner-logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
