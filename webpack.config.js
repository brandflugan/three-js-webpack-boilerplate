const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const artifact = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const fileName = `${artifact.name}-${artifact.version.slice(0, 3)}`;
module.exports = (env, argv) => ({
    entry: {
        [fileName]: './src/index.js',
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg|stl)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: 'src', // prevent display of src/ in filename
                },
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[path][name].[ext]',
                    context: 'src', // prevent display of src/ in filename
                },
            },
        ],
    },
    plugins: [
        ...(argv.mode === 'production' ? [new CleanWebpackPlugin({ verbose: true })] : []),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin({
            patterns: [{ from: path.resolve(__dirname, 'public'), to: 'assets' }],
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[hash].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Three.js Webpack Boilerplate',
            favicon: path.resolve(__dirname, 'public/favicon.png'),
            template: path.resolve(__dirname, 'src/template.html'), // template file
            filename: 'index.html', // output file
        }),
        new StylelintPlugin({ configFile: './.stylelintrc', context: 'src', files: '**/*.scss' }),
    ],
    devtool: argv.mode === 'production' ? 'none' : 'eval-source-map',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});
