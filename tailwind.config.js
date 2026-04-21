/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FDFAF8',
        pink: {
          DEFAULT: '#F9A8C9',
          light: '#FDE8F2',
          mid: '#F472B6',
        },
        coral: {
          DEFAULT: '#FB7185',
          light: '#FFE4E8',
        },
        mint: {
          DEFAULT: '#A7F3D0',
          light: '#ECFDF5',
        },
        butter: {
          DEFAULT: '#FDE68A',
          light: '#FFFBEB',
        },
        lavender: {
          DEFAULT: '#C4B5FD',
          light: '#F5F3FF',
        },
        textDark: '#1C1017',
        textMid: '#6B3A52',
        textSoft: '#A06080',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        floatA: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(4deg)' },
        },
        floatB: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-3deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marqueeScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        softPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        confettiFall: {
          '0%': { transform: 'translateY(-20px) rotate(0)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
      },
      animation: {
        floatA: 'floatA 3.5s ease-in-out infinite',
        floatB: 'floatB 4s ease-in-out infinite 0.5s',
        floatC: 'floatA 5s ease-in-out infinite 1s',
        fadeUp: 'fadeUp 0.5s forwards',
        marquee: 'marqueeScroll 24s linear infinite',
        pulse: 'softPulse 2.5s ease-in-out infinite',
        confetti: 'confettiFall linear forwards',
      },
    },
  },
  plugins: [],
}
