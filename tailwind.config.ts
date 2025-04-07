import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { 
        'black-1': '#16151B',
        'black-2': '#212121',
        'black-3': '#3F3E43',
        'gray-1': '#838898',
        'gray-2': '#F5F6F7',
        'gray-3': '#C1C1C1',
        'gray-4': '#9195A3',
      },
      screens: {
        fullHd: '2xl',  
        hd: 'xl',
      }
    },
  },
  plugins: [],
} satisfies Config;
