import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary: {
          border: '#xafc1e4',
          focus: '#0e44af',
          hover: '#0c3992',
          main: '#0e44af',
          pressed: '#072257',
          surface: '#cfdaef',
        },
        neutural: {
          10: '#FFFFFF',
          20: '#DCDCDC',
          30: '#D5D5D5',
          40: '#C9C9C9',
          50: '#AEAEAE',
          60: '#8E8E8E',
          70: '#696969',
          80: '#575757',
          90: '#393939',
          100: '#090909',
        },
        danger:{
          surface: '#fff4f2',
          border: '#eeb4b0',
          main: '#cb3a31',
          hover: '#bd251c',
          pressed: '#731912',
        },
        warning:{
          surface: '#fff9f2',
          border: '#eeceb0',
          main: '#cd7b2e',
          hover: '#bf6919',
          pressed: '#734011',
        },
        success:{
          surface: '#f7f7f7',
          border: '#b8dbca',
          main: '#43936c',
          hover: '#367a59',
          pressed: '#20573d',
        },
      },
      fontFamily: {
        plusJakartaSans: ['Plus Jakarta Sans'],
      },
    },
  },
  plugins: [],
}
export default config
