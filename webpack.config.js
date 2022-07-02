const path = require("path")
const mode = process.env.NODE_ENV
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

console.log(mode)
module.exports = {
    mode: mode,
    entry: ["@babel/polyfill", "./src/index.tsx"],
    output: {
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
        filename: `[name].[hash].js`,
        path: path.resolve(__dirname, "dist"),

    },
    devServer: {
        open: true,
        port: 3000,
        watchFiles: './src'
    },
    devtool: (mode === "development") ? "source-map" : "eval",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
    ,
    plugins: [

        new HtmlWebpackPlugin(
            {
                template: "./src/index.html"
            }
        ),
        new MiniCssExtractPlugin({
            filename: "styles/[name].[hash].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(sc|c)ss/,
                use: [
                    (mode === "development") ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    'resolve-url-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            //options
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                type: mode === 'production' ? 'asset' : 'asset/resource',
                // generator: {
                //     filename: 'images/[name][ext]'
                // },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },

            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ["@babel/preset-react", '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"

                        ]
                    }
                }
            }

        ]
    }
}
