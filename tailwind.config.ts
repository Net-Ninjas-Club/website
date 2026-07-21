import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#131211',       // near-black background, lifted from the logo
        smoke: '#1c1a18',     // secondary panel black
        ember: '#E8641F',     // primary orange (logo accent)
        ember2: '#F4903B',    // lighter orange for gradients/hover
        chalk: '#F3EEE1',     // warm off-white (logo mask/text)
        steel: '#B7B4AC',     // logo grey (NINJAS lettering)
        steelDark: '#8C8A83',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      backgroundImage: {
        speedlines:
          "repeating-linear-gradient(100deg, rgba(232,100,31,0.08) 0px, rgba(232,100,31,0.08) 2px, transparent 2px, transparent 22px)",
      },
    },
  },
  plugins: [],
};

export default config;
