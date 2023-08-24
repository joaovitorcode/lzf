import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/[lng]/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
export default config
