var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './index.html',
            title: "page title",
            template: './src/index.html',

        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(dae)$/i,
                type: 'asset/resource',
            }
        ]
    },
};