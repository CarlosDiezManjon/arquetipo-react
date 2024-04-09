/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
        primary: {
          DEFAULT: 'var(--primary)',
          20: 'var(--primary-20)',
          40: 'var(--primary-40)',
          55: 'var(--primary-55)',
          80: 'var(--primary-80)',
          90: 'var(--primary-90)',
          95: 'var(--primary-95)',
          99: 'var(--primary-99)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          40: 'var(--secondary-40)',
          60: 'var(--secondary-60)',
          70: 'var(--secondary-70)',
          80: 'var(--secondary-80)',
          95: 'var(--secondary-95)',
        },
        success: {
          DEFAULT: 'var(--success)',
          30: 'var(--success-30)',
          50: 'var(--success-50)',
          80: 'var(--success-80)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          30: 'var(--warning-30)',
          40: 'var(--warning-40)',
          60: 'var(--warning-60)',
          80: 'var(--warning-80)',
        },
        error: {
          DEFAULT: 'var(--error)',
          30: 'var(--error-30)',
          40: 'var(--error-40)',
          60: 'var(--error-60)',
          80: 'var(--error-80)',
        },
        info: {
          DEFAULT: 'var(--info)',
          30: 'var(--info-30)',
          40: 'var(--info-40)',
          60: 'var(--info-60)',
          80: 'var(--info-80)',
        },
        gray: {
          10: 'var(--gray-10)',
          20: 'var(--gray-20)',
          30: 'var(--gray-30)',
          40: 'var(--gray-40)',
          50: 'var(--gray-50)',
          60: 'var(--gray-60)',
          70: 'var(--gray-70)',
          80: 'var(--gray-80)',
          90: 'var(--gray-90)',
          95: 'var(--gray-95)',
        },
      },
      height: {
        content: 'calc(100dvh - var(--header-height) - var(--footer-height))',
        header: 'var(--header-height)',
        footer: 'var(--footer-height)',
      },
    },
  },
  plugins: [],
};
