import { SECTIONS } from '@/constants/testIds';
import { PHOTOS } from '@/lib/assets';

const POSTS = [
    {
        tag: 'Method',
        title: 'Why soil carbon needs its own verification standard',
        excerpt:
            'Existing frameworks weren’t designed for the noise and heterogeneity of smallholder soils. Here’s the case for a purpose-built standard.',
        image: PHOTOS.news1,
        date: 'Feb 2026',
    },
    {
        tag: 'Field Notes',
        title: 'NuRegen begins partner onboarding for the 2026 season',
        excerpt:
            'The first cohort of 12 partners across three Indian states begins baseline sampling this month.',
        image: PHOTOS.news2,
        date: 'Jan 2026',
    },
    {
        tag: 'Buyer Guide',
        title: 'What buyers should ask before purchasing ag-based credits',
        excerpt:
            'A short field guide for corporate buyers — the six questions that separate credible ag credits from convenient ones.',
        image: PHOTOS.news3,
        date: 'Dec 2025',
    },
];

export default function News() {
    return (
        <section
            id="news"
            data-testid={SECTIONS.news}
            className="nr-section"
        >
            <div className="nr-container">
                <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
                    <div className="max-w-2xl">
                        <div className="nr-section-eyebrow-row reveal">
                            <span className="nr-eyebrow">Insights & News</span>
                        </div>
                        <h2 className="nr-h2 reveal delay-1" style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}>
                            From the{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--nr-leaf)' }}>field</em>.
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {POSTS.map((p, i) => (
                        <article key={p.title} className={`nr-news-card reveal delay-${i + 1}`}>
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img src={p.image} alt="" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                                <span
                                    className="absolute top-4 left-4 font-mono-label text-[10.5px] tracking-[0.28em] uppercase px-3 py-1.5 rounded-full"
                                    style={{
                                        background: 'rgba(252,251,247,0.92)',
                                        color: 'var(--nr-navy)',
                                        backdropFilter: 'blur(6px)',
                                    }}
                                >
                                    {p.tag}
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="font-mono-label text-[10.5px] tracking-[0.24em] uppercase" style={{ color: 'var(--nr-navy)', opacity: 0.55 }}>
                                    {p.date}
                                </div>
                                <h3
                                    className="mt-3 font-serif-display"
                                    style={{ color: 'var(--nr-navy)', fontSize: '20px', fontWeight: 500, lineHeight: 1.25 }}
                                >
                                    {p.title}
                                </h3>
                                <p className="nr-body mt-3" style={{ fontSize: '14px' }}>
                                    {p.excerpt}
                                </p>
                                <div
                                    className="mt-5 inline-flex items-center gap-2 font-mono-label text-[11px] tracking-[0.22em] uppercase"
                                    style={{ color: 'var(--nr-rust)' }}
                                >
                                    Read <span aria-hidden>→</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
