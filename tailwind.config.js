/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {colors: {
        'minha-cor': '#0037AD', // Sua cor personalizada
        'fundo': '#0F1525',
        'laranja':'#E9501A' 
      },},
    },
    plugins: [],
  }



