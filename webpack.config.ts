import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build"),
        clean: true, // clean the build folder before building
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    }
}
export default config;