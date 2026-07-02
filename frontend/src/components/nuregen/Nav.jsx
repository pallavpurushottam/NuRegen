import { useEffect, useState } from 'react';
import { NAV } from '@/constants/testIds';
import { LOGO_LOCKUP } from '@/lib/assets';

const LINKS = [
    { id: 'solution', label: 'Our Solution', testId: NAV.linkSolution },
    { id: 'tech', label: 'Technology Expertise', testId: NAV.linkTech },
    { id: 'process', label: 'Our Process', testId: NAV.linkProcess },
    { id: 'clock', label: 'Carbon Clock', testId: NAV.linkClock },
    { id: 'news', label: 'Insights/News', testId: NAV.linkNews },
    { id: 'about', label: 'About', testId: NAV.linkAbout },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const go = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <nav
            data-testid={NAV.root}
            className={`nr-nav ${scrolled ? 'scrolled' : ''}`}
        >
            <div className="nr-container flex items-center justify-between gap-6">
                <button
                    type="button"
                    data-testid={NAV.logo}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-3"
                    aria-label="NuRegen — home"
                >
                    <span className="nr-logo-chip">
                        <span className="nr-logo-icon-wrap">
                            <img src={LOGO_LOCKUP} alt="NuRegen mark" />
                        </span>
                    </span>
                </button>

                <div className="hidden lg:flex items-center gap-8">
                    {LINKS.map((l) => (
                        <button
                            key={l.id}
                            type="button"
                            data-testid={l.testId}
                            className="nr-nav-link"
                            onClick={() => go(l.id)}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    data-testid={NAV.partnerBtn}
                    className="nr-btn-rust"
                    onClick={() => go('footer')}
                >
                    Partner With Us
                </button>
            </div>
        </nav>
    );
}
