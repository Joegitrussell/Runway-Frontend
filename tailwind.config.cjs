  /** @type {import('tailwindcss').Config} */




  module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      fontFamily: {
        sans: ['Urbanist', 'ui-sans-serif', 'system-ui'],
        // serif: ["ui-serif", "Georgia"],
        // mono: ["ui-monospace", "SFMono-Regular"],
        // display: ["Vectora"],
        // custom: ['Urbanist', 'sans-serif'],
        // body: ["Urbanist", "Open Sans"],
      },
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#7DBAFB",
            secondary: "#DBE5FF",
            accent: "#043263",
            neutral: "#FFE8A1",
            "base-100": "#ffffff",
          },
        },
        "dark",
      ],
    },
  };