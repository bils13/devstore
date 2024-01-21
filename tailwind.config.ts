import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'light-gray': '#F9FAFB',
      'light-gray-2': '#71717A',
      'white': '#FFFFFF',
      'violet': '#8B5CF6',
      'light-black': '#18181B',
      'gray': '#3F3F46',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}
export default config
