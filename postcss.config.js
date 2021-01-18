const production = process.env.NODE_ENV === 'production'

module.exports = {
    plugins: [
        require('postcss-import'),
        // require('postcss-simple-vars'),
        require('tailwindcss'),
        require('autoprefixer'),
        ...(production ? [require('cssnano')] : [])
    ],
};
