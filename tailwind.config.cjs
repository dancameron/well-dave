const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
    plugins: [],
    theme: {
        fontFamily: {
            'logo': ['Bungee Shade', ...defaultTheme.fontFamily.sans],
            'block': ['Flow Block', ...defaultTheme.fontFamily.sans],
            'sans': [...defaultTheme.fontFamily.sans],
            'serif': [...defaultTheme.fontFamily.serif],
            'mono': ['ui-monospace', 'SFMono-Regular', ...defaultTheme.fontFamily.mono]
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            green: colors.green,
            red: colors.red,
            orange: colors.orange,
            yellow: colors.yellow,
            sky: colors.sky
        },
        extend: {},
    }
}
