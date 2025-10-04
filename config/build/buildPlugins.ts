import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

export function buildPlugins({
    paths,
    isDev
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const basePlugins: webpack.WebpackPluginInstance[] = [
        new webpack.ProgressPlugin(),

        new HtmlWebpackPlugin({
            template: paths.html
        }),

        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),

        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]

    const devPlugins: webpack.WebpackPluginInstance[] = [
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: "server"
        })
    ]

    const prodPlugins: webpack.WebpackPluginInstance[] = [
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: "static",
            reportFilename: "bundle-report.html"
        })
    ]

    return [
        ...basePlugins,
        ...(isDev ? devPlugins : prodPlugins)
    ]
}
