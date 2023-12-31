/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
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
        'dark-gray':'rgba(35, 35, 35, 1)', 
        'light-gray':'rgba(143, 143, 143, 1)', 
        'light-gray-transparent':'#c8c8c810', 
        'dark-blue':"#293241", 
        "medium-blue":"#3d5a80"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')
  ],
}
