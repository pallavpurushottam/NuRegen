import { SECTIONS } from '@/constants/testIds';
import { GALLERY } from '@/lib/assets';

// A single, empty "add more" placeholder tile at the end signals the grid is
// extendable. Add more entries to GALLERY in src/lib/assets.js and they slot in
// automatically.
export default function Gallery() {
    return (
        <section
            id="gallery"
            data-testid={SECTIONS.gallery}
            className="nr-section"
            style={{ paddingTop: 60 }}
        >
            <div className="nr-container">
                <div className="max-w-3xl">
                    <div className="nr-section-eyebrow-row reveal">
                        <span className="nr-eyebrow">Gallery</span>
                    </div>
                    <h2 className="nr-h2 reveal delay-1" style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}>
                        From the{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--nr-leaf)' }}>field</em>.
                    </h2>
                </div>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                    {GALLERY.map((tile, i) => (
                        <figure
                            key={tile.src + i}
                            className={`nr-gallery-tile reveal delay-${(i % 5) + 1}`}
                            data-testid={`gallery-tile-${i}`}
                        >
                            <img src={tile.src} alt={tile.alt} loading="lazy" />
                        </figure>
                    ))}
                    <div
                        className="nr-gallery-tile nr-gallery-placeholder reveal delay-5"
                        aria-hidden
                        data-testid="gallery-placeholder"
                    >
                        <span>More coming soon</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
