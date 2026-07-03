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

// Photo assets — self-hosted for same-origin reliability.
export const PHOTOS = {
    heroBg: asset('/photos/hero_field.jpg'),          // paddy field close-up
    whoWeAre: asset('/photos/whoweare_farmer.jpg'),   // person in paddy field
    missionBg:
        'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=80',
};
