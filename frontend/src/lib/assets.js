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
// falls back to the poster image (PHOTOS.riceDetail) so nothing looks broken.
export const HERO_VIDEO_URL = '';

// Cross-fade rotation for Who We Are — extendable, just push more URLs.
export const WHO_WE_ARE_SLIDES = [
    PHOTOS.riceDetail,
    PHOTOS.farmer,
    PHOTOS.sensor,
];

// Gallery tiles — extendable, just push more { src, alt } items.
export const GALLERY = [
    { src: PHOTOS.farmer,     alt: 'Partner farmer inspecting paddy at harvest' },
    { src: PHOTOS.riceDetail, alt: 'Golden rice grains ready for harvest' },
    { src: PHOTOS.sensor,     alt: 'Field MRV sensor deployed in a young paddy' },
];
