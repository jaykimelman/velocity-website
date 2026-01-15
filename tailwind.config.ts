import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1B75BC',   // Blue - primary brand color
          secondary: '#253466', // Dark Blue - trust/authority
          accent: '#1B75BC',    // Blue - CTAs
        },
        gray: {
          dark: '#828282',      // Dark Grey - high-tech
          light: '#D7DCE0',     // Light Grey - modern
        },
        'off-white': '#F4F4F5', // Backgrounds, sections
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
