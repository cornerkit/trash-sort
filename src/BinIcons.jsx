// SVG icons for bin stickers — dark fill for white sticker background
export const binIcons = {
  fire: () => (
    <svg viewBox="0 0 40 40" fill="none">
      <path d="M20 4C20 4 29 14 29 23C29 29 25 33 20 33C15 33 11 29 11 23C11 14 20 4 20 4Z" fill="#ff6b6b" opacity="0.85"/>
      <path d="M20 15C20 15 26 20 26 25C26 28 23 30 20 30C17 30 14 28 14 25C14 20 20 15 20 15Z" fill="#ffa94d" opacity="0.7"/>
    </svg>
  ),
  clock: () => (
    <svg viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="15" stroke="#ffa94d" strokeWidth="2.5" fill="none"/>
      <line x1="20" y1="20" x2="20" y2="9" stroke="#e8943f" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="20" x2="28" y2="23" stroke="#e8943f" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="2" fill="#e8943f"/>
    </svg>
  ),
  hand: () => (
    <svg viewBox="0 0 40 40" fill="none">
      <path d="M12 22V14C12 13 13 12 14 12C15 12 16 13 16 14V20M16 18V10C16 9 17 8 18 8C19 8 20 9 20 10V18M20 18V11C20 10 21 9 22 9C23 9 24 10 24 11V18M24 18V13C24 12 25 11 26 11C27 11 28 12 28 13V24C28 30 24 34 20 34C15 34 12 30 12 26V22Z" stroke="#5eaae6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  skull: () => (
    <svg viewBox="0 0 40 40" fill="none">
      <path d="M10 20C10 13 14 7 20 7C26 7 30 13 30 20C30 25 28 28 26 29V33H14V29C12 28 10 25 10 20Z" fill="#b197fc" opacity="0.2" stroke="#9a80e6" strokeWidth="2"/>
      <circle cx="16" cy="19" r="3" fill="#9a80e6"/>
      <circle cx="24" cy="19" r="3" fill="#9a80e6"/>
      <line x1="17" y1="33" x2="17" y2="29" stroke="#9a80e6" strokeWidth="1.5"/>
      <line x1="20" y1="33" x2="20" y2="29" stroke="#9a80e6" strokeWidth="1.5"/>
      <line x1="23" y1="33" x2="23" y2="29" stroke="#9a80e6" strokeWidth="1.5"/>
    </svg>
  ),
  question: () => (
    <svg viewBox="0 0 40 40" fill="none">
      <path d="M15 15C15 11 17 8 20 8C23 8 26 11 26 14C26 17 23 18 22 20C21 21 20 22 20 24" stroke="#909090" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <circle cx="20" cy="30" r="2.5" fill="#909090"/>
    </svg>
  ),
}
