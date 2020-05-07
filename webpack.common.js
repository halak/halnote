const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        'main': './src/main.ts',
        'theme': './src/theme.scss',
    },
    output: {
        path: path.join(process.cwd(), 'docs/assets'),
        filename: 'javascripts/[name].js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({}),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    performance: { hints: 'warning' },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'stylesheets/[name].css',
            chunkFilename: 'stylesheets/[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /node_modules|venv|site/,
                use: 'ts-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules|venv|site/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ['./node_modules'],
                            },
                        },
                    },
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss'],
        modules: ['node_modules'],
    }
};
