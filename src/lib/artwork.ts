const palettes = [
  ['#14b8a6', '#8b5cf6'],
  ['#f97316', '#ec4899'],
  ['#22c55e', '#06b6d4'],
  ['#f59e0b', '#ef4444'],
  ['#6366f1', '#a855f7'],
];

export function fallbackArtwork(title: string, variant: 'cover' | 'banner' | 'screenshot' = 'cover') {
  const palette = palettes[Math.abs(hashTitle(title)) % palettes.length];
  const width = variant === 'banner' ? 1200 : 800;
  const height = variant === 'banner' ? 520 : 600;
  const label = escapeXml(title);
  const subtitle = variant === 'screenshot' ? '精彩截图' : '在线小游戏';
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${palette[0]}"/>
      <stop offset="1" stop-color="${palette[1]}"/>
    </linearGradient>
    <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0H0v56" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect width="${width}" height="${height}" fill="url(#grid)" opacity=".55"/>
  <circle cx="${width * 0.78}" cy="${height * 0.22}" r="${height * 0.22}" fill="rgba(255,255,255,.16)"/>
  <circle cx="${width * 0.18}" cy="${height * 0.78}" r="${height * 0.18}" fill="rgba(15,23,42,.18)"/>
  <g transform="translate(${width / 2 - 92} ${height / 2 - 98})">
    <rect x="0" y="62" width="184" height="86" rx="42" fill="white" opacity=".95"/>
    <path d="M46 86v38M27 105h38" stroke="#111827" stroke-width="16" stroke-linecap="round"/>
    <circle cx="124" cy="105" r="13" fill="#111827"/>
    <circle cx="158" cy="105" r="13" fill="#111827"/>
  </g>
  <text x="50%" y="${height * 0.72}" text-anchor="middle" fill="white" font-family="Microsoft YaHei, Arial, sans-serif" font-size="${variant === 'banner' ? 76 : 56}" font-weight="800">${label}</text>
  <text x="50%" y="${height * 0.82}" text-anchor="middle" fill="rgba(255,255,255,.82)" font-family="Microsoft YaHei, Arial, sans-serif" font-size="${variant === 'banner' ? 30 : 26}" font-weight="600">${subtitle}</text>
</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function setFallbackArtwork(
  image: HTMLImageElement,
  title: string,
  variant: 'cover' | 'banner' | 'screenshot' = 'cover',
) {
  if (image.dataset.fallbackApplied === 'true') return;
  image.dataset.fallbackApplied = 'true';
  image.src = fallbackArtwork(title, variant);
}

function hashTitle(title: string) {
  return [...title].reduce((hash, char) => hash + char.charCodeAt(0), 0);
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
