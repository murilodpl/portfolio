module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html',
  ],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: '1500px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1200px',
      'xl': '1500px'
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'display': ['Inter', 'sans-serif'],
      'body': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        "primary": "#8450c0",
        "m_purple": "#3D2645",
        "m_white": "#F0EFF4",
        "m_black": "#1a1b1e",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}