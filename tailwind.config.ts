import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}','./app/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    fontFamily: { serif: ['var(--font-cormorant)','Georgia','serif'], sans: ['var(--font-dm-sans)','system-ui','sans-serif'] },
    colors: { ink: '#0E0E0E', 'off-white':'#F7F4EF','warm-white':'#FAF8F5',accent:'#C9A96E','accent-light':'#E8D5B0',muted:'#888880',brand:'#8B2500' },
    animation: { 'led-blink':'ledBlink 2s ease-in-out infinite','glow-pulse':'glowPulse 3s ease-in-out infinite','grid-pulse':'gridPulse 4s ease-in-out infinite' },
    keyframes: {
      ledBlink: { '0%,100%':{ opacity:'0.1',transform:'scale(1)' },'50%':{ opacity:'1', transform:'scale(1.5)' } },
      glowPulse: { '0%,100%':{ textShadow:'0 0 40px rgba(201,169,110,.2)' },'50%':{ textShadow:'0 0 80px rgba(201,169,110,.5)' } },
      gridPulse: { '0%,100%':{ opacity:'0.5' },'50%':{ opacity:'1' } },
    }
  }},
  plugins: [],
}
export default config
