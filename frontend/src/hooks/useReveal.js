import { useEffect, useRef } from 'react';

// Adds `.in` class to `.reveal` elements when they enter the viewport.
export default function useReveal() {
    const rootRef = useRef(null);
    useEffect(() => {
        const root = rootRef.current || document;
        const nodes = root.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            nodes.forEach((n) => n.classList.add('in'));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('in');
                        io.unobserve(e.target);
                    }
                });
            },
            { rootMargin: '0px 0px -80px 0px', threshold: 0.08 },
        );
        nodes.forEach((n) => io.observe(n));
        return () => io.disconnect();
    }, []);
    return rootRef;
}
