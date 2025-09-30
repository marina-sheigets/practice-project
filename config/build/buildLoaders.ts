import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { buildCssLoader } from "./loaders/buildCssLoader"

export function buildLoaders(
    options: BuildOptions
): webpack.RuleSetRule[] {
    const { isDev } = options

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader"
            }
        ]
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: {
            loader: "ts-loader",
            options: {
                transpileOnly: true
            }
        },
        exclude: /node_modules/
    }

    const cssLoader = buildCssLoader(isDev)

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader
    ]
}
