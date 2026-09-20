// All icons use white strokes/fills — they sit on colored backgrounds

export const icons = {
  chatgpt: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path d="M50 12C38 12 28 18 23 28C14 30 8 38 8 48C8 54 10 59 14 63C12 68 12 74 16 80C22 88 32 92 42 88C46 94 54 98 62 96C74 96 84 88 86 76C94 72 100 64 98 54C96 46 92 40 86 37C88 30 86 24 82 20C76 12 64 10 54 14" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M42 34L58 44V64L42 74V54L26 44" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M58 34L74 44L58 54" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  claude: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="55" r="7" fill="#fff"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(angle => (
        <line
          key={angle}
          x1="50"
          y1="55"
          x2={50 + 26 * Math.cos((angle - 90) * Math.PI / 180)}
          y2={55 + 26 * Math.sin((angle - 90) * Math.PI / 180)}
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          opacity={angle % 60 === 0 ? 1 : 0.6}
        />
      ))}
    </svg>
  ),

  deepseek: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path
        d="M25 55C25 35 38 22 55 22C72 22 82 32 82 45C82 58 72 65 62 65C58 65 55 63 55 60C55 57 58 55 62 55C68 55 72 52 72 45C72 38 65 32 55 32C42 32 35 42 35 55C35 68 42 78 58 78C70 78 78 72 82 65"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="63" cy="38" r="3" fill="#fff"/>
    </svg>
  ),

  gemini: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path d="M50 10 C50 10 56 40 50 50 C44 40 50 10 50 10Z" fill="#4285f4"/>
      <path d="M50 90 C50 90 44 60 50 50 C56 60 50 90 50 90Z" fill="#d96570"/>
      <path d="M10 50 C10 50 40 44 50 50 C40 56 10 50 10 50Z" fill="#4285f4"/>
      <path d="M90 50 C90 50 60 56 50 50 C60 44 90 50 90 50Z" fill="#d96570"/>
    </svg>
  ),

  perplexity: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path d="M50 15L20 45L50 40L80 45Z" stroke="#fff" strokeWidth="4" strokeLinejoin="round" fill="none"/>
      <path d="M50 40L20 45L30 80L50 65Z" stroke="#fff" strokeWidth="4" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
      <path d="M50 40L80 45L70 80L50 65Z" stroke="#fff" strokeWidth="4" strokeLinejoin="round" fill="rgba(255,255,255,0.08)"/>
      <line x1="50" y1="15" x2="50" y2="85" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
      <line x1="20" y1="45" x2="80" y2="45" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M30 80L50 85L70 80" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  copilot: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path
        d="M30 65C30 45 40 30 55 30C65 30 72 38 72 48C72 56 66 62 58 62L42 62"
        stroke="#fff"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M70 60C70 70 62 78 50 78C40 78 32 72 30 65"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),

  midjourney: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path d="M50 18L50 78" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
      <path d="M50 18L75 55L50 48Z" fill="#fff" opacity="0.9"/>
      <path d="M50 25L30 55L50 48Z" fill="#fff" opacity="0.6"/>
      <path d="M25 78C25 78 38 65 50 65C62 65 75 78 75 78" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  cursor: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <rect x="20" y="22" width="60" height="56" rx="12" stroke="#fff" strokeWidth="4" fill="none"/>
      <path d="M38 42L55 50L38 58Z" fill="#fff"/>
      <line x1="20" y1="36" x2="80" y2="36" stroke="#fff" strokeWidth="3"/>
      <circle cx="30" cy="29" r="2.5" fill="#ff5f57"/>
      <circle cx="38" cy="29" r="2.5" fill="#febc2e"/>
      <circle cx="46" cy="29" r="2.5" fill="#28c840"/>
    </svg>
  ),

  v0: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path d="M20 30L50 75L80 30" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="75" cy="68" r="14" stroke="#fff" strokeWidth="5" fill="none"/>
    </svg>
  ),

  grok: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path d="M25 25L50 55L75 25" stroke="#333" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25 75L50 55" stroke="#333" strokeWidth="7" strokeLinecap="round"/>
      <line x1="60" y1="62" x2="75" y2="78" stroke="#333" strokeWidth="7" strokeLinecap="round"/>
    </svg>
  ),

  suno: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path d="M20 60C20 60 28 25 36 25C44 25 40 75 48 75C56 75 52 35 60 35C68 35 64 65 72 65C80 65 80 45 80 45" stroke="#fff" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <circle cx="20" cy="60" r="4" fill="#fff"/>
      <circle cx="80" cy="45" r="4" fill="#fff"/>
    </svg>
  ),

  'stable-diffusion': () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path d="M35 28C55 28 65 38 65 50C65 62 55 72 35 72" stroke="#fff" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <path d="M65 28C45 28 35 38 35 50" stroke="#fff" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.5"/>
      <circle cx="35" cy="72" r="5" fill="#fff"/>
      <circle cx="65" cy="28" r="5" fill="#fff"/>
    </svg>
  ),

  'notion-ai': () => (
    <svg viewBox="0 0 100 100" fill="none">
      <rect x="22" y="18" width="56" height="64" rx="8" stroke="#fff" strokeWidth="4" fill="none"/>
      <path d="M36 30L36 70L48 30L48 70" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 30L48 70" stroke="#fff" strokeWidth="5" strokeLinecap="round"/>
      <line x1="60" y1="30" x2="60" y2="70" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),

  jasper: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <rect x="30" y="30" width="18" height="18" rx="4" fill="#ff5733"/>
      <rect x="52" y="30" width="18" height="18" rx="4" fill="#ffc300"/>
      <rect x="30" y="52" width="18" height="18" rx="4" fill="#3498db"/>
      <rect x="52" y="52" width="18" height="18" rx="4" fill="#2ecc71"/>
    </svg>
  ),

  runway: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path d="M25 25L25 75L78 50Z" fill="#fff" opacity="0.9"/>
      <line x1="15" y1="20" x2="15" y2="80" stroke="#fff" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  ),

  kling: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <polygon
        points="50,15 58,40 85,40 63,55 72,82 50,65 28,82 37,55 15,40 42,40"
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <polygon
        points="50,28 55,43 72,43 58,53 64,70 50,58 36,70 42,53 28,43 45,43"
        fill="#fff"
        opacity="0.3"
      />
    </svg>
  ),

  kimi: () => (
    <svg viewBox="0 0 100 100" fill="none">
      <path d="M30 22V78" stroke="#fff" strokeWidth="8" strokeLinecap="round"/>
      <path d="M30 50L58 22" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 42L62 78" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="70" cy="24" r="7" fill="#4da6ff"/>
    </svg>
  ),
}
