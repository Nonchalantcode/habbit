const { dirname } = require('path')
const path = require('path')
const src = path.resolve(__dirname, 'src')
const sites = path.resolve(__dirname, 'src', 'sites')
module.exports = {
    watch: true,
    // devtool: 'eval-source-map',
    entry: {
        "techiedelight": path.resolve(sites, 'techiedelight.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /node_modules|bower_components/,
                use : {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.(scss|sass)$/i,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.[tj]s$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript']
                    }
                }
            }
        ]
    },    
    resolve: {
        extensions: ['.js', '.ts', '.sass', '.scss', '.css'],
        modules: ['node_modules', src, path.resolve(src, 'sites')]
    }
}