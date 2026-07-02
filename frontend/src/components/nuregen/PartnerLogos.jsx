import { SECTIONS } from '@/constants/testIds';
import { PARTNERS } from '@/lib/assets';

export default function PartnerLogos() {
    // Duplicate list for seamless marquee loop
    const items = [...PARTNERS, ...PARTNERS, ...PARTNERS];
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

                <div className="mt-12 nr-marquee reveal delay-1">
                    <div className="nr-marquee-track">
                        {items.map((p, i) => (
                            <div key={i} className="flex items-center justify-center min-w-[170px]">
                                <img
                                    src={p.src}
                                    alt={p.name}
                                    className={`nr-partner-logo ${p.blend === 'lighten' ? 'nr-blend-lighten' : 'nr-blend-multiply'}`}
                                    style={{ maxWidth: 200 }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
