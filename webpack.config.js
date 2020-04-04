const lodash = require('lodash');
const CopyPkgJsonPlugin = require('copy-pkg-json-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

function srcPaths(src) {
    return path.join(__dirname, src);
}

const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDevelopment = process.env.NODE_ENV === 'development';

// #region Common settings
const commonConfig = {
    devtool: isEnvDevelopment ? 'source-map' : false,
    mode: isEnvProduction ? 'production' : 'development',
    output: {path: srcPaths('dist')},
    node: {__dirname: false, __filename: false},
    resolve: {
        alias: {
            '@': srcPaths('src'),
            '@main': srcPaths('src/main'),
            '@models': srcPaths('src/models'),
            '@public': srcPaths('public'),
            '@utils': srcPaths('src/utils'),
            '@components': srcPaths('src/components'),
            '@controllers': srcPaths('src/controllers'),
            '@assets': srcPaths('src/assets'),
            '@scss': srcPaths('src/scss'),
        },
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: isEnvDevelopment
                                ? '[local]_[hash:base64:7]'
                                : '[hash:base64:7]',
                        },
                    },
                    'sass-loader',
                ],
                include: /\.module\.(css|scss)$/,
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /\.module\.(css|scss)$/,
            },
            {
                test: /\.(jpg|png|svg|ico|icns|ttf|woff2|woff|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
};
// #endregion

const mainConfig = lodash.cloneDeep(commonConfig);
mainConfig.entry = './src/main/main.ts';
mainConfig.target = 'electron-main';
mainConfig.output.filename = 'main.bundle.js';
mainConfig.plugins = [
    new CopyPkgJsonPlugin({
        remove: ['scripts', 'devDependencies', 'build'],
        replace: {
            main: './main.bundle.js',
            scripts: {start: 'electron ./main.bundle.js'},
            postinstall: 'electron-builder install-app-deps',
        },
    }),
];

const rendererConfig = lodash.cloneDeep(commonConfig);
rendererConfig.entry = './src/main/renderer.tsx';
rendererConfig.target = 'electron-renderer';
rendererConfig.output.filename = 'renderer.bundle.js';
rendererConfig.plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
    }),
];

module.exports = [mainConfig, rendererConfig];
