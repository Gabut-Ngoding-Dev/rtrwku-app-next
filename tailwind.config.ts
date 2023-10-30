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
          11: '#fdfdfd',
          10: '#525252',
          9: '#f5f5f5',
          8: '#404040',
          7: '#e5e5e5',
          6: '#262626',
          5: '#d4d4d4',
          4: '#171717',
          3: '#a3a3a3',
          2: '#0a0a0a',
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
