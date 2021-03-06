var path = require('path')
var webpack = require('webpack')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

// development
if (process.env.NODE_ENV === 'development') {
    var entry = './src/dev.js';
    var output = {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dev/',
        filename: 'dev.js'
    };
}

// production
if (process.env.NODE_ENV === 'production') {
    entry = './index.js';
    output = {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'vue-data-form.js',
        library: 'VueDataForm',
        libraryTarget: 'umd'
    };
}

module.exports = {
    entry: entry,
    output: output,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
