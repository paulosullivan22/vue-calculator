var path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
            test: /\.vue$/,
            loader: 'vue'
            }, 
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css!sass'
            }
        ]
        },
        vue: {
        loaders: {
            scss: 'style!css!sass'
        }
    }
  };