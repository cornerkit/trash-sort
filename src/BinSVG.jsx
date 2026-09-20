import { useId } from 'react'

// Chemical/hazmat-style icons for each bucket
const binIcons = {
  flame: (<>
    {/* Hazard flame */}
    <path d="M50 28C50 28 63 40 63 52C63 59 57 64 50 64C43 64 37 59 37 52C37 40 50 28 50 28Z" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
    <path d="M50 40C50 40 57 46 57 52C57 55 54 58 50 58C46 58 43 55 43 52C43 46 50 40 50 40Z" fill="rgba(255,255,255,0.5)"/>
  </>),
  pill: (<>
    {/* Chemical flask */}
    <path d="M45 34V44L36 58C34 62 37 66 42 66H58C63 66 66 62 64 58L55 44V34" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="42" y1="34" x2="58" y2="34" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38 56H62" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 2"/>
    <circle cx="46" cy="60" r="2" fill="rgba(255,255,255,0.4)"/>
    <circle cx="54" cy="58" r="1.5" fill="rgba(255,255,255,0.3)"/>
  </>),
  eye: (<>
    {/* Biohazard-lite */}
    <circle cx="50" cy="50" r="4" fill="rgba(255,255,255,0.7)"/>
    <circle cx="50" cy="50" r="14" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
    <path d="M50 36C54 40 54 46 50 50C46 46 46 40 50 36Z" fill="rgba(255,255,255,0.5)"/>
    <path d="M38 57C40 52 46 50 50 50C46 54 40 58 38 57Z" fill="rgba(255,255,255,0.5)"/>
    <path d="M62 57C60 52 54 50 50 50C54 54 60 58 62 57Z" fill="rgba(255,255,255,0.5)"/>
  </>),
  skull: (<>
    {/* Toxic skull */}
    <circle cx="50" cy="44" r="13" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
    <circle cx="45" cy="42" r="3.5" fill="rgba(255,255,255,0.7)"/>
    <circle cx="55" cy="42" r="3.5" fill="rgba(255,255,255,0.7)"/>
    <path d="M45 50 Q50 55 55 50" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
    <path d="M44 57H56V63H44Z" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
    <line x1="48" y1="57" x2="48" y2="63" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    <line x1="52" y1="57" x2="52" y2="63" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
  </>),
  web: (<>
    {/* Atom / molecule */}
    <circle cx="50" cy="50" r="3" fill="rgba(255,255,255,0.8)"/>
    <ellipse cx="50" cy="50" rx="16" ry="6" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
    <ellipse cx="50" cy="50" rx="16" ry="6" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" transform="rotate(60 50 50)"/>
    <ellipse cx="50" cy="50" rx="16" ry="6" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" transform="rotate(-60 50 50)"/>
  </>),
  ban: (<>
    {/* Radioactive */}
    <circle cx="50" cy="50" r="4" fill="rgba(255,255,255,0.8)"/>
    <circle cx="50" cy="50" r="14" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
    <path d="M50 36L44 48H56Z" fill="rgba(255,255,255,0.5)"/>
    <path d="M38 57L50 50L44 62Z" fill="rgba(255,255,255,0.5)"/>
    <path d="M62 57L50 50L56 62Z" fill="rgba(255,255,255,0.5)"/>
  </>),
}

export default function BinSVG({ color, accent, icon, active }) {
  const uid = useId()
  const gBody = `body-${uid}`
  const gRim = `rim-${uid}`
  const gMetal = `metal-${uid}`

  return (
    <svg viewBox="0 0 100 120" fill="none" className="bin-svg">
      <defs>
        {/* Body gradient — metallic sheen */}
        <linearGradient id={gBody} x1="10" y1="30" x2="90" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} />
          <stop offset="35%" stopColor={accent} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={accent} />
        </linearGradient>
        {/* Rim gradient */}
        <linearGradient id={gRim} x1="10" y1="22" x2="90" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} />
          <stop offset="40%" stopColor={accent} />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor={accent} />
        </linearGradient>
        {/* Vertical metal highlight */}
        <linearGradient id={gMetal} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.12" />
          <stop offset="25%" stopColor="white" stopOpacity="0" />
          <stop offset="45%" stopColor="white" stopOpacity="0.08" />
          <stop offset="55%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="50" cy="113" rx="28" ry="2.5" fill="rgba(0,0,0,0.05)" />

      {/* Handle */}
      <path
        d="M20 28 Q20 6 50 4 Q80 6 80 28"
        stroke={accent}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Handle highlight */}
      <path
        d="M22 27 Q22 8 50 6 Q78 8 78 27"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />

      {/* Back rim */}
      <ellipse cx="50" cy="30" rx="40" ry="8" fill={accent} />

      {/* Bucket walls — metallic gradient */}
      <path
        d="M10 30 L18 105 Q20 112 30 112 L70 112 Q80 112 82 105 L90 30"
        fill={`url(#${gBody})`}
      />
      {/* Metal sheen overlay */}
      <path
        d="M10 30 L18 105 Q20 112 30 112 L70 112 Q80 112 82 105 L90 30"
        fill={`url(#${gMetal})`}
      />

      {/* Bucket bands — riveted metal rings */}
      <path d="M13 50 Q50 55 87 50" stroke={accent} strokeWidth="2.5" fill="none" opacity="0.4" />
      <path d="M12.5 48 Q50 53 87.5 48" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
      <path d="M16 75 Q50 80 84 75" stroke={accent} strokeWidth="2.5" fill="none" opacity="0.4" />
      <path d="M15.5 73 Q50 78 84.5 73" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />

      {/* Rivets on bands */}
      <circle cx="20" cy="49" r="1.5" fill={accent} opacity="0.5" />
      <circle cx="80" cy="49" r="1.5" fill={accent} opacity="0.5" />
      <circle cx="22" cy="74" r="1.5" fill={accent} opacity="0.5" />
      <circle cx="78" cy="74" r="1.5" fill={accent} opacity="0.5" />

      {/* Left edge highlight */}
      <path
        d="M10 30 L18 105 Q20 112 30 112 L33 112 L26 30 Q18 30 10 30 Z"
        fill="white"
        opacity="0.08"
      />
      {/* Right edge shadow */}
      <path
        d="M90 30 L82 105 Q80 112 70 112 L67 112 L74 30 Q82 30 90 30 Z"
        fill="black"
        opacity="0.05"
      />

      {/* Chemical icon on bucket body */}
      <g transform="translate(0, 16)">
        {binIcons[icon]}
      </g>

      {/* Front rim — metallic */}
      <ellipse cx="50" cy="30" rx="40" ry="8" fill={`url(#${gRim})`} />
      {/* Rim top highlight */}
      <ellipse cx="50" cy="28" rx="36" ry="5" fill="white" opacity="0.1" />
      {/* Rim edge */}
      <ellipse cx="50" cy="30" rx="40" ry="8" fill="none" stroke={accent} strokeWidth="1.5" />
      {/* Inner opening */}
      <ellipse cx="50" cy="30" rx="34" ry="5" fill={accent} opacity="0.25" />

      {/* Handle pivots — bolts */}
      <circle cx="20" cy="28" r="3" fill={accent} />
      <circle cx="20" cy="28" r="1.5" fill="rgba(255,255,255,0.2)" />
      <circle cx="80" cy="28" r="3" fill={accent} />
      <circle cx="80" cy="28" r="1.5" fill="rgba(255,255,255,0.2)" />
    </svg>
  )
}
