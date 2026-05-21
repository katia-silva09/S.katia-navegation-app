/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Indicamos dónde Tailwind debe buscar clases
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  // 2. Agregamos el preset de NativeWind
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Definimos nuestros colores de marca
        primary: '#49129C',
        secondary: '#7638F3',
        tertiary: '#F29672',
      },
       // Configuramos nuestras fuentes personalizadas
      fontFamily: {
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
      }
    },
  },
  plugins: [],
}