// Central place for asset URLs used across the site.
//
// IMPORTANT: These images are shipped from the site's own /public folder so
// every visitor loads them from the same origin as the HTML. Do NOT swap in
// external CDN URLs — cross-origin CDN propagation was the root cause of the
// "some users see missing logos" bug.
//
// Files live under /app/frontend/public/logos/ and are served at /logos/*.
const asset = (path) => `${process.env.PUBLIC_URL || ''}${path}`;

export const LOGO_LOCKUP = asset('/logos/nuregen.png');

export const PARTNERS = [
    {
        name: 'MittiLabs',
        src: asset('/logos/mittilabs.jpg'),
        chip: 'light',
    },
    {
        name: 'String Bio',
        src: asset('/logos/stringbio.png'),
        chip: 'dark',
    },
    {
        name: 'AgriCapture',
        src: asset('/logos/agricapture.png'),
        chip: 'light',
    },
];

// Photo placeholders — high-quality Unsplash agriculture / nature imagery.
// (These stay on Unsplash's global CDN which does not exhibit the per-user
// propagation issue seen with the job-scoped customer-assets host.)
export const PHOTOS = {
    whoWeAre:
        'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=80',
    heroBg:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=80',
    missionBg:
        'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=80',
    news1:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    news2:
        'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80',
    news3:
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80',
};
