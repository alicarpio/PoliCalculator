/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: "class", // or 'media' or 'class'
    content: ["./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

