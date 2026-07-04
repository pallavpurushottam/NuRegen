import { useEffect, useCallback } from 'react';

// Full-viewport lightbox. Controlled: parent owns `items`, `index`, `onClose`,
// `onPrev`, `onNext`. All keyboard, backdrop, and swipe wiring lives here.
export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
    const open = index != null && index >= 0 && items && items[index];

    // Keyboard controls — Escape / ArrowLeft / ArrowRight
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowLeft') onPrev();
            else if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, onClose, onPrev, onNext]);

    // Prevent background scroll while open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, [open]);

    // Touch swipe on mobile
    const onTouchStart = useCallback((e) => {
        e.currentTarget._nrTouchStart = e.touches[0].clientX;
    }, []);
    const onTouchEnd = useCallback((e) => {
        const start = e.currentTarget._nrTouchStart;
        if (start == null) return;
        const dx = e.changedTouches[0].clientX - start;
        e.currentTarget._nrTouchStart = null;
        if (dx > 50) onPrev();
        else if (dx < -50) onNext();
    }, [onPrev, onNext]);

    if (!open) return null;
    const item = items[index];

    return (
        <div
            className="nr-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
            data-testid="lightbox"
            onClick={onClose}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <button
                type="button"
                className="nr-lb-close"
                aria-label="Close"
                data-testid="lightbox-close"
                onClick={(e) => { e.stopPropagation(); onClose(); }}
            >
                ×
            </button>

            <button
                type="button"
                className="nr-lb-nav nr-lb-prev"
                aria-label="Previous photo"
                data-testid="lightbox-prev"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
            >
                ‹
            </button>

            <figure
                className="nr-lb-stage"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                    className="nr-lb-img"
                    data-testid="lightbox-image"
                />
                <figcaption className="nr-lb-cap" data-testid="lightbox-caption">
                    <span aria-hidden style={{ color: 'var(--nr-leaf)' }}>◉</span>
                    {item.caption}
                </figcaption>
            </figure>

            <button
                type="button"
                className="nr-lb-nav nr-lb-next"
                aria-label="Next photo"
                data-testid="lightbox-next"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
            >
                ›
            </button>

            <div className="nr-lb-counter" aria-hidden data-testid="lightbox-counter">
                {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </div>
        </div>
    );
}
