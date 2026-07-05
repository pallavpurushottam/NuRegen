// Central place for asset URLs used across the site.
// Self-hosted from /public — same-origin reliability across all users.
const asset = (path) => `${process.env.PUBLIC_URL || ''}${path}`;

export const LOGO_LOCKUP = asset('/logos/nuregen.png');

export const PARTNERS = [
    { name: 'MittiLabs',   src: asset('/logos/mittilabs.jpg'),   chip: 'light' },
    { name: 'String Bio',  src: asset('/logos/stringbio.png'),   chip: 'dark'  },
    { name: 'AgriCapture', src: asset('/logos/agricapture.png'), chip: 'light' },
];

// Site photo library.
// riceDetail  = golden paddy close-up
// farmer      = person standing in paddy field
// sensor      = MRV sensor unit in a young paddy
export const PHOTOS = {
    riceDetail: asset('/photos/hero_field.jpg'),
    farmer:     asset('/photos/whoweare_farmer.jpg'),
    sensor:     asset('/photos/sensor_paddy.jpg'),
    // Legacy aliases (kept so nothing else breaks)
    heroBg:     asset('/photos/hero_field.jpg'),
    whoWeAre:   asset('/photos/whoweare_farmer.jpg'),
};

// Set this string when the hero video URL is ready. While empty, the hero
// falls back to the poster image (HERO_POSTER_URL) so nothing looks broken.
export const HERO_VIDEO_URL = asset('/videos/hero.mp4');

// First-frame poster extracted from the video itself (via ffmpeg). Using the
// video's own opening frame means there is NO visible swap when the video
// loads — the poster IS the video's frame 0.

export const HERO_POSTER_URL = asset('/videos/hero_poster.jpg');

// Cross-fade rotation for Who We Are — extendable, just push more URLs.
export const WHO_WE_ARE_SLIDES = [
    PHOTOS.riceDetail,
    PHOTOS.farmer,
    PHOTOS.sensor,
];

// Gallery — three named clusters. Each entry keeps the full original filename
// as `alt` (also used as the hover tooltip) and shows only the short place
// caption as a tile overlay pill.
const g = (name) => asset(`/photos/gallery/${name}`);

export const GALLERY_GROUPS = [
    {
        title: 'Farmer Group: Training & Meetings',
        items: [
            { src: g('onboarding-thimmenahalli.jpg'), caption: 'Thimmenahalli, Karnataka', alt: 'Farmer onboarding in Thimmenahalli, Karnataka' },
            { src: g('training-bargarh.jpg'),         caption: 'Bargarh, Odisha',          alt: 'Farmer group training in Bargarh, Odisha' },
            { src: g('meeting-bargarh-1.jpg'),        caption: 'Bargarh, Odisha',          alt: 'Farmer group meeting in Bargarh, Odisha' },
            { src: g('meeting-bargarh-2.jpg'),        caption: 'Bargarh, Odisha',          alt: 'Farmer group meeting in Bargarh, Odisha' },
            { src: g('agronomy-karatagi.jpg'),        caption: 'Karatagi, Karnataka',      alt: 'Farmer group agronomy training in Karatagi, Karnataka' },
        ],
    },
    {
        title: 'Farmer Field: Demonstrations & Data',
        items: [
            { src: g('demo-gundur.jpg'),         caption: 'Gundur, Karnataka',       alt: 'Field demonstration in Gundur, Karnataka' },
            { src: g('harvest-bargarh.jpg'),     caption: 'Bargarh, Odisha',         alt: 'Farmer field harvest day in Bargarh, Odisha' },
            { src: g('demo-hitnal.jpg'),         caption: 'Hitnal, Karnataka',       alt: 'Farmer field demonstration in Hitnal, Karnataka' },
        ],
    },
    {
        title: 'Science & Monitoring',
        items: [
            { src: g('mrv-bargarh.jpg'), caption: 'Bargarh, Odisha',    alt: 'Registering the plot in MRV in Bargarh, Odisha' },
            { src: g('ghg-mysore.jpg'),  caption: 'Mysore, Karnataka',  alt: 'GHG Direct Measurement in Mysore, Karnataka' },
            { src: g('awd-mysore.jpg'),  caption: 'Mysore, Karnataka',  alt: 'AWD pipe installed in Mysore, Karnataka' },
        ],
    },
];

// Legacy flat GALLERY export (kept so nothing else breaks); not used by the
// grouped Gallery component but preserved for backward compatibility.
export const GALLERY = GALLERY_GROUPS.flatMap((g) => g.items);
