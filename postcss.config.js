const production = process.env.NODE_ENV === 'production'

module.exports = {
    plugins: [
        require('postcss-custom-properties'),
        require('tailwindcss'),
        require('autoprefixer'),
        ...(production ? [require('cssnano')] : [])
    ],
};
