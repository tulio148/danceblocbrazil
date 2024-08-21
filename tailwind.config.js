import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                "db-pink": "#EB00DE",
                "db-light-pink": "#FF00F7",
                "db-green": "#00CC81",
                "special-blue": "#5c749d",
            },
            fontFamily: {
                // sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                sans: ["Raleway", ...defaultTheme.fontFamily.sans],
            },
            transitionDuration: {
                2000: "2000ms",
            },
        },
    },

    plugins: [forms],
};
