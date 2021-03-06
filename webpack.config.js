const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const mixManifestPath = '/assets/web-client/'
const outputPath = path.resolve(__dirname, './output')

const mode = 'development'
const PROD = mode === 'production';

module.exports = {
    mode: mode,
    devtool: 'source-map',
    entry: {
        // order matters, base must be first
        base: './src/base/main.js',

        foo: './src/foo/main.js',
        bar: './src/bar/main.js',
    },
    output: {
        path: outputPath,
        filename: PROD ? '[hash:8]-[name].js' : '[name].js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.(s?css|vue)$/,
                    chunks: 'all',
                    enforce: true,
                },
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.json$/,
                use: [
                    'json-loader',
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            chunkFilename: PROD ? '[hash:8]-styles.css' : 'styles.css',
        }),
        new ManifestPlugin({
            fileName: 'mix-manifest.json',
            publicPath: mixManifestPath,
            basePath: mixManifestPath,
            filter({ path }) {
                return !path.endsWith('.map')
            },
        }),
    ],
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.vue', '.js', '.jsx', '.json', '.scss', '.css'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
}
