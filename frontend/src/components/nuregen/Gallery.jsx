import { useCallback, useState } from 'react';
import { SECTIONS } from '@/constants/testIds';
import { GALLERY_GROUPS } from '@/lib/assets';
import Lightbox from '@/components/nuregen/Lightbox';

export default function Gallery() {
    // { groupIdx, itemIdx } — null when closed
    const [box, setBox] = useState(null);

    const open  = (gi, i) => setBox({ gi, i });
    const close = useCallback(() => setBox(null), []);
    const prev = useCallback(() => {
        setBox((b) => {
            if (!b) return b;
            const group = GALLERY_GROUPS[b.gi].items;
            return { ...b, i: (b.i - 1 + group.length) % group.length };
        });
    }, []);
    const next = useCallback(() => {
        setBox((b) => {
            if (!b) return b;
            const group = GALLERY_GROUPS[b.gi].items;
            return { ...b, i: (b.i + 1) % group.length };
        });
    }, []);

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

                {GALLERY_GROUPS.map((group, gi) => (
                    <div
                        key={group.title}
                        className={`nr-gallery-group ${gi === 0 ? 'nr-gallery-group--first' : ''}`}
                        data-testid={`gallery-group-${gi}`}
                    >
                        <div className="nr-gallery-subhead reveal">
                            <span className="nr-gallery-subrule" aria-hidden />
                            <span
                                className="font-mono-label"
                                style={{
                                    fontSize: '11px',
                                    letterSpacing: '0.24em',
                                    textTransform: 'uppercase',
                                    color: 'var(--nr-teal)',
                                    fontWeight: 500,
                                }}
                            >
                                {group.title}
                            </span>
                        </div>

                        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                            {group.items.map((tile, i) => (
                                <figure
                                    key={tile.src + i}
                                    className={`nr-gallery-tile reveal delay-${(i % 5) + 1}`}
                                    data-testid={`gallery-tile-${gi}-${i}`}
                                    title={tile.alt}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Open ${tile.alt} in lightbox`}
                                    onClick={() => open(gi, i)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            open(gi, i);
                                        }
                                    }}
                                >
                                    <img src={tile.src} alt={tile.alt} loading="lazy" />
                                    <figcaption
                                        className="nr-gallery-cap"
                                        data-testid={`gallery-caption-${gi}-${i}`}
                                    >
                                        <span aria-hidden style={{ color: 'var(--nr-leaf)' }}>◉</span>
                                        {tile.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                items={box ? GALLERY_GROUPS[box.gi].items : []}
                index={box ? box.i : null}
                onClose={close}
                onPrev={prev}
                onNext={next}
            />
        </section>
    );
}
